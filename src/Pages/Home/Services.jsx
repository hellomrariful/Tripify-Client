// 


import { useState, useEffect } from "react";
import ServiceDetails from "./ServiceDetails";
import { Link } from "react-router-dom";

const Services = ({ isHome }) => {


  const [services, setServices] = useState([]);
  const [visibleServices, setVisibleServices] = useState(4);
  const loadIncrement = 4; // Number of services to load each time

  useEffect(() => {
    fetch("http://localhost:5000/dashboard/AddService")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  const loadMore = () => {
    setVisibleServices(visibleServices + loadIncrement);
  };
  

  const seeMore = () => {
   <Link to={'/services'}>See More</Link>
  };

  return (
    <div>
      <div>
        <h1 className="text-center mt-20 font-bold text-4xl font-heading">
          Popular Destination
        </h1>
        <h1 className="text-center mt-1 font-normal">
          Checkout Our Popular Packages & Destination
        </h1>
      </div>
      <div className="rounded-xl">
        {services.slice(0, visibleServices).map((service) => (
          <ServiceDetails key={service._id} service={service}></ServiceDetails>
        ))}
      </div>
      {isHome ? (
        <button
          className="py-3 bg-blue-500 rounded px-4 text-white text-center justify-center flex mx-auto mt-12"
          onClick={seeMore}
        >
          See More
        </button>
      ) : (
        <button
          className="py-3 bg-blue-500 rounded px-4 text-white text-center justify-center flex mx-auto mt-12"
          onClick={loadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Services;
