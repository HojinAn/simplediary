import React from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

export type DiaryInfo = {
  id: number;
  author: string;
  content: string;
  emotion: number;
  created_date: number;
};

const dummyList: Array<DiaryInfo> = [
  {
    id: 1,
    author: "사용자1",
    content: "내용",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "사용자2",
    content: "내용2",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "사용자4",
    content: "내용3",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "사용자4",
    content: "내용4",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "사용자5",
    content: "내용5",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
