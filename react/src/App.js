import { useState } from "react";
import "./App.css";

function App() {
  let logo = "ReactBlog";
  let [title1, setTitle1] = useState("남자 코트 추천");
  let [title2, setTitle2] = useState("강남 우동 맛집");
  let [title3, setTitle3] = useState("파이썬 독학");

  let [like, setlike] = useState(0);

  const onLike = () => {
    setlike(like + 1);
  };

  const changeTitle1 = () => {
    // 원본 데이터를 수정하는 것보다는 복사본 수정이 올바른 방법
    let copy = [...title1];
    copy[0] = "여자코트 추천";
    setTitle1(copy);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4 onClick={changeTitle1}>
          {title1} <span onClick={onLike}>👍🏻</span> {like}
        </h4>
        <p>2월 1일 발행</p>
      </div>
      <hr />
      <div className="list">
        <h4>{title2}</h4>
        <p>2월 1일 발행</p>
      </div>
      <hr />
      <div className="list">
        <h4>{title3}</h4>
        <p>2월 1일 발행</p>
      </div>
      <hr />
    </div>
  );
}

export default App;
