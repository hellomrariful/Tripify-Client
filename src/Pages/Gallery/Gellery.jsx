import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Gellery = () => {
  const imageUrls = [
    "https://i.ibb.co/cksbmJH/image.png",
    "https://i.ibb.co/VTswGmg/img-06.jpg",
    "https://i.ibb.co/MC3ryyB/image.png",
    "https://i.ibb.co/MC3ryyB/image.png",
    "https://i.ibb.co/0GbYbx2/image.png",
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
    "https://i.ibb.co/ykjgPRd/pexels-william-choquette-1954524.jpg";

  const imageUrlPic = [
    "https://i.ibb.co/MC3ryyB/image.png",
    "https://i.ibb.co/ykjgPRd/pexels-william-choquette-1954524.jpg",
    "https://i.ibb.co/Yfbk6g2/img-05.png",
    "https://i.ibb.co/XLnVjW0/img-02.png",
    "https://i.ibb.co/jZfCm7F/img-04.png",
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
        <div>
          <h1 className="text-center text-4xl font-bold mb-16 font-heading">Popular Place</h1>
        </div>
        <div className="">
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
        </div>

        <div className="mt-20">
          <h1 className="text-center text-4xl font-bold mb-16">
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
