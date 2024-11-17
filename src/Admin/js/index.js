// Lấy tất cả các liên kết trong menu
let menuItems = document.querySelectorAll('.navigation ul li a');

// Lặp qua từng item và thêm sự kiện click
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Loại bỏ class active khỏi tất cả các mục khác
        menuItems.forEach(link => link.closest('li').classList.remove('active'));

        // Thêm class active vào mục được nhấn
        this.closest('li').classList.add('active');
    });

    // Thêm sự kiện hover vào mỗi mục để thêm class hovered
    item.addEventListener('mouseover', function() {
        this.closest('li').classList.add('hovered');
    });

    // Loại bỏ sự kiện hover khi chuột rời khỏi
    item.addEventListener('mouseout', function() {
        this.closest('li').classList.remove('hovered');
    });
});
/*Logout*/
function lockout(){
    window.location.href = "/src/Users/page/login-signup.html"
}


function updateStatusColors() {
    // Lấy tất cả các phần tử có class là "statusText"
    const statusElements = document.querySelectorAll(".statusText");

    statusElements.forEach((statusElement) => {
        const status = statusElement.textContent.trim(); // Lấy trạng thái hiện tại

        // Đặt màu nền dựa trên trạng thái
        switch (status) {
            case "Hoạt động":
                statusElement.style.backgroundColor = "#34ec34";
                break;
            case "Không hoạt động":
                statusElement.style.backgroundColor = "#cdcdcd";
                break;
            case "Đang chờ xử lý":
                statusElement.style.backgroundColor = "#ffae18";
                break;
            case "Bị đình chỉ":
                statusElement.style.backgroundColor = "#ff3939";
                break;
            default:
                statusElement.style.backgroundColor = ""; // Mặc định không màu
        }
    });
}

// Gọi hàm để áp dụng màu ngay khi trang được tải
document.addEventListener("DOMContentLoaded", updateStatusColors);