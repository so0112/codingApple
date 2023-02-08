import React from "react";
import { Outlet } from "react-router-dom";

const EventPage = () => {
  return (
    <div>
      이벤트 페이지입니다.
      <Outlet></Outlet>
    </div>
  );
};

export default EventPage;
