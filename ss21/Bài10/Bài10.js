let num = Number(prompt("Nhập 1 số nguyên:"));
let count = 0;
if(Number.isInteger(num)==true&&num>0){
    for(let i=0 ; count<num;i++){
        if (i < 10) {
            switch (i) {
                case 2:
                case 3:
                case 5:
                case 7:
                    document.write(i+" ");
                    count++;
                    break;
            }
        }else if(i%2!=0&&i%3!=0&&i%5!=0&&i%7!=0){
            document.write(i+" ");
            count++;
            break;
        }
    }
}else{
    alert("Giá trị không hợp lệ");
}