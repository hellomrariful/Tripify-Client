import { useState, useEffect } from "react";
import ServiceDetails from "./ServiceDetails";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Services = ({ isHome }) => {
  const [services, setServices] = useState([]);
  const [visibleServices, setVisibleServices] = useState(4);
  const [searchText, setSearchText] = useState(""); // State for search input
  const loadIncrement = 4;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/dashboard/AddService")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  const loadMore = () => {
    setVisibleServices(visibleServices + loadIncrement);
  };

  // Filter the services based on the search text
  const filteredServices = services.filter((service) =>
  service.name.toLowerCase().includes(searchText.toLowerCase())
);

  return (
    <div>
      <Helmet>
        <title>Home | Service</title>
      </Helmet>
      <div>
        <h1 className="text-center mt-20 font-bold text-4xl font-heading">
          Popular Destination
        </h1>
        <h1 className="text-center mt-1 font-normal">
          Checkout Our Popular Packages & Destinations
        </h1>
      </div>

      {/* Search input field */}
      

      <div className="rounded-xl mt-20">
        {filteredServices.slice(0, visibleServices).map((service) => (
          <ServiceDetails key={service._id} service={service}></ServiceDetails>
        ))}
      </div>
      {isHome ? (
        <button
          className="py-3 bg-blue-500 rounded px-4 text-white text-center justify-center flex mx-auto mt-12"
          onClick={() => navigate('/service')}
        >
          See More
        </button>
      ) : (
        // Conditional rendering of "Load More" button based on visibleServices and total services
        visibleServices < filteredServices.length && (
          <button
            className="py-3 bg-blue-500 rounded px-4 text-white text-center justify-center flex mx-auto mt-12"
            onClick={loadMore}
          >
            Load More
          </button>
        )
      )}
    </div>
  );
};

export default Services;
