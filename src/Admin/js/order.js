
    // Hàm hiển thị chi tiết hóa đơn
    function showOrderDetail() {
             // Mở modal
            document.getElementById('orderDetailModal').style.display = "block";
        }
    

    // Hàm đóng modal
    function closeModal() {
        document.getElementById('orderDetailModal').style.display = "none";
    }

    // Đóng modal khi click ra ngoài modal
    window.onclick = function(event) {
        const modal = document.getElementById('orderDetailModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
