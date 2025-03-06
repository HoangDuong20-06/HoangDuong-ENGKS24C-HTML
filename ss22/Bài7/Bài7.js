let array=[];
let num = Number(prompt("Nhập số lượng phần tử:"));
for(let i = 0;i<num;i++){
    array[i]=Number(prompt("Nhập phần tử thứ "+(i+1)+":"));
    for(let j =0;j<num;j++){
        for(let k =0; k<num;k++){
            if(array[k]>array[k+1]){
                let temp=  array[k];
                array[k]=array[k+1];
                array[k+1]=temp;
            }
        }
    }
}
console.log(array);