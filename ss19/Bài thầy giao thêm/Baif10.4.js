let cash = Number(prompt("Nhập số tiền thanh toán:"));
if(cash>0){
    if (cash<500000){
        alert("Thuế suất " + cash*5/100);
    }else if (500000<=cash&&cash<1000000){
        alert("Thuế suất " + cash*10/100);
    }else{
        alert("Thuế suất " + cash*15/100);
    }
}else{
    alert("Số tiền không hợp lệ");
}