let choice;
let student = [];
do {
    choice = +prompt(`
        1. Nhập danh sách sinh viên.
        2. Hiển thị danh sách sinh viên.
        3. Tìm sinh viên theo tên.
        4. Xóa sinh viên khỏi danh sách.
        5. Thoát`);

    switch (choice) {
        case 1:
            nhap(student);
            break;
        case 2:
            displayStudents(student,n)
            break;
        case 3:
            let name = prompt("moi ban nhap ten tim kiem");
            let search=student.filter(function(element){
                return element.includes(name);
            });
            console.log(search);
            break;
        case 4:
            let delname = prompt("moi ban nhap ten can xoa");
            let del=student.filter(function(element){
                return !element.includes(delname);
            });
            console.log(del);
            break;
        case 5:
            alert("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
} while (choice !== 5);
function nhap(student){
    n=+prompt("Nhập số lượng học sinh");
    for(let i = 0 ; i < n ; i++){
        student[i]=prompt("Sinh viên thứ"+(i+1));
    }
}
function displayStudents(student,n){
    for(let i=0 ; i < n ; i++){
        console.log(`${i}. ${student[i]}`)
    }
}