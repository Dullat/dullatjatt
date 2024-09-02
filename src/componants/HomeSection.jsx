import React, { useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import womanBg from "../assets/images/woman.jpg"
import Grid from "./Grid"
import ScrollToPlugin from "gsap/ScrollToPlugin"
gsap.registerPlugin(ScrollToPlugin)

const HomeSection = () => {
  const scrollToSectionById = () => {
    gsap.to(window, { duration: 1, scrollTo: "#projects", ease: "power2.out" })
  }
  useGSAP(() => {
    gsap.fromTo(
      "#heading",
      {
        y: 100,
      },
      {
        y: 0,
        duration: 0.5,
      }
    )
    gsap.fromTo(
      "#img",
      {
        z: "-40px",
        y: "40px",
        x: "-50%",
      },
      {
        delay: 0.15,
        z: "0px",
        y: "0px",
        duration: 0.5,
      }
    )
    gsap.fromTo(
      "#des",
      {
        opacity: 0,
      },
      {
        delay: 0.15,
        opacity: 1,
        duration: 0.5,
      }
    )
    gsap.fromTo(
      "#btn",
      {
        opacity: 0,
      },
      {
        delay: 0.15,
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      }
    )
  }, [])
  return (
    <div
      className="h-full bg-blackRadient relative text-white text-center overflow-hidden"
      style={{ perspective: "400px" }}
    >
      <Grid></Grid>

      <img
        id="img"
        src={womanBg}
        alt="woman.jpg"
        className="absolute h-[90%] bottom-0 left-[50.2%] mix-blend-exclusion object-cover"
      />
      <div className="grid grid-rows-[1fr_1fr_1fr_1fr] h-full">
        <h1
          id="heading"
          className="row-start-2 text-center text-9xl tracking-[30px] lg:tracking-[15px] z-0 xl:text-8xl csm:text-7xl xsm:text-6xl"
        >
          DULLAT JATT
        </h1>
        <p
          id="des"
          className="row-start-3 z-10 drop-shadow-2xl text-xl font-light tracking-[5px] xl:text-sm self-center pt-10"
        >
          a passionate web developer who loves to build web
        </p>
        <button
          id="btn"
          className="row-start-4 bg-gray-300 rounded-full border-2 border-black px-6 z-10 py-2 h-fit self-center m-auto text-black font-thin w-32"
          onClick={() => scrollToSectionById()}
        >
          Projects
        </button>
      </div>
    </div>
  )
}

export default HomeSection
