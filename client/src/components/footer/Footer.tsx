const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="bottom-0 flex justify-center py-4 bg-slate-300">
      <p className="text-center text-gray-600">
        Copyright &copy; {year} Reward Systems. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
