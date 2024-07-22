import { GET_POST_DETAILS } from "@/graphql/operations/query/posts";
import { useQuery } from "@apollo/client";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { slug } = useParams();
  const { data } = useQuery(GET_POST_DETAILS, {
    variables: { slug },
  });
  const post = data?.getPostDetails;
  console.log(post);

  return (
    <div>
      <div>
        <div>
          <img
            src={post?.user?.image}
            alt="user image"
            className="rounded-full w-[25px]"
          />
          <h4>Author : {post?.user?.name}</h4>
        </div>
        <div>
          <h4>Posted: {post?.createdAt}</h4>
        </div>
      </div>
      <div>
        <h1>{post?.title}</h1>
        <ReactQuill theme={"bubble"} value={post?.body} readOnly={true} />
      </div>
    </div>
  );
};

export default PostDetails;
