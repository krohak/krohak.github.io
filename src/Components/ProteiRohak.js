import {
    Grid,
    Container,
    Button,
    Typography,
    Avatar,
    makeStyles,
    Link
} from "@material-ui/core";
import pr from './../img/pr.gif';
import YoutubeEmbed from "./YoutubeEmbed";

const useStyles = makeStyles((theme) => ({
   large: {
     width:270,
     height:'auto'
   },
   link:{
       color:'#8e8e8e'
   }
 }));

const ProteiRohak=()=>{
   const classes=useStyles();

   return (
       <Grid container spacing={4}>
           <Grid item xs={12}>
               <Grid container justify='center' alignItems='center' spacing={1}>
                 <Grid item><Button variant="contained" disabled  style={{borderRadius:'55px'}}>#Android</Button></Grid>
                <Grid item ><Button variant="contained" disabled  style={{borderRadius:'55px'}}>#Arduino</Button></Grid>
               </Grid>
           </Grid>
               <Container maxWidth='md' >
               <Grid item>
               <Grid container justify='center' direction='column' alignItems='center' spacing={3}>
                   <Grid item >
                       <Typography component='span' style={{color:'#5d5d5d'}}><Link href='https://www.youtube.com/watch?v=iNDXvJjSniI' target='_blank' className={classes.link}>As seen on TED</Link>, Protei is a modular, shape shifting boat conceived by Cesar Harada for cleaning up oil spills in the ocean.</Typography>
                   </Grid>
                   <Grid item >
                   <div style={{width:'400px'}}>
                     <YoutubeEmbed embedId='iNDXvJjSniI' />
                   </div>
                   </Grid>
                   <Grid item>
                       <Typography  component='span' style={{color:'#5d5d5d'}}>
                       Protei v12.0 - Protei Rohak is the first Protei which has an Android phone on board - extending its computational power and bringing it a step closer towards autonomous navigation. A laptop sends commands to the Phone via a server and the phone is connected to an Arduino Uno, which controls the motors, via Bluetooth.
                       </Typography>
                   </Grid>
                   <Grid item>
                    <div style={{width:'400px'}} >
                        <YoutubeEmbed embedId='PAQ16yVeyIc' />
                    </div>
                   </Grid>
                   <Grid item>
                       <Typography component='span' style={{color:'#5d5d5d'}}>
                         The Protei App facilitates communication between the server and Arduino. The App connects to the Arduino via Bluetooth and recieves/sends commands to the server via MQTT. In addition to this, it also computes the position of the Sail and the Rudder, displays the latest message exchange and the orientation of the boat (Gyroscope).
                       </Typography>
                   </Grid>
                   <Grid item>
                    <div style={{width:'400px'}}>
                            <YoutubeEmbed embedId='5ecuIcRUJYU' />
                        </div>
                   </Grid>
                    <Grid item>
                    <Grid container spacing={3}>
                            <Grid item>
                            <Avatar alt="web-shot" src='https://camo.githubusercontent.com/f7fb3f0a8c849eb33bc249d7adf6d3e5e21ef3f5/68747470733a2f2f63312e737461746963666c69636b722e636f6d2f352f343432322f33353535373031393734335f313837376536363139635f622e6a7067' variant="rounded"  className={classes.large} />
                            </Grid>
                            <Grid item>
                            <Avatar alt="web-shot" src='https://camo.githubusercontent.com/260040e6cdbff20addf4ee6ce9032a0c550a2a46/68747470733a2f2f63312e737461746963666c69636b722e636f6d2f352f343430392f33363232383736363832315f666561633431386136635f622e6a7067' variant="rounded"  className={classes.large} />
                            </Grid>
                    </Grid>
                    </Grid>
                    <Grid item>
                        <Avatar alt="pr" src={pr} variant="rounded"  className={classes.large} />
                    </Grid>
                    <Grid item >
                    <Typography component='span' style={{color:'#5d5d5d'}}>
                        Find out more about Protei Rohak in <Link href='https://medium.com/@krohak/a-month-at-makerbay-with-scoutbots-protei-rohak-986f547ee46b' target='_blank' className={classes.link}>this Medium blog post</Link>.
                        Checkout Protei Rohak on <Link href='https://www.scoutbots.com/protei/#/13rohak/' target='_blank' className={classes.link}>Scoutbots.com</Link> and Github.
                    </Typography>
                    </Grid>
                </Grid>
                </Grid>
               </Container>
       </Grid>
   )

}


export default ProteiRohak;