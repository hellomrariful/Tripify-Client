// import { useState, useEffect } from "react";
// import ServiceDetails from "./ServiceDetails";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const Services = ({ isHome }) => {
//   const [services, setServices] = useState([]);
//   // const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     fetch("https://tripify-server-cyan.vercel.app/dashboard/AddService")
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




import {  useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://tripify-server-cyan.vercel.app/dashboard/AddService")
      .then((res) => res.json())
      .then(data => setServices(data))
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
      <div className="relative">
        <div className="text-center md:py-32 pt-10 bg-white bg-opacity-90">
          <h1 className="text-2xl md:text-5xl font-bold py-3">
            Your Health,<span className="text-emerald-400">Our Priority</span>
          </h1>

          <div className="pt-7">
            <input
              type="search"
              name="search"
              className="rounded-l-lg border-slate-400 outline-none w-[30vh] py-3  border"
              placeholder="search here..."
              onChange={handleInputChange}
            />
           
          </div>
        </div>
      </div>
      <h1 className="text-center text-3xl md:text-5xl font-bold py-10 md:py-10">
        All <span className="text-emerald-400">Services</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-5 pb-10">
        {isShow
          ? searchValue.map((service) => <ServiceDetails key={service.id} service={service}></ServiceDetails>)
          : searchValue
              .slice(0, 3)
              .map((service) => <ServiceDetails key={service.id} service={service}></ServiceDetails>)}
      </div>
      {(searchValue.length > 3 && !isShow) && (
      <button
        className="block bg-green-400 mx-auto px-6 py-2 rounded font-bold text-white mt-10"
        onClick={() => setIsShow(!isShow)}
      >
        See All
      </button>
      ) }
    </div>
  );
};

export default Services;
