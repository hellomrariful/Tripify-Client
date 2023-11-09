// import { useState, useEffect } from "react";
// import ServiceDetails from "./ServiceDetails";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const Services = ({ isHome }) => {
//   const [services, setServices] = useState([]);
//   // const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:5000/dashboard/AddService")
//       .then((response) => response.json())
//       .then((data) => setServices(data));
//   }, []);

//   // const filteredServices = services.filter((service) =>
//   //   service.name.toLowerCase().includes(searchText.toLowerCase())
//   // );

//   return (
//     <div>
//       <Helmet>
//         <title>Home | Service</title>
//       </Helmet>
//       <div className="">
//         <h1 className="text-center mt-20 font-bold text-4xl font-heading">
//           Popular Destination
//         </h1>
//         <h1 className="text-center mt-1 font-normal">
//           Checkout Our Popular Packages & Destinations
//         </h1>
//       </div>

//       {/* Search input field */}
//       <div className="rounded-xl mt-20">
//         {
//          services.map((service) => (
//           <ServiceDetails key={service._id} service={service}></ServiceDetails>
//         ))}
//       </div>

//       {isHome ? (
//         <Link to="/services">
//           <button
//             className="py-3 bg-blue-500 rounded px-4 text-white text-center justify-center flex mx-auto mt-12"
//           >
//             See More
//           </button>
//         </Link>
//       ) : (

//         // Conditional rendering of "Load More" button based on visibleServices and total services
//         services < services.length && (
//           <button
//             className="py-3 bg-blue-500 rounded px-4 text-white text-center justify-center flex mx-auto mt-12"
//           >
//             Load More
//           </button>
//         )
//       )}

//     </div>
//   );
// };

import { useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Services = ({ isHome }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/dashboard/AddService")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const [value, setValue] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const handleInputChange = (e) => {
    const search = e.target.value;

    console.log(search);
    setValue(search);
  };

  const searchValue = services.filter((service) => {
    if (value == "") {
      return service;
    } else if (service.serviceName.toLowerCase() == value.toLowerCase()) {
      return service;
    }
  });

  return (
    <div className="mb-10">
      <Helmet>
        <title>Tripify | Service Details</title>
      </Helmet>
      <div className="relative">
        <div className="text-center mt-24 bg-white bg-opacity-90">
          <div>
            {isHome ? (
              <div>
                <h1 className="text-center mt-20 font-bold text-4xl font-heading">
                  Popular Destination
                </h1>
                <h1 className="text-center mt-1 font-normal">
                  Checkout Our Popular Packages & Destinations
                </h1>
              </div>
            ) : (
              <>
                <div>
                  <h1 className="text-center mt-20 font-bold text-4xl font-heading">
                    All <span className=" text-blue-600">Popular</span> Services
                  </h1>
                  <h1 className="text-center mt-1 font-normal">
                    Checkout Our Popular Services & Trending Destinations
                  </h1>
                </div>
                <div className="pt-7">
                  <input
                    type="search"
                    name="search"
                    className="rounded border-slate-400 outline-none w-[30vh] py-3 border pl-2"
                    placeholder="search here..."
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="  ">
        {isShow
          ? searchValue.map((service) => (
              <ServiceDetails
                key={service.id}
                service={service}
              ></ServiceDetails>
            ))
          : searchValue
              .slice(0, 4)
              .map((service) => (
                <ServiceDetails
                  key={service.id}
                  service={service}
                ></ServiceDetails>
              ))}
      </div>

      {isHome ? (
        <Link to="/services">
          <button className="py-3 bg-blue-500 rounded px-4 text-white text-center justify-center flex mx-auto mt-12">
            See More
          </button>
        </Link>
      ) : (
        <>
          {searchValue.length > 4 && !isShow && (
            <button
              className="block bg-blue-600 mx-auto px-6 py-3 rounded font-bold text-white mt-10"
              onClick={() => setIsShow(!isShow)}
            >
              Load More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Services;
