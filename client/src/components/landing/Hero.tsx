const Hero = () => {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex w-full flex-col md:flex-row flex-grow">
        <div className="md:w-[50%] border-2 border-red-600 justify-center flex">
          <div>
            <h1 className="text-4xl font-bold uppercase">Reward System</h1>
            <h4>/We Craft Custom Homes/</h4>
            <button className="text-white text-xl uppercase rounded-xl px-6 py-2 hover:shadow-xl bg-slate-950">
              start
            </button>
          </div>
        </div>
        <div className="md:w-[50%] border-2 border-red-600"></div>
      </div>
      {/* footer */}
      <div className="flex w-full justify-between">
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
