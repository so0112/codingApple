// 스크립트 코드를 작성

// 변수자리
let clickNum = 0;

// 로그인 버튼 클릭 횟수 감지
document.getElementById('loginButton').addEventListener('click', () => {
  clickNum += 1;
  console.log(clickNum);

  if (clickNum >= 10) {
    alert('클릭 ㄴㄴ');
  }
});

// 모달 열기
document.getElementById('loginButton').addEventListener('click', function () {
  document.getElementById('loginModal').style.display = 'block';
});

// 모달 닫기
document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('loginModal').style.display = 'none';
});

// 모달 외부 클릭 시 닫기
window.addEventListener('click', function (event) {
  if (event.target === document.getElementById('loginModal')) {
    document.getElementById('loginModal').style.display = 'none';
  }
});

// 폼 제출 시 로그인 기능 추가 (여기서는 단순히 콘솔에 로그를 출력하는 예시)
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // 폼 기본 동작 방지
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log('로그인 시도:', username, password);
});
