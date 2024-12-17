import React, { Suspense, useEffect, useRef, useState, lazy } from "react"
import socialImg from "../assets/images/social.jpg"
import { goBtn } from "../constant"
import { socialLinks } from "../constant"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { InView } from "react-intersection-observer"
import Loading from "./Loading"
import { isMobile } from "react-device-detect"
const BMW = lazy(() => import('./BMW'))
const David = lazy(() => import('./David'))

const Social = () => {
  const [rerender, setrerender] = useState(0)
  const copyBtn = useRef()
  const isFov = isMobile ? 70 : 10

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("jashandullat@gmail.com")
      copyBtn.current.textContent = "Copied"
    } catch (err) {
      alert("Failed to copy text.")
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (1300 < window.innerWidth && 550 < window.innerWidth) {
        setrerender(2)
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [rerender]);
  return (
    <section
      className="grid grid-cols-[1fr_1fr] text-white xl:grid-cols-1 bg-[#060606] w-full"
      id="social"
    >
      <div className="xl:order-2 cursor-move w-full relative">
        <div className="absolute w-4 h-72 left-8 bg-gray-900 rounded-md z-10 cursor-default hidden sm:flex">
          <span className="mt-auto flex rotate-90 origin-top bg-slate-400 rounded-md px-1"> Scroller</span>
        </div>
        {/* Wrap Canvas inside InView */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div className="h-full" ref={ref}>
              {/* Render Canvas only when InView is true */}
              {inView && (
                <Suspense fallback={<Loading />}>
                  <Canvas className="h-full min-h-[500px]" camera={{ position: [0, 1, 3], fov: isFov }}>
                    <Environment preset="city" backgroundIntensity={0} environmentIntensity={0.7} />
                    {isMobile === true ? (<BMW />) : (<David />)}
                    <OrbitControls enableZoom={true} enablePan={false} maxPolarAngle={Math.PI / 2} maxDistance={5} minDistance={3} rotateSpeed={0.5}></OrbitControls>
                  </Canvas>
                </Suspense>
              )}
            </div>
          )}
        </InView>
        {/* <img
          src={socialImg}
          alt=""
          className="w-full xl:h-60 object-cover object-center"
        /> */}
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
        <div className="bg-slate-900 rounded-md w-full h-[60px] flex items-center p-4 relative overflow-hidden">
          <textarea
            name="email"
            id=""
            rows="1"
            disabled="true"
            className="bg-transparent w-full resize-none outline-none border-none cursor-text"
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
