let n = prompt("Nhập một số:");
let num = Number(n);
if (isNaN(num) || n.trim() === '' || !Number.isInteger(num)) {
    console.log("Dữ liệu không hợp lệ");
} else {
    maxNumber();
}
function maxNumber(){
    let number = [];
    for (let i = 0; i < n.length; i++) {
        number.push(Number(n[i]));
    }
    number.sort().reverse();
    let maxNumber = "";
    for (let i = 0; i < number.length; i++) {
        maxNumber += number[i];
        
    }
    console.log(maxNumber);
}