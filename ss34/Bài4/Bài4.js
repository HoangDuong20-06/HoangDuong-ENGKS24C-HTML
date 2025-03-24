let mission = [];
let add  = document.getElementById("buttonAdd");
function renderMission(){
    let listMission = document.getElementById("mission");
    listMission.innerHTML = ""; 
    mission.forEach(function(item){ 
        listMission.innerHTML += `<li class="task">${item.task} <span id="close" onclick="deleteTodo(${item.id})">x</span></li>`;
    });
}
add.onclick = function(){
    addMission();
}
function addMission(){
    let inputElement = document.getElementById("input");
    let inputValue = inputElement.value; 
    if (inputValue === "") {
        alert("Vui lòng nhập nội dung!");
        return;
    }
    let id;
    if (mission.length > 0) {
        id = mission[mission.length - 1].id + 1; 
    } else {
        id = 1;
    }
    let todo = { 
        id: id,
        task: inputValue 
    };
    mission.push(todo);
    save()
    renderMission();
}
renderMission();
function deleteTodo(id) {
    mission = mission.filter((task)=> task.id !== id);
    save()
    renderMission();
}
function save() {
    sessionStorage.setItem('missionlist', JSON.stringify(mission));
}
renderMission();