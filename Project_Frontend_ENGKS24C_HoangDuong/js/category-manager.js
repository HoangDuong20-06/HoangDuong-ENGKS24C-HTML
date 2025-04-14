window.onload = function () {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
      window.location.href = "login.html";
  }
  let selectedProject = JSON.parse(localStorage.getItem("selectedProject"));
  if (selectedProject) {
      document.getElementById("projectTitle").textContent = selectedProject.name;
      document.getElementById("projectDescription").textContent = selectedProject.describe;
  }
};
let tasks = JSON.parse(localStorage.getItem("tasks")) || [
  {
    id: 1,
    taskName: "Liên minh huyền thoại",
    assigneeId: 1,
    projectId: 1,
    asignDate: "2025-03-24",
    dueDate: "2025-03-26",
    priority: "Thấp",
    progress: "Đúng tiến độ",
    status: "To do",
    describe: "Pc game",
  },
  {
    id: 2,
    taskName: "Soạn thảo đề cương dự án",
    assigneeId: 2,
    projectId: 1,
    asignDate: "2025-03-24",
    dueDate: "2025-03-26",
    priority: "Thấp",
    progress: "Đúng tiến độ",
    status: "To do",
    describe: "Soạn thảo đề cương",
  },
  {
    id: 3,
    taskName: "Quản lí dữ liệu khách hàng",
    assigneeId: 3,
    projectId: 1,
    asignDate: "2025-03-24",
    dueDate: "2025-03-26",
    priority: "Thấp",
    progress: "Đúng tiến độ",
    status: "To do",
    describe: "Dữ liệu khách hàng",
  },
  {
    id: 4,
    taskName: "Phát triển ứng dụng di động",
    assigneeId: 4,
    projectId: 1,
    asignDate: "2025-03-24",
    dueDate: "2025-03-26",
    priority: "Thấp",
    progress: "Đúng tiến độ",
    status: "To do",
    describe: "Phát triển ứng dụng di động",
  },
];
let priorityClass = {
  Thấp: "low",
  "Trung Bình": "medium",
  Cao: "high",
};
let progressClass = {
  "Đúng tiến độ": "onRisk",
  "Có rủi ro": "medium",
  "Trễ hạn": "high",
};
let statusList = ["To do", "In Progress", "Pending", "Done"];
let filteredGroup = null;
renderTasks();
function renderTasks() {
  let container = document.getElementById("taskMenu");
  let savedOpenStatus = JSON.parse(localStorage.getItem("openStatus")) || {};
  let headerTable = `
    <h2 id="titleTable">Danh Sách Nhiệm Vụ</h2>
    <table>
      <thead>
        <tr>
          <th class="col1">Tên Nhiệm Vụ</th>
          <th class="col2">Người Phụ Trách</th>
          <th class="col3">Ưu Tiên</th>
          <th class="col4">Ngày Bắt Đầu</th>
          <th class="col5">Hạn Chót</th>
          <th class="col6">Tiến độ</th>
          <th class="col7">Hành động</th>
        </tr>
      </thead>
    </table>`;
  container.innerHTML = headerTable;

  statusList.forEach(function (status) {
    let selectedProject = JSON.parse(localStorage.getItem("selectedProject"));
    let list = filteredGroup || tasks;
    let groupTasks = list.filter(t => (!selectedProject || t.projectId === selectedProject.id) && t.status === status);

    let rows = "";
    groupTasks.forEach((task) => {
      let priClass = priorityClass[task.priority] || "";
      let proClass = progressClass[task.progress] || "";
      rows += `
        <tr>
          <td class="col1">${task.taskName}</td>
          <td class="col2">${task.assignee}</td>
          <td class="col3"><span class="${priClass}">${task.priority}</span></td>
          <td class="col4"><span class="date">${task.asignDate.slice(5)}</span></td>
          <td class="col5"><span class="date">${task.dueDate.slice(5)}</span></td>
          <td class="col6"><span class="${proClass}">${task.progress}</span></td>
          <td class="col7">
            <button class="editBtn" data-id="${task.id}" onclick="editTask(${task.id})">Sửa</button>
            <button class="deleteBtn" data-id="${task.id}" onclick="confirmDelete(${task.id})">Xoá</button>
          </td>
        </tr>`;
    });

    let isOpen = savedOpenStatus[status] ? "open" : "";
    container.innerHTML += `
      <details data-status="${status}" ${isOpen}>
        <summary><strong>${status}</strong></summary>
        <table>${rows}</table>
      </details>`;
  });

  let allDetails = container.querySelectorAll("details");
  let currentStatus = {};
  allDetails.forEach((detail) => {
    let status = detail.getAttribute("data-status");
    detail.addEventListener("toggle", function () {
      currentStatus[status] = detail.open;
      localStorage.setItem("openStatus", JSON.stringify(currentStatus));
    });
    currentStatus[status] = detail.open;
  });
  localStorage.setItem("openStatus", JSON.stringify(currentStatus));
}

let popupTask = document.getElementById("popupTask");
let confirmPopup = document.getElementById("confirmPopup");
let background = document.getElementById("background");
let cancelBtn = document.getElementById("cancelBtn");
let closepopup = document.getElementById("closepopup");
let cancelButton = document.getElementById("cancelButtons");
let add = document.getElementById("addButton");
popupTask.style.display = "none";
confirmPopup.style.display = "none";
background.style.display = "none";
cancelButton.onclick = function (e) {
  e.preventDefault();
  popupTask.style.display = "none";
  document.getElementById("task-form").reset();
};
cancelBtn.onclick = function (e) {
  e.preventDefault();
  background.style.display = "none";
  confirmPopup.style.display = "none";
};
closepopup.onclick = function () {
  background.style.display = "none";
  confirmPopup.style.display = "none";
};
let errorTask = document.getElementById("errorTask");
let errorAssignee = document.getElementById("errorAssignee");
let errorStatus = document.getElementById("errorStatus");
let errorStart = document.getElementById("errorStart");
let errorEnd = document.getElementById("errorEnd");
let errorPrio = document.getElementById("errorPrio");
let errorProgress = document.getElementById("errorProgress");
add.onclick = function () {
  editingTaskId = null;
  popupTask.style.display = "flex";
  errorTask.textContent = "";
  errorAssignee.textContent = "";
  errorStatus.textContent = "";
  errorStart.textContent = "";
  errorEnd.textContent = "";
  errorPrio.textContent = "";
  errorProgress.textContent = "";
  document.getElementById("saveButtons").onclick = function (e) {
    e.preventDefault();
  
    // Xoá lỗi cũ
    errorTask.textContent = "";
    errorAssignee.textContent = "";
    errorStatus.textContent = "";
    errorStart.textContent = "";
    errorEnd.textContent = "";
    errorPrio.textContent = "";
    errorProgress.textContent = "";
  
    let isValid = true;
  
    // Lấy dữ liệu từ form
    let taskName = document.getElementById("task-name").value;
    let assignee = document.getElementById("assignee").value;
    let statusValue = document.getElementById("status").value;
    let asignDate = document.getElementById("start-date").value;
    let dueDate = document.getElementById("end-date").value;
    let priorityValue = document.getElementById("priority").value;
    let progressValue = document.getElementById("progress").value;
  
    let taskExists = tasks.some(item =>
      item.taskName.toLowerCase() === taskName.toLowerCase() &&
      item.id !== Number(editingTaskId)
    );
  
    // Validate
    if (taskName === '') {
      errorTask.textContent = "Tên nhiệm vụ ko đc để trống";
      isValid = false;
    } else if (taskName.length < 5 || taskName.length > 500) {
      errorTask.textContent = "Tên nhiệm vụ phải dài từ 5 đến 500 ký tự";
      isValid = false;
    }
    if (taskExists) {
      errorTask.textContent = "Tên nhiệm vụ đã tồn tại";
      isValid = false;
    }
    if (assignee === '') {
      errorAssignee.textContent = "Người phụ trách ko đc để trống";
      isValid = false;
    }
    if (statusValue === '') {
      errorStatus.textContent = "Trạng thái ko đc để trống";
      isValid = false;
    }
    if (asignDate === '') {
      errorStart.textContent = "Ngày bắt đầu ko đc để trống";
      isValid = false;
    }
    if (dueDate === '') {
      errorEnd.textContent = "Ngày kết thúc ko đc để trống";
      isValid = false;
    } else if (dueDate < asignDate) {
      errorEnd.textContent = "Ngày kết thúc phải lớn hơn ngày bắt đầu";
      isValid = false;
    }
    if (priorityValue === '') {
      errorPrio.textContent = "Độ ưu tiên ko đc để trống";
      isValid = false;
    }
    if (progressValue === '') {
      errorProgress.textContent = "Tiến độ ko đc để trống";
      isValid = false;
    }
  
    if (isValid) {
      let selectedProject = JSON.parse(localStorage.getItem("selectedProject"));
      if (editingTaskId !== null) {
        let index = tasks.findIndex(t => t.id === editingTaskId);
        if (index !== -1) {
          tasks[index] = {
            id: editingTaskId,
            taskName,
            assignee,
            asignDate,
            dueDate,
            priority: priorityValue,
            progress: progressValue,
            status: statusValue,
            projectId: selectedProject?.id || null
          };
        }
      } else {
        let newTask = {
          id: tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
          taskName,
          assignee,
          asignDate,
          dueDate,
          priority: priorityValue,
          progress: progressValue,
          status: statusValue,
          projectId: selectedProject?.id || null
        };
        tasks.push(newTask);
      }
  
      localStorage.setItem("tasks", JSON.stringify(tasks));
      document.getElementById("task-form").reset();
      popupTask.style.display = "none";
      renderTasks();
      editingTaskId = null;
    }
  }
};  
renderTasks();


let currentProjectId = Number(localStorage.getItem("currentProjectId"));
let editingTaskId = localStorage.getItem("editingTaskId")
  ? Number(localStorage.getItem("editingTaskId"))
  : null;

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  // Gán dữ liệu lên form
  document.getElementById("task-name").value = task.taskName;
  document.getElementById("assignee").value = task.assignee;
  document.getElementById("status").value = task.status;
  document.getElementById("start-date").value = task.asignDate;
  document.getElementById("end-date").value = task.dueDate;
  document.getElementById("priority").value = task.priority;
  document.getElementById("progress").value = task.progress;

  // Gán id đang sửa vào biến và localStorage
  editingTaskId = id;
  localStorage.setItem("editingTaskId", id);

  // Mở popup
  popupTask.style.display = "flex";
}

document.getElementById("saveButtons").onclick = function (e) {
  e.preventDefault();

  // Clear lỗi
  errorTask.textContent = "";
  errorAssignee.textContent = "";
  errorStatus.textContent = "";
  errorStart.textContent = "";
  errorEnd.textContent = "";
  errorPrio.textContent = "";
  errorProgress.textContent = "";

  let isValid = true;

  // Lấy dữ liệu từ form
  let taskName = document.getElementById("task-name").value;
  let assignee = document.getElementById("assignee").value;
  let statusValue = document.getElementById("status").value;
  let asignDate = document.getElementById("start-date").value;
  let dueDate = document.getElementById("end-date").value;
  let priorityValue = document.getElementById("priority").value;
  let progressValue = document.getElementById("progress").value;

  let taskExists = tasks.some(item =>
    item.taskName &&
    item.taskName.toLowerCase() === taskName.toLowerCase() &&
    item.id !== editingTaskId
  );

  // Validate
  if (taskName === '') {
    errorTask.textContent = "Tên nhiệm vụ ko đc để trống";
    isValid = false;
  } else if (taskName.length < 5 || taskName.length > 500) {
    errorTask.textContent = "Tên nhiệm vụ phải dài từ 5 đến 500 ký tự";
    isValid = false;
  }
  if (taskExists) {
    errorTask.textContent = "Tên nhiệm vụ đã tồn tại";
    isValid = false;
  }
  if (assignee === '') {
    errorAssignee.textContent = "Người phụ trách ko đc để trống";
    isValid = false;
  }
  if (statusValue === '') {
    errorStatus.textContent = "Trạng thái ko đc để trống";
    isValid = false;
  }
  if (asignDate === '') {
    errorStart.textContent = "Ngày bắt đầu ko đc để trống";
    isValid = false;
  }
  if (dueDate === '') {
    errorEnd.textContent = "Ngày kết thúc ko đc để trống";
    isValid = false;
  } else if (dueDate < asignDate) {
    errorEnd.textContent = "Ngày kết thúc phải lớn hơn ngày bắt đầu";
    isValid = false;
  }
  if (priorityValue === '') {
    errorPrio.textContent = "Độ ưu tiên ko đc để trống";
    isValid = false;
  }
  if (progressValue === '') {
    errorProgress.textContent = "Tiến độ ko đc để trống";
    isValid = false;
  }

  if (isValid) {
    if (editingTaskId && !isNaN(editingTaskId)) {
      // Sửa task
      let index = tasks.findIndex(t => t.id === editingTaskId);
      if (index !== -1) {
        tasks[index] = {
          ...tasks[index],
          taskName,
          assignee,
          asignDate,
          dueDate,
          priority: priorityValue,
          progress: progressValue,
          status: statusValue,
        };
      }
    } else {
      // Thêm mới
      const newTask = {
        id: tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
        taskName,
        assignee,
        asignDate,
        dueDate,
        priority: priorityValue,
        progress: progressValue,
        status: statusValue,
        projectId: currentProjectId,
      };
      tasks.push(newTask);
    }

    // Lưu lại
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.removeItem("editingTaskId");
    editingTaskId = null;

    // Reset form & đóng popup
    document.getElementById("task-form").reset();
    popupTask.style.display = "none";

    // Gọi lại render
    renderTasks();
  }
};

function confirmDelete(id) {
  background.style.display = "flex";
  confirmPopup.style.display = "flex";
  document.getElementById("confirmDeleteBtn").onclick = function () {
    tasks = tasks.filter((t) => t.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    background.style.display = "none";
    confirmPopup.style.display = "none";
    renderTasks();
  };
}
renderTasks();
let deleteButtons = document.getElementsByClassName("deleteBtn");
for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].onclick = function () {
    let taskId = parseInt(this.getAttribute("data-id"));
    background.style.display = "flex";
    confirmPopup.style.display = "flex";
    document.getElementById("confirmDeleteBtn").onclick = function () {
      tasks = tasks.filter((t) => t.id !== taskId);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      background.style.display = "none";
      confirmPopup.style.display = "none";
      renderTasks();
    };
  };
}
let input = document.getElementById("findMission");
if (input) {
  input.oninput = function () {
    renderFind(this.value);
  };
}
function renderFind(keyword) {
  let selectedProject = JSON.parse(localStorage.getItem("selectedProject"));

  if (!keyword || keyword.trim() === "") {
    filteredGroup = null;
  } else {
    keyword = keyword.toLowerCase();
    filteredGroup = tasks.filter(task => {
      let matchProject = !selectedProject || task.projectId === selectedProject.id;
      let matchName = task.taskName.toLowerCase().includes(keyword);
      return matchProject && matchName;
    });
  }
  renderTasks();
}

let selectSort = document.getElementById("selectSort");

function getPriorityLevel(priority) {
  switch (priority) {
    case "Thấp": return 1;
    case "Trung Bình": return 2;
    case "Cao": return 3;
    default: return 0;
  }
}

selectSort.onchange = function () {
  let value = this.value;
  let targetList = filteredGroup || tasks;

  if (value === "asc") {
    targetList.sort((a, b) => getPriorityLevel(a.priority) - getPriorityLevel(b.priority));
  } else if (value === "desc") {
    targetList.sort((a, b) => getPriorityLevel(b.priority) - getPriorityLevel(a.priority));
  } else if (value === "dueDate-asc") {
    targetList.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  } else if (value === "dueDate-desc") {
    targetList.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
  }

  // Gán lại danh sách đã sort
  if (filteredGroup) {
    filteredGroup = [...targetList];
  } else {
    tasks = [...targetList];
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  renderTasks();
};
