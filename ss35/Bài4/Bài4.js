let courses = JSON.parse(localStorage.getItem('courseslist')) || [
    { id: 1, name: "Nguyễn Văn A", position: "Developer" },
    { id: 2, name: "Trần Thị B", position: "Designer" },
    { id: 3, name: "Phạm Văn C", position: "Project Manager" },
    { id: 4, name: "Lê Thị D", position: "QA Engineer" },
    { id: 5, name: "Vũ Văn E", position: "DevOps" },
    { id: 6, name: "Hoàng Thị F", position: "HR Manager" }
];

const rowsPerPage = 3; 
let currentPage = 1;

function renderCourses() {
    let table = document.getElementById("tableBody");
    table.innerHTML = "";
    let start = (currentPage - 1) * rowsPerPage;
    let end = start + rowsPerPage;
    let paginatedCourses = courses.slice(start, end);  

    paginatedCourses.forEach((item) => {
        table.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.position}</td>
        </tr>`;
    });

    renderPagination();
}

function renderPagination() {
    let pagination = document.getElementById("pagination");
    pagination.innerHTML = ''; 
    let totalPages = Math.ceil(courses.length / rowsPerPage);

    // Nút Previous
    pagination.innerHTML += currentPage > 1 
        ? `<button onclick="changePage(${currentPage - 1})">Previous</button>` 
        : `<button disabled>Previous</button>`;

    // Nút số trang
    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += currentPage === i 
            ? `<button onclick="changePage(${i})" class="active">${i}</button>` 
            : `<button onclick="changePage(${i})">${i}</button>`;
    }

    // Nút Next
    pagination.innerHTML += currentPage < totalPages 
        ? `<button onclick="changePage(${currentPage + 1})">Next</button>` 
        : `<button disabled>Next</button>`;
}

function changePage(page) {
    let totalPages = Math.ceil(courses.length / rowsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderCourses();
    }
}

let button = document.getElementById("btn");
button.onclick = function () {
    let name = document.getElementById("name").value;
    let position = document.getElementById("position").value;
    
    if (name === "" || position === "") {
        alert("Thông tin trống");
        return;
    }

    let maxId = courses.length > 0 ? Math.max(...courses.map(c => c.id)) : 0;
    courses.push({ id: maxId + 1, name, position });

    save();

    currentPage = Math.ceil(courses.length / rowsPerPage); 
    renderCourses();

    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
};

function save() {
    localStorage.setItem('courseslist', JSON.stringify(courses));
}

renderCourses();
