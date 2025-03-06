let numbers= [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
numbers.sort();
let index=0;
let index2=0;
let temp=numbers[0];
for (let i=0; i<10;i++){
    index2=0;
     for(let j=0;j<10;j++){
        if(numbers[i]==numbers[j]){
            index2++;
        }
     }
     if(index<index2){
        index=index2;
        temp=numbers[i];
     }
}
alert(temp);