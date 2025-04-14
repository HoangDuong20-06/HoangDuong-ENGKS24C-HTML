window.onload = function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    window.location.href = "login.html";
  }
};
let group = JSON.parse(localStorage.getItem("group")) || [
  {
    id: 1,
    taskName: "Liên minh huyền thoại",
    describe: "Pc game",
  },
  {
    id: 2,
    taskName: "Soạn thảo đề cương dự án",
    describe: "Soạn thảo đề cương",
  },
  {
    id: 3,
    taskName: "Quản lí dữ liệu khách hàng",
    describe: "Dữ liệu khách hàng",
  },
  {
    id: 4,
    taskName: "Phát triển ứng dụng di động",
    describe: "Phát triển ứng dụng di động",
  },
];

const rowsPerPage = 4;
let currentPage = 1;
let filteredGroup = null;

let modal = document.getElementById("editModal");
let closeModal = document.getElementById("closeModal");
let cancelButton = document.getElementById("cancelButton");
let saveBtn = document.getElementById("saveButton");
let projectName = document.getElementById("projectName");
let projectDesc = document.getElementById("projectDesc");

let popup = document.getElementById("confirmPopup");
let bg = document.getElementById("background");
let confirmDelete = document.getElementById("confirmDeleteBtn");
let cancelBtn = document.getElementById("cancelBtn");
let closeBtn = document.getElementById("closepopup");

let add = document.getElementById("addButton");

function getCurrentList() {
  return filteredGroup || group;
}

function renderCourses() {
  let table = document.getElementById("taskList");
  table.innerHTML = "";
  let list = getCurrentList();
  let start = (currentPage - 1) * rowsPerPage;
  let end = start + rowsPerPage;
  let paginatedCourses = list.slice(start, end);

  paginatedCourses.forEach((item) => {
    table.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            
            <td>
                <button class="fix" onclick="editButton(${item.id})">Sửa</button>
                <button class="deleteButton" onclick="buttonDelete(${item.id})">Xóa</button>
                <button class="details" onclick="detailTask(${item.id})">Chi tiết</button>
            </td>
        </tr>`;
  });
  save();
  renderPagination();
}

function renderPagination() {
  let pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  let list = getCurrentList();
  let totalPages = Math.ceil(list.length / rowsPerPage);

  pagination.innerHTML +=
    currentPage > 1
      ? `<button onclick="changePage(${currentPage - 1})">&lt;</button>`
      : `<button disabled>&lt;</button>`;

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML +=
      currentPage === i
        ? `<button class="active" onclick="changePage(${i})">${i}</button>`
        : `<button onclick="changePage(${i})" >${i}</button>`;
  }

  pagination.innerHTML +=
    currentPage < totalPages
      ? `<button onclick="changePage(${currentPage + 1})">&gt;</button>`
      : `<button disabled>&gt;</button>`;
}

function changePage(page) {
  let list = getCurrentList();
  let totalPages = Math.ceil(list.length / rowsPerPage);
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    renderCourses();
    renderPagination();
  }
}

function save() {
  localStorage.setItem("group", JSON.stringify(group));
}

add.onclick = function () {
  let errorName = document.getElementById("errorName");
  let errorDescribe = document.getElementById("errorDescri");
  modal.style.display = "flex";
  projectName.value = "";
  projectDesc.value = "";
  errorName.textContent = "";
  errorDescribe.textContent = "";

  saveBtn.onclick = function () {
    let name = projectName.value.trim();
    let describe = projectDesc.value.trim();
    let errorName = document.getElementById("errorName");
    let errorDescribe = document.getElementById("errorDescri");
    errorName.textContent = "";
    errorDescribe.textContent = "";
    let isValid = true;

    let nameExists = group.some(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (nameExists) {
      errorName.textContent = "Tên dự án đã tồn tại";
      isValid = false;
    }
    if (name === "") {
      errorName.textContent = "Tên dự án không được để trống";
      isValid = false;
    } else if (name.length < 5 || name.length > 1000) {
      errorName.textContent = "Ký tự dài khoảng 5 đến 1000 ký tự";
      isValid = false;
    }
    if (describe === "") {
      errorDescribe.textContent = "Mô tả không được để trống";
      isValid = false;
    } else if (describe.length < 5 || describe.length > 1000) {
      errorDescribe.textContent = "Ký tự dài khoảng 5 đến 1000 ký tự";
      isValid = false;
    }

    if (isValid) {
      let maxId = group.length > 0 ? Math.max(...group.map((c) => c.id)) : 0;
      group.push({ id: maxId + 1, name, describe });
      save();
      currentPage = Math.ceil(getCurrentList().length / rowsPerPage);
      renderCourses();
      closePopup();
    }
  };

  closeModal.onclick = closePopup;
  cancelButton.onclick = closePopup;

  function closePopup() {
    modal.style.display = "none";
    projectName.value = "";
  }
};

function editButton(id) {
  let course = group.find((item) => item.id === id);
  if (!course) return;

  projectName.value = course.name;
  projectDesc.value = course.describe || "";
  modal.style.display = "flex";

  saveBtn.onclick = function () {
    let isValid = true;
    let name = projectName.value.trim();
    let describe = projectDesc.value.trim();
    let errorName = document.getElementById("errorName");
    let errorDescribe = document.getElementById("errorDescri");
    let nameExists = group.some(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (nameExists) {
      errorName.textContent = "Tên dự án đã tồn tại";
      isValid = false;
    }
    if (name === "") {
      errorName.textContent = "Tên dự án không được để trống";
      isValid = false;
    } else if (name.length < 5 || name.length > 500) {
      errorName.textContent = "Tên dự án dài khoảng 5 đến 500 ký tự";
      isValid = false;
    }
    if (describe === "") {
      errorDescribe.textContent = "Mô tả không được để trống";
      isValid = false;
    } else if (describe.length < 5 || describe.length > 500) {
      errorDescribe.textContent = "Mô tả dài khoảng 5 đến 500 ký tự";
      isValid = false;
    } else {
      course.name = projectName.value;
      course.describe = projectDesc.value;
      save();
      renderCourses();
      modal.style.display = "none";
      errorName.textContent = "";
      errorDescribe.textContent = "";
    }
  };

  closeModal.onclick = closePopup;
  cancelButton.onclick = closePopup;

  function closePopup() {
    modal.style.display = "none";
    projectName.value = "";
  }
}

let deleteId = null;

function buttonDelete(id) {
  deleteId = id;
  popup.style.display = "flex";
  bg.style.display = "flex";
}

confirmDelete.onclick = function () {
  group = group.filter((item) => item.id !== deleteId);
  save();
  currentPage = Math.min(
    currentPage,
    Math.ceil(getCurrentList().length / rowsPerPage)
  );
  renderCourses();
  popup.style.display = "none";
  bg.style.display = "none";
};

cancelBtn.onclick = closeDeletePopup;
closeBtn.onclick = closeDeletePopup;

function closeDeletePopup() {
  popup.style.display = "none";
  bg.style.display = "none";
}

function detailTask(id) {
  const task = group.find((item) => item.id === id);
  if (task) {
    localStorage.setItem("selectedProject", JSON.stringify(task));
    window.location.href = "category-manager.html";
  }
}

let find = document.getElementById("findProject");
find.oninput = function () {
  let keyword = find.value.trim().toLowerCase();
  if (keyword === "") {
    filteredGroup = null;
  } else {
    filteredGroup = group.filter((item) =>
      item.name.toLowerCase().includes(keyword)
    );
  }
  currentPage = 1;
  renderFind();
};

renderCourses();
function renderFind() {
  let table = document.getElementById("taskList");
  table.innerHTML = "";
  let list = getCurrentList();
  let start = (currentPage - 1) * rowsPerPage;
  let end = start + rowsPerPage;
  let paginatedCourses = list.slice(start, end);

  paginatedCourses.forEach((item) => {
    table.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>
                <button class="fix" onclick="editButton(${item.id})">Sửa</button>
                <button class="deleteButton" onclick="buttonDelete(${item.id})">Xóa</button>
                <button class="details" onclick="detailTask(${item.id})">Chi tiết</button>
            </td>
        </tr>`;
  });

  renderPagination();
}
