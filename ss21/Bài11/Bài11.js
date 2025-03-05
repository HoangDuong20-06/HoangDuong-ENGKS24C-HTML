let day = Number(prompt("Nhập ngày: "));
let month = Number(prompt("Nhập tháng: "));
if(Number.isInteger(day)==true&&day>0&&Number.isInteger(month)==true&&month>0){
    if((day>=21 && month == 3)||(day <= 20 && month==4)){
        alert(`Bạch Dương (21/3-20/4)`);
    }else if((day>=21 && month == 4)||(day <= 20 && month==5)){
        alert(`Kim ngưu (21/4-20/5)`);
    }else if((day>=21 && month == 5)||(day <= 21 && month==6)){
        alert(`Song tử (21/5-21/6)`);
    }else if((day>=22 && month == 6)||(day <= 22 && month==7)){
        alert(`Cự giải (22/6-22/7)`);
    }else if((day>=23 && month == 7)||(day <= 22 && month==8)){
        alert(`Sư tử (23/7-22/8)`);
    }else if((day>=23 && month == 8)||(day <= 22 && month==9)){
        alert(`Xử nữ (23/8-22/9)`);
    }else if((day>=23 && month == 9)||(day <= 23 && month==10)){
        alert(`Thiên bình (23/9-23/10)`);
    }else if((day>=24 && month == 10)||(day <= 22 && month==11)){
        alert(`Bọ cạp (24/10-22/11)`);
    }else if((day>=23 && month == 11)||(day <= 21 && month==12)){
        alert(`Nhân mã (23/11-21/12)`);
    }else if((day>=22 && month == 12)||(day <= 19 && month==1)){
        alert(`Ma kết (22/12-19/1)`);
    }else if((day>=20 && month == 1)||(day <= 18 && month==2)){
        alert(`Bảo bình (20/1-18/2)`);
    }else if((day>=19 && month == 2)||(day <= 20 && month==3)){
        alert(`Song ngư (19/2-20/3)`);
    }
}else{
    alert("Giá trị nhập vào ko hợp lệ:");
}