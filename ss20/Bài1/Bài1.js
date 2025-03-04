let num = Number(prompt("Nhập một số: "));
let sum = 0;
if(Number.isInteger(num)===true&& num>0){
    for(let i=1;i<=num;i++){
        sum+=i;
    }
    alert(sum);
}else{
    alert("Dữ liệu nhập vào không hợp lệ")
}