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
    let square = arr.map(function (element) {
        return element **2 ;
    }); 
    let even = square.filter(function (element) {
        return element % 2 ===0 ;
    }); 
    if (even.length === 0) {
        console.log("Không có số chẵn trong mảng");
    } else {
        console.log(even);
    }
}
