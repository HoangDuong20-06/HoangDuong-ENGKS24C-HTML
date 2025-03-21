let subject = [
    {
        id:1,
        name:'Toán'
    },
    {
        id:2,
        name:'Lý'
    },
    {
        id:3,
        name:'Hóa'
    },
]
const ol = document.getElementById("ol");
function renderSubject(){
    let listSub = document.getElementById("ol");
    listSub.innerHTML="";
    subject.forEach(function(item){
        listSub.innerHTML += `<li>${item.name}</li>`;
    });
}
renderSubject();
let button  = document.getElementById("button");
button.onclick = function(){
    addSubject();
}
function addSubject(){
    let input = document.getElementById("input").value;
let id = subject[subject.length - 1].id+1;
let sub = {
    id: id,
    name: input,
};
subject.push(sub);
renderSubject();
}