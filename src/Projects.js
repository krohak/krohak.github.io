import Mindorobots from "./Components/Mindorobots";
import ProteiRohak from "./Components/ProteiRohak";
import Mld from "./Components/Mld";
import QuoteGen from "./Components/QuoteGen";
import Luxo from "./Components/Luxo";
import EmployMe from "./Components/EmployMe";

import youtube from './img/youtube.jpg';
import tagcn from './img/tagcn.jpg'

import gif_prot from './img/protei_rohak.gif';
import gif_mld from './img/mld.gif';
import gif_ires from './img/ires.gif';
import gif_tzp from './img/tzp.gif';
import gif_cadl from './img/cadl.gif';
import gif_proj from './img/projects.gif';
import gif_quotegen from './img/quotegen.gif'
import gif_luxo from './img/luxo-low.gif'
import gif_lexicon from './img/lexicon-low.gif'
import gif_mindorobots from './img/mindorobots-low.gif'
import gif_employme from './img/employme.gif'
import gif_gans from './img/gans.gif'
import gif_music from './img/music.gif'

export const Projects = [
  {
  title: "Luxo",
  content: "A Personal Assistant Lamp",
  gif: gif_luxo,
  type: "component",
  body: <Luxo />,
  styles: {
    title: {
      textAlign: "center",
    },
  },
  tag: ["#Machine Learning","#Product"],
  display: true,
  },
  {
    title: "QuoteGen",
    content: "Cross-Topic Quotes Generation using Word Embeddings",
    gif: gif_quotegen,
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
      gif: gif_employme,
      url: "https://www.instagram.com/employmeglobal/",
      tag: ["#Entrepreneurship"],
      display: true,
    },
    {
      title: "Tensorflow TAGCN",
      content: "Tensorflow Implementation of TAGCN (Du et al., 2017)",
      gif: tagcn,
      url: "https://github.com/krohak/TAGCN",
      tag: ["#Machine Learning", "#Research"],
      display: true,
    },
    {
      title: "LexiCon",
      content: "Brain Computer Interface using Machine Learning",
      gif: gif_lexicon,
      url: "https://github.com/krohak/LexiCon",
      tag: ["#Machine Learning", "#Research"],
      display: true,
    },
    {
      title: "MindoroBots",
      content: "Ocean Robot to Map Coral Reefs",
      gif: gif_mindorobots,
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
      gif: gif_gans,
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
      gif: gif_music,
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