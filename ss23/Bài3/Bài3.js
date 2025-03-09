let array = [];
let count  = 0;
let num = Number(prompt("Nhập số lượng ký tự: "));
if(Number.isInteger(num)==true&&num>0){
    for(let i = 0;i<num;i++){
        array[i] = Number(prompt("Nhập phần tử thứ "+(i+1)+":"));
        if(Number.isInteger(array[i])==true){
            if(array[i]<0){
                count++;
            }
        }
    }
    alert("Có "+count+" phần tử nguyên âm");
}else if(Number.isInteger(num)==true&&num==0){
    alert("Mảng không có phần tử");
}else if(Number.isInteger(num)==true&&num<0){
    alert("Số lượng phần tử không hợp lệ");
}