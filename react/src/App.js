import { useState } from "react";
import "./App.css";

function App() {
  let logo = "ReactBlog";
  let [글제목, 글제목변경] = useState(["남자코트 추천", "강남 우동맛집", "파이썬독학"]);

  let [like, setlike] = useState(0);

  const onLike = () => {
    setlike(like + 1);
  };

  const changeTitle1 = () => {
    // 원본 데이터를 수정하는 것보다는 복사본 수정이 올바른 방법
    // 나중에 원본 데이터가 필요할 때도 있기 때문
    let copy = [...글제목];
    copy[0] = "여자코트 추천";
    글제목변경(copy);
  };

  const sortTitle = () => {
    let copy = [...글제목];
    copy.sort();
    글제목변경(copy);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      <button onClick={sortTitle}>가나다순 정렬</button>
      <div className="list">
        <h4 onClick={changeTitle1}>
          {글제목[0]} <span onClick={onLike}>👍🏻</span> {like}
        </h4>
        <p>2월 1일 발행</p>
      </div>
      <hr />
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 1일 발행</p>
      </div>
      <hr />
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 1일 발행</p>
      </div>
      <hr />
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>제목</p>
      <p>제목</p>
    </div>
  );
}

export default App;
