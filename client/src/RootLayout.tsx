import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const RootLayout = () => {
  return (
    <div className="h-[100vh]">
      <nav>
        <Header />
      </nav>
      <main className="container min-h-[100vh]">
        <Outlet />
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
