const Header = () => {
  return (
    <div>
      <div className="flex justify-between px-4 py-6">
        <div>
          <h1>Reward System</h1>
        </div>
        <div className="md:hidden">
          <h1>x</h1>
        </div>
        <div className="md:flex justify-between gap-2 hidden">
          <div>Features</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
