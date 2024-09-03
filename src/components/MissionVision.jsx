import React, { useRef, useEffect } from 'react';
import { rrr, affordableasapp } from '../utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateWithGsap } from '../utils/animations';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const MissionVision = () => {
  const carImageRef = useRef();

  useEffect(() => {
    // GSAP animation for the mission section
    gsap.from('#mission', {
      scrollTrigger: {
        trigger: '#mission',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
    });

    // Animation for the car image that triggers every time it enters the viewport
    const animateCarImage = () => {
      gsap.fromTo(
        carImageRef.current,
        {
          x: -200, // Start off-screen to the left
          opacity: 0,
        },
        {
          x: 0, // Slide to its actual position
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
        }
      );
    };

    ScrollTrigger.create({
      trigger: carImageRef.current,
      start: 'top 75%',
      onEnter: animateCarImage,
      onLeaveBack: () => ScrollTrigger.refresh(), // Ensure animation restarts when scrolled back
    });

    // GSAP animation for fade-in text elements
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="mission" className="flex justify-center w-full my-20">
          <img src={rrr} alt="Our Mission" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title text-center">
            Our Mission is
            <br /> Affordable Housing For Everyone.
          </h2>

          <p className="hiw-subtitle text-center">
            At Asap Property, our mission is to make homeownership and renting accessible to all, delivering fast and reliable property solutions tailored to each individual's needs. We are dedicated to ensuring that everyone, from every walk of life, finds a place they can call home—swiftly and with ease.
          </p>
          <p className="font-bold text-center">
            Starting from Ile-Ife & Beyond!
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative flex justify-center items-center">
            <div className="overflow-hidden relative z-10">
              <img 
                src={affordableasapp}
                alt="Car"
                className="bg-transparent"
                ref={carImageRef}
              />
            </div>
          </div>
          <p className="text-white font-semibold text-center mt-3">
            Vision 2030: Sustainable Living for All
          </p>
        </div>

        <div className="hiw-text-container flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-1 flex-col justify-center mb-6 md:mb-0">
            <p className="hiw-text g_fadeIn">
              Our vision is to create{' '}
              <span className="text-white">
                sustainable, innovative, and inclusive communities
              </span>{' '}
              that provide the highest quality of life for all residents.
            </p>

            <p className="hiw-text g_fadeIn">
              We are dedicated to{' '}
              <span className="text-white">
                shaping the future of real estate
              </span>{' '}
              by integrating cutting-edge technology, green practices, and community-focused designs.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn text-center">
            <p className="hiw-text">Our</p>
            <p className="hiw-bigtext text-3xl font-bold">Vision</p>
            <p className="hiw-text">2030 and Beyond</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
