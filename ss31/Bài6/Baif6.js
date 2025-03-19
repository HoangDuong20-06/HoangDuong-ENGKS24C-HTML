const username = document.getElementById("user");
const password = document.getElementById("pass");
let button = document.getElementById("submit")
button.onclick = function() {
    if (username.value === "huanrose@gmail.com" && password.value === "123456") {
        console.log("Đăng nhập thành công");
    } else {
        console.log("Đăng nhập thất bại");
    }
}