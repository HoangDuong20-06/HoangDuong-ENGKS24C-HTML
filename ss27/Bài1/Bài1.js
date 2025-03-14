let choice;
let plus = function(){
    let a = +prompt("Nhập số thứ nhất: ");
    let b = +prompt("Nhập số thứ hai: ");
    plusPlus = a+b;
    console.log(plusPlus);
}
let minus = function(){
    let a = +prompt("Nhập số thứ nhất: ");
    let b = +prompt("Nhập số thứ hai: ");
    minusMinus = a-b;
    console.log(minusMinus);
}
let mul = function(){
    let a = +prompt("Nhập số thứ nhất: ");
    let b = +prompt("Nhập số thứ hai: ");
    mulMul = a*b;
    console.log(mulMul);
}
let divide = function(){
    let a = +prompt("Nhập số thứ nhất: ");
    let b = +prompt("Nhập số thứ hai: ");
    divi = a/b;
    console.log(divi);
}
do{
    choice = +prompt(`  
        ============ MENU ==========
        1. Cộng 2 số
        2. Trừ  2 số
        3. Nhân 2 số
        4. Chia 2 số 
        5. Thoát
          ==========================`);
    switch(choice){
        case 1:
            plus(0,0);
            break;
        case 2:
            minus(0,0)
            break;
        case 3:
            mul(0,0);
            break;
        case 4:
            divide(0,0);
            break;
        case 5:
            console.log("Bye Bye");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
}while(choice!=5);

