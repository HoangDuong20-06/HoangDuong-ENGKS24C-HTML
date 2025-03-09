let arr=[];
let max;
let index;
for(let i = 0 ; i < 10 ; i++){
    arr[i]=+prompt("Nhập phần tử thứ: "+(i+1));
    max=arr[0];
    if(max<arr[i]){
        max=arr[i];
        index=i;
    }
}
if(arr.length>0){
    alert(`Số lớn nhất: ${max}
    vị trí: ${index}`);
}else{
    alert("Ko có số lớn nhất");
}