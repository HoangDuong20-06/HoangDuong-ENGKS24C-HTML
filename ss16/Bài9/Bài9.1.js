let Word = prompt("Nhập các từ:");
Word = Word.toLowerCase();
Word = Word.trim();
let count = Word.split(" ");
for (let i = 0; i < count.length; i++){
    count[i]= count[i].charAt(0).toUpperCase() + count[i].slice(1);
}
Word = count.join(' ');
alert(Word);