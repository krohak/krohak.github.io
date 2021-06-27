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
  // TODO: GANs Specialization
  // https://github.com/krohak/GANs-deeplearning
  // TODO: Music shit
  // https://www.instagram.com/rohaksinghal/
  // https://www.youtube.com/watch?v=X0bqkoqr-fM
  // TODO: Add EmployMe
  // https://www.instagram.com/p/B1Vs7Y7hj7R/?hl=en
  // https://www.instagram.com/employmeglobal/?hl=en
  // https://www.facebook.com/hkuintl/posts/hult-prize-at-hku-champion-team-employme-led-by-sagar-gupta-beng-year-4-rahman-l/2483982341723396/
  // images of prototype maybe
  // writeup of idea
  // TODO: Add FYP 
  // https://i.cs.hku.hk/fyp/2018/fyp18069/
  // https://github.com/krohak/LexiCon
  // link the paper
  // TODO: Add Luxo
  // https://www.instagram.com/p/BwtxChzHCtO/
  // https://innoacademy.engg.hku.hk/projectid42/
  // https://www.youtube.com/watch?v=5-wxpCGBznc
  // TODO: Add QuoteGen
  // https://www.instagram.com/p/Bjaekj4nWEe/
  // https://github.com/krohak/QuoteGen
  // link the paper
  // TODO: Add TAGCN
  // https://github.com/krohak/TAGCN
    {
      title: "MindoroBots",
      content: "Oceanographic Swarm Robots to Map Coral Reefs",
      img: mind,
      type: "component",
      body: <Mindorobots />,
        // TODO: Fix the image resizing in body
        // TODO: Add the paper link, newspaper article, 3rd recon. etc
        // https://www.instagram.com/p/BdAbT9JldFL/
        // https://www.instagram.com/p/BdncA8Qlu2J/
        // https://www.jamesdysonaward.org/en-HK/2018/project/mindorobots/
        // https://www.facebook.com/mindorobots/videos/1959047024123607
        // https://www.gmanetwork.com/news/video/stateofthenation/450887/robot-na-naimbento-ng-mga-estudyante-puwedeng-magamit-sa-coral-mapping/video/
        // https://www.youtube.com/watch?v=K5lxQky4GaI
        // https://www.facebook.com/mindorobots/photos/pcb.2315579441803695/2315579021803737
        // https://mb.com.ph/2018/02/14/robots-deployed-to-map-coral-reefs-in-mindoro/
        // https://www.instagram.com/p/BfSvF98hZVk/
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
      // TODO: Fix pre loading / no jumps
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
      // TODO: Fix pre loading / no jumps
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