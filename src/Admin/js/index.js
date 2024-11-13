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