import { useState } from 'react';
import gsap from 'gsap';

const CallForInspection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormToggle = () => {
    setIsFormOpen(!isFormOpen);
    gsap.fromTo(
      '#inspection-form',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
  };

  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-16  relative">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white-800 mb-4">
          Schedule Your Property Inspection
        </h2>
        <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#F3C583] to-white mb-8">
          Ready to explore your dream home? Let’s arrange a personalized viewing experience for you.
        </p>
        <button
          onClick={handleFormToggle}
          className="bg-gradient-to-r  from-[#0a5d49] to-[#F3A229] text-white text-lg py-3 px-6 md:px-10 lg:px-12 rounded-full hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out"
        >
          {isFormOpen ? 'Close Form' : 'Book an Inspection'}
        </button>

        {isFormOpen && (
          <div
            id="inspection-form"
            className="mt-8 p-8 bg-gradient-to-b from-[#F3C583] to-[#F3A226] shadow-lg rounded-lg max-w-lg mx-auto"
          >
            <form className="flex flex-col  space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full py-3 px-4 text-gray-700 rounded-lg bg-yebogreen border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-3 px-4 text-gray-700 rounded-lg border bg-yebogreen border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full py-3 px-4 text-gray-700 rounded-lg border bg-yebogreen border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Preferred Date and Time"
                className="w-full py-3 px-4 text-gray-700 rounded-lg border bg-yebogreen border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-l  from-[#0a5d49] to-[#F3A229] text-white text-lg py-3 rounded-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default CallForInspection;
