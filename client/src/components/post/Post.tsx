import { useContext, useState } from "react";
import EditorComponent from "../EditorComponent";
import { Button } from "../ui/button";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "@/graphql/operations/mutation/user";
import { AuthContext } from "@/Auth";
import { createSlug } from "@/lib/utils";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Post = () => {
  const [post, setPost] = useState("");
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [createPost] = useMutation(CREATE_POST, {
    variables: {
      input: {
        title,
        body: post,
        author: user?.id,
        slug: createSlug(title),
      },
    },
    onCompleted: (data) => {
      if (!data?.createPost?.success) {
        setError(data?.createPost?.message);
      }
      if (data?.createPost?.success) {
        return navigate("/dashboard", { replace: true });
      }
    },
  });
  const handleCreatePost = () => {
    createPost();
  };
  const handleClear = () => {
    setTitle("");
    setPost("");
  };
  return (
    <div>
      {error && (
        <div className="rounded-md px-4 py-2 bg-red-500">
          <h1 className="text-2xl font-bold text-white">{error}</h1>
        </div>
      )}
      <div className="flex justify-between py-4">
        <h1 className="uppercase text-3xl font-bold mb-4">Create a Post</h1>
        <Button
          className="text-white bg-gray-700 hover:border-none hover:bg-green-600 hover:text-white"
          onClick={handleCreatePost}
        >
          Publish
        </Button>
      </div>
      <div className="flex w-full">
        <input
          placeholder="Enter Post Title"
          className="px-4 py-2 text-2xl font-bold border-2 border-gray-400 w-full my-4"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <EditorComponent post={post} setPost={setPost} />
      <div className="flex justify-between items-center pt-4 ">
        <Button
          className="border-2 border-slate-700 hover:border-none hover:bg-red-400 hover:text-white"
          onClick={() => handleClear()}
        >
          Clear
        </Button>
        <Button
          className="border-2 border-slate-700 hover:border-none hover:bg-green-400 hover:text-white"
          onClick={() => handleCreatePost()}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Post;
