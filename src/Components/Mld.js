import {
    Grid,
    Container,
    Button,
    Typography,
    Avatar,
    makeStyles,
    Link
} from '@material-ui/core';
import mldScreen from './../img/mld-screen.png';

const useStyles = makeStyles((theme) => ({
   large: {
     width:1000,
     height:'auto'
   },
   link:{
       color:'#8e8e8e'
   }
 }));

const Mld=()=>{
   const classes=useStyles();

   return (
       <Grid container spacing={4}>
           <Grid item xs={12}>
               <Grid container justify='center' alignItems='center' spacing={1}>
                   <Grid item ><Button variant='contained'  disabled style={{borderRadius:'55px'}}>#Arduino</Button></Grid>
                   <Grid item><Button variant='contained' disabled style={{borderRadius:'55px'}}>#Web</Button></Grid>
               </Grid>
           </Grid>
               <Container maxWidth='md' >
               <Grid>
               <Grid container justify='center' alignItems='center' spacing={3} direction='column'>
                   <Grid item >
                       <Typography component='span' style={{color:'#5d5d5d'}}>
                       Do you know where marine litter comes from?<br/>
                       A lot of litter generated on land actually ends up in the ocean, but how?
                       </Typography>
                   </Grid>
                   <Grid item>
                   <iframe 
                   title='first1'
                   src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwwfhongkong%2Fvideos%2F10154701313716892%2F&show_text=0&width=476'
                    width='476'
                     height='476'
                      style={{border:'none',overflow:'hidden'}} 
                      scrolling='no'
                       frameBorder='0' 
                      allowFullScreen
                      allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
                      />
                   </Grid>
                   <Grid item>
                       <Typography  component='span' style={{color:'#5d5d5d'}}>
                       WWF-Hong Kong, in cooperation with MakerBay, has designed a tracking device to simulate how litter enters the sea through storm drains and rivers, and is working with students from 11 schools to trace the journey of litter. This helps us understand the source of marine litter in Hong Kong and solve the problem together.
                       </Typography>
                   </Grid>
                   <Grid item>
                       <Typography component='span'>
                        <Link href='http://www.marinelitterdetective.net/' target='_blank' >
                            <Avatar src={mldScreen} className={classes.large} variant='rounded'  />
                        </Link>   
                       </Typography>
                   </Grid>
                   <Grid item>
                       <Typography component='span' style={{color:'#5d5d5d'}}>
                        I also presented the Marine Litter Detective project to students of <Link href='http://chi.camp/projects/' target='_blank' className={classes.link}>China Hardware Innovation Camp (CHIC)</Link> at an event organized by the <Link href='https://www.eda.admin.ch/hongkong' target='_blank' className={classes.link}>Consulate General of Switzerland</Link> in Hong Kong at MakerBay.
                       </Typography>
                   </Grid>
                   <Grid item>
                   <iframe 
                   title='video2'
                   src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmakerbay%2Fvideos%2F1932427820364590%2F&show_text=0&width=560'
                    width='560'
                     height='315' 
                     style={{border:'none',overflow:'hidden'}}
                      scrolling='no'
                      frameBorder='0' 
                       allowFullScreen
                        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' 
                        />
                   </Grid>
                   <Grid item>
                       <Typography component='span' style={{color:'#5d5d5d'}}>
                        View the <Link href='http://www.marinelitterdetective.net/' className={classes.link} target='_blank'>Marine Litter Detective Webpage</Link> I coded.Find out more about MLD on <Link href='https://makerbay.github.io/Marine_Litter_Detective/' className={classes.link} target='_blank'>Github</Link> and<Link href='https://medium.com/@krohak/a-month-at-makerbay-with-scoutbots-marine-litter-detective-25cba8e71e04' className={classes.link} target='_blank'>Medium</Link> .
                       </Typography>
                   </Grid>
                   </Grid>
                   </Grid>
               </Container>
       </Grid>
   )

}


export default Mld;