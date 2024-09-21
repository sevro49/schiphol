import Booking from "./Booking";
import Navbar from "./Navbar";
import SideImages from "./SideImages";

const Home = () => {
  return (
    <div className="bg-mainBg w-full rounded-3xl h-[52rem] shadow-2xl mx-64 ">
      <Navbar />
      <div className="flex justify-between gap-7 px-5">
        <Booking />
        <SideImages />
      </div>
    </div>
  );
};

export default Home;
