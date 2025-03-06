let num = (prompt("Nhập một dãy số bất kì"));
let numrevers = Number(num);
if(Number.isInteger(numrevers)){
    let array = num.split("");
    array.reverse();
    let array1 = array.join("");
    alert(array1);
}else{
    alert("Giá trị không hợp lệ")
}