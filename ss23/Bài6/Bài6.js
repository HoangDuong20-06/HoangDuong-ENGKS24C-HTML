let arr = ["", false, 0, 5, 10, "Hello world!"];
for (let i = arr.length - 1; i >= 0; i--) {
    if (!arr[i]) {
        arr.splice(i, 1);
    }
}
alert(arr);