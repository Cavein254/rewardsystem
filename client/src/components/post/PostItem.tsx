import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";
import { PiEyesFill } from "react-icons/pi";
import { IoChatbubbles } from "react-icons/io5";
const PostItem = () => {
  return (
    <div className=" my-2 border-2 border-slate-700 px-4 py-2">
      <div>
        <h1 className="font-bold text-3xl">Current Posts</h1>
        <h4 className="font-lg font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi
          sequi est, quod magni recusandae quidem ullam excepturi facere quam
          asperiores dolorum. Perferendis quod odio illum aliquam esse
          recusandae ratione.
        </h4>
      </div>
      <div className="flex justify-between items-center my-2">
        <div className="flex gap-4">
          <span className="flex items-center">
            {" "}
            <FaHeart size={18} className="text-red-500 mr-2 " /> Likes
          </span>
          <span className="flex items-center">
            <FaHeartBroken size={18} className="text-red-500   mr-2" /> Disikes
          </span>
        </div>
        <span className="flex items-center">
          <PiEyesFill size={18} className=" mr-2" /> Views
        </span>
        <span className="flex items-center">
          <IoChatbubbles size={18} className=" mr-2" />
          Comments
        </span>
      </div>
    </div>
  );
};

export default PostItem;
