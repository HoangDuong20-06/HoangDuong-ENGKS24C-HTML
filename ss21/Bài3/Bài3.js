let pass = "hoangduong206";
let loop = 1;
while(loop==1){
    let user = prompt("Nhập mật khẩu: ");
    if(user === pass){
        alert("Welcome");
        loop = 0;
    }else{
        alert("Sai mật khẩu")
        alert("Nhập lại mật khẩu: ");
    }
}