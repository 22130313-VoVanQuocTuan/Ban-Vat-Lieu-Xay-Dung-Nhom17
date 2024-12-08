package hcmuaf.nlu.edu.vn.user.dao.Users;




import hcmuaf.nlu.edu.vn.user.dao.DBConnect;
import hcmuaf.nlu.edu.vn.user.model.Users;
import org.springframework.security.crypto.bcrypt.BCrypt;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;

public class UsersDao {
    private DBConnect dbConnect;

    public UsersDao() {
        this.dbConnect = new DBConnect();
    }

    //xử lý đăng kí

    // Kiểm tra email và tên tài khoản đã tồn tại
    public boolean checkExistence(String email, String username) throws SQLException {
        String sql = "SELECT 1 FROM users WHERE username = ? OR email = ? LIMIT 1";
        try (PreparedStatement stmt = dbConnect.preparedStatement(sql)) {
            stmt.setString(1, username);
            stmt.setString(2, email);
            try (ResultSet rs = stmt.executeQuery()) {
                return rs.next();
            }

        }

    }
    // Thêm người dùng vào bảng users khi chưa xác thực email
    public boolean addUser(Users user) throws SQLException {
        String sql = "INSERT INTO users (email, username, password, isEmailVerified, createDate, updateDate) VALUES (?, ?, ?, 0, NOW(), NOW())";
        try (PreparedStatement stmt = dbConnect.preparedStatement(sql)) {
            stmt.setString(1, user.getEmail());
            stmt.setString(2, user.getUsername());
            stmt.setString(3, BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
            return stmt.executeUpdate() > 0;
        }
    }
    // Thêm thông tin vào bảng xác thực email
    public boolean addEmailVerification(String email, String code, int userId) throws SQLException {
        String sql = "INSERT INTO verifyemail (email, code, codeExpiry, userId) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 3 MINUTE), ?)";
        try (PreparedStatement stmt = dbConnect.preparedStatement(sql)) {
            stmt.setString(1, email);  // Thêm email vào câu lệnh
            stmt.setString(2, code);   // Thêm mã xác thực vào câu lệnh
            stmt.setInt(3, userId);    // Thêm userId vào câu lệnh

            // Thực thi câu lệnh và trả về kết quả (true nếu thành công, false nếu không)
            return stmt.executeUpdate() > 0;
        } catch (SQLException e) {
            // Xử lý lỗi SQL và in ra chi tiết lỗi
            e.printStackTrace();
            return false; // Trả về false nếu có lỗi
        }
    }
    //Lấy userId
    public int getUserIdByEmail(String email) throws SQLException {
        String sql = "SELECT id FROM users WHERE email = ?";
        try (PreparedStatement stmt = dbConnect.preparedStatement(sql)) {
            stmt.setString(1, email);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                return rs.getInt("id");
            } else {
                return -1; // Trả về -1 nếu không tìm thấy
            }
        }
    }
    //Xác thực email
    public boolean isCode(String email, String code) throws SQLException {
        String sql = "SELECT code, codeExpiry  FROM verifyemail  WHERE email = ?";
        try (PreparedStatement stmt = dbConnect.preparedStatement(sql)) {
            stmt.setString(1, email);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                String storedCode = rs.getString("code");
                Timestamp codeExpiry = rs.getTimestamp("codeExpiry");

                // Kiểm tra mã xác thực có trùng và chưa hết hạn
                if (storedCode.equals(code) && codeExpiry != null && codeExpiry.after(new Timestamp(System.currentTimeMillis()))) {
                    return true; // Mã hợp lệ và chưa hết hạn
                } else {
                    return false; // Mã hết hạn hoặc không khớp
                }
            }
            return false; // Mã không tồn tại trong hệ thống
        }
    }

    // Cập nhật trạng thái xác thực email
    public boolean verifyEmail(String email) throws SQLException {
        String sql = "UPDATE users SET isEmailVerified = 1 WHERE email = ?";
        try (PreparedStatement stmt = dbConnect.preparedStatement(sql)) {
            stmt.setString(1, email);
            return stmt.executeUpdate() > 0;
        }
    }
    // Cập nhật lại mã code xác thực
    public boolean updateVerificationCode(String email, String code) throws SQLException {
        String sql = "UPDATE verifyemail SET code = ?, codeExpiry = DATE_ADD(NOW(), INTERVAL 3 MINUTE) WHERE email = ?";
        try (PreparedStatement stmt = dbConnect.preparedStatement(sql)) {
            stmt.setString(1, code);
            stmt.setString(2, email);
            return stmt.executeUpdate() > 0;
        }
    }

    // Xóa thông tin xác thực
    public boolean deleteVerificationRecord(int id) throws SQLException {
        String sql = "DELETE FROM verifyEmails WHERE id = ?";
        try (PreparedStatement stmt = dbConnect.preparedStatement(sql)) {
            stmt.setInt(1, id);
            return stmt.executeUpdate() > 0;
        }
    }
    // Xử lý đăng nhập
    public boolean checkLogin(String username, String password) throws SQLException {
        String sql = "SELECT * FROM users WHERE username=? AND password=?";
        try (PreparedStatement ptm = dbConnect.preparedStatement(sql)) {
            ptm.setString(1, username);
            ptm.setString(2, password);

            try (ResultSet rs = ptm.executeQuery()) {
                if (rs.next()) {
                    return true;
                }
            }
        }
        return false;
    }
}

