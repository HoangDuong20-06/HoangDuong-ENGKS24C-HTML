let string = prompt("Mời bạn nhập chuỗi : ");
let search = prompt("Mời bạn nhập từ cần tìm:");
const lengh = string.length
let flag=-1;
for(let i=0; i<lengh; i++){
    if(search==string[i]){
        flag=1;
        break;
    }
}
if(flag==1){
    alert('Tồn tại từ cần tìm kiếm');
}else{
    alert('Không tồn tại từ cần tìm kiếm');
}
