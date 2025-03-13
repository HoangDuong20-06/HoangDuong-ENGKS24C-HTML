let arr = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space @out.com"];
if(arr.length===0){
    console.log("Mảng không có phần tử nào");
}else if(!Array.isArray(arr)){
    console.log("Dữ liệu không hợp lệ");
}else{
    let result=arr.filter(function(element){
        return element.includes("@") && !element.includes(" ");
    })
    console.log(result);
}