let choice;
let arr = [];
let n;
do {
    choice = +prompt(`  ================== MENU ===================
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra giá trị các phần tử chẵn và tính tổng
        4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
        5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
        6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
        7. Thêm một phần tử vào vị trí chỉ định
        8. Thoát
          ===========================================`);
    switch (choice) {
        case 1:
            n = +prompt("Nhập số lượng phần tử:");
            for (let i = 0; i < n; i++) {
                arr[i] = +prompt("Nhập phần tử thứ: " + (i + 1));
            }
            break;
        case 2:
                console.log("Các phần tử trong mảng:");
                for (let i = 0; i < arr.length; i++) {
                    console.log(`${i}.  ${arr[i]}`);
                }
            break;
        case 3:
            let sumEven = 0;
            console.log("Các số chẵn trong mảng:");
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    console.log(arr[i]);
                    sumEven += arr[i];
                }
            }
            console.log("Tổng các số chẵn:", sumEven);
            break;
        case 4:
            let max = arr[0];
            let min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            console.log(`Giá trị lớn nhất: ${max}`);
            console.log(`Giá trị nhỏ nhất: ${min}`);    
            break;
        case 5:
            let sumPrime = 0;
            console.log("Các số nguyên tố trong mảng:");
            for (let i = 0; i < arr.length; i++) {  
                if (arr[i] < 10) {  
                    switch (arr[i]) {  
                        case 2:  
                        case 3:  
                        case 5:  
                        case 7:  
                            console.log(arr[i]);
                            sumPrime += arr[i];
                            break;  
                    }  
                } else {  
                    if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0 && arr[i] % 5 !== 0 && arr[i] % 7 !== 0) {  
                        console.log(arr[i]);
                        sumPrime += arr[i];
                    }  
                }  
            }
            console.log("Tổng các số nguyên tố:", sumPrime);
            break;
        case 6:
            let search = +prompt("Nhập một số");
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === search) {
                    count++;
                }
            }
            console.log(`Số ${search} xuất hiện ${count} lần trong mảng.`);
            break;
        case 7:
            let addNumber = +prompt("Nhập số lượng phần tử muốn thêm:");
            let addIndex = +prompt("Nhập vào vị trí muốn thêm phần tử:");
            if (addIndex >= 0 && addIndex <= arr.length) {
                for (let i = 0; i < addNumber; i++) {
                    let addValue = +prompt("Nhập phần tử muốn thêm:");
                    arr.splice(addIndex, 0, addValue);
                }
                console.log("Mảng sau khi thêm phần tử:");
                for (let i = 0; i < arr.length; i++) {
                    console.log(`${i}. ${arr[i]}`);
                }
            } else {
                alert("Vị trí không hợp lệ.");
            }
            break;
        case 8:
            console.log("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 8);