import React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

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
  return (
    <div className="relative grid grid-cols-4 *:h-10 *:bg-black text-white font-light text-xl *:flex *:justify-end *:items-center">
      <div className="">
        <span className="translate-x-[50%] nav-el">
          <a href="">Projects</a>
        </span>
      </div>
      <div className="">
        <span className="translate-x-[50%] nav-el">
          <a href="">About</a>
        </span>
      </div>
      <div className="">
        <span className="translate-x-[50%] nav-el">
          <a href="">Contact</a>
        </span>
      </div>
      <div className=""></div>
    </div>
  )
}

export default NavBar
