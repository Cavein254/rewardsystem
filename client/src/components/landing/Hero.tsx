import HeroCard from "./HeroCard";
import { HeroData } from "./HeroData";

const Hero = () => {
  const allData = HeroData.map((data) => {
    return (
      <HeroCard
        key={data.id}
        title={data.title}
        description={data.description}
        icon={data.icon}
      />
    );
  });
  return (
    <div className="flex flex-col h-[100vh]">
      <div className="flex w-full  flex-row h-[100%] md:h-[80%] bg-black/30">
        <div className="justify-center flex w-full">
          <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-7xl font-bold uppercase text-center">
              Reward System
            </h1>
            <h4 className="text-2xl">/We Craft Custom Homes/</h4>
            <div className="py-4">
              <button className="text-white text-2xl uppercase rounded-xl px-8 py-4 hover:shadow-xl bg-slate-950">
                start
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="h-20% bg-white pt-4">
        <div>
          <h4 className="text-4xl font-bold uppercase px-4">Features</h4>
        </div>
        <div className="flex w-full justify-between gap-2 flex-col md:flex-row px-4">
          {allData}
        </div>
      </div>
    </div>
  );
};

export default Hero;
