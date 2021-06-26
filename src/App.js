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
  Fade,
  useMediaQuery
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
import me from './img/me.jpg';
import { Projects } from './Projects';

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
  const  filterSelectedStyle= {
    textDecoration: "none",
    backgroundColor: "#858585",
    color: "#fff",
    borderRadius: "55px",
  };

  const filterStyle = { 
    backgroundColor: "#F1F1F1", 
    borderRadius: "55px",
  }
  const [projectsDetail, setProjectsDetails] = useState(Projects);

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
          fullScreen={useMediaQuery(theme.breakpoints.down('sm'))}
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
                justify="center"
                spacing={10}
              >
                <Grid item md={3}  xs={8}>
                  <Avatar
                    alt="Rohak Singhal"
                    src={me}
                    className={classes.large}
                  />
                </Grid>
                <Grid item md={9} xs={8}>
                  <Typography variant="h4">I'm Rohak</Typography>
                  <Button onClick={() => handleClickOpen(-1)}>see more</Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item>
            <Grid container spacing={3} alignItems="flex-start" justify="center">
              {filters.map((filter, index) => (
                <Grid item key={filter.name}>
                  <Button
                    onClick={() => handleFilter(index)}
                    style={filter.isSelected ? filterSelectedStyle: filterStyle}
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
