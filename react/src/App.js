import { useState } from "react";
import "./App.css";

function App() {
  let logo = "ReactBlog";
  let [blogObject, setBlogObject] = useState([
    { title: "남자코트 추천", date: "2월 3일", like: 0 },
    { title: "강남우동 맛집", date: "1월 1일", like: 0 },
    { title: "파이썬 독학", date: "12월 2일", like: 0 },
  ]);

  let [modal, setModal] = useState(false);
  let [currentNumber, setCurrentNumber] = useState();

  let [input, setInput] = useState();

  const onLikeButton = (index) => {
    let newArray = [...blogObject];
    newArray[index].like++;
    setBlogObject(newArray);
  };

  const onChangeModal = (index) => {
    if (index === currentNumber) {
      setModal(!modal);
    } else {
      setModal(true);
    }
  };

  const onChangeModalNumber = (index) => {
    setCurrentNumber(index);
  };

  const postBlog = () => {
    let copyArray = [...blogObject];
    copyArray.unshift({ title: input, date: "2월 1일", like: 0 });
    deleteInput();
    setBlogObject(copyArray);
  };

  const deleteInput = () => {
    setInput("");
  };

  const deleteBlog = (index) => {
    let copyArray = [...blogObject];
    copyArray.splice(index, 1);
    setBlogObject(copyArray);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      {blogObject.map((el, index) => (
        <>
          <div className="list">
            <h4 onClick={() => (onChangeModalNumber(index), onChangeModal(index))}>{el.title}</h4>
            <span onClick={() => onLikeButton(index)}>👍🏻{el.like}</span>
            <p>2월 1일 발행</p>
          </div>
          <button onClick={() => deleteBlog(index)}>해당글 삭제하기</button>
          <hr />
        </>
      ))}
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={postBlog}>게시글 작성</button>
      {modal && <Modal setBlogObject={setBlogObject} blogObject={blogObject} currentModalNumber={currentNumber} />}
    </div>
  );
}

function Modal({ blogObject, currentModalNumber, setBlogObject }) {
  return (
    <div className="modal">
      <h4>{blogObject[currentModalNumber].title}</h4>
      <p>{blogObject[currentModalNumber].date}</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...blogObject];
          copy[currentModalNumber].title = "수정된 제목";
          setBlogObject(copy);
        }}>
        글수정
      </button>
    </div>
  );
}

export default App;
