let books = [
    {
        id: 1,
        name: "One Piece",
        price: 150000,
        quantity: 10,
        category: "Anime",
    },
    {
        id: 2,
        name: "Blue Block",
        price: 120000,
        quantity: 5,
        category: "Sport",
    },
    {
        id: 3,
        name: "Windbreaker",
        price: 100000,
        quantity: 8,
        category: "Sport",
    },
    {
        id: 4,
        name: "Kuroko no Basket",
        price: 90000,
        quantity: 12,
        category: "Sport",
    }
];

let cart = [];
let choice;
let choice2;

do {
    choice = +prompt(`
        1. Hiển thị danh sách sách theo thể loại.
        2. Thêm sách mới vào kho.
        3. Tìm kiếm sách theo tên hoặc id.
        4. Mua sách.
        5. Sắp xếp sách theo giá.
        6. Tính tổng tiền mua sách.
        7. Hiển thị tổng số lượng sách trong kho.
        8. Thoát chương trình.
    `);
    
    switch (choice) {
        case 1:
            displayCategory();
            break;
        case 2:
            addBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            menuSort();
            break;
        case 6:
            calculateTotal();
            break;
        case 7:
            displayTotalBooks();
            break;
        case 8:
            console.log("Bye bye");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
    }
} while (choice !== 8);
function displayCategory() {
    let category = prompt("Nhập thể loại sách: ");
    let result = books.filter(item => item.category.includes(category));
    if (result.length === 0) {
        console.log("Không có sách thuộc thể loại này");
    } else {
        console.table(result);
    }
}
function addBook() {
    let count = +prompt("Nhập số lượng sách muốn thêm vào kho:");
    for (let i = 0; i < count; i++) {
        alert(`Nhập thông tin cho sách thứ ${i + 1}:`);
        let name = prompt("Nhập tên sách:");
        let price = +prompt("Nhập giá sách:");
        let quantity = +prompt("Nhập số lượng:");
        let category = prompt("Nhập thể loại sách:");
        let id = Math.floor(Math.random() * 9999943 + new Date().getMilliseconds());
        let newBook = {
            id: id,
            name: name,
            price: price,
            quantity: quantity,
            category: category
        };
        books.push(newBook);
        console.log("Thêm sách thành công", newBook);
    }
}
function searchBook() {
    let key = prompt("Nhập tên hoặc ID sách:");
    let result = books.find(item => item.name.includes(key) || item.id == key);
    if (result) {
        console.table(result);
    } else {
        console.log("Không tìm thấy sách");
    }
}
function buyBook() {
    let id = +prompt("Nhập ID sách cần mua:");
    let book = books.find(item => item.id === id);
    if (!book) {
        console.log("Không tìm thấy sách");
        return;
    }
    let quantity = +prompt("Nhập số lượng muốn mua:");
    if (book.quantity < quantity || book.quantity === 0 ) {
        console.log("Không đủ hàng trong kho");
    } else {
        book.quantity -= quantity;
        let cartItem = cart.find(item => item.id === id);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ 
                id: book.id, 
                name: book.name, 
                price: book.price, 
                quantity 
            });
        }
        console.log("Mua thành công!");
    }
}
function menuSort() {
    do {
        choice2 = prompt(`
            a. Tăng dần.
            b. Giảm dần.
            c. Thoát`);
        switch (choice2) {
            case 'a':
                sortPriceProductIncease();
                break;
            case 'b':
                sortPriceProductDecrese();
                break;
            case 'c':
                return;
            default:
                console.log("Lựa chọn không hợp lệ");
        }
    } while (choice2 === 'a' || choice2 === 'b');
}
function sortPriceProductIncease() {
    books.sort(function (a, b){
        return a.price - b.price;
    });
    console.log("Sản phẩm của cửa hàng theo giá tăng dần");
    displayProduct();
}
function sortPriceProductDecrese() {
    books.sort(function (a, b){
        return b.price - a.price;
    });
    console.log("Sản phẩm của cửa hàng theo giá giảm dần");
    displayProduct();
}
function displayProduct() {
    console.table(books);
}
function calculateTotal() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống");
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng tiền cần thanh toán: ${total}`);
}
function displayTotalBooks() {
    let total = books.reduce((sum, item) => sum + item.quantity, 0);
    console.log(`Tổng số lượng sách trong kho: ${total}`);
}