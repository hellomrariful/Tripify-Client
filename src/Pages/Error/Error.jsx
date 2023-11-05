import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="w-40 h-28 flex items-center justify-center mx-auto lg:mt-96 mt-56">
        <img src="https://i.ibb.co/LCNvH2m/error.png" alt="" />
      </div>
      <div className="mx-auto text-center mt-14">
        <h1 className="text-6xl text-slate-400 font-heading">404</h1>
        <p className="mt-3 text-2xl font-heading text-[#FF444A] ">This page could not be found.</p>
        <Link to={"/"}>
          <button className="bg-[#524FF5] text-white px-7 py-3 rounded text-xl mt-5 font-bold">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
