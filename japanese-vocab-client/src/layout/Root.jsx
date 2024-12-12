import {Outlet} from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Root = () => {
  return (
    <div>
      <div className="container mx-auto max-w-screen-2xl">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
