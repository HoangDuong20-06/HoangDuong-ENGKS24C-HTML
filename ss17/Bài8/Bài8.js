let date1 = (prompt("Nhập năm tháng ngày thứ nhất(YY:MM:DD)"));
let date2 = (prompt("Nhập năm tháng ngày thứ hai(YY:MM:DD)"));
const d1 = new Date(date1);
const d2 = new Date(date2);
while (d2 < d1){
    alert("Nhập lại ngày đầu ko đc lớn hơn ngày 2");
    let date1 = (prompt("Nhập năm tháng ngày thứ nhất(YY:MM:DD)"));
    let date2 = (prompt("Nhập năm tháng ngày thứ hai(YY:MM:DD)"));
}
let total = d2 - d1;
let totalTime = (total)/(1000*60*60*24);
alert("Số ngày chênh lệch là:"+" "+totalTime+" "+"ngày");