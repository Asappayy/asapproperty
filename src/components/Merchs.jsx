import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MCarousel from "./MCarousel";

const Merchs = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-gradient-to-b from-[#F3C583] to-[#F3A226] md:mt-0 mt-20"
    >
      <div className="mb-12 w-full md:flex items-end justify-between gap-5">
        <h1 id="title" className="section-heading">Featured properties.</h1>
      </div>
      <MCarousel />
    </section>
  );
};

export default Merchs;
