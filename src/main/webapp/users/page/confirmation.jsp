<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vật Liệu Xây Dựng TQH </title>
</head>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4-beta3/css/all.min.css" />
<link rel="stylesheet" href="../css/home.css">
<link rel="stylesheet" href="../css/confirmation.css">
<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }
    td {
        padding: 10px;
        text-align: center;
    }
    .image-product {
        width: 100px; /* Điều chỉnh kích thước ảnh nếu cần */
        height: auto;
    }
    .save{
        padding: 4px 20px;
        margin-top: 10px;
        background-color: #1c293d;
        border-radius: 5px;
        border: none;
        color: #ffffff;
        cursor: pointer;
    }
    .save:hover{
        background-color: #24a220;
    }
    .sub .p:hover{
        color: #f12020;
    }
</style>
<body>
    <div id="section-header1">
        <div class="container">
            <div class="banner">
                <div class="top-left">
                    <p class="animated-text">
                        <marquee>Chào mừng bạn đến với website của chúng tôi !</marquee>
                    </p>
                </div>
                <div class="top-right">
                    <span id="user-greeting" style="display: none; color: #ffffff;">Xin chào, <span id="username"></span>!</span>
                    <a href="informationCustomer.jsp" class="account-link" id="signup-link" style="display: none;">
                        <i class="fas fa-user-circle"  ></i> Tài khoản
                    </a>
                    <a href="login-signup.jsp" id="login-link"><span><i class="fa fa-fw fa-user"></i> Đăng Nhập</span></a>
                    <a href="login-signup.jsp" id="logout-link" style="display: none;"><span>Đăng Xuất</span></a>
                </div>
            </div>

        </div>
    </div>
    <div class="fixed">
        <div id="section-header2">
            <div class="container">
                <div class="menu">
                    <!-- Logo bên trái -->
                    <div class="logo">
                        <a href="../../home.jsp"><img src="../img/logo.png" alt="Logo"></a>
                    </div>

                    <!-- Thanh tìm kiếm ở giữa -->
                    <div class="search-bar">
                        <input type="text" placeholder="Tìm kiếm sản phẩm...">
                        <button title="icon"><i class="fa fa-fw fa-search"></i></button>
                    </div>

                    <!-- Thông tin bên phải -->
                    <div class="info">
                        <div class="hotline">
                            <span class="hotline-text">HOTLINE LIÊN HỆ </span>
                            <a href=""> 0905.090.252</a>
                        </div>
                    </div>
                    <div class="cart">
                        <div class="cart-wrapper">
                            <a href="cart.jsp">
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                            <span class="cart-count" id="cart-count">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="section-nav">
            <div class="container">
                <button class="menu-toggle"><i class="fa-solid fa-bars"></i> Menu</button>
                <ul class="nav navbar-nav navbar-center">
                    <li class="propClone">
                        <span class="none-a"><i class="fa-solid fa-list" style="color: #d0cdcd;"></i> &nbsp;&nbsp; DANH
                            MỤC SẢN
                            PHẨM</span>
                        <ul class="items">
                            <li> <a href="product/gach-xay-dung.jsp">&nbsp;&nbsp;<i
                                        class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;GẠCH XÂY
                                    DỰNG</a></li>
                            <li><a href="product/xi-mang-va-vua.jsp">&nbsp;&nbsp;<i
                                        class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;XI MĂNG VÀ
                                    VỮA</a></li>
                            <li><a href="product/cat-da-va-soi.jsp">&nbsp;&nbsp;<i
                                        class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;CÁT, ĐÁ VÀ
                                    SỎI</a></li>
                            <li><a href="product/thep-va-sat.jsp">&nbsp;&nbsp;<i
                                        class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;THÉP VÀ
                                    SẮT</a></li>
                            <li><a href="product/go-va-vat-lieu-go.jsp">&nbsp;&nbsp;<i
                                        class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;GỖ VÀ VẬT
                                    LIỆU GỖ</a></li>
                            <li><a href="product/son-va-phu-gia.jsp">&nbsp;&nbsp;<i
                                        class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;SƠN VÀ PHỤ
                                    GIA</a></li>
                            <li><a href="product/ngoi-va-tam-lop.jsp">&nbsp;&nbsp;<i
                                        class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;NGÓI VÀ TẤM
                                    LỢP</a></li>
                            <li><a href="product/ong-nuoc-va-phu-kien.jsp">&nbsp;&nbsp;<i
                                        class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;ỐNG NƯỚC VÀ
                                    PHỤ KIỆN</a></li>
                            <li><a href="product/thiet-bi-dien-nuoc.jsp">&nbsp;&nbsp;<i
                                        class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;THIẾT BỊ
                                    ĐIỆN NƯỚC</a></li>
                        </ul>
                    </li>
                    <li class="propClone"><a href="../../home.jsp"><i class="fa-solid fa-house"></i>&nbsp;&nbsp; TRANG CHỦ
                        </a></li>
                    <li class="propClone"><a href="product.jsp"><i class="fa-brands fa-product-hunt"></i>
                            &nbsp;&nbsp;SẢN PHẨM</a>
                    </li>
                    <li class="propClone"> <a href="cart.jsp"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp; GIỎ
                            HÀNG</a>
                    </li>
                    <li class="propClone">
                        <span class="none-a"> <i class="fa-solid fa-book"></i> &nbsp;&nbsp; HƯỚNG DẪN </span>
                        <ul class="items">
                            <li><a href="buying-help.jsp">&nbsp;&nbsp;<i
                                        class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;HƯỚNG DẪN
                                    MUA HÀNG</a>
                            </li>
                            <li><a href="product_unit.jsp">&nbsp;&nbsp;<i
                                        class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;BẢNG ĐƠN VỊ SẢN PHẨM</a>
                            </li>
                            <li><a href="term_and_services.jsp">&nbsp;&nbsp;<i
                                        class="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;ĐIỀU KHOẢN
                                    VÀ DỊCH VỤ</a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    </div>

    <div id="section-content-1">

        <form action="">
            <div class="index">

                <div class="box1">
                    <div class="form-group1">
                        <div class="infor"> Thông tin nhận hàng </div>
                        <div class="form-group">
                            <input type="email" id="email" class="back email" placeholder="Email" required>
                            <div id="email-error" class="error-message" style="color: red; display: none;">Vui lòng nhập
                                email.</div>
                        </div>

                        <div class="form-group">
                            <input type="text" id="name" class="back name" placeholder="Họ và tên" required>
                            <div id="name-error" class="error-message" style="color: red; display: none;">Vui lòng nhập
                                họ và tên.</div>
                        </div>

                        <div class="form-group">
                            <input type="tel" id="phone" class="back phone" placeholder="Số điện thoại" required>
                            <div id="phone-error" class="error-message" style="color: red; display: none;">Vui lòng nhập
                                số điện thoại.</div>
                        </div>

                        <div class="form-group">
                            <input type="text" id="address" class="back address" placeholder="Nhập địa chỉ (tùy chọn)"
                                required>
                            <div id="address-error" class="error-message" style="color: red; display: none;">Vui lòng
                                nhập địa chỉ.</div>
                        </div>

                        

                        <div class="form-group">
                           <textarea style="font-family: Arial, Helvetica, sans-serif; width: 95%;" type="text" id="note" class="note" placeholder="Ghi chú (tùy chọn)"></textarea>
                        </div>
                        <button class="save" title="bt">Lưu</button>

                    </div>

                    <div class="form-group2">
                        <div>
                            <div class="pay">Thanh toán</div>

                            <label for="cod-payment">
                                <input type="radio" id="cod-payment" name="payment" value="cod" required>
                                Thanh toán khi giao hàng (COD)
                            </label>
                            <br>
                            <label for="vnpay-payment">
                                <input type="radio" id="vnpay-payment" name="payment" value="vnpay" required>
                                Thanh toán qua VNPay
                            </label>
                            <!-- Thông báo lỗi chung -->
                            <div id="error-message" style="color: red; display: none; margin-top: 20px;">Vui lòng điền
                                đầy đủ thông tin để thanh toán.</div>
                        </div>
                       

                    </div>

                </div>

                <div class="box2">
                    <div class="order">Đơn hàng</div>

                    <table border="1">
                        <tr>
                            
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                        </tr>

                        <tr>
                          <td>Xi măng BC</td>
                          <td>20</td>
                          <td>1.000.000 ₫</td>
                        </tr>
                        <tr>
                            <td>Gạch  BC</td>
                            <td>100</td>
                            <td>1.000.000 ₫</td>
                          </tr>
                    </table>
                    <div class="totals">
                        <div class="total p">Phí vận chuyển: 200.000 ₫</div>
                    </div>
                    <div class="totals">
                        <div class="total p">Giảm giá: 100.000 ₫</div>
                    </div>
                    <div class="totals">
                        <div class="total p">Tổng cộng: 2.100.000 ₫</div>
                    </div>

                    <div class="sub">
                        <div class="hrep p"><a href="cart.jsp" style="text-decoration: none;">
                                < Quay về giỏ hàng </a>
                        </div>
                        <button type="button" class="submit-btn" onclick="placeOrder()">Đặt hàng</button>
                    </div>

                </div>

            </div>
        </form>

    </div>
    <!-- Modal / Form thanh toán COD -->
    <!-- Overlay tối màn hình -->
    <div id="overlay" class="overlay" onclick="closeForm()"></div>

    <!-- Form thanh toán COD -->
    <div id="codForm">

        <p class="title">Thanh toán khi nhận hàng (COD)</p>

        <table border="1">
            <tr>
                
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá</th>
            </tr>

            <tr>
              <td>Xi măng BC</td>
              <td>20</td>
              <td>1.000.000 ₫</td>
            </tr>
            <tr>
                <td>Gạch  BC</td>
                <td>100</td>
                <td>1.000.000 ₫</td>
              </tr>
        </table>
        <p>Số lượng: 2</p>
        <p>Tổng giá: 2.000.000 ₫</p>
        <p>Phí vân chuyển: 100.000 ₫</p>
        <p>Giá gảm: 0 </p>
        <p>Tổng giá:  2.100.000 ₫</p>
        <p>Địa chỉ giao:</p>
        <p>Email:</p>
        <p>Tên người nhận:</p>
        <p>Số điện thoại:</p>
        <p>Ghi chú: Chỉ nhận khi giao tới nhà</p>
        <div class="but">
            <button onclick="confirmCOD()">Xác nhận đơn hàng</button>
            <button onclick="closeForm()">Hủy</button>

        </div>
    </div>

    <!-- Form thanh toán VNPay -->
    <div id="vnpayForm">

        <p class="title">Thanh toán với VNPay <img
                src="https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg" alt=""> </p>


                <table border="1">
                    <tr>
                        
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                    </tr>

                    <tr>
                      <td>Xi măng BC</td>
                      <td>20</td>
                      <td>1.000.000 ₫</td>
                    </tr>
                    <tr>
                        <td>Gạch  BC</td>
                        <td>100</td>
                        <td>1.000.000 ₫</td>
                      </tr>
                </table>
        <p>Số lượng: 2</p>
        <p>Tổng giá: 2.000.000 ₫</p>
        <p>Phí vân chuyển: 100.000 ₫</p>
        <p>Giá gảm: 0 </p>
        <p>Tổng giá:  2.100.000 ₫</p>
        <p>Địa chỉ giao:</p>
        <p>Email:</p>
        <p>Tên người nhận:</p>
        <p>Số điện thoại:</p>
        <p>Ghi chú: Chỉ nhận khi giao tới nhà</p>
        <div class="but">
            <button onclick="confirmVNPAY()">Xác nhận đơn hàng</button>
            <button onclick="closeForm()">Hủy</button>

        </div>
    </div>

    <div id="section-footer">
        <div class="container">
            <div class="contact-info">
                <h3>Vật Liệu Xây Dựng TQH </h3>
                <p>Địa chỉ: Trường ĐH Nông Lâm TP. HCM</p>
                <p>Điện thoại: 0314 597 812</p>
                <p>Hotline: 0905 090 252</p>
                <p>Email: 22130098@st.hcmuaf.edu.vn</p>
            </div>
            <div class="links">
                <h3>Liên kết</h3>
                <ul>
                    <li><a href="introduce.jsp">Giới thiệu</a></li>
                    <li><a href="term_and_services.jsp">Điều khoản và dịch vụ</a></li>
                </ul>
            </div>
            <div class="social-media">
                <h3>Mạng xã hội</h3>
                <ul>
                    <li> <a href="https://www.facebook.com/profile.php?id=100044411504061"><i
                                class="fa-brands fa-facebook" style="color: #d1d1d1;"></i></a></li>
                    <li> <a href="https://www.instagram.com/paq.2012/"><i class="fa-brands fa-instagram-square"
                                style="color: #d1d1d1;"></i></a></li>
                    <li> <a href="https://x.com/?lang=vi"><i class="fa-brands fa-twitter"
                                style="color: #d1d1d1;"></i></a></li>
                </ul>
            </div>
            <div class="copyright">
                <p>© 2024: Tất cả quyền được bảo lưu.</p>
            </div>
        </div>
        <div>
            <li style="list-style-type: none;"><a href="https://zaloweb.me/" target="_blank" rel="noopener"><i
                        class="fa-solid fa-phone call" style="color: rgb(62, 159, 62);"></i></a></li>
        </div>
        <div>
            <li style="list-style-type: none;"><a href="https://www.instagram.com/paq.2012/" target="_blank" rel="noopener"><i
                        class="fab fa-instagram icon" style="color: #f12020;"></i></a></li>
        </div>
        <div id="fb">
            <li style="list-style-type: none;"><a href="https://www.facebook.com/profile.php?id=100044411504061"
                target="_blank" rel="noopener"><i class="fa-brands fa-facebook-square icon"
                    style="color: #0911ff;"></i></a></li>
        </div>
        <button id="backToTop" title="Quay về đầu trang">⬆</button>

    </div>
    <script src="../js/comfirmation.js"></script>
    <script src="../js/login-signup.js"></script>
    <script src="/src/Users/js/scripts.js" defer></script>
    <!-- JavaScript -->
     <script>
        function confirmCOD() {
            window.location.href = "check-pay.html";
        }
        function confirmVNPAY() {
   
    window.location.href =  "https://sandbox.vnpayment.vn/paymentv2/Transaction/PaymentMethod.html?token=164ebfb0d541460497a3daa60315b2b4";
}
   
     </script>






</body>

</html>