let courses = [
    { id: 1, content: 'Learn Javascript Session 01', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Anh Bách' },
    { id: 2, content: 'Learn Javascript Session 2', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Lâm' },
    { id: 3, content: 'Learn CSS Session 1', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Hiếu Ci Ớt Ớt' },
];
function renderList() {
    let table = document.getElementById("tableBody");
    table.innerHTML = "";
    courses.forEach((item, index) => {
        table.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.content}</td>
            <td>${item.dueDate}</td>
            <td>${item.status}</td>
            <td>${item.assignedTo}</td>
            <td>
                <button onclick="editTask(${index})">Sửa</button>
                <button onclick="deleteTask(${index})">Xóa</button>
            </td>
        </tr>`;
    });
}
let add = document.getElementById("button");
add.onclick = function () {
    addTask();
};
function addTask() {
    let content = document.getElementById("content").value.trim();
    let dueDate = document.getElementById("date").value.trim();
    let status = document.getElementById("status").value.trim();
    let assignedTo = document.getElementById("username").value.trim();
    if (!content || !dueDate || status === "Choose status" || !assignedTo) {
        alert("Thông tin trống");
        return;
    }
    courses.push({ 
        id: courses.length + 1, 
        content, 
        dueDate, 
        status, 
        assignedTo 
    });
    save();
    renderList();
}

function editTask(index) {
    let task = courses[index];
    document.getElementById("content").value = task.content;
    document.getElementById("date").value = task.dueDate;
    document.getElementById("status").value = task.status;
    document.getElementById("username").value = task.assignedTo;
    add.onclick = function () {
        updateTask(index);
    };
}

function updateTask(index) {
    let content = document.getElementById("content").value.trim();
    let dueDate = document.getElementById("date").value.trim();
    let status = document.getElementById("status").value.trim();
    let assignedTo = document.getElementById("username").value.trim();
    if (!content || !dueDate || status === "Choose status" || !assignedTo) {
        alert("Thông tin trống ");
        return;
    }
    courses[index] = { 
        id: courses[index].id,
        content, 
        dueDate, 
        status,
        assignedTo 
    };
    save();
    renderList();
    add.onclick = function () {
        addTask();
    };
}
function deleteTask(index) {
    courses.splice(index, 1);
    courses.forEach((task, i) => {
        task.id = i + 1;
    });
    save();
    renderList();
}
function save() {
    sessionStorage.setItem('courseslist', JSON.stringify(courses));
}
renderList();