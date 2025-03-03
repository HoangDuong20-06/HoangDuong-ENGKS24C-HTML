let month = Number(prompt("Nhập tháng:"));
switch(month){
    case 1:
    case 2:
    case 3:
        alert("Mùa xuân");
        break;
    case 4:
    case 5:
    case 6:
        alert("Mùa hè");
        break;
    case 7:
    case 8:
    case 9:
        alert("Mùa thu");
        break;
    case 10:
    case 11:
    case 12:
        alert("Mùa đông");
        break;
    default:
        alert("Tháng không hợp lệ");
}