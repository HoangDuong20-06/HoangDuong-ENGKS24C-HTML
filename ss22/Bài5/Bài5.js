let array = [];
let num = Number(prompt("Nhập số lượng phần tử: "));
let odd = 0;
let even = 0;
for(let i =0;i<num;i++){
    array[i]=Number(prompt("Nhập phần tử "+(i+1)+":"));
    if(array[i]%2==0){
        odd+=array[i];
    }else{
        even+=array[i];
    }
}
alert("Tổng các số chẵn là: "+odd);
alert("Tổng các số lẻ là: "+even);