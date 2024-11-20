const deleteBtns = document.querySelectorAll('.deleteBtn'); // Chọn tất cả các nút có class 'deleteBtn'
const displayModels = document.getElementById('displayModel');
const closeModels = document.getElementById('closeModel');
const confirmDeletes = document.getElementById('confirmDelete');

// Lặp qua tất cả các nút và gán sự kiện
deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        displayModels.style.display = 'flex';
    });
});

// Xác nhận xóa và đóng modal
if (confirmDeletes) {
    confirmDeletes.addEventListener('click', () => {
        displayModels.style.display = 'none';
    });
}

// Đóng modal
if (closeModels) {
    closeModels.addEventListener('click', () => {
        displayModels.style.display = 'none';
    });
}

//Thêm sản phẩm mới
const addDiscountNews = document.getElementById('addDiscountNew');
//Hiện bảng thêm sản phẩm
document.getElementById("add_DiscountNews").addEventListener("click", () => {
    addDiscountNews.style.display = 'flex';
});


