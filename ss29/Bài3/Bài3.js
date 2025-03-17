let choice;
let menu = [];
do {
    choice = +prompt(`
        1. Thêm món ăn vào danh mục.
        2. Xóa món ăn theo tên khỏi danh mục.
        3. Cập nhật thông tin theo tên của món ăn (tên, giá, mô tả).
        4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
        5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
        6. Thoát.`);
    switch (choice) {
        case 1:
            addDish();
            break;
        case 2:
            deleteDishByName();
            break;
        case 3:
            updateDishByName();
            break;
        case 4:
            displayMenu();
            break;
        case 5:
            searchDish();
            break;
        case 6:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Không hợp lệ");
    }
} while (choice !== 6);
function addDish() {
    let count = +prompt("Nhập số lượng món ăn cần thêm:");
    for (let i = 0; i < count; i++) {
        alert(`Nhập thông tin cho món thứ ${i + 1}:`);
        let name = prompt("Nhập tên món ăn:");
        let price = prompt("Nhập giá món ăn:");
        let description = prompt("Nhập mô tả món ăn:");
        let id = Math.floor(Math.random() * 9999943 + new Date().getMilliseconds());
        let newDish = {
            id: id,
            name: name,
            price: price,
            description: description
        };
        menu.push(newDish);
        console.log("Thêm món ăn thành công", newDish);
    }
}
function deleteDishByName() {
    let name = prompt("Nhập tên món ăn cần xóa:");
    let initialLength = menu.length;
    menu = menu.filter(dish => dish.name.toLowerCase() !== name.toLowerCase());
    if (menu.length < initialLength) {
        console.log("Xoá món ăn thành công!");
    } else {
        console.log("Không tìm thấy món ăn có tên:", name);
    }
}
function updateDishByName() {
    let name = prompt("Nhập tên của món ăn cần cập nhật:");
    let findIndex = menu.findIndex(dish => dish.name.toLowerCase() === name.toLowerCase());
    if (findIndex !== -1) {
        let newName = prompt("Mời bạn nhập tên mới:");
        menu[findIndex].name = newName;
        let newPrice = prompt("Mời bạn nhập giá mới:");
        menu[findIndex].price = newPrice;
        let newDescription = prompt("Mời bạn nhập mô tả mới:");
        menu[findIndex].description = newDescription;
        console.log("Cập nhật món ăn thành công!", menu[findIndex]);
    } else {
        console.log("Không tìm thấy món ăn có tên:", name);
    }
}
function displayMenu() {
    if (menu.length === 0) {
        console.log("Menu trống!");
    } else {
        menu.forEach(function (element, index) {
            console.log(`Món ${index + 1}`);
            console.log("ID: ", element.id);
            console.log("Tên: ", element.name);
            console.log("Giá: ", element.price);
            console.log("Mô tả: ", element.description);
            console.log("-------------------------");
        });
    }
}
function searchDish() {
    let search = prompt("Nhập tên món ăn cần tìm: ");
    let result = menu.filter(function (element) {
        return element.name.toLowerCase().includes(search.toLowerCase());
    });
    if (result.length === 0) {
        console.log("Không tìm thấy món ăn nào!");
    } else {
        result.forEach(function (element, index) {
            console.log(`Món ${index + 1}`);
            console.log("ID: ", element.id);
            console.log("Tên: ", element.name);
            console.log("Giá: ", element.price);
            console.log("Mô tả: ", element.description);
            console.log("-------------------------");
        });
    }
}