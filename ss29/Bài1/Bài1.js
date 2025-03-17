let contact = [];
let choice;
do {
    choice = +prompt(`
        1. Thêm đối tượng Contact vào danh sách liên hệ.
        2. Hiển thị danh sách danh bạ.
        3. Tìm kiếm thông tin Contact theo số điện thoại.
        4. Cập nhật thông tin Contact(name, email, phone) theo id.
        5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
        6. Thoát.
    `);
    switch(choice){
        case 1:
            addContact();
            break;
        case 2:
            showContact();
            break;
        case 3:
            searchContactByPhonenumber();
            break;
        case 4:
            updateContact();
            break;
        case 5:
            deleteContact();
            break;
        case 6:
            console.log("Bye Bye");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
}while(choice!=6);
function addContact() {
    let quatity = +prompt("Nhập số lượng người liên hệ:");
    for(let i =0 ;i<quatity;i++){
        let id = +prompt("Nhập id:");
        let name = prompt("Nhập tên người liên hệ:");
        let email = prompt("Nhập email người liên hệ:");
        let phoneNumber = prompt("Nhập số điện thoại người liên hệ:");
        let newContact = {
        id: id,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        isAvailable: true
    };
    contact.push(newContact);
    console.log("Thêm liên hệ thành công",newContact);
    }
}
function showContact() {
    if (contact.length === 0) {
        console.log("Danh sách sách trống!");
    } else {
        contact.forEach(function(conta, index){
            console.log("ID người liên hệ:", conta.id);
            console.log("Tên người liên hệ:", conta.name);
            console.log("Email người liên hệ:", conta.email);
            console.log("Số điện thoại người liên hệ:", conta.phoneNumber);
        });
    }
}
function searchContactByPhonenumber() {
    let search = prompt("Nhập số điện thoại của người cần tìm:");
    let result = contact.filter(function(cont){
        return cont.phoneNumber.includes(search);
    });
    if (result.length === 0) {
        console.log("Không tìm thấy người nào có số điện thoại này!");
    } else {
        result.forEach(function(conta){
            console.log("ID người liên hệ:", conta.id);
            console.log("Tên người liên hệ:", conta.name);
            console.log("Email người liên hệ:", conta.email);
            console.log("Số điện thoại người liên hệ:", conta.phoneNumber);
        });
    }
}
function updateContact() {
    let id = +prompt("Nhập ID người muốn sửa:");
    let findIndex = contact.findIndex(contacts => contacts.id === id);
    if (findIndex !== -1) {
        let newName = prompt("Nhập tên mới:");
        contact[findIndex].name = newName;
        let newEmail = prompt("Nhập email mới:");
        contact[findIndex].email = newEmail;
        let newPhoneNumber = prompt("Nhập số điện thoại mới:");
        contact[findIndex].phoneNumber = newPhoneNumber;
        console.log("Cập nhật trạng thái thành công!", contact[findIndex]);
    } else {
        console.log("Không tìm thấy người có ID:", id);
    }
}
function deleteContact() {
    let id = +prompt("Nhập ID người muốn xóa:");
    let index = contact.findIndex(cont => cont.id === id);
    if (index !== -1) {
        let Delete = contact[index];
        contact.splice(index, 1);
        console.log("Xóa sách thành công!");
    } else {
        console.log("Không tìm thấy người có ID:", id);
    }
}