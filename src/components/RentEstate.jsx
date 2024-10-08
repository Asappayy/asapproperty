import gsap from 'gsap';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import asappr from '../../public/assets/images/asappr.png';
import asapcar1 from '../../public/assets/images/asapcar1.png';
import prpdia from '../../public/assets/images/prpdia.png';
import prpback from '../../public/assets/images/prpback.png';
import prp from '../../public/assets/images/prpback.png';
import rentasap from '../../public/assets/images/rentasap.png';
import buyasap from '../../public/assets/images/buyasap.png';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const RealEstate = () => {
  useEffect(() => {
    // GSAP Animations for title and CTA
    gsap.fromTo(
      '#hero-title',
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 0.5 }
    );
    gsap.to('#cta', { opacity: 1, y: -20, duration: 1, delay: 1.5 });

    // Typing effect for the hero-text
    const heroText = document.getElementById('hero-text');
    const textContent = "Discover stunning homes in prime locations with unmatched luxury and comfort. Let us help you find your perfect space today.";

    // Clear the text on page load to avoid overlay
    heroText.textContent = '';

    // Animate text with typing effect
    gsap.to(heroText, {
      text: textContent,
      duration: 4,
      ease: 'bounce.out',
      delay: 1,
      onComplete: () => {
        // Stop further animation
        gsap.killTweensOf(heroText);
      }
    });

  }, []);

  return (
    <section className="w-full nav-height bg-gradient-to-b from-[#F3C583] to-[#F3A226] mt-[-20px] relative md:mt-2 lg:mt-6 px-4 md:px-8 lg:px-16 py-8 lg:py-8 mb-16 md:mb-12 lg:mb-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Image Carousel */}
        <div className="md:w-1/2 w-full flex-center px-4 md:px-8 lg:px-12">
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            className="w-full h-64 md:h-full lg:h-full rounded-lg overflow-hidden shadow-lg"
          >
            <SwiperSlide className='rounded-xl overflow-hidden'>
              <div className='rounded-xl overflow-hidden'>
                <img src={asappr} alt="Property 3" className="object-contain w-full h-full rounded-xl" />
              </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-xl overflow-hidden'>
              <div className='rounded-xl overflow-hidden'>
                <img src={prpdia} alt="Property 3" className="object-contain w-full h-full rounded-xl" />
              </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-xl overflow-hidden'>
              <div className='rounded-xl overflow-hidden'>
                <img src={prpback} alt="Property 3" className="object-contain w-full h-full rounded-xl" />
              </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-xl overflow-hidden'>
              <div className='rounded-xl overflow-hidden'>
                <img src={prp} alt="Property 3" className="object-contain w-full h-full rounded-xl" />
              </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-xl overflow-hidden'>
              <div className='rounded-xl overflow-hidden'>
                <img src={asapcar1} alt="Property 3" className="object-contain w-full h-full rounded-xl" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Text Content */}
        <div className="md:w-1/2 w-full text-yebogreen px-4 md:px-8 lg:px-12 mb-8 md:mb-0">
          <h1
            id="hero-title"
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight"
          >
            Your Dream Property Awaits
          </h1>
          <p
            id="hero-text"
            className="text-lg md:text-xl lg:text-2xl font-light mb-6 md:mb-8 lg:mb-12"
          >
            {/* Text will be dynamically typed here */}
          </p>
          <div
            id="cta"
            className="opacity-0 translate-y-20 flex flex-col items-start"
          >
            <br></br>
            <a 
            href="https://wa.me/23480877899974?text=I'd%20love%20to%20buy/rent%20a%20property%20asap!" 
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-lg py-3 md:py-4 lg:py-5 px-6 md:px-10 lg:px-12 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition duration-300 ease-in-out"
            target="_blank" 
            rel="noopener noreferrer"
            >
            Rent a house
          </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstate;
