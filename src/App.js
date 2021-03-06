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
import { createBrowserHistory } from "history";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import {
  Facebook,
  Twitter,
  GitHub,
  Instagram,
  YouTube,
  Email,
  LinkedIn
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
  {name:'linkedin',url:'https://www.linkedin.com/in/krohak/',icon:LinkedIn,iconType:'material'},
  {name:'github',url:'https://github.com/krohak',icon:GitHub,iconType:'material'},
  {name:'instagram',url:'https://www.instagram.com/krohak/',icon:Instagram,iconType:'material'},
  {name:'twitter',url:'https://twitter.com/RohakSinghal',icon:Twitter,iconType:'material'},
  {name:'facebook',url:'https://www.facebook.com/krohak',icon:Facebook,iconType:'material'},
  {name:'youtube',url:'https://www.youtube.com/channel/UCausm_sTm0RlbKGvXGHaenA', icon:YouTube,iconType:'material'},
  {name:'medium',url:'https://medium.com/@krohak',icon:faMedium,iconType:'fontAwesome'},
  {name:'email',url:'mailto:rohaksinghal14@gmail.com',icon:Email,iconType:'material'}
]

  
function App(props) {
  const classes = useStyles();
  const history = createBrowserHistory();

  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
    },
  });
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

  const [filters, setFilters] = useState([
    { name: "#Machine Learning", isSelected: false },
    { name: "#Entrepreneurship", isSelected: false },
    { name: "#Research", isSelected: false },
    { name: "#Product", isSelected: false },
    { name: "#Music", isSelected: false },
  ]);
  const filterSelectedStyle= {
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

  const handleProjects = (index) => {
    if (index === -1) {
      return {
        title: "About Me",
        children: <Me />,
        styles: {
          title: { background: "#000", color: "#fff", textAlign: "center" },
          content: { background: "#000" },
        },
      }
    } else if (projectsDetail[index].type === "component") {
        return {
          title: projectsDetail[index].title,
          children: projectsDetail[index].body,
          styles: projectsDetail[index].styles,
        }
    }
  }

  const [dialogProps, setDialogProps] = useState(props.openDialog !== undefined? handleProjects(props.openDialog):{});
  const [openDialog, setOpenDialog] = useState(props.openDialog !== undefined? true:false);

  const handleClickOpen = (index) => {
    if (index === -1 || projectsDetail[index].type === "component") {
        setDialogProps(handleProjects(index))
        setOpenDialog(true);
        if(index === -1){
          history.push(`/me`)
        }else{
          history.push(`/${projectsDetail[index].title.toLowerCase().replace(/\s/g, "-")}`)
        }
        
    } else {
      window.open(projectsDetail[index].url, "_blank").focus();
    }
     
  };
   const handleClose = () => {
    setOpenDialog(false);
    history.push("/")
  };
  const handleExited = () => {
    setDialogProps({})
  };
  
  useEffect(() => {
    return history.listen( _ => {
      if (history.action === 'POP') {
        setOpenDialog(false);
      }
    })
  })


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Dialog
          open={openDialog}
          fullScreen={isSmall}
          onHandleClose={handleClose}
          onHandleExited={handleExited}
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
                <Grid item md={3} xs={12} style={{textAlign:"-webkit-center"}}>    
                  <Avatar
                    alt="Rohak Singhal"
                    src={me}
                    className={classes.large}
                  />
                </Grid>
                <Grid item md={9} xs={12} style={isSmall? {textAlign:"center"} : null}>
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
