let arr = [1,2,3,4,5,6];
function minArr() {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
if (arr.length === 0) {
    alert("Mảng không chứa phần tử");
} 
else {
    let count = true;
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) {
            count = false;
            break;
        }
    }
    if (!count) {
        alert("Giá trị không hợp lệ");
    } else {
        alert("Phần tử nhỏ nhất trong mảng là " + minArr());
    }
}