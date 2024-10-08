import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";
import { PiEyesFill } from "react-icons/pi";
import { IoChatbubbles } from "react-icons/io5";
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";
const PostItem = ({ post }) => {
  return (
    <Link to={`/post/${post.slug}`}>
      <div className=" my-2 border-2 border-slate-700 px-4 py-2">
        <div>
          <h1 className="font-bold text-3xl">{post.title}</h1>
          <h4 className="font-lg font-thin">
            <ReactQuill
              theme={"bubble"}
              value={post.body.slice(0, 100)}
              readOnly={true}
            />
          </h4>
        </div>
        <div className="flex justify-between items-center my-2">
          <div className="flex gap-4">
            <span className="flex items-center">
              {" "}
              <FaHeart size={18} className="text-red-500 mr-2 " />{" "}
              <span className="mr-1 font-bold">{post.lovePost}</span>Likes
            </span>
            <span className="flex items-center">
              <FaHeartBroken size={18} className="text-red-500   mr-2" />{" "}
              <span className="mr-1 font-bold">{post.hatePost}</span>Disikes
            </span>
          </div>
          <span className="flex items-center">
            <PiEyesFill size={18} className=" mr-2" />{" "}
            <span className="text-2xl font-bold mx-2">{post.views}</span> Views
          </span>
          <span className="flex items-center">
            <IoChatbubbles size={18} className=" mr-2" />
            <span className="text-2xl font-bold mx-2">
              {post._count.comments}
            </span>
            Comments
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
