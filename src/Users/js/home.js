
// thiết lập chạy chào mừng
document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('animatedText');
    const textContent = textElement.textContent;
    let index = 0;
  
    function animateText() {
      if (index < textContent.length) {
        textElement.textContent = textContent.slice(0, index + 1);
        index++;
      } else {
        // Khi hoàn tất, chờ một lúc rồi lặp lại
        index = 0;
        setTimeout(animateText, 1000);  // Nghỉ 1 giây rồi chạy lại
        return;
      }
      setTimeout(animateText, 100); // Tốc độ đánh chữ (100ms mỗi chữ)
    }
  
    // Bắt đầu chạy hiệu ứng
    animateText();
});



