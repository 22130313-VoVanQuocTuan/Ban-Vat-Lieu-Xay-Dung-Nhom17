package hcmuaf.nlu.edu.vn.user.service;

import hcmuaf.nlu.edu.vn.user.dao.UsersDao;
import hcmuaf.nlu.edu.vn.user.model.Users;

import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Properties;

public class UserService {
    private UsersDao usersDao;
    public UserService() {}
    public UserService(UsersDao usersDao) {
        this.usersDao = usersDao;
    }

    // Đăng ký người dùng mới
    public String registerUser(String email, String username, String password) throws SQLException {
        try {
            // Kiểm tra xem email và tên tài khoản đã tồn tại
            if (usersDao.checkExistence(email, username)) {
                return "Email hoặc tên tài khoản đã được sử dụng!";
            }

            // Thêm người dùng vào cơ sở dữ liệu
            Users newUser = new Users();
            newUser.setEmail(email);
            newUser.setUsername(username);
            newUser.setPassword(password);

            if (!usersDao.addUser(newUser)) {
                return "Đăng ký thất bại!";
            }

            // Lấy userId của người dùng vừa tạo
            int userId = usersDao.getUserIdByEmail(email);

            // Tạo mã xác thực và gửi email
            String verificationCode = generateVerificationCode();
            if (!sendVerificationEmail(email, verificationCode)) {
                return "Không thể gửi mã xác thực, vui lòng thử lại!";
            }

            // Lưu mã xác thực vào cơ sở dữ liệu
            if (!usersDao.addEmailVerification(email, verificationCode, userId)) {
                return "Không thể lưu mã xác thực vào cơ sở dữ liệu, vui lòng thử lại!";
            }

            return "Đăng ký thành công, vui lòng kiểm tra email để xác thực!";
        } catch (SQLException e) {
            e.printStackTrace();
            return "Có lỗi xảy ra, vui lòng thử lại!";
        } catch (AddressException e) {
            throw new RuntimeException(e);
        }
    }

    // Tạo mã xác thực ngẫu nhiên
    private String generateVerificationCode() {
        return String.format("%04d", (int) (Math.random() * 10000));
    }

    // Gửi mã xác thực qua email
    private boolean sendVerificationEmail(String email, String verificationCode) throws AddressException {
        String fromEmail = "your_email@example.com";  // Thay bằng email của bạn
        String fromPassword = "your_email_password"; // Thay bằng mật khẩu email của bạn
        String host = "smtp.example.com"; // Địa chỉ SMTP của dịch vụ email bạn sử dụng (ví dụ: smtp.gmail.com)

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
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(fromEmail));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
            message.setSubject(subject);
            message.setText(body);

            // Gửi email
            Transport.send(message);
            return true;
        } catch (MessagingException e) {
            e.printStackTrace();
            return false;
        }
    }

}
