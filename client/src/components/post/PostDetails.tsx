import React from "react";
import ReactQuill from "react-quill";

const PostDetails = () => {
  return (
    <div>
      <div>
        <h1>title</h1>
        <ReactQuill
          theme={"bubble"}
          value={post.body.slice(0, 200)}
          readOnly={true}
        />
      </div>
    </div>
  );
};

export default PostDetails;
