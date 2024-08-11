import React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import womanBg from "../assets/images/woman.jpg"
import Grid from "./Grid"

const HomeSection = () => {
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
  }, [])
  return (
    <div
      className="h-full bg-blackRadient relative text-white text-center overflow-hidden"
      style={{ perspective: "400px" }}
    >
      <Grid></Grid>
      <h1 id="heading" className=" relative text-9xl pt-[20%] tracking-[30px]">
        DULLAT JATT
      </h1>
      <p
        id="des"
        className="mt-[18%] relative z-10 drop-shadow-2xl text-xl font-light tracking-[5px]"
      >
        a passionate web developer who loves to build web
      </p>
      <img
        id="img"
        src={womanBg}
        alt="woman.jpg"
        className="absolute h-[90%] bottom-0 left-[50.2%]  mix-blend-exclusion"
      />
      <button className="bg-gray-300 rounded-full border-2 border-black px-6 z-10 py-2 absolute bottom-20 translate-x-[-50%] text-black font-thin w-32">
        Projects
      </button>
    </div>
  )
}

export default HomeSection
