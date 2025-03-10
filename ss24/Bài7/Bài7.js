let choice;
let string = "";
do {
    choice = +prompt(`  ================== MENU ===================
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
        4. Đảo ngược chuỗi ký tự
        5. Đếm số lượng từ trong chuỗi ký tự
        6. Tìm kiếm và thay thế ký tự trong chuỗi
        7. Thoát chương trình
        ===========================================`);
    switch (choice) {
        case 1:
            string = prompt("Nhập chuỗi:");
            break;
        case 2:
            console.log(`Chuỗi hiện tại ${string}`);
            break;
        case 3:
            string = string.trim();
            console.log(`Chuỗi sau  khi loại bỏ khoảng trắng ${string}`);
            break;
        case 4:
            let string2 = "";
            for (let i = string.length - 1; i >= 0; i--) {
                string2 += string[i];
            }
            console.log(`Chuỗi sau khi đảo ngược ${string}`);
            break;
        case 5:
            string = string.trim();
            let space = string.split(" ");
            let count = 0;
            for (let i = 0; i < space.length; i++) {
                if (space[i] !== "") {
                    count++;
                }
            }
            console.log(`Số lượng từ trong chuỗi là: ${count}`);
            break;
        case 6:
            let search = prompt("Nhập ký tự cần tìm:");
            let char = prompt("Nhập ký tự thay thế:");
            if (search.length === 1 && char.length === 1) {
                let newString = "";
                for (let i = 0; i < string.length; i++) {
                    if (string[i] === search) {
                        newString += char;
                    } else {
                        newString += string[i];
                    }
                }
                string = newString;
                console.log(`Chuỗi sau khi thay thế: ${string}`);
            } else {
                console.log("Không hợp lệ");
            }
            break;
            case 7:
                console.log("Thoát chương trình.");
                break;
            default:
                alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);