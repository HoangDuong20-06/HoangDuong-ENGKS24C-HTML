let arr = [];
let count = 0;
let positive = function(){
    let num = +prompt("Nhập số lượng phần tử: ");
    for(let i = 0;i<num;i++){
        arr[i] = +prompt("Nhập ký tự thứ "+(i+1)+":");
        if(Number.isInteger(arr[i])==true){
            if(arr[i]>0){
                count++;
            }
        }
    }
    if(count>0){
        console.log(count);   
    }else{
        console.log("Ko có số nguyên dương trong mảng")
    }
}
positive();