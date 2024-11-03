
const sidebar = document.querySelector('.conten .left-section');
const sidebarItems = document.querySelectorAll('.conten .left-sidebar .item');




// Xử lý sự kiện click cho từng mục
sidebarItems.forEach(sideItem => {
    sideItem.addEventListener('click', () => {
        // Nếu mục đang được nhấn đã có lớp 'active', không làm gì cả
        if (sideItem.classList.contains('active')) {
            return;
        }
        
        // Xóa lớp 'active' khỏi tất cả các mục
        sidebarItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Thêm lớp 'active' cho mục đang nhấn
        sideItem.classList.add('active');
    });
});








const list_cart = [
    {  
        image : "../img_product/gach-inax.webp", nameProduct: "Gạch inax",   price: "200.000 ₫",  newPrice: "22.500.000 ₫", salse: "10% khi thanh toán"
    },
    {  
        image : "../img_product/gach-inax.webp",  nameProduct: "MacBook Air M1",   price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "../img_product/gach-inax.webp",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "../img_product/gach-inax.webp",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "../img_product/gach-inax.webp",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "../img_product/gach-inax.webp",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
    {  
        image : "/home/image/image1.png",
        nameProduct: "MacBook Air M1",
        price: "200.000 ₫   ",
        newPrice: "22.500.000 ₫",
        salse: "10% khi thanh toán"
    },
];


const itemsPerPage = 12;
let currentPage = 1;

// Function to display products
function displayProducts() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear current content

    // Display products for the current page
    const currentProducts = list_cart.slice(start, end);
    currentProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("name-cart");
        productDiv.innerHTML = `
            <a href=""><img src="${product.image}" alt="${product.nameProduct}"></a>
            <h3>${product.nameProduct}</h3>
            <p>Gía: <del>${product.price}</del>
            <p  style="color: red;">Gía đã giảm:  ${product.newPrice}</p>
            <p>Giảm giá: ${product.salse}</p>
            
             <a href="" class="add-cart"><i class="ri-add-circle-line"></i>Thêm</a>
        
        `;
        productList.appendChild(productDiv);
    });

    // Update pagination controls
    updatePagination();
}

// Function to update pagination controls
function updatePagination() {
    const paginationDiv = document.getElementById("pagination");
    paginationDiv.innerHTML = ""; // Clear current pagination controls

    // Previous button
    const prevButton = document.createElement("button");
    prevButton.textContent = "Quay lại";
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener("click", () => {
        currentPage--;
        displayProducts();
    });
    paginationDiv.appendChild(prevButton);

    // Next button
    const nextButton = document.createElement("button");
    nextButton.textContent = "Trang tiếp";
    nextButton.disabled = currentPage * itemsPerPage >= list_cart.length;
    nextButton.addEventListener("click", () => {
        currentPage++;
        displayProducts();
    });
    paginationDiv.appendChild(nextButton);
}

// Initialize product display
displayProducts();