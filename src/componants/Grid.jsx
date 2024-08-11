import classNames from "classnames"
import React from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Grid = ({ black }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".box",
      {
        height: "0%",
      },
      {
        height: "100%",
        duration: 0.7,
      }
    )
  }, [])
  return (
    <div
      className={classNames(
        `h-full absolute inset-0 grid grid-cols-4 *:border-l-[1px] ${
          black
            ? "*:border-black *:border-opacity-30"
            : "*:border-white *:border-opacity-10"
        } `
      )}
    >
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="border-r-[1px] box"></div>
    </div>
  )
}

export default Grid
