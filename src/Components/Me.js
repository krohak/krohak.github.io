import React from 'react';
import { 
    Grid,
    Typography,
    Avatar,
    makeStyles ,
    Link

} from "@material-ui/core";
import rohak from './../img/krohak.jpg';

//TODO: me pic 
// https://www.facebook.com/mindorobots/photos/pcb.2315579441803695/2315579291803710
// TODO: fix pic alignment

const useStyles = makeStyles((theme) => ({
    large: {
      width:250,
      height: 250,
    },
  }));

const Me =(props)=>{
    const classes=useStyles();



    return (
        <Grid container  direction='column'>
        <Grid item md={12}>
            <Grid container  justify='center' alignItems='center' spacing={2}>
                <Grid item  md={3}>
                    <Avatar alt="me" src={rohak}  className={classes.large} />
                </Grid>
                <Grid item md={7}>
                    <Grid container spacing={2}>
                        <Grid item>
                        <Typography style={{color:'#fff'}} component='p'> Hey - I'm Rohak, a 4th year Computer Engineering undergraduate student at <Link href='https://www.hku.hk/' target='_blank' style={{color:'#fff'}} underline='always'>The University of Hong Kong</Link>.</Typography>
                        </Grid>
                        <Grid item>
                        <Typography style={{color:'#fff'}} component='p'>I love teaching myself new technologies and code from the diverse fields of Machine Learning, Web App Dev, Signal Processing and IoT.</Typography>  
                        </Grid>
                        <Grid item>
                        <Typography style={{color:'#fff'}}  component='p'>At HKU, I have been a Machine Learning Research Assistant working under <Link href='https://www.eee.hku.hk/~ycwu/' target='_blank' style={{color:'#fff'}} underline='always'>Dr. Y.C. Wu</Link> and a Teaching Assistant for a Python / C++ / C course. I have founded <Link href='https://mindorobots.wordpress.com/' target='_blank' style={{color:'#fff'}} underline='always'>MindoRobots</Link>, a research project which aims to map Coral Reefs around the island of Mindoro, Philippines using a Swarm of Oceanographic Robots.</Typography> 
                        </Grid>
                        <Grid item>
                            <Typography style={{color:'#fff'}} component='p'>I'm also a Guitarist, currently a part of <Link href='http://thezeropoint.com.hk/' target='_blank' style={{color:'#fff'}} underline='always'>The Zero Point fusion ensemble</Link>.</Typography>
                        </Grid>
                    </Grid>
                                         
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
           <Typography style={{color:'#fff',textAlign:'center'}} variant='h6'>Courses</Typography>
            <Grid container justify='center'>
            <Grid item>
            <ul>
                <li style={{color:'#fff'}}>COMP3314 - Machine Learning</li>
                <li style={{color:'#fff'}}> COMP3250 - Design and Analysis of Algorithms</li>
                <li style={{color:'#fff'}}>ELEC3244 - Digital Signal Processing</li>
                <li style={{color:'#fff'}}>ELEC3542 - Advanced Programming and Application Development</li>
                <li style={{color:'#fff'}}>COMP3297 - Software Engineering</li>
            </ul>
            </Grid>
            </Grid>
        </Grid>
        </Grid>
    )
}


export default Me;