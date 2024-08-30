import React, { useRef } from "react"
import socialImg from "../assets/images/social.jpg"
import { goBtn } from "../constant"
import { socialLinks } from "../constant"

const Social = () => {
  const copyBtn = useRef()
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("jashandullat@gmail.com")
      copyBtn.current.textContent = "Copied"
    } catch (err) {
      alert("Failed to copy text.")
    }
  }
  return (
    <section
      className="grid grid-cols-[1fr_1fr] text-white xl:grid-cols-1 bg-[#060606]"
      id="social"
    >
      <div className="xl:order-2">
        <img
          src={socialImg}
          alt=""
          className="w-full xl:h-60 object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-8 justify-center p-12 xsm:px-4 w-full max-w-[35rem] m-auto">
        <div className="flex flex-col items-center gap-4 pb-8 text-center">
          <p className="text-3xl">Social/contact</p>
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
        <div className="bg-slate-900 rounded-md w-full h-[60px] flex items-center p-4 relative">
          <textarea
            name="email"
            id=""
            rows="1"
            disabled="true"
            className="bg-transparent w-full resize-none outline-none border-none"
          >
            jashandullat8@gmail.com
          </textarea>
          <button
            ref={copyBtn}
            className="opacity-60 bg-slate-700 rounded-sm px-2 text-sm absolute bottom-0 right-0 hover:opacity-100"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
      </div>
    </section>
  )
}

export default Social
