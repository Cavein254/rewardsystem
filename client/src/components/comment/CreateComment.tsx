import { ChangeEvent, KeyboardEvent } from "react";
interface CommentProps {
  body: string;
  setBody: (value: string) => void;
  onEnterPress: () => void;
}

const CreateComment = ({ body, setBody, onEnterPress }: CommentProps) => {
  const handleonChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setBody(e.target.value);
  };
  const handlekeypressDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault;
    onEnterPress();
  };
  return (
    <div className="my-4">
      <input
        placeholder="Write your comment"
        className="text-2xl w-full px-4 py-2 border-2 border-black"
        value={body}
        onChange={handleonChange}
        onKeyDown={handlekeypressDown}
      />
    </div>
  );
};

export default CreateComment;
