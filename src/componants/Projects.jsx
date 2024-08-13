import React, { useRef, useState } from "react"
import { projects } from "../constant"

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const videoRef = useRef({})

  const handleVidPlay = (i, play) => {
    play ? videoRef.current[i].play() : videoRef.current[i].pause()
  }
  return (
    <div className="grid grid-cols-1 *:border-b-[1px] *:py-10">
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
              <button className="px-2 border-[1px] rounded-full max-w-40">
                <a href="">
                  <span>Visit Live</span>
                </a>
              </button>
              <button className="px-2 border-[1px] rounded-full max-w-40">
                <span>Visit Code</span>
              </button>
            </div>
          </div>
          <div>
            <video
              ref={(el) => (videoRef.current[i] = el)}
              autoPlay={false}
              playsInline={true}
              muted
              width={600}
              loop={true}
              className="w-full"
            >
              <source src={project.vid} type="video/mp4" />
            </video>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
