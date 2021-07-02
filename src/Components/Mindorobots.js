import {
     Grid,
     Container,
     Button,
     Typography,
     Avatar,
     makeStyles,
     Link
 } from "@material-ui/core";
 import mdrb2 from './../img/mdrb2.jpg';
 
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

const Mindorobots=()=>{
    const classes=useStyles();

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Grid container justify='center' alignItems='center' spacing={1}>
                    <Grid item ><Button variant="contained" disabled style={{borderRadius:'55px'}}>#Arduino</Button></Grid>
                    <Grid item><Button variant="contained" disabled style={{borderRadius:'55px'}}>#Web</Button></Grid>
                    <Grid item><Button variant="contained" disabled style={{borderRadius:'55px'}}>#Raspberry Pi</Button></Grid>
                </Grid>
            </Grid>
        
                <Container maxWidth='md' >
                <Grid item>
                </Grid>
                <Grid item>
                <Grid container justify='center' alignItems='center' spacing={3}>
                    <Grid item >
                        <Typography component='span' style={{color:'#5d5d5d'}}>MindoroBots is a research project which aims to map Coral Reefs around the island of <Link href='https://www.google.co.in/maps/place/Mindoro/@12.8684646,120.3681139,9z/data=!3m1!4b1!4m5!3m4!1s0x33bc82a795f0b0a3:0xa7c97d5adf33b09b!8m2!3d13.1162266!4d121.0793705' target='_blank' className={classes.link}> Mindoro,Philippines</Link> using a Swarm of Oceanographic Robots. Funded by <Link href='http://ghelc.hku.hk/HKU' target='_blank' className={classes.link}>GHELC</Link>, we shall work with experts from <Link href='https://www.scoutbots.com/' target='_blank' className={classes.link}>Scoutbots</Link> and <Link href='http://www.ecotoneresilience.org/' className={classes.link} target='_blank'>Ecotone Resilience</Link> to build and test these robots in Hong Kong from September to December 2017.</Typography>
                    </Grid>
                    <Grid item>
                        <Typography component='span' style={{color:'#5d5d5d'}}>I, along with <Link href='http://sdhntgupta.com/' target='_blank' className={classes.link}>Mr. Sidhant Gupta</Link>, under the guidance of <Link href='https://www.eee.hku.hk/people/kslui/' target='_blank' className={classes.link}>Dr. K.S Lui</Link> and <Link href='http://www.cesarharada.com/' target='_blank' className={classes.link}>Mr. Cesar Harada</Link>, initiated the MindoRobots project.</Typography>
                    </Grid>
                    <Grid item>
                        <Avatar alt="MindoroBots" src={mdrb2} variant="rounded"  className={classes.large} />
                    </Grid>
                    <Grid item>
                        <Typography  component='span' style={{color:'#5d5d5d'}}>
                        In January 2018, using the massive amount of data that we generate in Mindoro, we will work with environmentalists and researchers to determine a safe coral protection baseline, which will serve as a guideline to the government when designating tourist areas in Mindoro.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography component='span' style={{color:'#5d5d5d'}}>
                        Further, this data that we generate as well as the robots would be made open source, and shall go a long way in initiating, supporting and growing similar projects across the world for negligible cost.   
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography component='span' style={{color:'#5d5d5d'}}>
                        Know more about the MindoRobots team and trace our exciting jouney on the <Link href='https://mindorobots.wordpress.com/' target='_blank' className={classes.link}>MindoroBots Website</Link>.
                            Follow us on <Link href='https://www.facebook.com/mindorobots/' className={classes.link} target='_blank'>Facebook</Link> and <Link href='https://www.instagram.com/mindorobots/' className={classes.link} target='_blank'>Instagram</Link>.
                        </Typography>
                    </Grid>
                    </Grid>
                    </Grid>
                </Container>
            
        </Grid>
    )

}


export default Mindorobots;