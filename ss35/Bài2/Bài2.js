let button = document.getElementById("buttonaddBookMark");
let div = document.getElementById("addBookMark");
let body = document.getElementById("mid");
let close_container = document.getElementById("container-title-close");
let buttonSave = document.getElementById("buttonSave");
let bookmarksContainer = document.getElementById("bookmarkList");
let arr = JSON.parse(localStorage.getItem("arrlist")) || [];
button.onclick = function () {
    div.style.display = "block";
    body.style.backgroundColor = "#322346";
};

close_container.onclick = function () {
    div.style.display = "none";
    body.style.backgroundColor = "white";
};
buttonSave.onclick = function () {
    let nameWeb = document.getElementById("nameWeb").value;
    let url = document.getElementById("url").value;
    if (nameWeb === "" || url === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    arr.push({
        id: arr.length + 1,
        name: nameWeb,
        url: url,
    });
    save();
    div.style.display = "none";
    body.style.backgroundColor = "white";
    add();
};
function add() {
    bookmarksContainer.innerHTML = "";
    arr.forEach((element) => {
        bookmarksContainer.innerHTML += `
            <div class="bookMark">
                <div onclick="locate(${element.id})">${element.name}</div>
                <div onclick="removeBookmark(${element.id})">x</div>
            </div>
        `;
    });
}
function locate(id) {
    let index = arr.findIndex((element) => element.id == id);
    if (index !== -1) {
        window.location.href = arr[index].url;
    }
}
function removeBookmark(id) {
    arr = arr.filter((element) => element.id !== id);
    save();
    add();
}
function save() {
    localStorage.setItem("arrlist", JSON.stringify(arr));
}
add();