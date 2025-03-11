let sum = function(){
    let numb1 = Number(prompt("Nhập vào giá trị thứ nhất: "));
    let numb2 = Number(prompt("Nhập vào giá trị thứ hai: "));
    if(Number.isInteger(numb1)==true&&Number.isInteger(numb2)==true){
        total = numb1 + numb2;
        console.log(total)
    }else{
        console.log("Dữ liệu ko hợp lệ")
    }
    return total;
}
sum(0,0);