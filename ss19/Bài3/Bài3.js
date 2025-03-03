let dong = Number(prompt("Nhập số tiền VND(VND->USD):"));
let dola = Number(prompt("Nhập số tiền USD(USD->VND):"));
let USD = (dong/23000);
let VND = (dola*23000);
alert("VND-->USD:"+USD+"USD");
alert("USD-->VND:"+VND+"VND")