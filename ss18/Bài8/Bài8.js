let edge = Number(prompt("Nhập cạnh thứ nhất:"));
let edge2 = Number(prompt("Nhập cạnh thứ hai:"));
let edge3 = Number(prompt("Nhập cạnh thứ 3:"));
if (edge === edge2&&edge === edge3&&edge2 === edge3){
    alert("Tam giác đều");
}else if (edge === edge2 || edge === edge3|| edge2 === edge3){
    alert("Tam giác cân");
}else if (edge*edge === (edge2*edge2)+(edge3*edge3)||edge2*edge2 === (edge*edge)+(edge3*edge3)||edge3*edge3 === (edge*edge)+(edge3*edge3)){
    alert("Tam giác vuông");
}else {
    alert("Tam giác thường");
}