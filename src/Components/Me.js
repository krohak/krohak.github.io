import React from 'react';
import { 
    Grid,
    Typography,
    Avatar,
    makeStyles ,
    Link

} from "@material-ui/core";
import rohak from './../img/krohak.jpg';

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
                        <Typography style={{color:'#fff'}} component='p'> I'm Rohak, a Computer Engineering graduate from The University of Hong Kong. I love learning new technologies in Machine Learning, Web and Android App Dev and IoT.
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography style={{color:'#fff'}} component='p'>I'm currently working as a Quant Research Developer at JPMorgan HK.
                        </Typography>  
                        </Grid>
                        <Grid item>
                        <Typography style={{color:'#fff'}}  component='p'>
                        I enjoy reading research and fiction on the creative applications of Machine Learning and Artificial Intelligence. Currently geeking out over <Link href='https://openai.com/blog/dall-e' target='_blank' style={{color:'#fff'}} underline='always'>DALL·E</Link> and <Link href='https://nvlabs.github.io/stylegan3/' target='_blank' style={{color:'#fff'}} underline='always'>StyleGAN3</Link>. Reading <Link href='https://www.goodreads.com/en/book/show/43565360-artificial-intelligence' target='_blank' style={{color:'#fff'}} underline='always'> Artificial Intelligence: A Guide for Thinking Humans</Link> these days.
                        </Typography> 
                        </Grid>
                        <Grid item>
                        <Typography style={{color:'#fff'}} component='p'>I'm also a Musician, currently a part of <Link href='https://www.youtube.com/watch?v=X0bqkoqr-fM' target='_blank' style={{color:'#fff'}} underline='always'>The Zero Point fusion ensemble</Link>. Grooving to <Link href='https://open.spotify.com/artist/4XMc1qHObZ7aXQrH5MmbjK?si=9RFX3jkETMe9ld8PfXdiEg' target='_blank' style={{color:'#fff'}} underline='always'> Busty and the Bass </Link> and <Link href='https://open.spotify.com/artist/2F9WG9ugzneeesOZfmQ18V?si=cAdJ7BqzRJ-Br4yduaaBQw' target='_blank' style={{color:'#fff'}} underline='always'> Shubh Saran </Link>.
                        </Typography>
                        </Grid>
                    </Grid>
                                         
                </Grid>
            </Grid>
        </Grid>
        </Grid>
    )
}


export default Me;