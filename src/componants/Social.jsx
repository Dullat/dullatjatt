import React from "react"
import socialImg from "../assets/images/social.jpg"
import { goBtn } from "../constant"
import { socialLinks } from "../constant"

const Social = () => {
  return (
    <section className="grid grid-cols-[1fr_1fr] text-white xl:grid-cols-1 bg-[#060606]">
      <div className="xl:order-2">
        <img
          src={socialImg}
          alt=""
          className="w-full xl:h-60 object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-8 justify-center p-12 xsm:px-4 w-full max-w-[35rem] m-auto">
        <div className="flex flex-col items-center gap-4 pb-8 text-center">
          <p className="text-3xl">Social</p>
          <p>i dont use social media much , but here are links</p>
        </div>
        {socialLinks.map((el) => (
          <div className="flex items-center w-full">
            <span>
              <img src={el.svg} alt={el.altText} />
            </span>
            <span className="ml-4">{el.user}</span>
            <a href={el.link} target="_blank" className="ml-auto">
              <img
                src={goBtn}
                alt="right arrow"
                className="h-[50px] hover:scale-110 transition-all cursor-pointer"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Social
