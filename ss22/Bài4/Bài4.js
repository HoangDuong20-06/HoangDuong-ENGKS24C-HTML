let num = (prompt("Nhập một dãy số bất kì: "));
let sum = +num;
if(Number.isInteger(sum)){
    let array = num.split("");
    let max  = array[0];
    for(let i =0;i <num;i++){
        if(max<array[i]){
            max=array[i];
        }
    }
    alert(max+" là số lớn nhất trong dãy số");
}else{
    alert("Dãy số không hợp lệ")
}