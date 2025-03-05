let cash = Number(prompt("Mời nhập số tiền:"));
let current1 = 0;
let current2 = 0;
let current3 = 0;
let current4 = 0;
let current5 = 0;
let current6 = 0;
let current7 = 0;
let current8 = 0;
let current9 = 0;
if (cash % 1000 == 0) {
    while (cash > 0) {
        if (cash >= 500000) {
            cash =cash - 500000;
            current1++;
        }else if (cash >= 200000) {
            cash =cash - 200000;
            current2++;
        } else if (cash >= 100000) {
            cash =cash - 100000;
            current3++;
        }else if (cash >= 50000) {
            cash =cash - 50000;
            current4++;
        }else if (cash >= 20000) {
            cash = cash - 20000;
            current5++;
        }else if (cash >= 10000) {
            cash = cash - 10000;
            current6++;
        }else if (cash >= 5000) {
            cash = cash - 5000;
            current7++;
        }else  if (cash >= 2000) {
            cash = cash - 2000;
            current8++;
        }else {
            cash = cash - 1000;
            current9++;
        }
    }
    alert("Số tiền 500k:" + current1);
    alert("Số tiền 200k:" + current2);
    alert("Số tiền 100k:" + current3);
    alert("Số tiền 50k:" + current4);
    alert("Số tiền 20k:" + current5);
    alert("Số tiền 10k:" + current6);
    alert("Số tiền 5k:" + current7);
    alert("Số tiền 2k:" + current8);
    alert("Số tiền 1k:" + current9);
}else {
    alert("Ko hợp lệ");
}
