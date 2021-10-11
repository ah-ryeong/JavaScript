// promise : 비동기 작업을 편하게 처리할 수 있도록 es6에 도입

// callback 사용해보기
function increaseAndPrint (n, callback) {
    setTimeout(() => {
        const increased = n +1;
        console.log(increased);

        if(callback) {
            callback(increased);
        }
    }, 1000);
}

increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    console.log('작업끝'); // 1 2 3 4 5 작업끝
                })
            })
        })
    })
});

// promise 사용해보기 
const myPromise = new Promise((resolve, reject) => {
    // promise는 성공할 수도 실패할 수도 있음 
    // 성공할 때는 resolve 호출 , 실패할 때는 reject 호출해주면 된다.

    // 1초 뒤에 성공하는 promise
    setTimeout(() => {
        resolve('result');
    }, 1000);

    // 1초 뒤에 실패하는 promise 
    setTimeout2(() => {
        reject(new Error());
    }, 1000);
});

// promise 가 끝나고 어떤 작업을 하고 싶은 경우
myPromise.then(result => {
    console.log(result);
});

myPromise.then(result => {
    console.log(result);
    // 에러를 잡아낼 때는 catch를 사용
}).catch(e => {
    console.error(e);
});

// promise 를 만드는 함수
function increaseAndPrint2(n) {
    return new Promise((resolve, reject) => {
        // 값이 5가 되면 실패처리
        setTimeout(() => {
            const value = n +1;
            if(value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

increaseAndPrint2(0).then(n => {
    console.log('result : ' + n);
});