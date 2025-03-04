let number=prompt("Nhập 1 số:");
let length=number.length;
const temp=number.split("");
let j=0;
for(let i=length-1 ; i>=0 ; i--){
    temp[j]=temp[i];
    j++;
}
const temp1=temp.join('');
const tmp_1= Number(temp1);
const tmp_2= Number(number);
if (Number.isInteger(tmp_2) == true) {
    if(tmp_1===tmp_2){
        alert("Là số đối xứng");
    }else{
        alert("Không phải là số đối xứng");
    }
}else{
    alert("Dữ liệu nhập vào ko hợp lệ");
}