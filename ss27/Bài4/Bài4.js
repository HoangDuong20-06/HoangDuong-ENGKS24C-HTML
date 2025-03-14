let choice;
let arr = [];
let count = 0;
let intege = function(){
    let n = +prompt("Nhập số lượng số nguyên: ");
    for(i =0;i<n;i++){
        arr[i] = +prompt("Nhập số nguyên thứ "+(i+1)+":");
        if(Number.isInteger(arr[i])==true){
            count += arr[i];
        }
    }
    console.log(arr);
}
let tb = function(){
    let coun = 0;
    coun = count/3
    console.log("Trung bình các số là: "+coun);
}
do{
    choice = +prompt(`  
        ============ MENU ==========
        1. Nhập danh sách số nguyên
        2. Tính trung bình các số
        3. Tìm số chẵn lớn nhất
        4. Tìm số lẻ lớn nhất
        5. Thoát
          ==========================`);
    switch(choice){
        case 1:
            intege(0,0);
            break;
        case 2:
            tb(0,0);
            break;
        case 3:
            let even = arr.filter(function(element) {
                return element%2===0;
            });
            if (even.length === 0) {
                console.log("Không có số chẵn trong mảng");
            } else {
                let max=Math.max(...even);
                console.log("số lớn chẵn lớn nhất là: "+max)
            }
            break;
        case 4:
            let odd = arr.filter(function(element) {
                return element%2!==0;
            });
            if (odd.length === 0) {
                console.log("Không có số lẻ trong mảng");
            } else {
                let max=Math.max(...odd);
                console.log("số lớn lẻ lớn nhất là: "+max)
            }
            break;
        case 5:
            console.log("Bye Bye");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
}while(choice!==5);