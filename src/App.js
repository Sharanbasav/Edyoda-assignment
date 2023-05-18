import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Form from "./Component/Form/Form";
import "./style.css";
import style from "./App.module.css";
import Content from "./Component/Content/Content";

export default function App() {
  return (
    <div className={style.main}>
      <Navbar />
      <div className={style.wrapper}>
        <div className={style.left}>
          <Content />
        </div>
        <div className={style.right}>
          <Form />
        </div>
      </div>
    </div>
  );
}
