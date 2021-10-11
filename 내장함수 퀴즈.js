// 10 보다 큰 값 갯수 세기
function countBiggerThanTen(number) {
    let count = 0;

    numbers.forEach(n => {
        if(n>10) {
            count++;
        }
    });
    return count;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5