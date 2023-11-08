// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const SingleServiceDetails = () => {
//   const {id} = useParams()

//   const [services, setServices] = useState(null);
// console.log(services);


//   useEffect(() => {
//     fetch(`http://localhost:5173/dashboard/AddServices/${id}`) // Use the id to fetch the specific service
//       .then((response) => response.json())
//       .then((data) => setServices(data));
//   }, [id]); // Add id as a dependency

//   if (!services) {
//     return <div>Loading...</div>;
//   }


//   return (
//     <div>
//       <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//         <div className="flex justify-end px-4 pt-4">
//           <button
//             id="dropdownButton"
//             data-dropdown-toggle="dropdown"
//             className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
//             type="button"
//           >
//             <span className="sr-only">Open dropdown</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 16 3"
//             >
//               <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
//             </svg>
//           </button>
//           {/* <!-- Dropdown menu --> */}
//           <div
//             id="dropdown"
//             className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//           >
//             <ul className="py-2" aria-labelledby="dropdownButton">
//               <li>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                 >
//                   Edit
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                 >
//                   Export Data
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                 >
//                   Delete
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex flex-col items-center pb-10">
//           {/* <img
//             className="w-24 h-24 mb-3 rounded-full shadow-lg"
//             src="/docs/images/people/profile-picture-3.jpg"
//             alt="Bonnie image"
//           /> */}
//           <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
//             Bonnie Green
//           </h5>
//           <span className="text-sm text-gray-500 dark:text-gray-400">
//             Visual Designer
//           </span>
//           <div className="flex mt-4 space-x-3 md:mt-6">
//             <a
//               href="#"
//               className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Add friend
//             </a>
//             <a
//               href="#"
//               className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
//             >
//               Message
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100 text-center mx-auto">
//         <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
//           <img
//             src="https://source.unsplash.com/100x100/?portrait?1"
//             alt=""
//             className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
//           />
//         </div>
//         <div className="flex flex-col space-y-4">
//           <div>
//             <h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
//             <span className="text-sm dark:text-gray-400">General manager</span>
//           </div>
//           <div className="space-y-1">
//             <span className="flex items-center space-x-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//                 aria-label="Email address"
//                 className="w-4 h-4"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
//                 ></path>
//               </svg>
//               <span className="dark:text-gray-400">
//                 leroy.jenkins@company.com
//               </span>
//             </span>
//             <span className="flex items-center space-x-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//                 aria-label="Phonenumber"
//                 className="w-4 h-4"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
//                 ></path>
//               </svg>
//               <span className="dark:text-gray-400">+25 381 77 983</span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleServiceDetails;





import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleServiceDetails = () => {
  const { id } = useParams();
  const [services, setServices] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5173/dashboard/AddServices/${id}`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Check if the response is valid JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        } else {
          throw new Error("Response is not valid JSON.");
        }
      })
      .then((data) => setServices(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!services) {
    return <div>Loading...</div>;
  }

  // Render the service details here using the 'services' state

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default SingleServiceDetails;
