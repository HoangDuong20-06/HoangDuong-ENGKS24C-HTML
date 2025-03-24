let table = document.getElementById("tableBody");
let arr = JSON.parse(localStorage.getItem('arrlist')) || [];
let button = document.getElementById("button");
function add() {
    table.innerHTML = "";
    arr.forEach((item, index) => {
        table.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.position}</td>
        </tr>`;
    });
};
add();
button.onclick = function () {
    let inputs = document.getElementById("name").value;
    let inputs2 = document.getElementById("position").value;
    if (inputs === "" && inputs2 === "") {
        alert("Thông tin trống");
    } else {
        arr.push({
            id: arr.length + 1,
            name: inputs,
            position:inputs2,
        });
        save()
        add();
    }
}
function save() {
    localStorage.setItem('arrlist', JSON.stringify(arr));
}