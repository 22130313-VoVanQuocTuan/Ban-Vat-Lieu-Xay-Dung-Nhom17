package hcmuaf.nlu.edu.vn.user.dao;




import hcmuaf.nlu.edu.vn.user.model.Users;
import org.springframework.security.crypto.bcrypt.BCrypt;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UsersDao {
    private DBConnect dbConnect;
    public UsersDao() {}
    public UsersDao(DBConnect dbConnect) {
        this.dbConnect = dbConnect;
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
        String sql = "INSERT INTO users (email, username, password, is_email_verified, create_date, update_date) VALUES (?, ?, ?, 0, NOW(), NOW())";
        try (PreparedStatement stmt = dbConnect.preparedStatement(sql)) {
            stmt.setString(1, user.getEmail());
            stmt.setString(2, user.getUsername());
            stmt.setString(3, BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
            return stmt.executeUpdate() > 0;
        }
    }
    // Thêm thông tin vào bảng xác thực email
    public boolean addEmailVerification(String email, String code, int userId) throws SQLException {
        String sql = "INSERT INTO verify_emails (email, code, email_expiry, userId) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 3 MINUTE), ?)";
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

    // Cập nhật trạng thái xác thực email
    public boolean verifyEmail(String email) throws SQLException {
        String sql = "UPDATE users SET is_email_verified = 1 WHERE email = ?";
        try (PreparedStatement stmt = dbConnect.preparedStatement(sql)) {
            stmt.setString(1, email);
            return stmt.executeUpdate() > 0;
        }
    }
    // Cập nhật lại mã code xác thực
    public boolean updateVerificationCode(String email, String code) throws SQLException {
        String sql = "UPDATE verify_emails SET code = ?, code_expiry = DATE_ADD(NOW(), INTERVAL 3 MINUTE) WHERE email = ?";
        try (PreparedStatement stmt = dbConnect.preparedStatement(sql)) {
            stmt.setString(1, code);
            stmt.setString(2, email);
            return stmt.executeUpdate() > 0;
        }
    }

    // Xóa thông tin xác thực
    public boolean deleteVerificationRecord(int id) throws SQLException {
        String sql = "DELETE FROM verify_emails WHERE id = ?";
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

