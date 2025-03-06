let number=[2,5,7,4,1,6,8,2,5,7];
let n=Number(prompt("nhập số bất kì: "));
let count=0;
for(let i=0 ; i<10 ; i++){
    if(number[i]===n){
        count++;
    }
}
if(!count){
    alert(`Số ${n} không xuất hiện trong mảng:`);
}else{
    alert(`Số ${n} xuất hiện ${count} trong mảng:`);
}