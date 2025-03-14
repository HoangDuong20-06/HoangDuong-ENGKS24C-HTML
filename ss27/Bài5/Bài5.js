let arr=[1,2,3,4,5,6,7,8];
let n=+prompt("kích thước mảng con");
let arr2=[];
let index=0;
for(let i=0;i<arr.length/n;i++){
    arr2[i]=[];
    for(let j=0;j<n;j++){
        arr2[i][j]=arr[index];
        index++;
    }
}
console.log(arr2);