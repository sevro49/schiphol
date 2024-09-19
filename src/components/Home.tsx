import Navbar from "./Navbar";
import SideImages from "./SideImages";

const Home = () => {
  return (
    <div className="bg-mainBg w-full rounded-3xl h-[48rem] shadow-2xl mx-64 px-4">
      <Navbar />
      <SideImages />
    </div>
  );
};

export default Home;
