let n = +prompt("Mời bạn nhập số phần tử của mảng:");
let arr;
for (let i = 0; i < n; i++) {
    arr.push(+prompt(`Nhập phần tử thứ ${i + 1}`));
}
let d = arr[1] - arr[0];
if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
} else {
    console.log(capsocong(arr, d));
}
function capsocong(arr, d) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== d) {
            return false;
        }
    }
    return true;
}