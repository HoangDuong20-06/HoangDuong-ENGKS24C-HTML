let CRUD = [];
let choice;
do {
    choice = +prompt(`
        1. Thêm sản phẩm vào danh sách sản phẩm.
        2. Hiển thị tất cả sản phẩm.
        3. Hiển thị chi tiết sản phẩm theo id.
        4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
        5. Xóa sản phẩm theo id.
        6. Lọc sản phẩm theo khoảng giá.
        7. Thoát.
    `);
    switch(choice){
        case 1:
            addCrud();
            break;
        case 2:
            showCrud();
            break;
        case 3:
            showCrudById()
            break;
        case 4:
            updateCrud()
            break;
        case 5:
            deleteCrud();
            break;
        case 6:
            sortCrudByPrice();
            break;
        case 7:
            console.log("Bye bye");
            break;
        default:
            alert("Lựa chọn ko hợp lệ");
    }
}while(choice!=7);
function addCrud() {
    let quatity = +prompt("Nhập số lượng sản phẩm:");
    for(let i =0 ;i<quatity;i++){
        let id = Math.floor(Math.random()*100);
        let name = prompt("Nhập tên sản phẩm:");
        let price = prompt("Nhập giá sản phẩm:");
        let category = prompt("Nhập danh mục sản phẩm:");
        let quantity = prompt("Nhập số lượng sản phẩm");
        let newCRUD = {
        id,
        name,
        price,
        category,
        quantity,
        isAvailable: true
    };
    CRUD.push(newCRUD);
    console.log("Thêm sản phẩm thành công",newCRUD);
    }
}
function showCrud() {
    if (CRUD.length === 0) {
        console.log("Danh sách sách trống!");
    } else {
        CRUD.forEach(function(crud, index){
            console.log("ID sản phẩm:", crud.id);
            console.log("Tên sản phẩm:", crud.name);
            console.log("Giá sản phẩm:", crud.price);
            console.log("Danh mục sản phẩm:", crud.category);
            console.log("Số lượng sản phẩm:", crud.quantity);
        });
    }
}
function showCrudById() {
    let findIndex = +prompt("Nhập ID sản phẩm:");
    let result = CRUD.filter(function(crud){
        return crud.id===findIndex;
    });
    if (result.length === 0) {
        console.log("Không tìm thấy sản phẩm!");
    } else {
        result.forEach(function(crud, index){
            console.log("ID sản phẩm:", crud.id);
            console.log("Tên sản phẩm:", crud.name);
            console.log("Giá sản phẩm:", crud.price);
            console.log("Danh mục sản phẩm:", crud.category);
            console.log("Số lượng sản phẩm:", crud.quantity);
        });
    }
}
function updateCrud() {
    let id = +prompt("Nhập ID sản phẩm muốn sửa:");
    let findIndex = CRUD.findIndex(product => product.id === id);
    if (findIndex !== -1) {
        let newName = prompt("Nhập tên mới cho sản phẩm:");
        CRUD[findIndex].name = newName;
        let newPrice = prompt("Nhập giá mới của sản phẩm:");
        CRUD[findIndex].price = newPrice;
        let newCategory = prompt("Nhập danh mục mới cho sản phẩm:");
        CRUD[findIndex].category = newCategory;
        let newQuantity = prompt("Nhập số lượng mới cho sản phẩm:");
        CRUD[findIndex].quantity = newQuantity;
        console.log("Cập nhật trạng thái thành công!", CRUD[findIndex]);
    } else {
        console.log("Không tìm thấy ID sản phẩm:", id);
    }
}
function deleteCrud() {
    let id = +prompt("Nhập ID sản phẩm muốn xóa:");
    let index = CRUD.findIndex(products => products.id === id);
    if (index !== -1) {
        let Delete = CRUD[index];
        CRUD.splice(index, 1);
        console.log("Xóa thành công!");
    } else {
        console.log("Không tìm thấy ID sản phẩm:", id);
    }
}
function sortCrudByPrice() {
    let search = prompt("Nhập giá muốn lọc:");
    let result = CRUD.filter(function(crud){
        return crud.price===search;
    });
    if (result.length === 0) {
        console.log("Ko có sản phẩm nào nằm trong khoảng giá");
    } else {
        result.forEach(function(crud, index){
            console.log("ID sản phẩm:", crud.id);
            console.log("Tên sản phẩm:", crud.name);
            console.log("Giá sản phẩm:", crud.price);
            console.log("Danh mục sản phẩm:", crud.category);
            console.log("Số lượng sản phẩm:", crud.quantity);
        });
    }
}