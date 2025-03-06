let arr= [2, 1, 7, 1, 1, 8, 6, 2, 2, 7];
arr.sort();
for(let i=0;i<10;i++){
    for(let j=i+1;j<10-(i+1);){
        if(arr[i]==arr[j]){
            arr.splice(j,1);
        }else{
            j++;
        }
    }
}
document.write(arr);