import React, { useRef, useState } from "react"
import { projects } from "../constant"

const Projects = () => {
  const [playing, setPlaying] = useState({})
  const videoRef = useRef({})
  const playingStatus = useRef([])

  const handleVidPlay = (i, play) => {
    if (play === true) {
      videoRef.current[i].play()
      playingStatus.current[i].textContent = `Playing...`
      setPlaying((prev) => ({ ...prev, [i]: true }))
    } else {
      videoRef.current[i].pause()
      playingStatus.current[i].textContent = ``
      setPlaying((prev) => ({ ...prev, [i]: false }))
    }
  }

  const handleButtonClick = (e, i) => {
    e.stopPropagation()
    handleVidPlay(i, !playing[i])
  }
  return (
    <div className="grid grid-cols-1 *:border-b-[1px] *:py-10" id="projects">
      <div className="text-center">
        <p className="text-3xl mb-6">Projects</p>
        <p>
          here are some of my favourate projects. visit my github profile for
          all the projects
        </p>
      </div>
      {projects.map((project, i) => (
        <div
          key={project.name}
          className="project-box"
          onMouseEnter={() => handleVidPlay(i, true)}
          onMouseLeave={() => handleVidPlay(i, false)}
        >
          <div className="flex flex-col gap-4">
            <p className="text-xl">
              {i + 1}: {project.name}{" "}
            </p>
            <p className="opacity-60">{project.des}</p>
            <div>
              {project.tech.map((tech, i) => (
                <span className="bg-slate-700 text-white text-sm px-2 rounded-full mr-2">
                  {tech}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8 mt-auto mb-4 font-light text-lg md:my-4">
              <button
                className={`px-2 border-[1px] rounded-full max-w-40 ${
                  project.links.liveAvalable === false
                    ? "pointer-events-none cursor-default opacity-50"
                    : ""
                }`}
              >
                <a href={project.links.live}>
                  <span>Visit Live</span>
                </a>
              </button>
              <button className="px-2 border-[1px] rounded-full max-w-40">
                <a href={project.links.code}>
                  <span>Visit Code</span>
                </a>
              </button>
            </div>
          </div>
          <div className="relative">
            <video
              ref={(el) => (videoRef.current[i] = el)}
              autoPlay={false}
              // playsInline={true}
              muted
              width={600}
              loop={true}
              preload={true}
              className="w-full"
            >
              <source src={project.vid} type="video/mp4" />
            </video>
            <div
              ref={(el) => (playingStatus.current[i] = el)}
              className="absolute top-4 left-4 playing-status px-2 rounded-full text-white"
            ></div>
            <button
              onClick={(e) => handleButtonClick(e, i)}
              className={`play-btn ${
                playing[i] ? "translate-y-[2rem]" : "translate-y-[50%]"
              }`}
            >
              {playing[i] ? "PAUSE" : "PLAY"}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
