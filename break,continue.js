for(let i = 0; i < 10; i++) {
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
    // continue : 특정 조건이 만족되면 다음 루프 실행
    // 2가 스킵되고 다음 루프 실행~
    if(i === 2) continue; // 0 1 3 4 5 6 7 8 9
    
    // break : 반복문을 아예 끝냄
    if(i === 5) break; // 0 1 3 4 5 
}