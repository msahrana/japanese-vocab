import Banner from "./Banner";
import Alphabate from "/alphabate.png";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <img
          className="w-full h-[202px] border-r-2 border-[#B0A289]"
          src={Alphabate}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
