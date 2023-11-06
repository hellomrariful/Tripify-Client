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
            <div className=" ">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl text-center font-heading">
                Discover Your Life,
                <span className="text-blue-400">Travel </span> Where You Want
              </h1>
              <h3 className="mt-2 w-130">Would you explore natur paradise in the world, let’s find the best destination in world with us.</h3>
              <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Start project
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
