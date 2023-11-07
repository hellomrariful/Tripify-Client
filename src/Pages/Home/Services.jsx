import { useState, useEffect } from "react";
import ServiceDetails from "./ServiceDetails";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/dashboard/AddService")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

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
      {services.map((service) => (
        <ServiceDetails key={service._id} service={service}></ServiceDetails>
      ))}
      </div>
    </div>
  );
};

export default Services;
