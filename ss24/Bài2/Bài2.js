let choice;
let arr = [];
let n;
do {
    choice = +prompt(`  ================== MENU ===================
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. Hiển thị mảng
        3. Tìm các phần tử chẵn lẻ
        4. Tính tổng trung bình cộng của mảng 
        5. Xóa phần tử tại vị trí chỉ định
        6. Tìm phần tử lớn thứ 2 trong mảng
        7. Thoát
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
            let even = [];
            let odd = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i]%2==0) {
                    odd.push(arr[i]);
                }
                if (arr[i]%2!=0) {
                    even.push(arr[i]);
                }
            }
            console.log(`Các giá trị chẵn của mảng là: ${odd}`);
            console.log(`Các giá trị lẻ của mảng là: ${even}`);    
            break;
        case 4:
            let sum = 0;
            for(let i =0;i<arr.length;i++){
                (sum += arr[i]);
            }
            sum = sum / arr.length;
            console.log("Trung bình cộng các số trong mảng:", sum);
            break;
        case 5:
            let pos = +prompt("Nhập vị trí muốn xóa: ");
            if(pos >= 0 && pos<arr.length){
                arr.splice(pos , 1);
                console.log("Mảng sau khi xóa: "+pos);
            }else{
                alert("Vị trí không hợp lệ");
            }
            break;
        case 6:
            let max = arr[0];
            let max2;
            for (let i = 1; i < n; i++) {
                if (arr[i] > max) {
                    max2 = max;
                    max = arr[i];
                } else if (arr[i] < max) {
                    max2 = arr[i];                
                }
            }
            console.log("Phần tử lớn thứ 2 là: "+max2);
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);