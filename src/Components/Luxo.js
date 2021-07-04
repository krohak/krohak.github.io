import {
    Grid,
    Container,
    Button,
    Typography,
    makeStyles,
    Link
} from "@material-ui/core";
import YoutubeEmbed from "./YoutubeEmbed";
import {
  GitHub,
  Instagram,
  Language
} from "@material-ui/icons";

const socialConnects =[
  {name:'github',url:'https://github.com/krohak/Luxo',icon:GitHub,iconType:'material'},
  {name:'instagram',url:'https://www.instagram.com/p/BwtxChzHCtO/',icon:Instagram,iconType:'material'},
  {name:'website',url:'https://innoacademy.engg.hku.hk/projectid42/',icon:Language,iconType:'material'},
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

const Luxo=()=>{
   const classes=useStyles();

   return (
       <Grid container spacing={4}>
           <Grid item xs={12}>
               <Grid container justify='center' alignItems='center' spacing={1}>
                <Grid item><Button variant="contained" disabled  style={{borderRadius:'55px'}}>#Product</Button></Grid>
                <Grid item ><Button variant="contained" disabled  style={{borderRadius:'55px'}}>#Raspberry Pi</Button></Grid>
                <Grid item ><Button variant="contained" disabled  style={{borderRadius:'55px'}}>#Arduino</Button></Grid>
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
                    <Typography component='span' style={{color:'#5d5d5d'}}>Inspired by animatronics, I built a personal assistant lamp – Luxo. Luxo is a highly customizable voice based robot who portrays it’s emotions through it’s movements and an LED lamp. It was developed using open source technologies and with an emphasis on modularity. Based on Pixar’s character <Link href='https://www.pixar.com/luxo-jr/' target='_blank' className={classes.link}>Luxo Jr.</Link> and <Link href='https://peeqo.com/' target='_blank' className={classes.link}>Abhishek Singh’s robot Peeqo</Link>, Luxo is to be not only a productivity companion, but also an entertainer! 					
                    </Typography>
                    </Grid>
                    <Grid item >
                    <div style={{width:'400px'}}>
                      <YoutubeEmbed embedId='5-wxpCGBznc' />
                    </div>
                    </Grid>
                    <Grid item>
                        <Typography  component='span' style={{color:'#5d5d5d'}}>
                        I drew inspiration from Pixar's famous short film, <Link href='https://www.pixar.com/luxo-jr/' target='_blank' className={classes.link}>Luxo Jr</Link> - how an inanimate object portrays emotions through its movements and gestures. Additionally, I found a lot of 3D models of Luxo Jr. on the internet. As they are mostly open-source projects, I could modify these designs to model the lamp.
                        </Typography>
                    </Grid>
                    <Grid item>
                    <div style={{width:'400px'}} >
                    <div style={{width:'400px'}}>
                      <YoutubeEmbed embedId='BRVEiJXj-HU' />
                    </div>
                    </div>
                    </Grid>
                    <Grid item>
                        <Typography component='span' style={{color:'#5d5d5d'}}>
                        The second source of inspiration is <Link href='https://peeqo.com/' target='_blank' className={classes.link}>Peeqo</Link>, a voice activated desktop companion that responds entirely through GIFs. It is a quirky personal assistant with a lot of personality, and can be customized in many ways to ensure productivity and entertainment. Setting timers & scheduling tasks by voice and keeping track of productivity of the user is handled by the open source code base of Peeqo, and combining that with the unique animatronics of Luxo Jr. delivers a highly entertaining voice based personal assistant.
                        </Typography>
                    </Grid>   
                    <Grid item>
                        <Typography component='span' style={{color:'#5d5d5d'}}>
                        Built with <Link href='https://github.com/kanekoshoyu' target='_blank' className={classes.link}>@kanekoshoyu</Link>
                        . Luxo won itself a place at the first ever <Link href='https://innowings.engg.hku.hk/' target='_blank' className={classes.link}>InnoShow at HKU</Link>!</Typography>
                    </Grid>                    
                </Grid>
              </Grid>
            </Container>
       </Grid>
        )
}


export default Luxo