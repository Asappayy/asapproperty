import { useState } from 'react';
import gsap from 'gsap';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    gsap.fromTo(
      '#thank-you-message',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
  };

  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#F3C583] to-[#F3A226]via-yebogreen to-white relative text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yebogreen to-green-500 font-bold mb-4">
          Stay Updated with the Latest Listings
        </h2>
        <p className="text-lg md:text-xl text-yebogreen mb-8">
          Subscribe to our newsletter for exclusive updates, featured properties, and expert advice straight to your inbox.
        </p>
        
        {!subscribed ? (
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center active:bg-yebogreen justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-1/2 py-3 px-4 rounded-full border border-gray-700 bg-yebogreen text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r  from-green-500 to-yebogreen to-yellow-700 text-white text-lg py-3 px-6 rounded-full hover:from-yellow-600 hover:to-yellow-800 transition duration-300 ease-in-out"
            >
              Subscribe Now
            </button>
          </form>
        ) : (
          <div id="thank-you-message" className="mt-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Thank you for subscribing!
            </h3>
            <p className="text-md md:text-lg text-gray-300 mt-4">
              You’ll now receive the latest updates directly in your inbox.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
