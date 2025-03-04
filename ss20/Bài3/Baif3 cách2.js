let num = Number(prompt("Nhập một số:"));
if(Number.isInteger(num)==true){
    num = num.toLocaleString();
    for(let i=0 ;  i < num.length; i++){
        if(num[i]===num[num.length-i-1]){
            alert("Đây là số đối xứng");
            break;
        }else{
            alert("Đây ko là số đối xứng")
        }
    }
}