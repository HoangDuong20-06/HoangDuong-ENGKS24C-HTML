let login = document.getElementById("loginButton");
login.onclick=function(){
    let email = document.getElementById("emailLogin").value.trim();
    let pass = document.getElementById("passLogin").value;
    let storedPass = localStorage.getItem(email);
    if (!storedPass) {
        Swal.fire({
            icon: "error",
            title: "Email ko tồn tại",
          });
        return;
    }
    if (storedPass !== pass) {
        Swal.fire({
            icon: "error",
            title: "Sai mật khẩu",
          });
        return;
    }
    if(storedPass === pass){
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem(email,pass);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Đăng nhập thành công",
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(()=>{
            window.location.href="dashboard.html"
          },1500)
    }
}