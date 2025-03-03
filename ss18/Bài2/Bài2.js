let math = Number(prompt("Nhập điểm toán:"));
let english = Number(prompt("Nhập điểm tiếng anh:"));
let liter = Number(prompt("Nhập điểm văn:"));
let total = ((math+english+liter)/3);

if (total >= 8.0){
    alert("Giỏi");
}else if (total <= 7.9 && total >= 6.5){
    alert("Khá");
}else if (total <= 6.4 && total >= 5.0){
    alert("Trung bình");
}else if(total < 5.0){
    alert("Yếu");
}