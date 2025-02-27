let amount = Number(prompt("Nhập số tiền gửi:"));
let month = Number(prompt("Nhập số tháng gửi:"));
if (amount < 0){
    alert("Nhập lại số tiền gửi:");
    let amount = Number(prompt("Nhập số tiền gửi:"));
}else if(month < 0){
    alert("Nhập lại số tháng gửi:");
    let month = Number(prompt("Nhập số tháng gửi:"));
}
let total = Math.abs(amount*((0.043 * 1/12)) *month);
alert(total);