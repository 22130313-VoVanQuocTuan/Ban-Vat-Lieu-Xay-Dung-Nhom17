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
