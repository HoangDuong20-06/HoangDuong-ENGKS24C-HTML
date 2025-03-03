let num1 = Number(prompt("Nhập số thứ nhất:"));
let num2 = Number(prompt("Nhập số thứ hai:"));
let num3 = Number(prompt("Nhập số thứ ba:"));
if (num1 > num2 && num1 > num3){
    alert("Số lớn nhất trong 3 số là: "+num1);
}else if(num2 > num1 && num2 > num3){
    alert("Số lớn nhất trong 3 số là: "+num2);
}else {
    alert("Số lớn nhất trong 3 số là: "+num3)
}