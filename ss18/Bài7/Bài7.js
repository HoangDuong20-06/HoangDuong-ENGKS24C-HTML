let num1 = Number(prompt("Mời bạn nhập số a:"));
let num2 = Number(prompt("Mời bạn nhập số b:"));
let Operation = prompt("Mời bạn nhập vào các phép tính(+,-,*,/):");
if (Operation == "+") {
    total = num1 + num2;
    alert("Kết quả của phép tính trên:"+" "+"a + b ="+" "+total);
}else if (Operation == "-"){
    total = num1 - num2;
    alert("Kết quả của phép tính trên:"+" "+"a - b ="+" "+total)
}else if (Operation == "*"){
    total = num1 * num2;
    alert("Kết quả của phép tính trên:"+" "+"a * b ="+" "+total)
}else if (Operation == "/"){
    total = num1 / num2;
    alert("Kết quả của phép tính trên:"+" "+"a / b ="+" "+total)
}