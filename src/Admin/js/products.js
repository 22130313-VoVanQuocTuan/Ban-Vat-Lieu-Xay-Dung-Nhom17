// Get elements
const addDetailBtns = document.querySelectorAll("#add_detail");
const modal = document.getElementById("detail_modal");
const closeModalBtns = document.querySelectorAll(".close-modal, #update_detail");

const deleteBtn = document.getElementById('deleteBtn');
const deleteModal = document.getElementById('deleteModal');
const confirmDeleteBtn = document.getElementById('confirmDelete');


// Open modal when clicking on "Xóa"
deleteBtn.addEventListener('click', () => {
    // Show the confirmation modal
    deleteModal.style.display = 'flex'; 
});
// Confirm delete action
confirmDeleteBtn.addEventListener('click', () => {
    deleteModal.style.display = 'none';
});
// ---------------------------------------------------------------------------
// Open modal on button click
addDetailBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "flex";
    });
});

// Close modal
closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "none";
        deleteModal.style.display = 'none';
    });
});

// Handle "Cập nhật chi tiết" logic here
document.getElementById("update_detail").addEventListener("click", () => {
    // Get input values
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;
    const unit = document.getElementById("unit").value;
    const description = document.getElementById("description").value;

    // Process the data (for now, just log it)
    console.log({ size, color, unit, description });

    // Show success message
    const toast = document.getElementById("toast");
    toast.classList.add("show"); // Add the 'show' class to display the toast

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show"); // Remove 'show' class to hide the toast
    }, 3000); // Toast will disappear after 3 seconds

    // Close the modal after updating
    const modal = document.getElementById("detail_modal");
    modal.style.display = "none";
});
// ----------------------------------------------------------------------------------------------------------

// Thêm sản phẩm 
const addProductModal1 = document.getElementById("addProductModal");
const saveProductBtn1 = document.getElementById("save_Product");
const closeModalBtns1 = document.querySelectorAll(".close_modal");
const toast = document.getElementById("toast");

// Mở modal thêm sản phẩm
document.getElementById("add_product").addEventListener("click", () => {
    addProductModal1.style.display = "flex";
});

// Đóng modal khi nhấn nút thoát
closeModalBtns1.forEach(btn => {
    btn.addEventListener("click", () => {
        addProductModal1.style.display = "none";
    });
});

// Xử lý sự kiện khi nhấn "Lưu sản phẩm"
saveProductBtn1.addEventListener("click", (event) => {
    event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định
    // Lấy giá trị từ form
    const productCode = document.getElementById("productCode").value;
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productCategory = document.getElementById("productCategory").value;
    const productStock = document.getElementById("productStock").value;
    const productStatus = document.getElementById("productStatus").value;
    const productImage = document.getElementById("productImage").value;

    // Log dữ liệu sản phẩm để kiểm tra
    console.log({ productCode, productName, productPrice, productCategory, productStock, productStatus, productImage });

    // Hiển thị thông báo thành công
    toast.classList.add("show");

    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

    // Đóng modal sau khi lưu sản phẩm
    addProductModal1.style.display = "none";
});
