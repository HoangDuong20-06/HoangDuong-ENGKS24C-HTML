let exp = Number(prompt("Nhập số năm kinh nghiệm:"));
if (exp > 6){
    alert("Quản lý");
}else if (exp < 6 && exp > 4){
    alert("Chuyên viên");
}else if (exp < 3 && exp >1){
    alert("Nhân viên có kinh nghiệm");
}else {
    alert("Mới vào nghề");
}