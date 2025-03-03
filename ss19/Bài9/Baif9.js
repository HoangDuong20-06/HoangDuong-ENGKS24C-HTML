let result;

// "javascript" + 5
result = "javascript" + 5;
console.log(result); // Output: "javascript5"Khi cộng chuỗi với số, JavaScript sẽ chuyển số thành chuỗi và nối chúng lại với nhau

// "javascript" - 1
result = "javascript" - 1;
console.log(result); // Output: NaN Phép toán trừ không áp dụng được cho chuỗi, vì vậy kết quả là NaN

// "3" + 2
result = "3" + 2;
console.log(result); // Output: "32"Khi cộng chuỗi với số, JavaScript sẽ chuyển số thành chuỗi và nối chúng lại với nhau

// "5" - 4
result = "5" - 4;
console.log(result); // Output: 1 Khi trừ một số từ chuỗi chứa số, JavaScript sẽ chuyển chuỗi thành số và thực hiện phép toán

// isNaN("123")
result = isNaN("123");
console.log(result); // Output: false isNaN kiểm tra xem giá trị có phải là số không. Trong trường hợp này, "123" có thể chuyển đổi thành số, nên kết quả là false

// isNaN("hello")
result = isNaN("hello");
console.log(result); // Output: true isNaN kiểm tra xem giá trị có phải là số không. Trong trường hợp này, "hello" không thể chuyển đổi thành số, nên kết quả là true

// Number.isNaN("123")
result = Number.isNaN("123");
console.log(result); // Output: false kiểm tra xem giá trị có phải là NaN không. Trong trường hợp này, "123" không phải là NaN, nên kết quả là false

// Number.isNaN(NaN)
result = Number.isNaN(NaN);
console.log(result); // Output: true Number.isNaN kiểm tra xem giá trị có phải là NaN không. Trong trường hợp này, giá trị là NaN, nên kết quả là true