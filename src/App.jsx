import Footer from "./layout/Footer/Footer";
import { Main } from "./layout/Main/Main";
import NavHeroHeader from "./layout/NavHeader/NavHeader";

export const App = () => {
  return (
    <div className="">
      <div className=" w-full bg-chinese-black text-white">
        <div className=" relative font-display w-[90%] md:w-[85%] lg:w-[80%] mx-auto ">
          <NavHeroHeader />
          <Main />
        </div>
      </div>

      <div className="w-full bg-raisin-black text-white">
        <div className="font-display w-[90%] md:w-[85%] lg:w-[75%] mx-auto ">
          <Footer />
        </div>
      </div>
    </div>
  );
};
