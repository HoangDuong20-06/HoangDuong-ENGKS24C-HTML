let arr = [];
let n = +prompt("Nhập số lượng phần tử:");
if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hơp lệ");
} else if (isNaN(n) || n <= 0) {
    console.log("Mảng không có phần tử nào");
} else {
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("Nhập phần tử thứ " + (i + 1));
    }
    let result = arr.filter(function (element) {
        return element.length > 5; 
    });
    console.log("Các phần tử có độ dài lớn hơn 5:", result);
}