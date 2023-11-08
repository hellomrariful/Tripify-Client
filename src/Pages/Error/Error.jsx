import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="flex items-center justify-center mx-auto w-2/3">
        <img
          src="https://i.ibb.co/tXBtZmY/404-error-with-portals-pana.png"
          alt=""
        />
      </div>
      <div className="mx-auto text-center">
        <h1 className="text-6xl text-slate-400 font-heading">404</h1>
        <p className="mt-3 text-2xl font-heading text-[#FF444A] ">
          This page could not be found.
        </p>
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
