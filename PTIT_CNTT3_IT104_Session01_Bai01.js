for (let i = 0; i <= 5; i++) {
    console.log("Trong vòng lặp: i =", i);
}

console.log("Ngoài vòng lặp: i =", i);
// Kết luận :
// Biến i được khai báo bằng let chỉ có phạm vi trong khối (block scope) của vòng lặp for. 
// Vì vậy, khi truy cập i ngoài vòng lặp, trình duyệt sẽ báo lỗi: ReferenceError: i is not defined.