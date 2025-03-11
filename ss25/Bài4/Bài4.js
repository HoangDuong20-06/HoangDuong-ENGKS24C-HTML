let num = +(prompt("Nhập vào một số bất kì: "));
let primeNumber = function(){
    if (num < 2) {
        alert("Không phải số nguyên tố");
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            alert("Không phải số nguyên tố");
            return;
        }
    }   
    alert("Là số nguyên tố");
}
if (!Number.isInteger(num)) {
    alert("Dữ liệu không hợp lệ");
} else {
    primeNumber(num);
}
primeNumber();