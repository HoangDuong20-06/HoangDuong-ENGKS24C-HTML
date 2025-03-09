let arr = [];
let count = [];
for(let i = 0;i<10;i++){
    arr[i] = Number(prompt("Nhập phần tử thứ "+(i+1)+":"));
    if(Number.isInteger(arr[i])==true&&arr[i]>0){
        if(arr[i]>=10){
            count++;
        }
    }else{
        alert("Không có số nào lớn hơn 10");
    }
}
alert("Có "+count+" số nguyên lớn hơn 10");