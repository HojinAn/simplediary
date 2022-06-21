import { DiaryInfo } from "./App";
import DiaryItem from "./DiaryItem";

interface ListProps {
  diaryList: Array<DiaryInfo>;
  onRemove: Function;
}

const DiaryList = ({ diaryList, onRemove }: ListProps) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h2>{diaryList.length}개의 일기가 있습니다.</h2>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} onRemove={onRemove} {...it} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
