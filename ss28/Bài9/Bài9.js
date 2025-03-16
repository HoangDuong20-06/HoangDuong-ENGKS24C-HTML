let books = [];
let choice;
do {
    choice = +prompt(`
        1. Thêm sách mới.
        2. Hiển thị danh sách sách.
        3. Tìm kiếm sách theo tiêu đề.
        4. Cập nhật trạng thái mượn/trả sách theo ID.
        5. Xóa sách theo ID.
        6. Sắp xếp sách theo giá tăng dần.
        7. Thoát.
    `);
    switch (choice) {
        case 1:
            addBook();
            break;
        case 2:
            showBooks();
            break;
        case 3:
            searchBookByTitle();
            break;
        case 4:
            updateBookStatus();
            break;
        case 5:
            deleteBook();
            break;
        case 6:
            sortBooksByPrice();
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
    }
} while (choice !== 7);

function addBook() {
    let title = prompt("Nhập tên sách:");
    let author = prompt("Nhập tác giả:");
    let year = +prompt("Nhập năm xuất bản:");
    let price = +prompt("Nhập giá sách:");
    let id = Math.floor(Math.random() * 9999943 + new Date().getMilliseconds());
    let newBook = {
        id: id,
        title: title,
        author: author,
        year: year,
        price: price,
        isAvailable: true
    };
    books.push(newBook);
    console.log("Thêm sách thành công", newBook);
}
function showBooks() {
    if (books.length === 0) {
        console.log("Danh sách sách trống!");
    } else {
        console.log("Danh sách sách trong thư viện:", books);
    }
}
function searchBookByTitle() {
    let search = prompt("Nhập tiêu đề sách muốn tìm:");
    let result = books.filter(book => book.title.includes(search));
    if (result.length === 0) {
        console.log("Không tìm thấy sách nào có tiêu đề này!");
    } else {
        console.log("Danh sách sách tìm thấy:", result);
    }
}
function updateBookStatus() {
    let id = +prompt("Nhập ID sách muốn cập nhật trạng thái:");
    let findIndex = books.findIndex(book => book.id === id);
    if (findIndex !== -1) {
        books[findIndex].isAvailable = !books[findIndex].isAvailable;
        console.log("Cập nhật trạng thái thành công!", books[findIndex]);
    } else {
        console.log("Không tìm thấy sách có ID:", id);
    }
}
function deleteBook() {
    let id = +prompt("Nhập ID sách muốn xóa:");
    let index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        let confirmDelete = confirm(`Bạn có chắc chắn muốn xóa sách '${books[index].title}' không?`);
        if (confirmDelete) {
            books.splice(index, 1);
            console.log("Xóa sách thành công!");
        } else {
            console.log("Hủy xóa sách.");
        }
    } else {
        console.log("Không tìm thấy sách có ID:", id);
    }
}
function sortBooksByPrice() {
    books.sort((a, b) => a.price - b.price);
    console.log("Danh sách sách sau khi sắp xếp theo giá tăng dần:", books);
}