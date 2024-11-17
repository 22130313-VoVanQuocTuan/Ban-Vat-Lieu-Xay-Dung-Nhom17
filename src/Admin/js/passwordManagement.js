// Hàm mở modal và điền thông tin tài khoản admin
function editAdmin(username, email, currentPassword) {
    // Cập nhật giá trị tên tài khoản và email
    document.getElementById("edit-username").value = username;
    document.getElementById("edit-email").value = email;
    
    // Đảm bảo mật khẩu cũ không tự động điền vào (để người dùng nhập)
    document.getElementById("edit-old-pass").value = '';
    document.getElementById("edit-new-pass").value = ''; // Đảm bảo trường mật khẩu mới trống khi mở modal

    // Lưu lại thông tin mật khẩu cũ (sẽ sử dụng khi xác thực) trong thuộc tính data-old-password
    document.getElementById("edit-modal").setAttribute('data-old-password', currentPassword);

    // Hiển thị modal chỉnh sửa
    document.getElementById("edit-modal").style.display = "block";
}

// Hàm đóng modal
function closeModal() {
    document.getElementById("edit-modal").style.display = "none";
}

// Hàm xử lý cập nhật mật khẩu
document.getElementById("edit-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngừng hành động mặc định của form (submit)
    
    // Lấy dữ liệu từ form
    const username = document.getElementById("edit-username").value;
    const oldPassword = document.getElementById("edit-old-pass").value;
    const newPassword = document.getElementById("edit-new-pass").value;

    // Lấy mật khẩu cũ lưu trữ trong modal (để xác nhận)
    const storedOldPassword = document.getElementById("edit-modal").getAttribute('data-old-password');
    
    // Kiểm tra xem mật khẩu cũ có khớp không
    if (oldPassword !== storedOldPassword) {
        alert("Mật khẩu cũ không chính xác!");
        return;
    }

    // Nếu mật khẩu cũ đúng, thông báo cập nhật thành công
    if (newPassword.trim() === "") {
        alert("Mật khẩu mới không được để trống!");
        return;
    }

    // Hiển thị thông báo cập nhật thành công
    alert("Cập nhật mật khẩu thành công!");

    // Đóng modal
    closeModal();
});

// Hàm xóa tài khoản admin
function deleteAdmin(username) {
    // Xác nhận xóa
    if (confirm("Bạn có chắc chắn muốn xóa tài khoản này?")) {
        // Tìm dòng chứa tài khoản muốn xóa và xóa nó khỏi bảng
        const rows = document.querySelectorAll('.admin-list tbody tr');
        rows.forEach(row => {
            const cells = row.getElementsByTagName('td');
            if (cells[0].innerText === username) {
                row.remove();  // Xóa dòng khỏi bảng
            }
        });
        alert("Tài khoản đã được xóa!");
    }
}

