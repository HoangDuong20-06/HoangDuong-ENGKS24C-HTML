let num = Number(prompt("Nhập một số bất kì:"));
if (Number.isInteger(num)===true&&num>0){
    document.write("Các số chia hết cho 5 từ 1 đến "+num+" là: ");
    for (i = 1; i<=num; i++){
        if(i % 5 ==0){
            document.write(i+" ")
        }
    }
}else {
    alert("Dữ liệu không hợp lệ");
}