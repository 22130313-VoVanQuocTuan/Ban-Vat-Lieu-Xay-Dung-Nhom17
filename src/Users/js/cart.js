// Danh sách sản phẩm mẫu trong giỏ hàng
let cart = [
    { name: "Gạch-inax", image: "../img_product/gach-inax.webp", quantity: 1, price: 200000, discountPrice: 180000 },
    { name: "Gạch-inax", image: "../img_product/gach-inax.webp", quantity: 1, price: 400000, discountPrice: 180000 },
    { name: "Gạch-inax", image: "../img_product/gach-inax.webp", quantity: 1, price: 100000, discountPrice: 180000 },
    { name: "Gạch-inax", image: "../img_product/gach-inax.webp", quantity: 1, price: 200000, discountPrice: 180000 },
    { name: "Gạch-inax", image: "../img_product/gach-inax.webp", quantity: 1, price: 500000, discountPrice: 180000 },
    { name: "Gạch-inax", image: "../img_product/gach-inax.webp", quantity: 1, price: 200000, discountPrice: 180000 }
];

// Hàm để thay đổi số lượng sản phẩm
function changeQuantity(index, change) {
    const product = cart[index];
    product.quantity = Math.max(1, product.quantity + change); // Đảm bảo số lượng tối thiểu là 1
    renderCart(); // Cập nhật lại giao diện giỏ hàng
}
// Hàm để xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    cart.splice(index, 1); // Xóa sản phẩm tại vị trí index
    renderCart(); // Cập nhật lại giao diện giỏ hàng
}

// Hàm để render giỏ hàng và cập nhật tổng tiền
function renderCart() {
    const cartContainer = document.getElementById('cart-items-container');
    cartContainer.innerHTML = ''; // Xóa nội dung cũ

    let subtotal = 0;
    cart.forEach((product, index) => {
        const productTotal = product.discountPrice * product.quantity;
        subtotal += productTotal;

        // Thêm HTML cho mỗi sản phẩm vào giỏ hàng
        cartContainer.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td><img src="${product.image}" alt="${product.name}" width="50" /></td>
                <td>
                    <div class="quantity">
                        <button class="qty-btn minus-btn" onclick="changeQuantity(${index}, -1)">-</button>
                        <input 
                            type="number" 
                            value="${product.quantity}" 
                            class="qty-input" 
                            min="1" 
                            onchange="updateQuantity(${index}, this.value)" />
                        <button class="qty-btn plus-btn" onclick="changeQuantity(${index}, 1)">+</button>
                    </div>
                </td>
                <td>${product.price.toLocaleString()}₫</td>
                <td>${productTotal.toLocaleString()}₫</td>
                <td><button class="remove-from-cart-button" onclick="removeFromCart(${index})">Xóa</button></td>
            </tr>
        `;
    });
