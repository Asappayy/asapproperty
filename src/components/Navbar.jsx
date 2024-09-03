import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { appleImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const textRefs = useRef([]);

  const toggleDropdown = () => {
    if (window.innerWidth <= 640) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = 'hidden';
      textRefs.current.forEach((text, index) => {
        gsap.fromTo(
          text,
          { width: '0%', opacity: 1 },
          {
            width: '100%',
            duration: 1,
            delay: index * 0.3,
            ease: 'power4.out',
          }
        );
      });
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isDropdownOpen]);

  return (
    <header className="w-full mt-[-30px] flex justify-between items-center sm:ml-auto ml-[27px]">
      <nav className="flex w-full max-w-screen-xl mx-auto items-center justify-between sm:justify-between">
        {/* Search Icon */}
        <img
          src={searchImg}
          alt="search"
          width={120}
          height={120}
          className="object-contain ml-[-10px] sm:ml-[0]"
        />

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center items-center max-sm:hidden">
          {navLists.map((nav) => (
            <a
              key={nav}
              href={`#${nav.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
              className="px-5 text-sm cursor-pointer text-white hover:text-white transition-all"
            >
              {nav}
            </a>
          ))}
        </div>

        {/* Apple Logo */}
        <div className="flex items-center justify-end sm:gap-7 gap-3 ml-[-10px] sm:ml-0">
          <img
            src={appleImg}
            alt="Apple"
            width={180}
            height={180}
            className="object-contain sm:object-left cursor-pointer"
            onClick={toggleDropdown}
          />
        </div>
      </nav>

      {/* Dropdown Overlay */}
      {isDropdownOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center p-5 custom-cursor">
          <button
            className="absolute top-5 text-4xl text-white"
            style={{ left: '50%', transform: 'translateX(-50%)' }}
            onClick={closeDropdown}
          >
            &times;
          </button>
          <div className="flex flex-col items-center text-white text-xl sm:text-2xl font-light tracking-wide">
            {navLists.map((nav, index) => (
              <a
                key={nav}
                href={`#${nav.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                ref={(el) => (textRefs.current[index] = el)}
                className="mb-5 cursor-pointer hover:text-gray-300 transition-all overflow-hidden whitespace-nowrap w-full text-center"
              >
                {nav}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
