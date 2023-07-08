import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// pages
import Home from "./Pages/Home";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import Diary from "./Pages/Diary";

//components
import MyButton from "./Components/MyButton";
import MyHeader from "./Components/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <MyHeader headText='App' />
        <MyButton
          text={"button"}
          onClick={() => alert("button click")}
          type={"positive"}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/diary/:id' element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
