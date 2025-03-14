let choice;
const pi = 3.1416;
let s_tron = function(){
    let r = +prompt("Nhập bán kính: ");
    dien_tich = pi*(r*2);
    console.log(dien_tich);
}
let p_tron = function(){
    let r = +prompt("Nhập bán kính: ");
    chu_vi = 2*pi*r;
    console.log(chu_vi);
}
let s_chu_nhat = function(){
    let l = +prompt("Nhập chiều dài: ");
    let w = +prompt("Nhập chiều rộng: ");
    dien_tich_chu_nhat = l*w
    console.log(dien_tich_chu_nhat);
}
let p_chu_nhat = function(){
    let l = +prompt("Nhập chiều dài: ");
    let w = +prompt("Nhập chiều rộng: ");
    chu_vi_chu_nhat = (l+w)*2
    console.log(chu_vi_chu_nhat);
}
do{
    choice = +prompt(`  
        ============ MENU ==========
        1. Tính diện tích tròn
        2. Tính chu vi tròn
        3. Tính diện tích hình chữ nhật
        4. Tính chu vi hình chữ nhật
        5. Thoát
          ==========================`);
    switch(choice){
        case 1:
            s_tron(0,0);
            break;
        case 2:
            p_tron(0,0);
            break;
        case 3:
            s_chu_nhat(0,0);
            break;
        case 4:
            p_chu_nhat(0,0);
            break;
        case 5:
            console.log("Bye Bye");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
}while(choice!==5);