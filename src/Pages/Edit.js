import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const id = searchParams.get("id");
  console.log("id : ", id);

  const mode = searchParams.get("mode");
  console.log("mode : ", mode);

  return (
    <div>
      <h1>이곳은 수정 입니다.</h1>
      <button onClick={() => setSearchParams({ who: "test" })}>QS바꾸기</button>
      <button onClick={() => navigate("/")}>HOME으로 가기</button>
    </div>
  );
};

export default Edit;
