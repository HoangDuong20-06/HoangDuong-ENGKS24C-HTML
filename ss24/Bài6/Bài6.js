let choice;
let string = "";
do {
    choice = +prompt(`  ================== MENU ===================
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Tính độ dài của chuỗi
        4. Đếm số lần xuất hiện của một ký tự trong chuỗi
        5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
        6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
        7. Thoát chương trình
          ===========================================`);

    switch (choice) {
        case 1:
            string = prompt("Nhập chuỗi:");
            break;
        case 2:
            console.log("Chuỗi hiện tại:", string);
            break;
        case 3:
            console.log("Độ dài của chuỗi là:", string.length);
            break;
        case 4:
            let search = prompt("Nhập ký tự cần đếm:");
            let count = 0;
            for (let i = 0; i < string.length; i++) {
                if (string[i] === search) {
                    count++;
                }
            }
            console.log(`Số lần xuất hiện của ký tự '${search}' là: ${count}`);
            break;
        case 5:
            let string2 = string.split("").reverse().join("");
            if (string === string2) {
                console.log("Chuỗi là đối xứng.");
            } else {
                console.log("Chuỗi không phải là đối xứng.");
            }
            break;
        case 6:
            string=string.toLowerCase();
            string=string.trim();
            let space=string.split(" ");
            for (let i=0; i<space.length ; i++) {
                space[i]=space[i].charAt(0).toUpperCase() + space[i].slice(1);
            }
            string=space.join(' ');
            console.log(`Chuỗi sau khi thay đổi ${string}`);
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);