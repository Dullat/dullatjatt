import React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
gsap.registerPlugin(ScrollToPlugin)

const NavBar = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".nav-el",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 0.9,
        duration: 0.7,
      }
    )
  }, [])

  const scrollTo = (sectionId) => {
    gsap.to(window, { duration: 1, scrollTo: sectionId, ease: "expo" })
  }
  return (
    <div className="relative grid grid-cols-4 md:grid-cols-3 *:h-10 *:bg-black text-white font-light text-xl xl:text-sm">
      <div className="flex justify-center items-center translate-x-[50%] md:translate-x-0">
        <span className="nav-el">
          <p onClick={() => scrollTo("#projects")}>Projects</p>
        </span>
      </div>
      <div className="flex justify-center items-center translate-x-[50%] md:translate-x-0">
        <span className="nav-el">
          <p onClick={() => scrollTo("#about")}>About</p>
        </span>
      </div>
      <div className="flex justify-center items-center translate-x-[50%] md:translate-x-0">
        <span className="nav-el">
          <p onClick={() => scrollTo("#social")}>Contact</p>
        </span>
      </div>
      <div className="xl:hidden"></div>
    </div>
  )
}

export default NavBar
