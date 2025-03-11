let arr = [];
let odd = function(){
    let n = Number(prompt("Nhập số lượng phần tử: "));
    for(let i = 0;i<n;i++){
        let a = Number(prompt("Nhập phần tử thứ "+(i+1)+":"));
        if(Number.isInteger(a)==true){
            if(a %2 ==0){
                console.log(a);
            }else if(a%2!=0){
                console.log("Mảng ko có số chẵn")
            }
        }else{
            console.log("Dữ liệu không hợp lệ")
            break;
        }
    }   
}
odd();