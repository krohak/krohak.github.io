import {
     Grid,
     Container,
     Button,
     Typography,
     Avatar,
     makeStyles,
     Link
 } from "@material-ui/core";
 import YoutubeEmbed from "./YoutubeEmbed";
 import {
    Instagram,
    Language,
    Assessment
  } from "@material-ui/icons";

 const socialConnects =[
    {name:'instagram',url:'https://www.instagram.com/mindorobots/',icon:Instagram,iconType:'material'},
    {name:'website',url:'https://www.jamesdysonaward.org/en-HK/2018/project/mindorobots/',icon:Language,iconType:'material'},
    {name:'paper',url:'https://www.researchgate.net/publication/337648583_Coral_Reef_Mapping_using_Ocean_Drones_Laser_Quadrat',icon:Assessment,iconType:'material'},

  ]
 
 const useStyles = makeStyles((theme) => ({
    large: {
      width:650,
      height:'auto',
      WebkitAnimation: 'bgfade .3s ease',
      animation: 'bgfade .3s ease'
    },
    link:{
        color:'#8e8e8e'
    }
  }));

const Mindorobots=()=>{
    const classes=useStyles();

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Grid container justify='center' alignItems='center' spacing={1}>
                    <Grid item ><Button variant="contained" disabled style={{borderRadius:'55px'}}>#Entrepreneurship</Button></Grid>
                    <Grid item><Button variant="contained" disabled style={{borderRadius:'55px'}}>#Product</Button></Grid>
                    <Grid item><Button variant="contained" disabled style={{borderRadius:'55px'}}>#Research</Button></Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
            <Grid
                container
                justify='center' alignItems='center'
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
                      <social.icon />
                      </Link>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
            <Container maxWidth='md' >
                <Grid item>
                    <Grid container justify='center' direction='column' alignItems='center' spacing={3}>
                        <Grid item >
                            <Typography component='span' style={{color:'#5d5d5d'}}>
                            Coral reef ecosystems are some of the diverse and valuable ecosystems on earth. They support more species per unit area than any other marine environment, including about 4,000 species of fish, 800 species of hard corals and hundreds of other species as well as provide goods and services worth $375 billion each year. However, due to climate change, only about 46% of the world’s coral were considered healthy in 2008 and this percentage has dropped further recently. Coral protection is key for the sustenance of human life on earth and we started Mindorobots to make it affordable and viable for local communities to map and conserve their reefs.	
                            </Typography>
                        </Grid>
                        <Grid item>
                            <div style={{width:'400px'}}>
                                <YoutubeEmbed embedId='bpGnt_LmD_o' />
                            </div>
                        </Grid>
                        <Grid item >
                            <Typography component='span' style={{color:'#5d5d5d'}}>
                            A big issue with coral conservation is reef mapping - which is currently done by divers manually moving and photographing every unit area of the reef. MindoroBot is an ocean robot which can autonomously sail, photograph and map Coral Reefs at a low cost with a laser quadrat.			
                            </Typography>
                        </Grid>
                        <Grid item>
                            <div style={{width:'400px'}}>
                                <YoutubeEmbed embedId='nhH-gh0Wbfk' />
                            </div>
                        </Grid>
                        <Grid item></Grid>
                    </Grid>
                    <Grid container justify='center' direction='column' alignItems='center' spacing={1}>
                        <Grid item >
                            <Typography component='span' style={{color:'#5d5d5d'}}>
                            <Link href='https://www.researchgate.net/publication/337648583_Coral_Reef_Mapping_using_Ocean_Drones_Laser_Quadrat' target='_blank' className={classes.link}>Read our research paper here</Link>
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography component='span' style={{color:'#5d5d5d'}}>
                            <Link href='https://www.jamesdysonaward.org/en-HK/2018/project/mindorobots/' target='_blank' className={classes.link}>James Dyson Award, National Runners Up</Link>
                            </Typography>
                        </Grid>
                        <Grid item ></Grid>
                        <Grid item ></Grid>
                        <Grid item ></Grid>
                        <Grid item ></Grid>
                    </Grid>
                    <Grid container justify='center' direction='column' alignItems='center' spacing={3}>
                        <Grid item >
                            <Typography variant="h4" >
                            Media Coverage
                            </Typography>
                        </Grid>
                        <Grid item>
                            <div style={{width:'400px'}}>
                                <YoutubeEmbed embedId='cf1y26zTJLk' />
                            </div>
                        </Grid>
                        <Grid item></Grid>
                    </Grid>
                    <Grid container justify='center' direction='column' alignItems='center' spacing={1}>
                        <Grid item >
                            <Typography component='span' style={{color:'#5d5d5d'}}>
                            <Link href='https://mb.com.ph/2018/02/14/robots-deployed-to-map-coral-reefs-in-mindoro/' target='_blank' className={classes.link}>Manilla Bulletin Coverage</Link>
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography component='span' style={{color:'#5d5d5d'}}>
                            <Link href='https://www.gmanetwork.com/news/video/stateofthenation/450887/robot-na-naimbento-ng-mga-estudyante-puwedeng-magamit-sa-coral-mapping/video/' target='_blank' className={classes.link}>GMA Network Coverage</Link>
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography component='span' style={{color:'#5d5d5d'}}>
                            <Link href='https://www.eee.hku.hk/news/project-mindorobots-was-awarded-national-runner-up-in-the-james-dyson-award-2018/' target='_blank' className={classes.link}>The University of Hong Kong Coverage</Link>
                            </Typography>
                        </Grid>
                    </Grid>
              </Grid>
            </Container>
            </Grid>
    )

}

export default Mindorobots;