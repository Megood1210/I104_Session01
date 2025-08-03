const totalArray = (...arrList) => { // Nhận số lượng tham số không giới hạn,
    return arrList.map(arr => // Lặp qua mảng
        arr.reduce((sum, numbers) => sum + numbers, 0) // Tính tổng các phần tử tring mảng
    );
};

// In kết quả
const result = totalArray([1, 2], [6, 7, 8], [12, 8]);
console.log(result); 
