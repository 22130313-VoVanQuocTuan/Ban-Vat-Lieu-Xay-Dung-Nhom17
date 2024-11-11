document.addEventListener('DOMContentLoaded', function() {
    // Các phần tử cơ bản
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const home = document.getElementById('home');
    const HOME = document.getElementById('HOME');
    const registerForm = document.getElementById('register-form');
    const verifyCodeContainer = document.getElementById('verify-code-container');
    const overlay = document.getElementById('overlay');
    const toggleContainer = document.querySelector('.toggle-container');
    const verifyButton = document.getElementById('verify-button');
    const login = document.getElementById('login-form');
    const userGreeting = document.getElementById('user-greeting');
    const usernameDisplay = document.getElementById('username');
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
    const logoutLink = document.getElementById('logout-link');

    // Xử lý chuyển đổi đăng ký và đăng nhập
    if (registerBtn && container) {
        registerBtn.addEventListener('click', () => container.classList.add("active"));
    }

    if (loginBtn && container) {
        loginBtn.addEventListener('click', () => container.classList.remove("active"));
    }

    if (home) {
        home.addEventListener('click', () => window.location.href = '/src/Users/page/home.html');
    }

    if (HOME) {
        HOME.addEventListener('click', () => window.location.href = '/src/Users/page/home.html');
    }

    // Xử lý form đăng ký
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            overlay.classList.add('show-verify');
            verifyCodeContainer.classList.add('show-verify');
            toggleContainer.classList.add('none');
        });
    }

    // Đóng form xác thực
    document.getElementById('close-button')?.addEventListener('click', function() {
        overlay.classList.remove('show-verify');
        verifyCodeContainer.classList.remove('show-verify');
        toggleContainer.classList.remove('none');
    });

    // Xử lý khi nhấn nút "Xác Thực"
    if (verifyButton) {
        verifyButton.addEventListener('click', function() {
            window.location.href = './login-signup.html';
        });
    }

    // Xử lý đăng nhập
    if (login) {
        login.addEventListener('submit', function(event) {
            event.preventDefault();
            var username = document.getElementById('login-username').value;
            var password = document.getElementById('login-password').value;

            if (username === "Admin" && password === "Admin") {
                window.location.href = '/src/admin/pages/index.html';
            } else {
                localStorage.setItem('username', username);
                window.location.href = '/src/Users/page/home.html';
            }
        });
    } else {
        console.error('Không tìm thấy form đăng nhập với ID "login-form"');
    }

    // Chuyển ô nhập liệu verify code
    const inputs = document.querySelectorAll('.verification-code');
    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace' && input.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    // Quản lý hiển thị giao diện khi đăng nhập
    const username = localStorage.getItem('username');
    if (username) {
        userGreeting.style.display = 'inline';
        usernameDisplay.textContent = username;
        loginLink.style.display = 'none';
        signupLink.style.display = 'none';
        logoutLink.style.display = 'inline';
    } else {
        userGreeting.style.display = 'none';
        logoutLink.style.display = 'none';
    }

    // Xử lý đăng xuất
    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('username');
            window.location.href = "../page/login-signup.html";
        });
    }


    
});


document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const emailInput = document.getElementById('register-email');
    const usernameInput = document.getElementById('register-username');
    const passwordInput = document.getElementById('register-password');
    
    const emailError = document.getElementById('email-error');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Xóa thông báo lỗi cũ
        emailError.textContent = '';
        usernameError.textContent = '';
        passwordError.textContent = '';

        // Kiểm tra email
        if (!emailInput.value) {
            emailError.textContent = 'Vui lòng nhập email';
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Email không đúng định dạng';
            isValid = false;
        }

        // Kiểm tra tên đăng nhập
        if (!usernameInput.value) {
            usernameError.textContent = 'Vui lòng nhập tên đăng nhập';
            isValid = false;
        }

        // Kiểm tra mật khẩu
        if (!passwordInput.value) {
            passwordError.textContent = 'Vui lòng nhập mật khẩu';
            isValid = false;
        }

        // Nếu tất cả hợp lệ, tiến hành xử lý đăng ký
        if (isValid) {
            alert("Đăng ký thành công!");
            // Thực hiện các hành động đăng ký tiếp theo tại đây
        }
    });

    // Hàm kiểm tra định dạng email
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});