document.write("a.");
for(let i=10; i>=0 ; i--){
    document.write("<br>");
    for(let j=i-1;j>=0;j--){
        document.write("*");
    }
}
document.write("b.");
for(let i=1; i<=10 ; i++){
    document.write("<br>");
    for(let j=i-1;j>=0;j--){
        document.write("*");
    }
}
document.write("<br>");
document.write("c. </br>");
for (let i = 10; i > 0; i--) {
    for (let j = 1; j <= 10; j++) {
      if (j >= i) {
        document.write("*");
      } else {
        document.write("&nbsp; ");
      }
    }
    document.write("</br>");
  }
document.write("d. </br>");
for (let i = 10; i > 0; --i) {
    for (let j = 1; j <= 10; ++j) {
      if (j <= i) {
        document.write("*");
      } else {
        document.write("&nbsp; ");
      }
    }
    document.write("</br>");
  }