import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import moment from "moment";
import { HiLocationMarker } from 'react-icons/hi';


const ServiceDetails = ({ service }) => {
  const { user } = useContext(AuthContext);

  const {
    ServiceArea,
    ServiceDescription,
    ServicePrice,
    ServicePhoto,
    serviceName,
    _id,
  } = service

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  return (
    <div>
      <div className=" overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto mt-10">
        <img
          className="object-cover w-full h-96"
          src={ServicePhoto}
          alt="Article"
        />

        <div className="p-6">
          <div >
            <span className=" flex justify-end font-medium text-blue-600 uppercase dark:text-blue-400 text-xl">
              {ServicePrice}
            </span>
            <div className="flex">
               <h1>
                <HiLocationMarker className=" text-blue-600 mt-1 "></HiLocationMarker>
                </h1>
                <h1 className="mb-2 text-blue-600 ml-1">{service.ServiceArea}</h1>
               </div>
            <a
              href="#"
              className="block text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              role="link"
            >
              {serviceName}
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {ServiceDescription}
            </p>
          </div>

          <div className="mt-4">
            {loading ? null : (
              <div className="flex items-center">
                <div className="flex items-center">
                  <img
                    className="object-cover h-14 w-14 bg-cover rounded-full"
                    src={user?.photoURL}
                    alt="Avatar"
                  />
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    role="link"
                  >
                    {user?.displayName}
                  </a>
                </div>
                <p className="text-blue-600 ml-3">{moment().format("ll")}</p>
                
              </div>
            )}
          </div>
          <Link className="flex justify-end" to={`/serviceDetails/${_id}`}>
            <button className="font-semibold py-2 md:py-1 bg-blue-500 px-3 md:px-2 rounded flex justify-end text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
