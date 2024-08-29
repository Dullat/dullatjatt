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
    des: "comonants from apple's website like hero and implementation of complex video carosuel using gsap",
    tech: ["React", "GSAP"],
    vid: iphoneVid,
    links: {
      live: "dont have link",
      code: "i dont know",
    },
  },
  {
    name: "Store",
    des: "comonants from apple's website like hero and implementation of complex video carosuel using gsap",
    tech: ["React", "GSAP"],
    vid: eeactAppVid,
    links: {
      live: "dont have link",
      code: "i dont know",
    },
  },
  {
    name: "Marathon the Game",
    des: "comonants from apple's website like hero and implementation of complex video carosuel using gsap",
    tech: ["React"],
    vid: marathonVid,
    links: {
      live: "dont have link",
      code: "i dont know",
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
    link: "https://instagram.com/dullat101",
  },
]

export const goBtn = arrow
