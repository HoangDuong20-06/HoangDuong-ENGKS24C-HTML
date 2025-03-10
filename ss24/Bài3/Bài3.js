let choice;
let arr = [];
let n;
do {
    choice = +prompt(`  ================== MENU ===================
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. Hiển thị mảng
        3. Tìm các phần tử lớn nhất trong mảng và in ra
        4. Tính tổng và trung bình cộng của các số dương trong mảng 
        5. Đảo ngược mảng
        6. Kiểm tra xem mảng có đối xứng ko
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
            max = arr[0];
            for(let i =0;i <arr.length;i++){
                if(max<arr[i]){
                    max=arr[i];
                }
            }
            console.log(max+" là số lớn nhất trong dãy số");  
            break;
        case 4:
            let sum = 0;
            let tbc = 0;
            let plus = 0;
            for(let i =0;i<arr.length;i++){
                if(arr[i]>0){
                    (sum += arr[i]);
                    plus++;
                }
            }
            tbc = sum / plus;
            console.log("Trung bình cộng các số dương trong mảng:"+tbc);
            console.log("Tổng của các số dương trg mảng: "+sum)
            break;
        case 5:
            arr.reverse();
            console.log("Mảng đảo ngược: "+arr)
            break;
        case 6:
            let arr2 = []; 
            for (let i = arr.length - 1; i >= 0; i--) {
                arr2.push(arr[i]); 
            }
            let symmetry= true;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== arr2[i]) {
                    symmetry = false;
                    break;
                }
            }
            if(symmetry) {
                console.log("Mảng đối xứng.");
            } else {
                console.log("Mảng không đối xứng.");
            }
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);