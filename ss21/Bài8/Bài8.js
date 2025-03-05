let number=Number(prompt("Nhập một số:"));
let result;
let sum=0;
let temp=number;
while(number>0){
    result=number%10;
    sum=sum+(result*result*result);
    number=Math.floor(number/10);
}
if(temp===sum){
    alert(temp +" là số armstrong");
}else{
    alert(temp +" không phải số armstrong");
}