let arr = [];
for (let i = 0; i < 10; i++) {
    let n = prompt(`Nhập số thứ ${i + 1}: `);
    if (!isNaN(n) && n.trim() !== "") {
        arr.push(parseInt(n));
    }
}
if (arr.length === 0) {
    console.log("Mảng không có phần tử nào");
}else if(!Array.isArray(arr)){
    console.log("Dữ liệu không hợp lệ");
}else{
    let max=Math.max(...arr);
    let index = arr.indexOf(max);
    console.log(`max=${max} index=${index}`);
}