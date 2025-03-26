let list = [
    { id: 'DM001', content: 'Quần áo', status: 'Đang hoạt động'},
    { id: 'DM002', content: 'Kính mắt',status: 'Không hoạt động'},
];
function renderList() {
    let table = document.getElementById("tableBody");
    table.innerHTML = "";
    list.forEach((item, index) => {
        table.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.content}</td>
            <td>${item.status}</td>
            <td>
                <onclick="deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></onclick=>
                <onclick="editTask(${index})"><i class="fa-solid fa-pencil"></i></onclick=>
            </td>
        </tr>`;
    });
}
renderList();
let add = document.getElementById("buttonMain");
let adding = document.getElementById("buttonAdd")
adding.onclick = function () {
    addTask();
};
function addTask() {
    let content = document.getElementById("content").value.trim();
    let status = document.getElementById("status").value.trim();
    if (!content || status === "Choose status") {
        alert("Thông tin trống");
        return;
    }else{
    list.push({ 
        id: list.length + 1, 
        content,  
        status 
    });
    }
    renderList();
}
let closeMenu = document.getElementById("close")
let div = document.getElementById("bodyAdd");
let body = document.getElementById("body");
add.onclick = function () {
    div.style.display= "block"
}
closeMenu.onclick = function () {
    div.style.display= "none"
}