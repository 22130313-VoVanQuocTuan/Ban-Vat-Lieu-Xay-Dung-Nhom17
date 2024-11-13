document.addEventListener('DOMContentLoaded', function() {
    const applyBtn = document.getElementById('apply-btn');
    const voucherInput = document.getElementById('voucher');
    const voucherError = document.getElementById('voucher-error');
    const total = document.getElementById('total');
   
    //Tăng giảm số lượng
    const minusButtons = document.querySelectorAll('.minus-btn');
    const plusButtons = document.querySelectorAll('.plus-btn');

    const price = document.getElementById('price'); // Lấy giá 1 sản phẩm
    const totalPriceElement = document.getElementById('total-price'); // Element hiển thị tổng giá

    //Xóa sản phẩm
    const deleted = document.getElementById('delete');
    const tr_cart_item = document.getElementById('cart');

    applyBtn.addEventListener('click', function() {
        const checkvoucher = voucherInput.value.trim();  // Lấy giá trị mã ưu đãi đã nhập

   

        // Kiểm tra mã ưu đãi
        if (checkvoucher !== "QWERTYUI") {
            // Nếu mã không hợp lệ, hiển thị thông báo lỗi
            voucherError.style.display = 'block';
        } else {
            // Nếu mã hợp lệ, xử lý cập nhật tổng tiền hoặc logic tiếp theo
            voucherError.textContent = "Bạn được giảm 10.000 ₫";
            voucherError.style.display = 'block';
            voucherError.style.color = 'green'

            // Lấy giá trị tổng tiền hiện tại và trừ đi 10.000
        let currentTotal = parseFloat(total.textContent.replace('₫', '').replace('.', '').trim());
        let newTotal = currentTotal - 10000; // Trừ đi 10.000 ₫

        // Cập nhật lại tổng tiền
        total.textContent = newTotal.toLocaleString() + '₫'; // Hiển thị lại với định dạng số (có dấu chấm phân cách)


            // Thực hiện cập nhật tổng tiền nếu cần
        }
    });


    const pricePerProduct = 200000; // Giá cố định của mỗi sản phẩm 
    //Tăng giảm số lượng
    minusButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const input = this.nextElementSibling; // Lấy ô input nằm kế bên nút trừ
            let currentValue = parseInt(input.value);

            if (currentValue > parseInt(input.min || 1)) {
                currentValue -= 1; // Giảm số lượng
                input.value = currentValue; // Cập nhật giá trị ô input

                // Cập nhật giá động
                const currentPrice = currentValue * pricePerProduct;
                price.textContent = currentPrice.toLocaleString('vi-VN') + ' ₫';
               
                totalPriceElement.textContent = totalPrice.toLocaleString('vi-VN') + ' ₫'; // Hiển thị tổng giá
            }
        });
    });

    plusButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const input = this.previousElementSibling; // Lấy ô input nằm trước nút cộng
            let currentValue = parseInt(input.value);

            currentValue += 1; // Tăng số lượng
            input.value = currentValue; // Cập nhật giá trị ô input

           // Cập nhật giá động
           const currentPrice = currentValue * pricePerProduct;
           price.textContent = currentPrice.toLocaleString('vi-VN') + ' ₫';

           // Tính toán tổng giá
           totalPriceElement.textContent = currentPrice.toLocaleString('vi-VN') + ' ₫'; // Hiển thị tổng giá
        });
    });

    //Xóa sản phẩm 
    deleted.addEventListener('click', function(){
        tr_cart_item.style.display = "none";
    
    })
    });

