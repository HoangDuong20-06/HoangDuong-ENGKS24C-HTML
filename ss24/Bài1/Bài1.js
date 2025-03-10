let choice;
let arr = [];
let n;
do {
    choice = +prompt(`  ================== MENU ===================
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra giá trị lớn nhất và nhỏ nhất trong mảng
        4. Tính tổng các phần tử trong mảng 
        5. Tìm số lần xuất hiện của phần tử đó trong mảng
        6. Sắp xếp tăng dần
        7. Thoát
          ===========================================`);
    switch (choice) {
        case 1:
            n = Number(prompt("Nhập số lượng phần tử:"));
            for (let i = 0; i < n; i++) {
                arr[i] = Number(prompt("Nhập phần tử thứ: " + (i + 1)));
            }
            break;
        case 2:
                console.log("Các phần tử trong mảng:");
                for (let i = 0; i < arr.length; i++) {
                    console.log(`${i}.  ${arr[i]}`);
                }
            break;
        case 3:
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
        case 4:
            let sum = 0;
            for(let i =0;i<Number;i++){
                sum += arr[i];
            }
            console.log("Tổng các số trong mảng:", sum);
            break;
        case 5:
            let search = +prompt("Nhập một số");
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === search) {
                    count++;
                }
            }
            console.log(`Số ${search} xuất hiện ${count} lần trong mảng.`);
            break;
        case 6:
            for(let j =0;j<arr.length;j++){
                for(let k =0; k<arr.length;k++){
                    if(arr[k]>arr[k+1]){
                        let temp=  arr[k];
                        arr[k]=arr[k+1];
                        arr[k+1]=temp;
                    }
                }
            }
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);