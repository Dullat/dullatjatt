import React from "react"
import HomeSection from "./componants/HomeSection"
import NavBar from "./componants/NavBar"
import AboutMe from "./componants/AboutMe"

const App = () => {
  return (
    <div className="">
      <div className="bg-black px-[10%] h-dvh  flex flex-col xl:px-6 xsm:px-2">
        <NavBar></NavBar>
        <HomeSection></HomeSection>
      </div>
      <div className="bg-[#DFDFDF] px-[10%] flex flex-col xl:px-6 xsm:px-0">
        <AboutMe></AboutMe>
      </div>
    </div>
  )
}

export default App
