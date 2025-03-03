let user = Number(prompt("Nhập vào số dư tk:"));
let choice = Number(prompt(`Nhập thao tác muốn chọn: 
    1.Nạp tiền 
    2.Rút tiền`));
switch(choice){
    case 1:
        let nap = Number(prompt("Nhập số tiền muốn nạp:"));
        if(nap < 0){
            alert("Nạp không thành công số tiền nạp ko hợp lệ");
        }else {
            alert("Nạp tiền thành công");
        }
        break;
    case 2:
        let rut = Number(prompt("Nhập số tiền muốn rút:"));
        if(rut > user){
            alert("Số dư không đủ");
        }else if(rut < 0){
            alert("Giá trị rút ko hợp lệ");
        }else {
            alert("Rút thành công")
        }
    default:
        alert("Lựa chọn không hợp lệ");
}