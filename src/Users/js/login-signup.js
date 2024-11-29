document.addEventListener('DOMContentLoaded', function () {
    // Lấy các phần tử DOM
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const homeBtn = document.getElementById('home');
    const homeAltBtn = document.getElementById('HOME');

    const loginForm = document.getElementById('login-form');
    const userGreeting = document.getElementById('user-greeting');
    const usernameDisplay = document.getElementById('username');
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
    const logoutLink = document.getElementById('logout-link');
    const cartItemCount = document.getElementById('cart-count');

    const registerForm = document.getElementById('register-form');
    const emailInput = document.getElementById('register-email');
    const usernameInput = document.getElementById('register-username');
    const passwordInput = document.getElementById('register-password');
    const emailError = document.getElementById('email-error');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    const verifyCodeContainer = document.getElementById('verify-code-container');
    const verifyButton = document.getElementById('verify-button');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('close-button');

    // Hàm kiểm tra định dạng email
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Chuyển đổi giao diện giữa đăng ký và đăng nhập
    if (registerBtn && container) {
        registerBtn.addEventListener('click', () => container.classList.add("active"));
    }

    if (loginBtn && container) {
        loginBtn.addEventListener('click', () => container.classList.remove("active"));
    }

    // Điều hướng về trang Home
    if (homeBtn) {
        homeBtn.addEventListener('click', () => window.location.href = '/src/Users/page/home.html');
    }

    if (homeAltBtn) {
        homeAltBtn.addEventListener('click', () => window.location.href = '/src/Users/page/home.html');
    }

    
  // Xử lý đăng nhập
    const  username_errorlog = document.getElementById('username-errorlog')
    const  password_errorlog = document.getElementById('password-errorlog')
      if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            let isValid = true;
            // Kiểm tra tên đăng nhập
             if (username === '') {
                username_errorlog.textContent = 'Tên đăng nhập không được để trống';
                username_errorlog.style.display = 'block';
            isValid = false;
             } else {
                username_errorlog.style.display = 'none';
             }
              // Kiểm tra mật khẩu
              if (password === '') {
                password_errorlog.textContent = 'Mật khẩu không được để trống';
                password_errorlog.style.display = 'block';
            isValid = false;
             } else {
                password_errorlog.style.display = 'none';
            }

            // Nếu hợp lệ, xử lý đăng nhập
             if (isValid) {
            if (username === "Admin" && password === "Admin") {
                window.location.href = '/src/admin/pages/index.html'; // Chuyển đến trang admin
            } else {
                if(username === "tuanquanhuy" && password === "bvlxd"){
                localStorage.setItem('username', username); // Lưu tên đăng nhập vào localStorage
                window.location.href = '/src/Users/page/home.html'; // Chuyển đến trang người dùng
            }else{
                password_errorlog.textContent = 'Tài khoản hoặc mật khẩu không đúng';
                password_errorlog.style.display = 'block';
                isValid = false;
            }
        }
        }
    });
    }

    // Hiển thị thông tin người dùng nếu đã đăng nhập
    const username = localStorage.getItem('username');
    if (username) {
        userGreeting.style.display = 'inline';
        usernameDisplay.textContent = username;
        loginLink.style.display = 'none';
        logoutLink.style.display = 'inline';
        signupLink.style.display = 'inline';
        if (cartItemCount) cartItemCount.style.display = 'inline';
    } else {
        userGreeting.style.display = 'none';
        logoutLink.style.display = 'none';
        if (cartItemCount) cartItemCount.style.display = 'none';
    }

    // Xử lý đăng xuất
    if (logoutLink) {
        logoutLink.addEventListener('click', function (event) {
            event.preventDefault();
            localStorage.removeItem('username');
            window.location.href = "../page/login-signup.html";
        });
    }

    // Xử lý đăng ký
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let isValid = true;

            // Xóa thông báo lỗi
            if (emailError) emailError.textContent = '';
            if (usernameError) usernameError.textContent = '';
            if (passwordError) passwordError.textContent = '';

            // Kiểm tra email
            if (!emailInput.value) {
                if (emailError) emailError.textContent = 'Vui lòng nhập email';
                isValid = false;
            } else if (!validateEmail(emailInput.value)) {
                if (emailError) emailError.textContent = 'Email không đúng định dạng';
                isValid = false;
            }

            // Kiểm tra tên đăng nhập
            if (!usernameInput.value) {
                if (usernameError) usernameError.textContent = 'Vui lòng nhập tên đăng nhập';
                isValid = false;
            }

            // Kiểm tra mật khẩu
            if (!passwordInput.value) {
                if (passwordError) passwordError.textContent = 'Vui lòng nhập mật khẩu';
                isValid = false;
            }

            // Hiển thị form xác thực nếu hợp lệ
            if (isValid && overlay && verifyCodeContainer) {
                overlay.classList.add('show-verify');
                verifyCodeContainer.classList.add('show-verify');
            }
        });
    }   // Xử lý sự kiện đóng form xác thực
    if (closeButton) {
        closeButton.addEventListener('click', function () {
         
            if (overlay) overlay.classList.remove('show-verify');
            if (verifyCodeContainer) verifyCodeContainer.classList.remove('show-verify');
             // Xóa giá trị của các ô nhập mã
       
        });
    }

    // Xử lý chuyển ô nhập mã xác thực
    const inputs = document.querySelectorAll('.verification-code');
    if (inputs && inputs.length > 0) {
        inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });

            input.addEventListener('keydown', (event) => {
                if (event.key === 'Backspace' && input.value === '' && index > 0) {
                    inputs[index - 1].focus();
                }
            });
        });
    }

    // Xử lý xác nhận mã

const errorMessageElement = document.getElementById('error-message');

if (verifyButton) {
    verifyButton.addEventListener('click', function () {
        const inputs = document.querySelectorAll('.verification-code');
        let isComplete = true;
        let enteredCode = "";

        // Kiểm tra nếu tất cả các ô nhập mã đều có giá trị
        inputs.forEach((input) => {
            enteredCode += input.value;
            if (!input.value) {
                isComplete = false;
            }
        });

        // Nếu chưa nhập đủ mã
        if (!isComplete) {
            errorMessageElement.innerText = "Vui lòng nhập đủ mã xác thực!";
            errorMessageElement.style.display = 'block'; // Hiển thị thông báo lỗi

            // Hiệu ứng rung cho các ô nhập mã
            inputs.forEach(input => {
                input.classList.add('shake');
                setTimeout(() => {
                    input.classList.remove('shake');
                }, 500); // Loại bỏ hiệu ứng rung sau 0.5s
            });
        } else {
            // Kiểm tra nếu mã nhập chính xác (giả sử mã đúng là "1234")
            const correctCode = "1234";
            if (enteredCode !== correctCode) {
                // Hiệu ứng rung cho các ô nhập mã
            
                errorMessageElement.innerText = "Mã xác thực sai. Vui lòng thử lại!";
               
                errorMessageElement.style.display = 'block'; // Hiển thị thông báo lỗi
                inputs.forEach(input => {
                    input.classList.add('shake');
                    setTimeout(() => {
                        input.classList.remove('shake');
                    }, 500); // Loại bỏ hiệu ứng rung sau 0.5s
                });
            } else {
                // Nếu mã đúng, chuyển hướng hoặc thực hiện hành động khác
                window.location.href = './login-signup.html'; // Chuyển hướng nếu nhập đúng mã
            }
        }
    });
}
});
