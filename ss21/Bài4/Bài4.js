let loop = 1;
while(loop==1){
    let a=Number(prompt("Nhập a:"));
    let b=Number(prompt("Nhập b:"));
    let c=Number(prompt("Nhập c:"));
    if(a==0){
        alert("Không phải phương trình bậc 2")
    }else{
        let delta=Math.pow(b,2)-4*a*c;
        if(Number.isInteger==true&&delta>0){
            let x1=(-b+Math.sqrt(delta))/(2*a);
            let x2=(-b-Math.sqrt(delta))/(2*a);
            alert("x1=" + x1 + " và x2=" + x2);
            loop = 0;
        }else if(Number.isInteger==true&&delta==0){
            let x=-b/2*a;
            alert("x1=x2=" + x );
            loop = 0;
        }else if(Number.isInteger==true){
            alert("Phương trình vô nghiệm");
            loop = 0;
        }     
    }
}