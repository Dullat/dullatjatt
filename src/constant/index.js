import iphoneVid from "../assets/vids/iphone.webm"
import marathonVid from "../assets/vids/marathon.webm"
import eeactAppVid from "../assets/vids/ReactApp.webm"
import arrow from "../assets/svg/arrow-right-circle.svg"
import insta from "../assets/svg/instagram.svg"
import github from "../assets/svg/github.svg"
import linkedin from "../assets/svg/linkedin.svg"

export const projects = [
  {
    name: "iPhone",
    des: "Comonants from apple's website like hero and implementation of complex video carosuel using gsap. Objective was to learn GSAP",
    tech: ["Frontend", "React", "GSAP", "Router"],
    vid: iphoneVid,
    links: {
      live: "https://dullat.github.io/apple-store-componants/",
      code: "https://github.com/Dullat/apple-store-componants",
    },
  },
  {
    name: "Store",
    des: "It is a job listing webApp allow Developers and Companies to show, browse, add, edit and delete jobs",
    tech: ["Frontend", "React", "json-server", "Router"],
    vid: eeactAppVid,
    links: {
      live: "https://dullat.github.io/",
      code: "https://github.com/Dullat/React-jobs",
      liveAvalable: false,
    },
  },
  {
    name: "Marathon the Game",
    des: "A game store using complex layout",
    tech: ["Frontend", "React", "Router"],
    vid: marathonVid,
    links: {
      live: "https://dullat.github.io/marathon/",
      code: "https://github.com/Dullat/marathon",
    },
  },
]

export const socialLinks = [
  {
    user: "dullat101",
    altText: "instagram",
    svg: insta,
    link: "https://instagram.com/dullat101",
  },
  {
    user: "dullat",
    altText: "github",
    svg: github,
    link: "https://github.com/dullat",
  },
  {
    user: "dullatjatt",
    altText: "linkedin",
    svg: linkedin,
    link: "https://www.linkedin.com/in/jashan-dullat-462b3b304/",
  },
]

export const goBtn = arrow
