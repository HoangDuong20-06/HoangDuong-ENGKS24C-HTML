let button = document.getElementById("button");
button.onclick = function() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    if (email === "" || pass === "") {
        alert("Không được bỏ trống");
        return;
    }
    let storedPass = localStorage.getItem(email);
    if (!storedPass) {
        alert("Email chưa được đăng ký");
        window.location.href = "bai1ss34.html";
        return;
    }
    if (pass === storedPass) {
        alert("Đăng nhập thành công!");
    }else{
        alert("Sai mật khẩu");
    }   
};