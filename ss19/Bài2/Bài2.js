let text = prompt("Nhập vào một ký tự:");
if (text.length===1){
    if (text >= 'a' && text <= 'z' || text >= 'A' && text <= 'Z'){
        alert("ký tự "+text+" là chữ cái");
    }else{
        alert("Ký tự "+text+" không phải chữ cái")
    }
}else {
    alert("Ký tự "+text+" không phải chữ cái")
}