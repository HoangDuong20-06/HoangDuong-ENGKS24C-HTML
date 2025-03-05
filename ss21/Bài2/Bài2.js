let odd = 0;
let even = 0;
for (let i = 0;i<5;i++){
    let num = Number(prompt("Nhập vào một số  nguyên: "));
    if(Number.isInteger(num)==true){
        if(num%2==0){
            odd++;
        }else if(num%2!=0){
            even++;
        }
    }
}
document.write("Số chắn trong các số vừa nhập là: "+odd)
document.write("<br>")
document.write("Số lẻ trong các số vừa nhập là: "+even)