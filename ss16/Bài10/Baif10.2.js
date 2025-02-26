let min = Number(prompt("Nhập số nhỏ:"));
let max = Number(prompt("Nhập só lớn:"));
if (min > max){
    alert("Nhập lại")
    let min = Number(prompt("Nhập số nhỏ:"));
    let max = Number(prompt("Nhập số lớn:"));
}
let mid = Math.floor(Math.random()*(max-min-2+1)+min+1);
alert(mid);