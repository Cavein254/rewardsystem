interface CommentProps {
  body: string;
  setBody: () => void;
}

const CreateComment = ({ body, setBody }: CommentProps) => {
  const handleonChange = () => {};
  return (
    <div className="my-4">
      <input
        placeholder="Write your comment"
        className="text-2xl w-full px-4 py-2 border-2 border-black"
        value={body}
        onChange={handleonChange}
      />
    </div>
  );
};

export default CreateComment;
