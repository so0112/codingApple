import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";

function App() {
  // 페이지 이동용 hook

  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/about" element={<div>어바웃페이지임</div>} />
        <Route path="/event" element={<div>이벤트 페이지</div>}>
          <Route path="one" element={<div>이벤트 페이지</div>} />
          <Route path="two" element={<div>이벤트 페이지</div>} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
