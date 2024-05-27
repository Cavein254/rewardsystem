import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full bg-slate-800 px-4 py-4">
      <div className="">
        <h1 className="text-3xl font-bold text-white">Reward Systems</h1>
      </div>
      <div>
        <Button className="bg-slate-900 rounded-lg text-white hover:bg-slate-200 hover:text-black">
          <Link to="/create/new">Create Post</Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
