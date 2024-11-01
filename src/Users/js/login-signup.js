const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const home = document.getElementById('home');
const HOME = document.getElementById('HOME');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
home.addEventListener('click',() => {
    window.location.href= '/src/Users/page/home.html'

});
HOME.addEventListener('click',() => {
    window.location.href= '/src/Users/page/home.html'

});

// Đảm bảo DOM đã được tải
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const verifyCodeContainer = document.getElementById('verify-code-container');
    const overlay = document.getElementById('overlay');
    const toggleContainer = document.querySelector('.toggle-container');
    const verifyButton = document.getElementById('verify-button');
    const login = document.getElementById('login-form')
    
    // Khi form đăng kí được gửi
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi form

        // Hiển thị overlay và form xác thực
        overlay.classList.add('show-verify');
        verifyCodeContainer.classList.add('show-verify');

        // Ẩn toggle container khi đang đăng ký
        toggleContainer.classList.add('none'); // Hoặc toggleContainer.style.display = 'none';
    });

    // Đóng form xác thực
    document.getElementById('close-button').addEventListener('click', function() {
        overlay.classList.remove('show-verify');
        verifyCodeContainer.classList.remove('show-verify');
        // Hiển thị lại toggle container
        toggleContainer.classList.remove('none'); // Hoặc toggleContainer.style.display = 'block';
    });

   // Xử lý khi nhấn nút "Xác Thực"
   verifyButton.addEventListener('click', function () {
          // Chuyển hướng về trang đăng nhập
        window.location.href = './login-signup.html';
 
     
});

//nhấn login quay về trang chủ
login.addEventListener('submit', function(event) {
     event.preventDefault();
       window.location.href = '/src/Users/page/home.html'; // Chuyển hướng về trang chủ
    }
);
});


// chuyển số verify code liên tiếp
const inputs = document.querySelectorAll('.verification-code');

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        const value = e.target.value;

        // Chuyển sang ô tiếp theo nếu người dùng nhập một ký tự
        if (value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }

        // Xóa và quay lại ô trước nếu nhấn Backspace và ô hiện tại trống
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace' && value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
});

