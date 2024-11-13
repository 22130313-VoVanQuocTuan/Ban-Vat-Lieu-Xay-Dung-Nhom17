document.addEventListener('DOMContentLoaded', function() {
    const resetPasswordForm = document.getElementById('reset-password-form');
    const newPasswordForm = document.getElementById('new-password-form');
    const passwordError = document.getElementById('password-error');
    const backToLoginLink = document.getElementById('back-to-login');
    const resetPasswordContainer = document.querySelector('.form-container.reset-password');
    const setNewPasswordContainer = document.querySelector('.form-container.set-new-password');
    const errorEmail = document.getElementById('email-error');

    const loadingMessage = document.getElementById('loading-message');
     // Khi form lấy lại mật khẩu được gửi
     resetPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi form

        const email = document.getElementById('reset-email').value;

        // Ẩn thông báo lỗi trước khi kiểm tra
        errorEmail.style.display = 'none';

        // Kiểm tra email hợp lệ
        if (!email) {
            errorEmail.textContent = "Email không được để trống";
            errorEmail.style.display = 'block';
            return; // Dừng lại nếu email trống
        }

        if (email !== "22130313@st.hcmuaf.edu.vn") {
            errorEmail.textContent = "Địa chỉ email không tồn tại";
            errorEmail.style.display = 'block';
            return; // Dừng lại nếu email không đúng
        }

        alert("Liên kết đặt lại mật khẩu đã được gửi đến email của bạn!");
        // Hiển thị thông báo loading và spinner
        loadingMessage.style.display = "block";

        // Giả lập quá trình gửi email (dùng setTimeout để mô phỏng)
        setTimeout(function() {
            loadingMessage.style.display = "none"; // Ẩn thông báo và spinner sau khi xử lý xong
             // Nếu email hợp lệ, tiếp tục
            // Ẩn form lấy lại mật khẩu và hiển thị form đặt lại mật khẩu mới
            resetPasswordContainer.classList.add('none'); // Ẩn form lấy lại mật khẩu
            setNewPasswordContainer.classList.remove('none'); // Hiển thị form đặt lại mật khẩu mới

          
            // Bạn có thể gửi yêu cầu API để thực sự gửi email ở đây
        }, 10000); // Giả lập quá trình xử lý mất 3 giây
    });



    // Khi form đặt lại mật khẩu mới được gửi
    newPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi form
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Kiểm tra xem mật khẩu có khớp hay không
        if (newPassword !== confirmPassword) {
            passwordError.style.display = 'block'; // Hiện thông báo lỗi
        } else {
            passwordError.style.display = 'none'; // Ẩn thông báo lỗi
            // Xử lý cập nhật mật khẩu mới (AJAX hoặc fetch)
            console.log(`Cập nhật mật khẩu mới: ${newPassword}`);
            alert('Mật khẩu của bạn đã được cập nhật thành công.');

            // Chuyển hướng về trang đăng nhập hoặc trang nào khác
            window.location.href = "/src/Users/page/login-signup.html"; // Địa chỉ trang đăng nhập
        }
    });

    // Khi người dùng muốn trở lại trang đăng nhập
    backToLoginLink.addEventListener('click', function() {
        window.location.href = "/src/Users/page/login-signup.html"; // Địa chỉ trang đăng nhập
    });
});
