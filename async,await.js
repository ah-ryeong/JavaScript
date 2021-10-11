// promise 를 더 쉽게 사용 할 수 있게 해줌 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError () {
    const error = new Error();
    // 에러를 발생
    throw error;
}

// 프로세스 작성 
async function process() {
    console.log('안녕하세요');
    await sleep(1000);
    console.log('반갑습니다.');
    return true;
}

process(); // 안녕하세요 (1초뒤) 반갑습니다

process().then(value => {
    console.log(value); // 안녕하세요 (1초뒤) 반갑습니다 true
});

// 에러를 잡아주고 싶은 경우
async function process2() {
    try {
        await makeError();
    } catch (e) {
        console.error(e);
    }
}