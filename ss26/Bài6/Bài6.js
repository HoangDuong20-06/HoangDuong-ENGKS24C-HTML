// có tham khảo GPT
let arr = [];
let n = +prompt("Nhập số lượng phần tử:");
if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hơp lệ");
}else if (isNaN(n) || n <= 0) {
    console.log("Mảng không có phần tử nào");
} else {
    for (let i = 0; i < n; i++) {
        let dateStr = prompt(`Nhập ngày thứ ${i + 1} (YYYY-MM-DD):`);
        arr.push(dateStr);
    }
    if (arr.length === 0) {
        console.log("Mảng không có phần tử nào");
    } else {
        let result = arr.map(dateStr => {
            let date = new Date(dateStr);
            if (isNaN(date.getTime())) {             
                return "Dữ liệu không hợp lệ";
            }
            let day = String(date.getDate()).padStart(2, '0');
            let month = String(date.getMonth() + 1).padStart(2, '0');
            let year = date.getFullYear();
            return `${day}/${month}/${year}`;
        });
        console.log(result);
    }
}