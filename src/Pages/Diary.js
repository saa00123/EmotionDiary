import React from "react";
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>이곳은 일기 상세 페이지입니다.</h1>
    </div>
  );
};

export default Diary;
