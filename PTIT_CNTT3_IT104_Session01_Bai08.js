const insertArr = (arr1, arr2, position) => {

    // Tạo mảng kết quả
    const result = [
        ...arr1.slice(0, position), // Lấy các phần tử từ đầu đến vị trí chèn 
        ...arr2, //  Nối với toàn bộ phần tử của arr2
        ...arr1.slice(position) // Nối với phần còn lại của arr1 từ vị trí chèn trở đi 
    ];
    console.log(result);
    return result;       
};
// In kết quả
insertArr([1, 2, 3, 7, 8], [4, 5, 6], 3);
insertArr(["a", "b", "e", "f"], ["c", "d"], 2)
