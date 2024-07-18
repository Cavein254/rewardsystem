const HeroCard = ({ title, description, icon }) => {
  return (
    <div className="md:w-[33%] border-2 border-gray-400 rounded-xl p-2">
      <div>
        <div className="flex flex-col justify-center items-center">
          {icon}
          <h4 className="font-bold text-2xl">{title}</h4>
        </div>
        <p className="font-thin text-3xl">{description}</p>
      </div>
    </div>
  );
};

export default HeroCard;
