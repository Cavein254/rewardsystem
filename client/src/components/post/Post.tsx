import EditorComponent from "../EditorComponent";
import { Button } from "../ui/button";

const Post = () => {
  return (
    <div>
      <div className="flex justify-between py-4">
        <h1 className="uppercase text-3xl font-bold mb-4">Create a Post</h1>
        <Button className="text-white bg-gray-700 hover:border-none hover:bg-green-600 hover:text-white">
          Publish
        </Button>
      </div>
      <div className="flex w-full">
        <input
          placeholder="Enter Post Title"
          className="px-4 py-2 text-2xl font-bold border-2 border-gray-400 w-full my-4"
        />
      </div>
      <EditorComponent />
      <div className="flex justify-between items-center pt-4 ">
        <Button className="border-2 border-slate-700 hover:border-none hover:bg-red-400 hover:text-white">
          Clear
        </Button>
        <Button className="border-2 border-slate-700 hover:border-none hover:bg-green-400 hover:text-white">
          Save
        </Button>
      </div>
    </div>
  );
};

export default Post;
