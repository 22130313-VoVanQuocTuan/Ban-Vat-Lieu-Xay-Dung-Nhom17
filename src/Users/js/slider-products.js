// ------------slider product 1--------------
const rightbtn1 = document.querySelector('.nut_phai-1');
const leftbtn1 = document.querySelector('.nut_trai-1');
const productCounttwo1 = document.querySelectorAll('.slider-product-one-content-items');
let index1 = 0;

console.log(rightbtn1);
console.log(leftbtn1);

rightbtn1.addEventListener("click", function () {
    index1 = index1 + 1;
    if (index1 > productCounttwo1.length - 1) {
        index1 = 0; // Quay lại đầu
    }
    updateSlider1();
});

leftbtn1.addEventListener("click", function () {
    index1 = index1 - 1;
    if (index1 < 0) {
        index1 = productCounttwo1.length - 1; // Quay lại cuối
    }
    updateSlider1();
});

    function updateSlider1() {
    const offset = -index1 * 100; // Tính toán offset dựa trên index
    document.querySelector(".slider-product-one-content-items-content").style.transform = `translateX(${offset}%)`;
    console.log("Current Index:", index1); // Kiểm tra giá trị index
}

// ------------slider product 2--------------
const rightbtn2 = document.querySelector('.nut_phai-2');
const leftbtn2 = document.querySelector('.nut_trai-2');
const productCounttwo2 = document.querySelectorAll('.slider-product-two-content-items');
let index2 = 0;

console.log(rightbtn2);
console.log(leftbtn2);

rightbtn2.addEventListener("click", function () {
index2 = index2 + 1;
if (index2 > productCounttwo2.length - 1) {
    index2 = 0; // Quay lại đầu
}
updateSlider2();
});

leftbtn2.addEventListener("click", function () {
index2 = index2 - 1;
if (index2 < 0) {
    index2 = productCounttwo2.length - 1; // Quay lại cuối
}
updateSlider2();
});

function updateSlider2() {
const offset = -index2 * 100; // Tính toán offset dựa trên index
document.querySelector(".slider-product-two-content-items-content").style.transform = `translateX(${offset}%)`;
console.log("Current Index:", index2); // Kiểm tra giá trị index
}

// ------------slider product 3--------------
const rightbtn3 = document.querySelector('.nut_phai-3');
const leftbtn3 = document.querySelector('.nut_trai-3');
const productCounttwo3 = document.querySelectorAll('.slider-product-three-content-items');
let index3 = 0;

console.log(rightbtn3);
console.log(leftbtn3);

rightbtn3.addEventListener("click", function () {
index3 = index3 + 1;
if (index3 > productCounttwo3.length - 1) {
    index3 = 0; // Quay lại đầu
}
updateSlider3();
});

leftbtn3.addEventListener("click", function () {
index3 = index3 - 1;
if (index3 < 0) {
    index3 = productCounttwo3.length - 1; // Quay lại cuối
}
updateSlider3();
});

function updateSlider3() {
const offset = -index3 * 100; // Tính toán offset dựa trên index
document.querySelector(".slider-product-three-content-items-content").style.transform = `translateX(${offset}%)`;
console.log("Current Index:", index3); // Kiểm tra giá trị index
}



