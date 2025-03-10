let choice;
let arr = [];
let n;
do {
    choice = +prompt(`  ================== MENU ===================
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó 
        5. Tính trung bình cộng các phần tử của 1 hàng cụ thể
        6. Đảo ngược các hàng trong mảng
        7. Thoát
          ===========================================`);
    switch (choice) {
        case 1:
            rows = +(prompt("Nhập số hàng:"));
            cols = +(prompt("Nhập số cột:"));
            for (let i = 0; i < rows; i++) {
                arr[i] = [];
                for (let j = 0; j < cols; j++) {
                    arr[i][j] = +(prompt(`Nhập giá trị cho hàng${i+1} cột${j+1}:`));
                }
            }
            break;
        case 2:
                console.log("Mảng 2 chiều:");
                for (let i = 0; i < arr.length; i++) {
                        console.log(arr[i]);
                }
            break;
        case 3:
            sum = 0;
            for(let i =0;i <rows;i++){
                for(let j=0;j<cols;j++){
                    sum += arr[i][j];
                }
            }
            console.log("Tổng các phẩn tử trong mảng là: "+sum);  
            break;
        case 4:
            max = arr[0][0];
            for(let i =0;i <rows;i++){
                for(let j =0;j<cols;j++){
                    if(max<arr[i][j]){
                        max=arr[i][j];
                    }
                }
            }
            console.log("Số lớn nhất trong mảng là: "+max);  
            break;
        case 5:
            let tbc;
            console.log("Trung bình cộng của các hàng trong mảng:");
            for(let i =0;i<rows;i++){
                sum = 0;
                for(let j =0; j<cols;j++){
                    sum += arr[i][j];
                }
                tbc = sum / rows;
                console.log(`Hàng ${i + 1}: ${tbc}`)
            }
            break;
        case 6:
            console.log("Mảng sau khi đảo ngược các hàng:");
            for (let i = 0; i < rows; i++) {
                arr[i].reverse();
            }
            for (let i = 0; i < rows; i++) {
                console.log(arr[i]);
            }
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);