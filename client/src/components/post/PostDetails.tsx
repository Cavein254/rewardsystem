import { GET_POST_DETAILS } from "@/graphql/operations/query/posts";
import { useQuery } from "@apollo/client";
import React from "react";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { slug } = useParams();
  console.log(slug);
  const { data } = useQuery(GET_POST_DETAILS, {
    variables: { slug },
  });
  console.log(data);
  return (
    <div>
      <div>
        <h1>title</h1>
        <ReactQuill
          theme={"bubble"}
          value="{post.body.slice(0, 200)}"
          readOnly={true}
        />
      </div>
      <h1>{slug}</h1>
    </div>
  );
};

export default PostDetails;
