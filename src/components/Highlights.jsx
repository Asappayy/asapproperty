import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import fp1 from '../../public/assets/images/fp1.png'


import VideoCarousel from './VideoCarousel';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
    <div className="flex-center flex-col">
    <div className="md:w-3/12 w-6/12 aspect-w-1 aspect-h-1">
       <img src={fp1} alt="" className="w-full h-full object-cover" />
    </div>
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between gap-5">
          <h1 id="title" className="section-heading">Circle your calenders.</h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="">
              Propertyofasap 
            </p>
    

          </div>
        </div>
</div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights