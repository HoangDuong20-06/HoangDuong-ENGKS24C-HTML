let arr=[];
let n=+prompt("Nhập số lượng phần tử:");
let count = true;;
if (n > 0) {
    for (let i = 0; i < n; i++) {
        arr[i]=+prompt("Nhập phần tử: "+(i+1));
    }
    for (let i = 2; i < n; i++){ 
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            count= false;
            break;
        }
    }
    if(count===true){
        alert("Là dãy số fibonacci");
    }else{
        alert("Không phải là dãy số fibonacci");
    }
}else if(n===0){
    alert("Không phải là dãy số fibonacci")
}else{
    alert("Số lượng phần tử không được nhỏ hơn 0 ")
}