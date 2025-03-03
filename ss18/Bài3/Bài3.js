let user = prompt("Nhập tên:");
if (user == "ADMIN"){
    let password = prompt("Nhập mật khẩu");
    if (password == "TheMaster"){
        alert("Welcome");
    }else if(password == "null"){
        alert("Cancelled");
    }else {
        alert("Wrong password");
    }
}else if( user == "null"){
    alert("Cancelled");
}else {
    alert("I Don’t know you");
}