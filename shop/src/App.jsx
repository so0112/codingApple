import { Routes, Route, useNavigate, Outlet, useParams } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import EventPage from "./pages/EventPage";
import MainPage from "./pages/MainPage";

function App() {
  // 페이지 이동용 hook

  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<div>어바웃페이지임</div>} />
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<div>첫번째 이벤트 페이지</div>} />
          <Route path="two" element={<div>두번째 이벤트 페이지</div>} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
