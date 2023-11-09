import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Carousel from "react-elastic-carousel";

const Gellery = () => {
  const imageUrls = [
    "https://travel.nicdark.com/snow-adventures-wordpress-theme/wp-content/uploads/sites/13/2023/05/i-parallax-03-package-01.jpeg",
    "https://travel.nicdark.com/snow-adventures-wordpress-theme/wp-content/uploads/sites/13/2023/05/i-parallax-04-package-02.jpeg",
    "https://travel.nicdark.com/snow-adventures-wordpress-theme/wp-content/uploads/sites/13/2023/05/i-parallax-05-package-03.jpeg",
    "https://travel.nicdark.com/snow-adventures-wordpress-theme/wp-content/uploads/sites/13/2023/05/i-parallax-18-1024x683.jpeg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const mainImageUrl =
    "https://travel.nicdark.com/snow-adventures-wordpress-theme/wp-content/uploads/sites/13/2023/05/i-parallax-12-1024x683.jpeg";

  const imageUrlPic = [
    "https://travel.nicdark.com/snow-adventures-wordpress-theme/wp-content/uploads/sites/13/2023/05/i-parallax-15.jpeg",
    "https://travel.nicdark.com/snow-adventures-wordpress-theme/wp-content/uploads/sites/13/2023/05/i-parallax-09-destination-03-1024x683.jpeg",
    "https://travel.nicdark.com/snow-adventures-wordpress-theme/wp-content/uploads/sites/13/2023/05/i-parallax-13.jpeg",
    "https://travel.nicdark.com/snow-adventures-wordpress-theme/wp-content/uploads/sites/13/2023/05/i-parallax-14.jpeg",
    "https://travel.nicdark.com/snow-adventures-wordpress-theme/wp-content/uploads/sites/13/2023/05/i-parallax-20.jpeg",
  ];

  const [activeImage, setActiveImage] = useState(mainImageUrl);

  const handleImageClick = (imageUrl) => {
    setActiveImage(imageUrl);
  };
  return (
    <div>
      <Helmet>
        <title>Tripify | Gallery</title>
      </Helmet>

      <div className="mt-20">
        <h1 className="text-center text-4xl font-bold mb-16 font-heading">
          Popular Place
        </h1>
      </div>

      <div className="relative w-full mt-20 overflow-hidden">
        <Carousel
          itemsToShow={1}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute top-0 left-0 z-30 flex items-center justify-center w-full h-full px-4 cursor-pointer group focus:outline-none text-black text-3xl"
              >
                <FaAngleLeft />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute top-0 right-0 z-30 flex items-center justify-center w-full h-full px-4 cursor-pointer group focus:outline-none text-black text-3xl"
              >
                <FaAngleRight />
              </button>
            )
          }
        >
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="w-full h-full">
              <img
                src={imageUrl}
                className="w-full h-full mx-auto rounded"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="mt-20">
        <div></div>

        {/* <div className="">
          <div
            id="gallery"
            className="relative w-full mt-20 "
            data-carousel="slide"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {imageUrls.map((imageUrl, index) => (
                <div
                  key={index}
                  className={`${
                    activeIndex === index ? "block" : "hidden"
                  } duration-700 ease-in-out`}
                  data-carousel-item={activeIndex === index ? "active" : null}
                >
                  <img
                    src={imageUrl}
                    className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-black text-3xl"
              data-carousel-pre
              onClick={prevImage}
            >
              <FaAngleLeft></FaAngleLeft>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-3xl"
              data-carousel-next
              onClick={nextImage}
            >
              <FaAngleRight></FaAngleRight>
            </button>
          </div>
        </div> */}

        <div className="mt-20">
          <h1 className="text-center text-4xl font-bold mb-16 font-heading">
            Our Happy Customer
          </h1>
        </div>

        <div className="mt-20 mx-auto text-center flex justify-center">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto mx-auto rounded-lg "
                src={activeImage}
                alt=""
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {imageUrlPic.map((imageUrl, index) => (
                <div key={index}>
                  <img
                    className="h-auto w-fit rounded-lg cursor-pointer"
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    onClick={() => handleImageClick(imageUrl)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gellery;

// import { useState, useEffect } from "react";
// import { Helmet } from "react-helmet-async";
// import Carousel from 'react-elastic-carousel';

// const Gallery = () => {
//   const imageUrls = [
//     "https://travel.nicdark.com/snow-adventures-wordpress-theme/wp-content/uploads/sites/13/2023/05/i-parallax-03-package-01.jpeg",
//     "https://travel.nicdark.com/snow-adventures-wordpress-theme/wp-content/uploads/sites/13/2023/05/i-parallax-04-package-02.jpeg",
//     "https://travel.nicdark.com/snow-adventures-wordpress-theme/wp-content/uploads/sites/13/2023/05/i-parallax-05-package-03.jpeg",
//     "https://travel.nicdark.com/snow-adventures-wordpress-theme/wp-content/uploads/sites/13/2023/05/i-parallax-18-1024x683.jpeg",
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   const prevImage = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
//     );
//   };

//   const nextImage = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextImage();
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [activeIndex]);

//   return (
//     <div>
//       <Helmet>
//         <title>Tripify | Gallery</title>
//       </Helmet>
//       <div className="mt-20">
//         <h1 className="text-center text-4xl font-bold mb-16 font-heading">
//           Popular Place
//         </h1>
//       </div>
//       <div className="relative w-full mt-20">
//         <Carousel
//           itemsToShow={1}
//           onNextEnd={() => nextImage()}
//           onPrevEnd={() => prevImage()}
//         >
//           {imageUrls.map((imageUrl, index) => (
//             <div key={index}>
//               <img
//                 src={imageUrl}
//                 className="w-full h-auto mx-auto rounded-lg"
//                 alt={`Slide ${index + 1}`}
//               />
//             </div>
//           ))}
//         </Carousel>
//       </div>

//       {/* ... (rest of your content) */}
//     </div>
//   );
// };

// export default Gallery;
