let button = document.getElementById("button");
button.onclick = function() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirm").value;
    if (email==="" || pass===" "  || confirmPass===" ") {
        alert("Không được bỏ trống");
        return;
    }
    if (pass !== confirmPass) {
        alert("Mật khẩu không khớp");
        return;
    }
    if (localStorage.getItem(email)) {
        alert("Email đã tồn tại");
        return;
    }
    localStorage.setItem(email, pass);
    alert("Đăng ký thành công!");
};