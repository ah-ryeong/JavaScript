let i = 0;

while (i < 10) {
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
    i++;
}

// while문으로 숫자증감은 잘 X -> for문이 더 쉬우니까
// while은 조건이 좀 더 까다로운 경우에 더 많이 씀

let isFun = false;
while (isFun === false) { // = !isFun
    console.log(i); // 0~29까지 반복
    i++;
    if (i === 30) {
        isFun = true;
    }
}