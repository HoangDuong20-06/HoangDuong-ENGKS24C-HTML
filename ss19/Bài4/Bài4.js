let num = Number(prompt("Nhập một số bất kì:"));
if (num % 3 == 0 && num % 5 == 0){
    alert(num+" chia hết cho cả 3 và 5");
}else if (num % 3 != 0 || num % 5 != 0){
    alert(num+" không chia hết cho cả 3 và 5");
}