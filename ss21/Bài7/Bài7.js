let tien_ban_dau=Number(prompt("Nhập số tiền gửi: "));
let lai_xuat=Number(prompt("Nhập lãi xuất: "));
lai_xuat=lai_xuat/100;
let so_thang_gui=Number(prompt("Nhập số tháng gửi: "));
let tien_nhan = tien_ban_dau;
let tong_tien_lai = 0; 
for (let i = 1; i <= so_thang_gui; i++) {
    let tien_lai = tien_nhan * lai_xuat; 
    tien_nhan += tien_lai; 
    tong_tien_lai += tien_lai; 
}
document.write("Số tiền lãi là: "+(tong_tien_lai).toFixed(3)+"<br>");
document.write("Số tiền nhận được là: "+tien_nhan);