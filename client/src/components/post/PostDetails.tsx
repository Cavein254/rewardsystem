import { GET_POST_DETAILS } from "@/graphql/operations/query/posts";
import { useQuery } from "@apollo/client";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
import "./_quiltext.css";
import Comment from "../comment/Comment";
import CreateComment from "../comment/CreateComment";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PostDetails = () => {
  const { slug } = useParams();
  const { data } = useQuery(GET_POST_DETAILS, {
    variables: { slug },
  });
  const post = data?.getPostDetails;
  const navigate = useNavigate();
  console.log(post);

  return (
    <div>
      <div className="mt-[3%]">
        <button className="hover:text-red-800" onClick={() => navigate(-1)}>
          <IoArrowBackCircleSharp className="text-6xl" />
        </button>
      </div>
      <div className="mt-[2%]">
        <div className="flex justify-end">
          <div className="flex flex-row items-center">
            <div className="mr-2">
              <img
                src={post?.user?.image}
                alt="user image"
                className="rounded-full w-[50px]"
              />
            </div>
            <div>
              <h4 className="text-2xl">
                Author : <span className="font-bold">{post?.user?.name}</span>
              </h4>
              <h4>
                Posted: <span className="font-bold">{post?.createdAt}</span>
              </h4>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">{post?.title}</h1>
          <ReactQuill
            theme={"bubble"}
            className="ql-editor"
            value={post?.body}
            readOnly={true}
          />
        </div>
      </div>
      <div>
        <CreateComment />
      </div>
      <div>
        <h4 className="text-3xl font-bold">Latest Comments</h4>
        <Comment />
      </div>
    </div>
  );
};

export default PostDetails;
