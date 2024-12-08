package hcmuaf.nlu.edu.vn.user.service;

import hcmuaf.nlu.edu.vn.user.dao.Users.UsersDao;
import hcmuaf.nlu.edu.vn.user.model.Users;



import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.sql.SQLException;
import java.util.Properties;

public class UserService {
    private UsersDao usersDao;


    public UserService() {
        this.usersDao = new UsersDao();
    }

    // Đăng ký người dùng mới
    public boolean registerUser(String email, String username, String password) throws SQLException {
        try {
            // Kiểm tra xem email và tên tài khoản đã tồn tại
            if (usersDao.checkExistence(email, username)) {
                return false;

            }


            // Thêm người dùng vào cơ sở dữ liệu
            Users newUser = new Users();
            newUser.setEmail(email);
            newUser.setUsername(username);
            newUser.setPassword(password);  // Mã hóa mật khẩu
            newUser.setIsEmailVerified(0);  // Mặc định chưa xác minh email
            if (!usersDao.addUser(newUser)) {
                return false;
            }

            // Lấy userId của người dùng vừa tạo
            int userId = usersDao.getUserIdByEmail(email);

            // Tạo mã xác thực và gửi email
            String verificationCode = generateVerificationCode();
            if (!sendVerificationEmail(email, verificationCode)) {
                return false;
            }

            // Lưu mã xác thực vào cơ sở dữ liệu
            if (!usersDao.addEmailVerification(email, verificationCode, userId)) {
                return false;
            }

            return true;
        } catch (SQLException e) {
            e.printStackTrace();  // Cần xem xét thêm cách xử lý lỗi
            return false;
        } catch (AddressException e) {
            throw new RuntimeException("Có lỗi trong việc gửi email xác thực", e);  // Cải thiện thông báo lỗi
        }
    }


    // Tạo mã xác thực ngẫu nhiên
    public String generateVerificationCode() {
        return String.format("%04d", (int) (Math.random() * 10000));
    }

    // Gửi mã xác thực qua email
    private boolean sendVerificationEmail(String email, String verificationCode) throws AddressException {
        String fromEmail = "votuan042004@gmail.com";  // Thay bằng email của bạn
        String fromPassword = "gcwsmadoeqmijrpn"; // Thay bằng mật khẩu email của bạn
        String host = "smtp.gmail.com"; // Địa chỉ SMTP của dịch vụ email bạn sử dụng (ví dụ: smtp.gmail.com)

        // Thiết lập các thuộc tính của mail
        Properties properties = new Properties();
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "587"); // Cổng SMTP (587 cho Gmail)
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");

        // Cấu hình xác thực
        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(fromEmail, fromPassword);
            }
        });

        try {
            // Tạo nội dung email
            String subject = "Mã xác thực tài khoản";
            String body = "Mã xác thực của bạn là: " + verificationCode;

            // Tạo đối tượng email
            Message message = new MimeMessage(session);//là một lớp con của Message trong thư viện JavaMail API
            message.setFrom(new InternetAddress(fromEmail));//xác định địa chỉ email của người gửi.
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email)); //Thiết lập người nhận (To)
            message.setSubject(subject);//Thiết lập chủ đề (Subject)
            message.setText(body); // Thiết lập nội dung (Body)

            // Gửi email
            Transport.send(message);
            return true;
        } catch (MessagingException e) {
            e.printStackTrace();
            return false;
        }


    }

    // kểm tra tính hợp lệ của mã code
    public boolean isCode(String email, String code) throws SQLException {
        if (usersDao.isCode(email,code)) {
            return true;
        }
        return false;
    }

    //Gửi lại mã xác thực
    public String sendCode(String email) throws SQLException {
        // Tạo mã xác thực và gửi email
        String verificationCode = generateVerificationCode();
        try {
            if (!sendVerificationEmail(email, verificationCode)) {
                return "Không thể gửi mã xác thực, vui lòng thử lại!";
            }
        } catch (AddressException e) {
            throw new RuntimeException(e);
        }

        // Lưu mã xác thực vào cơ sở dữ liệu
        if (!usersDao.updateVerificationCode(email, verificationCode)) {
            return "Không thể cập nhật!";
        }
        return verificationCode;
    }


    //kiểm tra Cập nhật trạng thái xác thực email
    public boolean verifyEmail(String email) throws SQLException {
        if(usersDao.verifyEmail(email)) {
            return true;
        }
        return false;
    }


    //Đăng nhập
    public boolean login(String username, String password) throws SQLException {
        if(usersDao.checkLogin(username, password)) {
            return true;
        }
        return false;
    }

    //Lấy user
    public Users getUser(String username) throws SQLException {
        return usersDao.getUser(username);
    }

}
