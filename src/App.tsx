import React, { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

export interface DiaryInfo {
  id: number;
  author: string;
  content: string;
  emotion: number;
  created_date: number;
}

// const dummyList: Array<DiaryInfo> = [
//   {
//     id: 1,
//     author: "사용자1",
//     content: "내용",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "사용자2",
//     content: "내용2",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "사용자4",
//     content: "내용3",
//     emotion: 4,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: "사용자4",
//     content: "내용4",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 5,
//     author: "사용자5",
//     content: "내용5",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState<Array<DiaryInfo>>([]);
  const dataId = useRef(0);

  const onCreate = (author: string, content: string, emotion: number) => {
    const created_date = new Date().getTime();
    const newItem: DiaryInfo = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
