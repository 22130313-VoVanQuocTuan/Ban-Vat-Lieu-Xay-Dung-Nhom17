function toggleStatusMenu() {
    const statusMenu = document.getElementById("statusMenu");
    statusMenu.style.display = statusMenu.style.display === "none" ? "block" : "none";
}

function updateStatus(status) {
    const statusTextElement = document.getElementById("statusText");
    if (statusTextElement) {
        statusTextElement.textContent = status;
        toggleStatusMenu(); // Ẩn menu sau khi chọn
    } else {
        console.error("Phần tử với ID 'statusText' không tồn tại.");
    }
}