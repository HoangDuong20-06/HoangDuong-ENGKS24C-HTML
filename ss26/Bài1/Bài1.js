let arr = [];
for(let i = 0;i<10;i++){
    arr[i] = +prompt("Nhập số thứ "+(i+1)+":");
    if(Number.isInteger(arr[i])==true){
        arr.push(arr[i]);
    }
}if(arr.length===0){
    console.log("Mảng ko có phần tử nào")
}else if(!Array.isArray(arr)){
    console.log("Dữ liệu ko hợp lệ");
}
let longNumber = arr.filter(function(element){
    return element >10;
})
console.log(longNumber);