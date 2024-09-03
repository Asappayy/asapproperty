import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";

const Model = () => {
  const [size, setSize] = useState("small");

  // References for 3D models
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // GSAP timeline
  const tl = useRef(gsap.timeline());

  // Animation effect
  useEffect(() => {
    const animate = () => {
      gsap.to("#heading", { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" });

      tl.current = gsap.timeline({ repeat: -1, delay: 2 })
        .to(small.current.rotation, { y: "+=0.5", duration: 3, ease: "power2.inOut" })
        .to(large.current.rotation, { y: "+=0.5", duration: 3, ease: "power2.inOut" });
    };
    animate();
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width text-center">
        <h1 id="heading" className="text-3xl md:text-5xl font-bold mb-5">
          Newsletter
        </h1>
        <p className="text-lg mb-5">Subscribe to Get the latest and exclusive offers from Us directly in your inbox. #asapproperty</p>

        <form className="mt-10 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 text-lg rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 mb-5"
          />
<button className="w-full bg-white text-black text-lg py-4 rounded-full hover:bg-yellow-500 hover:text-white focus:bg-yellow-500 focus:text-white transform transition duration-300 ease-in-out">
  Subscribe
</button>



        </form>
      </div>
    </section>
  );
};

export default Model;
