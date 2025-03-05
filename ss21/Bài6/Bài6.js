let num = Number(prompt("Nhập vào một số nguyên: "));
for(let i =0; i<=num ;i++){
    if(Number.isInteger(num)==true)
    if(num % i ==0){
        document.write(i+" ")
    }
}