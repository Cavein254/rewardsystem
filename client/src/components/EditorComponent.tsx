import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface EditorComponentProps {
  post: string;
  setPost: () => void;
}
const EditorComponent = ({ post, setPost }: EditorComponentProps) => {
  return (
    <div>
      <ReactQuill theme="snow" value={post} onChange={setPost} />
    </div>
  );
};

export default EditorComponent;
