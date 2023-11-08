import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <header>
        <div
          className="  w-full bg-center bg-cover h-[38rem] rounded-xl"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/w13m3d3rhif/web/homepage/homepage-background.jpg?tr=f-auto,pr-true')",
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40 rounded-xl">
            <div>
              <h1 className="text-3xl font-semibold text-white lg:text-4xl text-center font-heading md:w-72 lg:w-full">
                Discover Your Life,
                <span className="text-blue-500">Travel </span> Where You Want
              </h1>
              <h3 className="mt-2 lg:w-130 text-gray-200 md:w-80 mx-auto">
                Would you explore natur paradise in the world, let’s find the
                best destination in world with us.
              </h3>
              <Link to={"/services"}>
                <button className="px-5 py-3 mt-4 font-medium text-white transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 text-center  md:ml-20 lg:ml-56">
                  See Place
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
