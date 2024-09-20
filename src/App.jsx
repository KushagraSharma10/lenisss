import { useEffect } from 'react'
import Lenis from 'lenis'
import "./index.css"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'


const App = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    document.querySelectorAll(".elem").forEach(elem => {
      let image = elem.querySelector("img")
      let tl = gsap.timeline()

      let xTransform = gsap.utils.random(-100, 100);

      tl
        .set(image, {
          transformOrigin: `${xTransform < 0 ? 0 : '100%'}`,
        }, "start")
        .to(image, {
          scale: 0,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        }, "start")
        .to(elem, {
          xPercent: xTransform,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        })
    })
  })

  return (

    <div className="w-full bg-zinc-900">
      <div className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
        <div className="elem col-span-1 row-span-1" style={{ "--r": 1, "--c": 3 }}>
          <img src="./Images/img1.jpg" alt="Image 1" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 1, "--c": 7 }}>
          <img src="./Images/img2.jpg" alt="Image 2" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 2, "--c": 2 }}>
          <img src="./Images/img4.jpg" alt="Image 3" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 2, "--c": 6 }}>
          <img src="./Images/img5.jpg" alt="Image 4" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 3, "--c": 4 }}>
          <img src="./Images/img3.jpg" alt="Image 5" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 3, "--c": 8 }}>
          <img src="./Images/img6.jpg" alt="Image 6" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 4, "--c": 1 }}>
          <img src="./Images/img7.jpg" alt="Image 7" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 4, "--c": 4 }}>
          <img src="./Images/img8.jpg" alt="Image 8" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 5, "--c": 2 }}>
          <img src="./Images/img9.jpg" alt="Image 9" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 5, "--c": 6 }}>
          <img src="./Images/img10.jpg" alt="Image 10" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 6, "--c": 3 }}>
          <img src="./Images/img11.jpg" alt="Image 11" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 6, "--c": 7 }}>
          <img src="./Images/img12.jpg" alt="Image 12" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 7, "--c": 5 }}>
          <img src="./Images/img13.jpg" alt="Image 13" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 7, "--c": 8 }}>
          <img src="./Images/img14.jpg" alt="Image 14" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 8, "--c": 1 }}>
          <img src="./Images/img15.jpg" alt="Image 15" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 8, "--c": 4 }}>
          <img src="./Images/img16.jpg" alt="Image 16" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 9, "--c": 2 }}>
          <img src="./Images/img17.jpg" alt="Image 17" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 9, "--c": 6 }}>
          <img src="./Images/img18.jpg" alt="Image 18" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 10, "--c": 3 }}>
          <img src="./Images/img19.jpg" alt="Image 19" />
        </div>
        <div className="elem col-span-1 row-span-1" style={{ "--r": 10, "--c": 7 }}>
          <img src="./Images/img20.jpg" alt="Image 20" />
        </div>
      </div>
      <div className="fixed font-['Helvetica_Now_Display'] top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-7xl mb-4 uppercase ">Thomas Vance
          <sup>®</sup>
        </h1>
        <h2 className="text-4xl">並外れたファッション</h2>
      </div>
      <div className="w-full h-screen bg-[#D1D1D1] flex items-center justify-center mx-auto py-96 relative z-[999] text-center ">
        <p className="text-4xl text-black font-['Helvetica_Now_Display'] leading-[3.2rem] w-3/4 font-semibold text-left">
          Thomas Vance is a renowned fashion and clothing brand known for its exceptional style and innovative designs. Established with a vision to bring extraordinary fashion to the forefront, Thomas Vance offers a wide range of high-quality apparel that blends modern trends with timeless elegance ®
        </p>
      </div>
    </div>
  )
}

export default App