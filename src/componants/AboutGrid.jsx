import React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/src/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const AboutGrid = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".Abox",
      {
        height: "0%",
      },
      {
        scrollTrigger: {
          trigger: "#about",
          start: "top, 90%",
          end: "top -5%",
          scrub: 3,
          //   markers: true,
        },
        height: "100%",
        // ease: "steps(50)",
      }
    )
  }, [])
  return (
    <div
      className={`h-full absolute inset-0 grid grid-cols-4 *:border-l-[1px] md:grid-cols-3 *:border-black *:border-opacity-30`}
    >
      <div className="Abox"></div>
      <div className="Abox md:hidden"></div>
      <div className="Abox"></div>
      <div className="border-r-[1px] Abox"></div>
    </div>
  )
}

export default AboutGrid
