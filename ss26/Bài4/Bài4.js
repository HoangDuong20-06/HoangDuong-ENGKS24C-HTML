let arr = [];
let n =+prompt("Nhập số lượng phần tử")
for (let i = 0; i < n; i++) {
    let number = prompt(`Nhập số thứ ${i + 1}: `);
    if (!isNaN(number ) && number .trim() !== "") {
        arr.push(parseInt(number));
    }
}
if (arr.length === 0) {
    console.log("Mảng không có phần tử nào");
}else if(!Array.isArray(arr)){
    console.log("Dữ liệu không hợp lệ");
}else{
    let result = arr.filter(function (element) {
        if(element<2){
            return false;
        }else{
            for( let i = 2 ; i <= Math.sqrt(element) ; i++){
                if(element%i===0){
                    return false;
                }
            }
            return true;
        }
    }); 
    console.log(result)
}