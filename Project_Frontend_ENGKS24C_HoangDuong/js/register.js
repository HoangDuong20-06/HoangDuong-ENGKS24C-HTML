let register = document.getElementById("registerButton");
register.onclick=function(){
    let name = document.getElementById("name").value.trim();
    let errorName = document.getElementById("errorName");
    if(name===''){
        errorName.textContent = "Họ tên ko đc để trống";
    }else if(name!==''){
        errorName.textContent = ""
    }
    let email = document.getElementById("emailRegis").value.trim();
    let errorEmail = document.getElementById("errorEmail");
    if(email===''){
        errorEmail.textContent = "Email ko đc bỏ trống ";
    }else if (!email.includes("@") || (!email.endsWith(".com"))) {
        errorEmail.textContent = "Email sai định dạng";
    }else if(email.includes("@") && (email.endsWith(".com"))){
        errorEmail.textContent = ""
    }
    let pass = document.getElementById("passRegis").value;
    let errorPass = document.getElementById("errorPass");
    if(pass===''){
        errorPass.textContent = "Pass ko đc để trống";
    }else if(pass.length < 8){
        errorPass.textContent = "Pass phải có tối thiểu 8 ký tự"
        return;
    }else if(pass!=='' || pass.length>8){
        errorPass.textContent = ""
    }
    let confirmPass = document.getElementById("confirmPass").value;
    let errorConfirm = document.getElementById("errorConfirm");
    if(confirmPass !== pass){
        errorConfirm.textContent = "Mật khẩu ko trùng khớp";
        return;
    }else if(confirmPass ===''){
        errorConfirm.textContent = "Mật khẩu xác nhận ko đc để trống";
        return;
    }else if(confirmPass!=='' || confirmPass===pass){
        errorConfirm.textContent = "";
    }
    if(localStorage.getItem(email)){
        errorEmail.textContent = "Email đã tồn tại";
        return;
    }
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(email,pass);
    window.location.href="dashboard.html"
}