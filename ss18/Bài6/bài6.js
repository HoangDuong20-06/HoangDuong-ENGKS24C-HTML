let year = Number(prompt("Nhập 1 năm bất kì:"));
if (year % 4 == 0 && year % 100 != 0){
    alert(year+" "+"là năm nhuận");
}else{
    alert(year+" "+"không là năm nhuận");
}