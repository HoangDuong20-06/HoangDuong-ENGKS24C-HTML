let n = +prompt("Mời bạn nhập số phần tử của mảng:");
let arr;
for (let i = 0; i < n; i++) {
    arr.push(+prompt(`Nhập phần tử thứ ${i + 1}`));
}
if (!Array.isArray(arr)) {
    console.log("Dữ liệu ko hợp lệ")
} else {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = (max + min) * max / 2;
    let rusult = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(sum - rusult);
}