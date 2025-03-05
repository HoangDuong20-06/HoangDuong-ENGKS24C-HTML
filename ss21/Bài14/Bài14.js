let width = Number(prompt("Nhập chiều ngang của hình chữ nhật:"));
let height = Number(prompt("Nhập chiều dọc của hình chữ nhật:"));
document.write("<pre>");
for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
            document.write("*");
        } else {
            document.write(" ");
        }
    }
    document.write("<br>");
}
document.write("</pre>");