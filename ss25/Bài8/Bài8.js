let password = prompt("Nhập mật khẩu:");
function isStrongPassword(password) {
    if (password.length >= 8) {
        return true; 
    }
    let index1 = false;
    let index2 = false;
    let index3 = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            index1 = true;
        } else if (password[i] >= 'a' && password[i] <= 'z') {
            index2 = true;
        } else if (password[i] >= '0' && password[i] <= '9') {
            index3 = true;
        }
    }
    return index1 && index2 && index3;
}
if (isStrongPassword(password)) {
    alert("True");
} else {
    alert("False");
}