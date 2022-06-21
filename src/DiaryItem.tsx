import { DiaryInfo } from "./App";
interface ItemProps extends DiaryInfo {
  onRemove: Function;
}
const DiaryItem = ({
  author,
  content,
  created_date,
  emotion,
  id,
  onRemove,
}: ItemProps) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정 점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
      <button
        onClick={() => {
          window.confirm(`${id}번재 일기를 정말 삭제하시겠습니까?`) &&
            onRemove(id);
        }}
      >
        삭제하기
      </button>
    </div>
  );
};
export default DiaryItem;
