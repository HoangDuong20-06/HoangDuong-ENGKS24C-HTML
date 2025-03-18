let products=[
    {
        id:1,
        name:"mèn mén",
        price:20000,
        quantity:20,
        category:"món ăn dân tộc Mông",
    },
    {
        id:2,
        name:"mứt",
        price:80000,
        quantity:21,
        category:"món ăn dân tộc Kinh",
    },
    {
        id:3,
        name:"cơm lam",
        price:40000,
        quantity:15,
        category:"món ăn dân tộc Mông",
    },
    {
        id:4,
        name:"bánh đậu xanh",
        price:60000,
        quantity:30,
        category:"món ăn dân tộc Kinh",
    }
]
let cart =  [];
let choice;
do {
    choice = +prompt(`
        1. Hiển thị các sản phẩm theo tên danh mục.
        2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá
        4. Tính số tiền thanh toán trong giỏ hàng..
        5. Thoát.
    `);
    switch(choice){
        case 1:
            showByCategory();
            break;
        case 2:
            buyProduct();
            break;
        case 3:
            sortDirection()
            break;
        case 4:
            total();
            break;
        case 5:
            console.log("Bye Bye");
            break;
        default:
            alert("Lựa chọn ko hợp lệ");
    }
}while(choice!=5);
function showByCategory() {
    let findIndex = prompt("Nhập danh mục sản phẩm:");
    let result = products.filter(function(prod){
        return prod.category.includes(findIndex);
    });
    if (result.length === 0) {
        console.log("Không tìm thấy sản phẩm!");
    } else {
        result.forEach(function(prod, index){
            console.table(prod);
        });
    }
}
function sortDirection(){
    let choice3;
    do{
        choice3 = +prompt(`
            1. Tăng dần
            2. Giảm dần
            3. Thoát
            `);
        switch(choice3){
            case 1:
                products.sort(function(a,b){
                    return a.price - b.price
                });
                showProduct()
                break;
            case 2:
                products.sort(function(a,b){
                    return b.price - a.price
                });
                showProduct()
                break;
            case 3:
                console.log("Bye");
                break;
            default:
                alert("Lựa chọn ko hợp lệ");
        }
    }while(choice3!=3);
}
function showProduct(){
    products.forEach(function(prod, index){
        // console.log("ID sản phẩm:", prod.id);
        // console.log("Tên sản phẩm:", prod.name);
        // console.log("Giá sản phẩm:", prod.price);
        // console.log("Danh mục sản phẩm:", prod.category);
        // console.log("Số lượng sản phẩm:", prod.quantity);
        console.table(prod);
    });
}
function buyProduct(){
    let findIndex = +prompt("Nhập id sản phẩm:");
    let result = products.find(Element=>Element.id === findIndex);
    if (!result) {
        console.log("Không tìm thấy sản phẩm!");
    } else {
        let carts = +prompt("Nhập vào số lượng sản phẩm muốn mua: ");
        if(result.quantity < carts|| result.quantity==0){
            console.log("Sản phẩm trong cửa hàng ko đủ");
        }else{
            result.quantity-=carts;
            cart.push({
                id:result.id,
                name:result.name,
                price:result.price,
                quantity:carts,
                category:result.category,
            })
        }
    }
}
function total(){
    let sum = 0;
    cart.forEach(function(items){
        return sum += items.price*items.quantity
    });
    console.log(sum);
}