function placeOrder() {
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    if (paymentMethod === "cod") {
        window.location.href = "../page/confirmation.html"; // Chuyển đến trang xác nhận đơn hàng
    } else if (paymentMethod === "vnpay") {
        window.location.href = "../page/pay.html"; // Chuyển đến trang thanh toán mô phỏng
    } else {
        alert("Vui lòng chọn phương thức thanh toán.");
    }
}
