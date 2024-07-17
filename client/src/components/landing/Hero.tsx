const Hero = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <div className="flex w-full flex-col md:flex-row h-[80%] ">
        <div className="justify-center flex w-full">
          <div className="flex flex-col justify-center items-center">
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
      <div className="flex w-full justify-between h-[20%]">
        <div className="border-2 border-green-600 w-[33%]">
          <div>
            <h4 className="font-bold">
              We offer the Best supplies and Materials
            </h4>
            <p className="font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              voluptatem odit laborum iste aspernatur mollitia rerum harum
              nobis. Voluptatum eius cupiditate fugit molestiae provident
              aliquid omnis, voluptate ipsam culpa neque.
            </p>
          </div>
          <div></div>
        </div>
        <div className="border-2 border-green-600 w-[33%]"> </div>
        <div className="border-2 border-green-600 w-[33%]"></div>
      </div>
    </div>
  );
};

export default Hero;
