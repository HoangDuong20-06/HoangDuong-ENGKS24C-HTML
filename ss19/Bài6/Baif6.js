let a=Number(prompt("nhap a:"));
let b=Number(prompt("nhap b:"));
let c=Number(prompt("nhap c:"));
if(a==0){
   alert("Ko phải phương trình bậc 2")
}else{
    let delta=Math.pow(b,2)-4*a*c;
    if(delta>0){
        let x1=(-b+Math.sqrt(delta))/(2*a);
        let x2=(-b-Math.sqrt(delta))/(2*a);
        alert("Phương trình có 2 nghiệm phân biệt: x1=" + x1 + " ; x2=" + x2);
    }else if(delta==0){
        let x=-b/2*a;
        alert("Phương trình có nghiệm kép x1=x2=" + x );
    }else{
        alert("Phương  trình vô nghiệm");
    }     
}