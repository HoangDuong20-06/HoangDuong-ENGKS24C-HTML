let arr= [];
let num = Number(prompt("Nhập số lượng phần tử: "));
let sum = 0;
let count = 0;
if(Number.isInteger(num)==true&&num>0){
    for(let i =0 ;i<num;i++){
        arr[i] = Number(prompt("Nhập ký tự "+(i+1)));
        if(Number.isInteger(arr[i])){
            sum += arr[i];
        }else if(Number.isInteger(arr[i])==false){
            count--;
        }
    }if(sum<0||sum>0){
        alert("Tổng các ký tự là số là: "+sum);
    }
    if(count < 0){
        alert("Không có ký tự nào là số");
    }
}else if(Number.isInteger(num)==true&&num==0){
    alert("Mảng ko có phần tử");
}else if(Number.isInteger(num)==true&&num<0){
    alert("Số lượng phần tử không được âm");
}