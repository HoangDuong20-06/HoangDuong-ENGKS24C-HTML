let num = Number(prompt("Nhập một số:"));
let luythua = Number(prompt("Nhập lũy thừa:"));
let total = num**luythua
let loop = 1;
while(loop==1){
    if(Number.isInteger(num)===true&&Number.isInteger(luythua)===true){
        alert(total);
        loop = 0;
    }else{
        alert("Không hợp lệ");
        loop = 0;
    }
}