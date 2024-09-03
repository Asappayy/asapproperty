import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/assets/images/c1.jpg", title: "20th October", text: "Teslim Balogun | lagos state" },
  { src: "/assets/images/c2.jpg", title: "31st October", text: "Festac City " },
  { src: "/assets/images/c3.jpg", title: "7th November", text: "Ojude Oba | Ijebu" },
  { src: "/assets/images/c4.jpg", title: "22th November", text: "Ijebuode International Stadium" },
  { src: "/assets/images/cee.png", title: "1st December", text: "Ogudu Ranches | Calabar" },
  { src: "/assets/images/cee.jpg", title: "18th December", text: "02 Arena United kingdom" },
];

const VideoCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageRef = useRef([]);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoScroll = useRef(null);

  useEffect(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * currentImage}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    autoScroll.current = gsap.timeline({ repeat: -1, delay: 3 }) // Repeat infinitely, with a 3-second delay between each scroll
      .to("#slider", {
        transform: () => `translateX(${-100 * ((currentImage + 1) % images.length)}%)`,
        duration: 2,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentImage((prev) => (prev + 1) % images.length);
        }
      });
    
    return () => {
      autoScroll.current.kill(); // Clear the animation when component unmounts
    };
  }, [currentImage]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
    autoScroll.current.pause(); // Pause the auto-scroll when user interacts
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;

    if (touchDiff > 50) {
      // Swipe left
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else if (touchDiff < -50) {
      // Swipe right
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }

    autoScroll.current.restart(); // Resume auto-scrolling after user interaction
  };

  return (
    <>
      <div
        className="flex items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div id="slider" className="flex">
          {images.map((image, i) => (
            <div key={i} className="flex-none w-full relative">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-contain"
                ref={(el) => (imageRef.current[i] = el)}
              />
              <div className="absolute bottom-5 left-5 text-white bg-black bg-opacity-50 p-4 rounded-xl">
                <h1 className="text-2xl font-bold">{image.title}</h1>
                <p className="text-sm">{image.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {images.map((_, i) => (
            <span
              key={i}
              className={`mx-2 w-3 h-3 rounded-full cursor-pointer ${currentImage === i ? 'bg-white' : 'bg-gray-200'}`}
              onClick={() => {
                setCurrentImage(i);
                autoScroll.current.restart(); // Restart auto-scrolling after user manually selects an image
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;





