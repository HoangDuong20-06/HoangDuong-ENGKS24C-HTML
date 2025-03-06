let numbers = [2,5,7,4,1,8,6];
let user = Number(prompt("Nhập 1 số bất kì: "));
let find = numbers.includes(user);
if(Number.isInteger(user)==true){
    if( find===true){
        console.log("BINGO")
    }else{
        console.log("Chúc bạn may mắn lần sau");
    }
}