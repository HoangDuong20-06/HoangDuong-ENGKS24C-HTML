let sum = 0;
for (let i = 0; i<5; i++){
    let num = Number(prompt("Nhập vào một số  nguyên: "));
    if(Number.isInteger(num)==true){
        if(num % 2 != 0){
            sum+=num;
        }
    }
}
alert("Tổng các số lẻ là: "+sum);