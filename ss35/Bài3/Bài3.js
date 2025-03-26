const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://thienthanhcomputer.com/wp-content/uploads/2024/06/s-l1600-7.webp',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://genk.mediacdn.vn/zoom/700_438/139269124445442048/2024/11/11/70708264152136645631-17312450477951143716490-165-0-1065-1440-crop-173124507437540501606-1731289475236-1731289477372329670182-0-0-477-764-crop-17312895335171791184342.jpeg',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://tainghechinhhang.vn/wp-content/uploads/2024/04/Sony-WH-1000XM5-3.jpg',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://cdn.tgdd.vn/News/1353531/nen-mua-apple-watch-nao-phien-ban-series-1-2-3-4-5-6-hay-se-10-800x450.jpg',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp0tZcn0UdOnqdQtE6l8vCD0NNVMooQZZiJYWfNT8W7A_b98R_',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
    }
];
function renderProducts(){
    let card = document.getElementById("card");
        card.innerHTML="";
        products.forEach(function(item){
            card.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text">${item.price} VNĐ</p>
                    <a href="#" class="btn btn-primary">Buy</a>
                </div>
            </div>`
        });    
}
renderProducts();
let button = document.getElementById("button")
button.onclick = function(){
    searchProducts()
}
function searchProducts() {
    let search = document.getElementById("search").value;
    let searchCard = products.filter((element) => element.name.toLowerCase().includes(search.toLowerCase()));
    let card = document.getElementById("card");
        card.innerHTML="";
        searchCard.forEach(function(item){
            card.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text">${item.price} VNĐ</p>
                    <a href="#" class="btn btn-primary">Buy</a>
                </div>
            </div>`
        });
        saveSearch();
}
renderProducts();
function saveSearch(){
    localStorage.setItem("searchProduct",JSON.stringify(products))
}