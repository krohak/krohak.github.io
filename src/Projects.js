import Mindorobots from "./Components/Mindorobots";
import ProteiRohak from "./Components/ProteiRohak";
import Mld from "./Components/Mld";
import QuoteGen from "./Components/QuoteGen";
import Luxo from "./Components/Luxo";
import EmployMe from "./Components/EmployMe";

import mind from './img/mind.jpg';
import protei_rpi from './img/protei_rpi.jpg';
import youtube from './img/youtube.jpg';

// import mld from './img/mld.jpg';
// import  protei_rohak from './img/protei_rohak.jpg';
// import ires from './img/ires.jpg';
// import tzp  from './img/tzp.jpg';
// import cadl from './img/cadl.jpg';
// import projects from './img/projects.jpg';

import gif_prot from './img/protei_rohak.gif';
import gif_mld from './img/mld.gif';
import gif_ires from './img/ires.gif';
import gif_tzp from './img/tzp.gif';
import gif_cadl from './img/cadl.gif';
import gif_proj from './img/projects.gif';

export const Projects = [
  {
  title: "Luxo",
  content: "A Personal Assistant Lamp",
  // TODO: gif: Luxo,
  type: "component",
  body: <Luxo />,
  styles: {
    title: {
      textAlign: "center",
    },
  },
  tag: ["#Product"],
  display: true,
  },
  {
    title: "QuoteGen",
    content: "Cross-Topic Quotes Generation using Word Embeddings",
    // TODO: gif: QuoteGen,
    type: "component",
    body: <QuoteGen />,
    styles: {
      title: {
        textAlign: "center",
      },
    },
    tag: ["#Machine Learning", "#Research"],
    display: true,
    },
    {
      title: "EmployMe",
      content: "Hult Prize Finalist",
      // TODO: gif: EmployMe,
      type: "component",
      body: <EmployMe />,
      styles: {
        title: {
          textAlign: "center",
        },
      },
      tag: ["#Entrepreneurship"],
      display: true,
    },
    {
      title: "Tensorflow TAGCN",
      content: "Tensorflow Implementation of TAGCN (Du et al., 2017)",
      // TODO: gif: TAGCN,
      url: "https://github.com/krohak/TAGCN",
      tag: ["#Machine Learning", "#Research"],
      display: true,
    },
    {
      title: "LexiCon",
      content: "Brain Computer Interface using Machine Learning",
      // TODO: gif: LexiCon,
      url: "https://github.com/krohak/LexiCon",
      tag: ["#Machine Learning", "#Research"],
      display: true,
    },
    {
      title: "MindoroBots",
      content: "Oceanographic Swarm Robots to Map Coral Reefs",
      // TODO: gif: mind,
      type: "component",
      body: <Mindorobots />,
      styles: {
        title: {
          textAlign: "center",
        },
      },
      tag: ["#Entrepreneurship", "#Product", "#Research"],
      display: true,
    },
    {
      title: "Protei Rohak",
      content: "Android + Modular Shapeshifting Boat",
      gif: gif_prot,      
      type: "component",
      body: <ProteiRohak />,
      styles: {
        title: {
          textAlign: "center",
        },
      },
      tag: ["#Product"],
      display: true,
    },
    {
      title: "WWF Marine Litter Detective",
      content: "Track Litter with Arduino",
      gif: gif_mld,      
      type: "component",
      body: <Mld />,
      styles: {
        title: {
          textAlign: "center",
        },
      },
      tag: ["#Entrepreneurship", "#Product"],
      display: true,
    },
    {
      title: "Protei Rpi",
      content: "Deploying a Network in the Ocean",
      gif: protei_rpi,
      url: "https://github.com/krohak/Protei_Rpi",
      tag: ["#Product", "#Research"],
      display: true,
    },
    {
      title: "iResidence",
      content: "Integrated Design Project",
      gif: gif_ires,
      url: "https://github.com/krohak/Integrated-Design-Project",
      tag: ["#Product"],
      display: true,
    },
    {
      title: "GANs Specialization",
      content: "Coursera",
      // TODO: gif: GANs,
      url: "https://github.com/krohak/GANs-deeplearning",
      tag: ["#Machine Learning", "#Research"],
      display: true,
    },
    {
      title: "Creative Applications of Deep Learning",
      content: "Experiments with Tensorflow",
      gif: gif_cadl,      
      url: "https://github.com/krohak/CADL",
      tag: ["#Machine Learning", "#Research"],
      display: true,
    },
    {
      title: "Miscellaneous Projects",
      content: "Projet Divers",
      gif: gif_proj,
      url: "https://github.com/krohak/Projects",
      tag: ["Entrepreneurship", "#Product"],
      display: true,
    },
    {
      title: "Rohak Singhal Music",
      content: "Instagram Page",
      // TODO: gif: Music,
      url: "https://www.instagram.com/rohaksinghal/",
      tag: ["#Music"],
      display: true,
    },
    {
      title: "The Zero Point",
      content: "Contemporary South Asian Music",
      gif: gif_tzp,      
      url: "http://thezeropoint.com.hk/",
      tag: ["#Music"],
      display: true,
    },
    {
      title: "Youtube Channel",
      content: "Chaîne Youtube",
      gif: youtube,
      url: "https://www.youtube.com/channel/UCausm_sTm0RlbKGvXGHaenA",
      tag: ["#Product", "#Music"],
      display: true,
    },
  ]