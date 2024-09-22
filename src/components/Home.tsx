import Booking from "./Booking";
import Navbar from "./Navbar";
import SideImages from "./SideImages";

const Home = () => {
  return (
    <div className="w-full h-[36rem] sm:h-[52rem] mx-4 lg:mx-32 xl:mx-40 2xl:mx-64 ">
      <div className="bg-mainBg rounded-3xl shadow-2xl w-full pb-2 sm:pb-4 xl:pb-0">
      <Navbar />
      <div className="w-full h-[32.5rem] sm:h-[48.5rem] lg:h-[46.5rem] flex flex-col lg:flex-row gap-4 2xl:gap-7 px-2 pb-2 sm:px-5 overflow-y-scroll hide-scrollbar">
        <Booking />
        <SideImages />
      </div>
      </div>
    </div>
  );
};

export default Home;
