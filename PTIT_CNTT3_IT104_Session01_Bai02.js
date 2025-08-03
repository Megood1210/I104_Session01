const a = 5;
const arr = [1, 2, 3];

a = 10; 
arr.push(4); 

console.log("Giá trị a:", a);
console.log("Mảng arr:", arr);

// Dòng a = 10; gây lỗi: TypeError: Assignment to constant variable vì Với const a = 5, a là một giá trị 
// nguyên (kiểu dữ liệu nguyên thủy), nên khi gán a = 10, JavaScript báo lỗi vì không được phép thay đổi 
// tham chiếu của a.

// Dòng arr.push(4); không lỗi vì Với const arr = [1, 2, 3], arr là một đối tượng, const không cho phép gán lại mảng mới nhưng vẫn cho phép thay đổi nội dung bên trong 
