let products= [ ["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5, 8000], ["mèn mén", 30, 20000]];
let cart = [];
let menu = `
============= MENU =============
1. Danh sách sản phẩm
2. Mua hàng
3. Tính tiền + hóa đơn
4. Thoát
Mời bạn nhập lựa chọn của bạn:`;
let input = +prompt(menu);
switch(input){
    case 1:
        displayProduct();
        break;
    case 2:
        let product = prompt("Nhập tên sản phẩm: ");
        let inIndex = -1;
        for ( let index in products){
            if(productName == products[index][0]){
                product = index;
            }
        }
        if(product===-1){
            console.log("Không tìm thấy sản phẩm");
        }else{
            console.log(products[product]);
        }
        break;
    case 3:
        break;
    case 4:
        console.log("Cảm ơn đã mua hàng");
        break;
    default:
        console.log("Lựa chọn không hợp lệ");
}while(input!=4);
function displayProduct(){
    for(let index in products){
        console.log(`${index}. ${products[index][0]} - ${products[index][2]} - ${products[index][1]}`);
    }
}