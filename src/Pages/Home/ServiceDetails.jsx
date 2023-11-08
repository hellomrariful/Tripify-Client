import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import moment from "moment";
import { Oval } from "react-loader-spinner";

const ServiceDetails = ({ service }) => {
  const { user } = useContext(AuthContext);
  const {
    ServiceArea,
    ServiceDescription,
    ServicePrice,
    ServicePhoto,
    serviceName,
    _id,
  } = service;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  return (
    <div>
      <div className="max-w-5xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto mt-10">
        <img
          className="object-cover w-full h-96"
          src={ServicePhoto}
          alt="Article"
        />

        <div className="p-6">
          <div>
            <span className=" font-medium text-blue-600 uppercase dark:text-blue-400 text-xl">
              {ServicePrice}
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              role="link"
            >
              {serviceName}
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {ServiceDescription}
            </p>
          </div>

          <div className="mt-4">
            {loading ? (
             null
            ) : (
              <div className="flex items-center">
                <div className="flex items-center">
                  <img
                    className="object-cover h-14 w-14 bg-cover rounded-full"
                    src={user.photoURL}
                    alt="Avatar"
                  />
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    role="link"
                  >
                    {user.displayName}
                  </a>
                </div>
                <p className="text-[#524FF5]">
                  {moment().format("ll")}
                </p>
                <button className="py-1 px-2"></button>
                <h1>Location: {ServiceArea}</h1>
                <Link className="flex md:ml-60" to={`/serviceDetails/${_id}`}>
                  <button className="font-semibold py-2 md:py-1 bg-blue-500 px-3 md:px-2 rounded flex justify-end text-white">
                    View Details
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
// import moment from "moment";

// const ServiceDetails = ({ service }) => {
//   const { user } = useContext(AuthContext);
//   const {
//     name,
//     ServiceArea,
//     ServiceDescription,
//     ServicePrice,
//     ServicePhoto,
//     ServiceProviderPhoto,
//     serviceName,
//     _id,
//   } = service;

//   console.log(_id);
//   console.log(service);
//   return (
//     <div>
//       {/* <div className="flex overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mt-10 h-60">
//         <div className="w-1/3 bg-cover">
//           <h2 className=" text-white">hello</h2>
//           <img src={ServicePhoto} alt="" />
//         </div>

//         <div className="w-2/3 p-4 md:p-4">
//           <h1 className="text-xl font-bold text-gray-800 dark:text-white"></h1>
//           {serviceName}
//           <p className="mt-2 w-2/3 text-sm text-gray-600 dark:text-gray-400">
//             {ServiceDescription}
//           </p>

//           <div className="flex justify-between mt-3 item-center">
//             <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
//               {ServicePrice}
//             </h1>
//             <Link to={`/serviceDetails/${service._id}`}>
//               <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
//                 View more
//               </button>
//             </Link>
//           </div>
//           {ServiceArea}
//           <br />
//           {name}
//         </div>
//         <div>
//           <div className="flex mt-2 item-center">
//             <svg
//               className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
//             </svg>

//             <svg
//               className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
//             </svg>

//             <svg
//               className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
//             </svg>

//             <svg
//               className="w-5 h-5 text-gray-500 fill-current"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
//             </svg>

//             <svg
//               className="w-5 h-5 text-gray-500 fill-current"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
//             </svg>
//           </div>
//           <h1>$750</h1>
//         </div>
//       </div> */}

//       <div className="max-w-3xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto">
//         <img
//           className="object-cover w-full h-72"
//           src={ServicePhoto}
//           alt="Article"
//         />

//         <div className="p-6">
//           <div>
//             <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
//               Product
//             </span>
//             <a
//               href="#"
//               className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
//               role="link"
//             >
//               {serviceName}
//             </a>
//             <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//               {ServiceDescription}
//             </p>
//           </div>

//           <div className="mt-4">
//             <div className="flex items-center">
//               <div className="flex items-center">
//                 <img
//                   className="object-cover h-14 w-14  bg-cover rounded-full"
//                   src={user.photoURL}
//                   alt="Avatar"
//                 />
//                 <a
//                   href="#"
//                   className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
//                   role="link"
//                 >
//                   {user.displayName}
//                 </a>
//               </div>
//               <p className=" text-[#524FF5]">{moment().format("ll")}</p>
//               <button className="py-1 px-2"></button>
//             <h1>Location: {ServiceArea}</h1>
//             <Link><button className="font-semibold py-3 bg-blue-500 px-3 rounded flex justify-end">Add To Cart</button></Link>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetails;
