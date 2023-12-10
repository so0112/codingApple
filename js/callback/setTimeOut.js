// promise 정리용 문서
const loop = ({ message, loopNum }) => {
  console.time(message);
  let num = 0;
  for (let i = 0; i <= loopNum; i++) {
    num += i;
  }
  console.timeEnd(message);
};

const syncTest = ({ message, time }) => {
  setTimeout(() => {
    console.log(message);
  }, time);
};

syncTest({ message: '비동기 1번', time: 3000 });
syncTest({ message: '비동기 2번', time: 1500 });
syncTest({ message: '비동기 3번', time: 200 });

loop({ message: '동기 4번', loopNum: 2000000000 });
loop({ message: '동기 5번', loopNum: 500000 });
