import React, { Suspense, useEffect, useRef, useState, lazy } from "react";
import socialImg from "../assets/images/social.jpg";
import { goBtn } from "../constant";
import { socialLinks } from "../constant";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { InView } from "react-intersection-observer";
import Loading from "./Loading";
import { isMobile } from "react-device-detect";

const BMW = lazy(() => import('./BMW'));
const David = lazy(() => import('./David'));

const VisibilityController = ({ isVisible }) => {
  const { gl } = useThree();
  
  useEffect(() => {
    const canvas = gl.domElement;
    
    if (!isVisible) {
      canvas.style.opacity = '0';
      gl.setPixelRatio(0.1);
    } else {
      canvas.style.opacity = '1';
      gl.setPixelRatio(window.devicePixelRatio);
    }
  }, [isVisible, gl]);
  
  return null;
};

const Social = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  const copyBtn = useRef();
  const isFov = isMobile ? 70 : 10;
  const emailAddress = "jashandullat8@gmail.com";
  
  
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      copyBtn.current.textContent = "Copied";
      
      setTimeout(() => {
        if (copyBtn.current) {
          copyBtn.current.textContent = "Copy";
        }
      }, 2000);
    } catch (err) {
      alert("Failed to copy text.");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // logging status
  useEffect(() => {
    if (isInView && !isMobile && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isInView, isMobile, hasLoaded]);

  return (
    <section
      className="grid grid-cols-[1fr_1fr] text-white xl:grid-cols-1 bg-[#060606] w-[100%]"
      id="social"
    >
      <div className="xl:order-2 cursor-move w-[100%] overflow-hidden relative">
        <InView 
          threshold={0.1}
          onChange={(inView) => {
            console.log("InView status changed:", inView);
            setIsInView(inView);
          }}
        >
          {({ inView, ref }) => (
            <div className="h-full" ref={ref}>
              {/* show image when on mobile or when the model not loaded */}
              {(isMobile || (!hasLoaded && !isInView)) ? (
                <img
                  src={socialImg}
                  alt="Social"
                  className="w-full xl:h-60 object-cover object-center"
                />
              ) : (
                <div className="h-full min-h-[500px]">
                  <Suspense fallback={<Loading />}>
                    <Canvas 
                      className="h-full" 
                      camera={{ position: [0, 1, 3], fov: isFov }}
                      frameloop="always"
                      style={{ 
                        position: "absolute", 
                        top: 0, 
                        left: 0, 
                        width: "100%", 
                        height: "100%",
                        willChange: "opacity",
                        transition: "opacity 0.2s ease-in-out" 
                      }}
                    >
                      
                      <VisibilityController isVisible={isInView} />
                      
                      <Environment 
                        preset="city" 
                        backgroundIntensity={0} 
                        environmentIntensity={0.7} 
                      />
                      <David />
                      <OrbitControls 
                        enableZoom={true} 
                        enablePan={false} 
                        maxPolarAngle={Math.PI / 2} 
                        maxDistance={5} 
                        minDistance={3} 
                        rotateSpeed={0.5}
                      />
                    </Canvas>
                  </Suspense>
                  
                  
                  {/* {!isInView && (
                    <img
                      src={socialImg}
                      alt="Social"
                      className="w-full h-full object-cover object-center absolute top-0 left-0 z-10"
                    />
                  )} */}
                </div>
              )}
            </div>
          )}
        </InView>
      </div>
      <div className="flex flex-col gap-8 justify-center p-12 xsm:px-4 w-full max-w-[35rem] m-auto">
        <div className="flex flex-col items-center gap-4 pb-8 text-center">
          <p className="text-3xl">Social/contact</p>
          <p>I don't use social media much, but here are links</p>
        </div>
        {socialLinks.map((el) => (
          <div key={el.link} className="flex items-center w-full">
            <span>
              <img src={el.svg} alt={el.altText} />
            </span>
            <span className="ml-4">{el.user}</span>
            <a href={el.link} target="_blank" rel="noopener noreferrer" className="ml-auto">
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
            id="email-field"
            rows="1"
            readOnly
            value={emailAddress}
            className="bg-transparent w-full resize-none outline-none border-none cursor-text"
          />
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
  );
};

export default Social;