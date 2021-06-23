import {useState,useEffect} from 'react';

import {
  Grid,
  Container,
  Typography,
  Link,
  Box,
  Button,
  createMuiTheme,
  ThemeProvider,
  Fade
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import {
  Facebook,
  Twitter,
  GitHub,
  Instagram,
  YouTube,
  Email,
} from "@material-ui/icons";
  import { makeStyles } from '@material-ui/core/styles';
  import Avatar from "@material-ui/core/Avatar";
  import Dialog from "./Components/Dialog";
  import ProjectCard from "./Components/ProjectCard";
  import Me from "./Components/Me";
  import Mindorobots from "./Components/Mindorobots";
  import ProteiRohak from "./Components/ProteiRohak";
  import Mld from "./Components/Mld";

  import me from './img/me.jpg';
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
  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }));

  
  const socialConnects=[
    {name:'facebook',url:'https://www.facebook.com/krohak',icon:Facebook,iconType:'material'},
    {name:'medium',url:'https://medium.com/@krohak',icon:faMedium,iconType:'fontAwesome'},
    {name:'github',url:'https://github.com/krohak',icon:GitHub,iconType:'material'},
    {name:'instagram',url:'https://www.instagram.com/krohak/',icon:Instagram,iconType:'material'},
    {name:'youtube',url:'https://www.youtube.com/channel/UCausm_sTm0RlbKGvXGHaenA', icon:YouTube,iconType:'material'},
    {name:'twitter',url:'https://twitter.com/RohakSinghal',icon:Twitter,iconType:'material'},
    {name:'email',url:'mailto:krohak@hku.hk',icon:Email,iconType:'material'}
  ]

  
function App() {
  const classes = useStyles();
  const [dialogProps, setDialogProps] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [filters, setFilters] = useState([
    { name: "#android", isSelected: false },
    { name: "#arduino", isSelected: false },
    { name: "#web", isSelected: false },
    { name: "#raspberry pi", isSelected: false },
    { name: "#tensorflow", isSelected: false },
    { name: "#music", isSelected: false },
  ]);
  const style = {
    textDecoration: "none",
    backgroundColor: "#858585",
    color: "#fff",
    borderRadius: "55px",
  };
  const [projectsDetail, setProjectsDetails] = useState([
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
  ]);

  const handleFilter = (index) => {
    setFilters((prev) => {
      const modifiedPrev = [...prev];
      modifiedPrev[index].isSelected = !modifiedPrev[index].isSelected;
      return modifiedPrev;
    });
  };

  useEffect(() => {
    const selected = [];
    for (const filter of filters) {
      if (filter.isSelected) {
        selected.push(filter.name);
      }
    }
    const modifiedProjectsDetail = [...projectsDetail];
    if (selected.length > 0) {
      for (const project of modifiedProjectsDetail) {
        const tag = [...project.tag];
        project.display = selected.some((el1) => tag.includes(el1));
      }
    } else {
      for (const project of modifiedProjectsDetail) {
        project.display = true;
      }
    }
    setProjectsDetails(modifiedProjectsDetail);
  }, [filters]);

  const handleClickOpen = (index) => {
    if (index === -1) {
      setDialogProps({
        title: "About Me",
        children: <Me />,
        styles: {
          title: { background: "#000", color: "#fff", textAlign: "center" },
          content: { background: "#000" },
        },
      });
      setOpenDialog(true);
    } else {
      if (projectsDetail[index].type === "component") {
        setDialogProps({
          title: projectsDetail[index].title,
          children: projectsDetail[index].body,
          styles: projectsDetail[index].styles,
        });
        setOpenDialog(true);
      } else {
        window.open(projectsDetail[index].url, "_blank").focus();
      }
    }
  };

  const handleClose = () => {
    // setDialogProps({});
    setOpenDialog(false);
  };
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Dialog
          open={openDialog}
          onHandleClose={handleClose}
          {...dialogProps}
        />
        <Fade in={true} timeout={700}>
        <Grid container spacing={10} direction="column">
          <Grid item>
            <Box pt={5}>
              <Grid
                container
                alignItems="center"
                justify="flex-start"
                spacing={10}
              >
                <Grid item>
                  <Avatar
                    alt="Rohak singhal"
                    src={me}
                    className={classes.large}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h4">I'm Rohak</Typography>
                  <Button onClick={() => handleClickOpen(-1)}>see more</Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item>
            <Grid container alignItems="flex-start" justify="space-around">
              {filters.map((filter, index) => (
                <Grid item key={filter.name}>
                  <Button
                    onClick={() => handleFilter(index)}
                    style={filter.isSelected ? style : { borderRadius: "55px" }}
                  >
                    {filter.name}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" justify="center" spacing={10}>
              {projectsDetail.map((project, index) =>
                project.display ? (
                  <Grid item key={index}>
                    <ProjectCard
                      onHandleClickOpen={handleClickOpen}
                      index={index}
                      title={project.title}
                      content={project.content}
                      gif={project.gif ? project.gif : project.img}
                      img={project.img}
                    />
                  </Grid>
                ) : null
              )}
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="flex-start"
              justify="flex-start"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h5">connect</Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  alignItems="flex-start"
                  justify="flex-start"
                  spacing={4}
                >
                  {socialConnects.map((social) => (
                    <Grid item key={social.name}>
                      <Link
                        color="textSecondary"
                        underline="hover"
                        target="_blank"
                        rel="noreferrer"
                        href={social.url}
                      >
                        <>
                          {social.iconType === "material" ? (
                            <social.icon />
                          ) : (
                            <FontAwesomeIcon
                              style={{ fontSize: "25px" }}
                              icon={social.icon}
                            />
                          )}
                        </>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Fade>
      </Container>
    </ThemeProvider>
  );
}

export default App;
