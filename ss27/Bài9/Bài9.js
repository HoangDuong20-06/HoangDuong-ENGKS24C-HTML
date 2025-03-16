let test_case1=[5,8,6,3,4,2,7];
let test_case2=[5,9,6,4,1,8,3];
let test_case3="abc";
function sortEven(arr){
    if(Array.isArray(arr)){
        let evenArr = arr.filter(item=>item%2==0);
        console.log("evenArr",evenArr);
        for(let i =0;i<evenArr.length-1;i++){
            for(let j = 0;j<evenArr.length-1-i;j++){
                if(evenArr[j]>evenArr[j+1]){
                    let temp = evenArr[j];
                    evenArr[j] = evenArr[j+1];
                    evenArr[j+1] = temp;
                }
            }
        }
        console.log("Mảng sau khi sắp xếp: ",evenArr);
        let count=0;
    }else{
        console.log("Dữ liệu ko hợp lệ");
    }
}
sortEven(test_case1);