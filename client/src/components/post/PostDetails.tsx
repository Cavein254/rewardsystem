import { AuthContext } from "@/Auth";
import { GetPostCommentsQuery } from "@/__generated__/graphql";
import { CREATE_COMMENT } from "@/graphql/operations/mutation/comment";
import { INCREMENT_POST_VIEWS } from "@/graphql/operations/mutation/post";
import { GET_POST_DETAILS } from "@/graphql/operations/query/posts";
import { useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "../comment/Comment";
import CreateComment from "../comment/CreateComment";
import ReactionBox from "../reaction/ReactionBox";
import "./_quiltext.css";

const PostDetails = () => {
  const { user } = useContext(AuthContext);
  const userId = user?.id;
  const { slug } = useParams();
  const [body, setBody] = useState("");
  const { data, refetch } = useQuery(GET_POST_DETAILS, {
    variables: { slug },
  });
  const postId = data?.getPostDetails?.id;
  const postComments = data?.getPostDetails?.comments;

  const [createComment] = useMutation(CREATE_COMMENT, {
    variables: {
      input: {
        body,
        userId,
        postId,
      },
    },
    onCompleted: (data) => {
      setBody("");
      refetch();
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const [incrementPageView] = useMutation(INCREMENT_POST_VIEWS, {
    variables: {
      postId: slug,
    },
  });
  const commentList = postComments?.map((comment) => (
    <Comment key={comment.id} comment={comment} refetch={refetch} />
  ));
  const post = data?.getPostDetails;
  const navigate = useNavigate();
  const onEnterPress = () => {
    createComment();
  };

  useEffect(() => {
    incrementPageView();
  }, [slug]);
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
      <ReactionBox postId={post?.id} />
      {user && (
        <div>
          <CreateComment
            body={body}
            setBody={setBody}
            onEnterPress={onEnterPress}
          />
        </div>
      )}
      <div>
        <h4 className="text-3xl font-bold">Latest Comments</h4>
        {postComments?.length !== 0 && (
          <div className="border-2 border-gray-400 p-4 overflow-y-auto h-[30vh]">
            {commentList}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetails;
