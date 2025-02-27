let a=Number(prompt("nhap a:"));
let b=Number(prompt("nhap b:"));
let c=Number(prompt("nhap c:"));
if(a==0){
   alert("ko phai phuong trinh bac 2")
}else{
    let delta=Math.pow(b,2)-4*a*c;
    if(delta>0){
        let x1=(-b+Math.sqrt(delta))/(2*a);
        let x2=(-b-Math.sqrt(delta))/(2*a);
        alert("x1=" + x1 + " và x2=" + x2);
    }else if(delta==0){
        let x=-b/2*a;
        alert("x=" + x );
    }else{
        alert("phuong trinh vo nghiem");
    }     
}