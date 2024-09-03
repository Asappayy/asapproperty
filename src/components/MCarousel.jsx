import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const featuredProperties = [
  { src: "/assets/images/fp.png", title: "Luxury In Parakin", ttt: "#Asapproperty", tt: "Newly Built Blocks Of 3 Bedroom Flats", t: "Offering serene views and top-notch amenities", location: "Parakin, Ile Ife" },
  { src: "/assets/images/fp1.png", title: "Quality Meets Quantity At Lagere", ttt: "#Asapproperty", tt: "Pitch Your Tent Close To The Banking Area", t: "Nicely built blocks of 2 bedroom & self-contained apartments", location: "Lagere, Ile Ife" },
  { src: "/assets/images/fp.png", title: "Modern Apartments At Road 7 & Eleyele", ttt: "#Asapproperty", tt: "Reside With The Central Business District", t: "Contemporary living available in our multiple blocks of flats", location: "Road 7 & Eleyele, Ile Ife" },
  { src: "/assets/images/fp3.png", title: "Hospitality At Phase 1 & 2", ttt: "#Asapproperty", tt: "Affordable Apartments with Suspicious Quality", t: "2, 3 bedded & self-contained apartments", location: "Phase 1 & 2, Ile Ife" },
  { src: "/assets/images/fp3.png", title: "Live With The Elites", ttt: "#Asapproperty", tt: "Luxury meets serenity at Parakin Obalufe", t: "Nothing but quality 2, 3 bedded & self-contained apartments", location: "Parakin Obalufe, Ile Ife" },
  { src: "/assets/images/fp.png", title: "Peaceful Living At Igboya", ttt: "#Asapproperty", tt: "OAU Campus or Oja Tuntun, Proximity is yours", t: "Spacious 2, 3 bedded & self-contained apartments", location: "Igboya, Ile Ife" },
  { src: "/assets/images/fp3.png", title: "City Living at IfeCity", ttt: "#Asapproperty", tt: "This Is The Groovy Part Of The City", t: "All Types Of Apartments Available", location: "IfeCity, Ile Ife" },
  { src: "/assets/images/fp.png", title: "Luxurious Necessities At Mayfair", ttt: "#Asapproperty", tt: "Intarsia logo Cushioned Terry sole", t: "Ribbed Arch Support", location: "Mayfair, Ile Ife" },
];

const MCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const autoScroll = gsap.timeline({ repeat: -1, delay: 5 });
    autoScroll.to(carouselRef.current, {
      x: () => `-${currentImage * 100}%`,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentImage((prev) => (prev + 1) % featuredProperties.length);
      },
    });

    return () => {
      autoScroll.kill();
    };
  }, [currentImage]);

  const handleBuyNow = (property) => {
    const whatsappUrl = `https://wa.me/2348087789974?text=I'm%20interested%20in%20the%20${encodeURIComponent(property.title)}%20located%20at%20${encodeURIComponent(property.location)}.%20Kindly%20provide%20more%20details.`;
    window.open(whatsappUrl, "_blank");
  };

  const goToSlide = (index) => {
    gsap.to(carouselRef.current, {
      x: `-${index * 100}%`,
      duration: 1.5,
      ease: "power2.inOut",
    });
    setCurrentImage(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      setCurrentImage((prev) => (prev + 1) % featuredProperties.length);
    } else if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right
      setCurrentImage((prev) =>
        prev === 0 ? featuredProperties.length - 1 : prev - 1
      );
    }
  };

  return (
    <div
      className="relative overflow-hidden w-full max-w-4xl mx-auto rounded-3xl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
      >
        {featuredProperties.map((property, index) => (
          <div key={index} className="min-w-full h-64 relative">
            <img
              src={property.src}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 p-2 sm:p-4 bg-black bg-opacity-50 text-white w-full sm:w-auto sm:max-w-sm">
              <h2 className="text-sm sm:text-lg font-bold">{property.title}</h2>
              <p className="text-xs sm:text-sm">{property.ttt}</p>
              <p className="text-sm sm:text-lg font-semibold">{property.tt}</p>
              <p className="text-xs sm:text-sm">{property.t}</p>
              <button
                className="mt-2 px-3 py-1 sm:px-4 sm:py-2 bg-green-500 text-xs sm:text-sm text-white font-semibold rounded hover:bg-green-600"
                onClick={() => handleBuyNow(property)}
              >
                Buy Now!
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {featuredProperties.map((_, index) => (
            <span
              key={index}
              className={`mx-2 w-3 h-3 rounded-full cursor-pointer ${currentImage === index ? 'bg-white' : 'bg-gray-200'}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MCarousel;
