import Header from "./Header";
import Hero from "./Hero";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-[100vh] bg-main bg-cover bg-center">
      <Header />
      <Hero />
    </div>
  );
};

export default Landing;
