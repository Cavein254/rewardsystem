import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/Auth";
import DropdownHeader from "./DropdownHeader";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-row justify-between items-center w-full bg-slate-800 px-4 py-4">
      <div className="">
        <Link to="/">
          <h1 className="text-3xl font-bold text-white">Reward System</h1>
        </Link>
      </div>
      <div>
        <div>
          {user !== undefined ? (
            <>
            <DropdownHeader user={user}/>
            </>
          ) : (
            <Button className="bg-slate-900 rounded-lg text-white hover:bg-slate-200 hover:text-black">
              <Link to="http://localhost:4000/auth/google">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
