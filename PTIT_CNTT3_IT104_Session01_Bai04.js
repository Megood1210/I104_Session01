const kiemTraChanLe = (a) => {
    if (typeof a !== 'number' || isNaN(a)) {
        return  `${a} not is number`;
    }

    return (a % 2 === 0)? `${a} is an even number`: ` ${a} is odd`;
};

// In kết quả
console.log(kiemTraChanLe(12));      
console.log(kiemTraChanLe(5));   
console.log(kiemTraChanLe("a")); 
