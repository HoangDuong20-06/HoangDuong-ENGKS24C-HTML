let loop = 1;
let result = 49;
while(loop == 1){
    let user = Number(prompt("Nhập 1 giá trị:"));
    if(user == result){
        alert("BINGO");
        loop = 0;
    }
    else {
        alert("WRONG");
    }
} 