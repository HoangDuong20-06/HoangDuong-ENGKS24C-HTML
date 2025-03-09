let arr= [];
let num = Number(prompt("Nhập số lượng phần tử: "));
let count = [];
if(Number.isInteger(num)==true&&num>0){
    for(let i =0 ;i<num;i++){
        arr[i] = Number(prompt("Nhập ký tự "+(i+1)));
        if(Number.isInteger(arr[i])){
            count[i] = arr[i];
        }
    }
    alert("Các ký tự là số là: "+count[i]);
}else if(Number.isInteger(num)==true&&num==0){
    alert("Không có ký tự số");
}