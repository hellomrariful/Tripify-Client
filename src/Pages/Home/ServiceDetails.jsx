import { Link } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  const {
    name,
    ServiceArea,
    ServiceDescription,
    ServicePrice,
    ServicePhoto,
    ServiceProviderPhoto,
    serviceName,
    _id,
  } = service;

  console.log(_id);
  console.log(service);
  return (
    <div>
      <div className="flex overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mt-10 h-60">
        <div className="w-1/3 bg-cover">
          <h2 className=" text-white">hello</h2>
          <img src={ServicePhoto} alt="" />
        </div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white"></h1>
               {serviceName}
          <p className="mt-2 w-2/3 text-sm text-gray-600 dark:text-gray-400">
            {ServiceDescription}
          </p>

          <div className="flex justify-between mt-3 item-center">
            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
             {ServicePrice}
            </h1>
            <Link to={`/serviceDetails/${service._id}`} >
            <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
              View more
            </button>
            </Link>
          </div>
          {ServiceArea}
          <br />
          {name}
        </div>
        <div>
          <div className="flex mt-2 item-center">
            <svg
              className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg
              className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg
              className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg
              className="w-5 h-5 text-gray-500 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg
              className="w-5 h-5 text-gray-500 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          </div>
          <h1>$750</h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
