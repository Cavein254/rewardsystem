import { AuthContext } from "@/Auth";
import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
const Comment = ({ comment }) => {
  const { user } = useContext(AuthContext);

  console.log(comment);
  return (
    <div className="flex items-end flex-col">
      <div className="flex justify-between bg-blue-200 py-2 px-4 rounded-full items-center">
        {user?.id === comment?.user?.id && (
          <button className="mr-4">
            <FaRegTrashAlt
              size={18}
              className="text-red-400 hover:text-red-800 "
            />
          </button>
        )}

        <p>{comment?.body}</p>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-gray-800">{comment?.user?.name}</span>
            <span className="text-sm text-gray-800">{comment?.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
