let mathPoint = Number(prompt("Nhập điểm toán:"));
let physicsPoint = Number(prompt("Nhập điểm vật lý:"));
let chemistryPoint = Number(prompt("Nhập điểm hóa:"));
let total = ((mathPoint+physicsPoint+chemistryPoint)/3).toFixed(2);
document.write(total);