import EditorComponent from "../EditorComponent";
import { Button } from "../ui/button";

const Post = () => {
  return (
    <div >
      <div className="flex justify-between py-4">
      <h1 className="uppercase text-3xl font-bold mb-4">Create a Post</h1>
      <Button className="text-white bg-gray-700 hover:border-none hover:bg-green-600 hover:text-white">
          Publish
        </Button>
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
