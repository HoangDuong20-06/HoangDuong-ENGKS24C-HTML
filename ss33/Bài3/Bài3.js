let dish = [
    {name: "Rau sạch", category: "Đồ ăn" },
    { name: "Thịt lợn", category: "Đồ ăn"},
    {name: "Pepsi không calo", category: "Nước" },
    {name: "Cocacola", category: "Nước"},
    { name: "Cờ lê", category: "Dụng cụ"},
    { name: "Tuy vit", category: "Dụng cụ"},
    ];
    function renderDish(){
        let dish = document.getElementById("product");
            dish.innerHTML="";
            dish.forEach(function(item){
                dish.innerHTML += `<li><b>Tên đồ ăn:</b> ${item.name} - <b>Danh mục:</b> ${item.category} </li>`
            });    
    }
    renderDish();
    let button = document.getElementById("btn")
    button.onclick = function(){
        filterTodo();
    }
    function filterTodo() {
        let categorys = document.getElementById("category").value;
        let dishs = dish.filter((element)=> element.category === categorys);   
        let dish = document.getElementById("product");
        dishs.innerHTML="";
        dishs.forEach(function(item){
            dish.innerHTML += `<li><b>Tên đồ ăn:</b> ${item.name} - <b>Danh mục:</b> ${item.category} </li>`
        });    
    }
renderDish();