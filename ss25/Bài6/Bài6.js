let string = prompt("Nhập một chuỗi: ");
let str = function(){
    let string2 = string.split("").reverse().join("");
    if (string === string2) {
        console.log("Chuỗi là chuỗi đối xứng.");
    } else {
        console.log("Chuỗi không phải là chuỗi đối xứng.");
    }
}
str();