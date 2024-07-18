import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between px-4 py-6">
        <div>
          <h1>Reward System</h1>
        </div>
        <div className="md:hidden">
          <h1>x</h1>
        </div>
        <div className="md:flex justify-between gap-2 hidden font-bold ">
          <Link to="#" className="hover:underline">
            Features
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/contactus" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
