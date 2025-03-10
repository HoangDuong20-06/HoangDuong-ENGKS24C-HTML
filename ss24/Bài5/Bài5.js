let choice;
let arr = [];
let n;
do {
    choice = +prompt(`  ================== MENU ===================
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tính tổng đường chéo chính
        5. Tính tổng đường chéo phụ
        6.  Tính trung bình cộng các phần tử trong một hàng hoặc một cột
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
            let summain=0;
            for( let i = 0 ; i < rows ; i++){
                summain+=arr[i][i];
            }
            console.log("Tổng đường chéo chính là:", summain); 
            break;
        case 5:
            let sumex=0;
            for( let i = 0 ; i < rows ; i++){
                sumex+=arr[i][rows-1-i];
            }
            console.log("Tổng đường chéo phụ là:", sumex);
            break;
        case 6:
            do {
                choice1 = +prompt(`
                1.Chọn hàng
                2.Chọn cột
                3.Thoát`);
                switch(choice1){
                    case 1:
                        addrows = +prompt("Chọn hàng thứ: ");
                        console.log("Trung bình cộng của các hàng trong mảng:");
                        sum1 = 0;
                        for(let j =0; j<arr.length;j++){
                            sum1 += arr[addrows][j];
                        }
                    tbc = sum1 / rows;
                    console.log(`Hàng ${addrows} trung bình cộng bằng: ${tbc}`)
                    break;
                    case 2:
                        addcols = +prompt("Chọn cột thứ: ");
                        console.log("Trung bình cộng của các cột trong mảng:");
                        sum2 = 0;
                        for(let i =0;i<arr.length;i++){
                                sum2 += arr[i][addcols];
                        }
                        tbc2 = sum2 / cols;
                        console.log(`Hàng ${addcols} trung bình cộng bằng: ${tbc2}`)
                        break;
                    case 3:
                        break;
                    default:
                        alert("Lựa chọn không hợp lệ");
                }
            }while(choice1 !== 2);
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);