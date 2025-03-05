let num = Number(prompt("Nhập 1 số nguyên:"));
for(let i=2; i<10;i++){
    if (num < 10) {
        switch (num) {
            case 2:
            case 3:
            case 5:
            case 7:
                alert("Là số nguyên tố");
                break;
            default:
                alert("Không phải số nguyên tố ");
                break;
        }
    }else if(num%2!=0&&num%3!=0&&num%5!=0&&num%7!=0){
        alert("Là số nguyên tố");
        break;
    }else{
        alert("Không phải số nguyên tố");
        break;
    }
}