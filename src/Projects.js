import Mindorobots from "./Components/Mindorobots";
import ProteiRohak from "./Components/ProteiRohak";
import Mld from "./Components/Mld";

import mind from './img/mind.jpg';
import mld from './img/mld.jpg';
import protei_rpi from './img/protei_rpi.jpg';
import  protei_rohak from './img/protei_rohak.jpg';
import ires from './img/ires.jpg';
import tzp  from './img/tzp.jpg';
import cadl from './img/cadl.jpg';
import youtube from './img/youtube.jpg';
import projects from './img/projects.jpg';
import image_prot from './img/protei_rohak.gif';
import  image_mld from './img/mld.gif';
import  image_ires from './img/ires.gif';
import image_tzp from './img/tzp.gif';
import image_cadl from './img/cadl.gif';
import image_proj from './img/projects.gif';

export const Projects = [
    {
      title: "MindoroBots",
      content: "Oceanographic Swarm Robots to Map Coral Reefs",
      img: mind,
      type: "component",
      body: <Mindorobots />,
      styles: {
        title: {
          textAlign: "center",
        },
      },
      tag: ["#raspberry pi", "#web", "#arduino"],
      display: true,
    },
    {
      title: "Protei Rohak",
      content: "Android + Modular Shapeshifting Boat",
      img: protei_rohak,
      gif: image_prot,
      type: "component",
      body: <ProteiRohak />,
      styles: {
        title: {
          textAlign: "center",
        },
      },
      tag: ["#arduino", "#android"],
      display: true,
    },
    {
      title: "WWF Marine Litter Detective",
      content: "Track Litter with Arduino",
      img: mld,
      gif: image_mld,
      type: "component",
      body: <Mld />,
      styles: {
        title: {
          textAlign: "center",
        },
      },
      tag: ["#web", "#arduino"],
      display: true,
    },
    {
      title: "Protei Rpi",
      content: "Deploying a Network in the Ocean",
      img: protei_rpi,
      url: "https://github.com/krohak/Protei_Rpi",
      tag: ["#raspberry pi", "#android"],
      display: true,
    },
    {
      title: "iResidence",
      content: "Integrated Design Project",
      img: ires,
      gif: image_ires,
      url: "https://github.com/krohak/Integrated-Design-Project",
      tag: ["#raspberry pi", "#arduino"],
      display: true,
    },
    {
      title: "The Zero Point",
      content: "Contemporary South Asian Music",
      img: tzp,
      gif: image_tzp,
      url: "http://thezeropoint.com.hk/",
      tag: ["#music"],
      display: true,
    },
    {
      title: "Creative Applications of Deep Learning",
      content: "Experiments with Tensorflow",
      img: cadl,
      gif: image_cadl,
      url: "https://github.com/krohak/CADL",
      tag: ["#tensorflow"],
      display: true,
    },
    {
      title: "Miscellaneous Projects",
      content: "Projet Divers",
      img: projects,
      gif: image_proj,
      url: "https://github.com/krohak/Projects",
      tag: ["#tensorflow", "#raspberry pi", "#arduino"],
      display: true,
    },
    {
      title: "Youtube Channel",
      content: "Chaîne Youtube",
      img: youtube,
      url: "https://www.youtube.com/channel/UCausm_sTm0RlbKGvXGHaenA",
      tag: ["#music", "#arduino", "#android"],
      display: true,
    },
  ]