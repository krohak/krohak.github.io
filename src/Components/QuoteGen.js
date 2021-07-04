import {
    Grid,
    Container,
    Button,
    Typography,
    Avatar,
    makeStyles,
    Link
} from "@material-ui/core";
import {
  GitHub,
  Instagram,
  Assessment
} from "@material-ui/icons";

const socialConnects =[
  {name:'github',url:'https://github.com/krohak/QuoteGen',icon:GitHub,iconType:'material'},
  {name:'instagram',url:'https://www.instagram.com/p/Bjaekj4nWEe/',icon:Instagram,iconType:'material'},
  {name:'paper',url:'https://github.com/krohak/QuoteGen/blob/master/QuoteGen-Report.pdf',icon:Assessment,iconType:'material'},
]

  const useStyles = makeStyles((theme) => ({
   large: {
     width:650,
     height:'auto',
     WebkitAnimation: 'bgfade .3s ease',
     animation: 'bgfade .3s ease'
   },
   medium: {
    width:300,
    height:'auto',
   },
   link:{
       color:'#8e8e8e'
   }
 }));

const QuoteGen=()=>{
   const classes=useStyles();

   return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Grid container justify='center' alignItems='center' spacing={1}>
        <Grid item><Button variant="contained" disabled  style={{borderRadius:'55px'}}>#Machine Learning</Button></Grid>
        <Grid item ><Button variant="contained" disabled  style={{borderRadius:'55px'}}>#Research</Button></Grid>
        <Grid item ><Button variant="contained" disabled  style={{borderRadius:'55px'}}>#Tensorflow</Button></Grid>
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
              QuoteGen is a Neural Network bot built to generate quirky, fickle and sometimes (mostly) non-sensical quotes. The neural net is trained on a dataset of quotes by famous people, and contextualizes the words within the quotes using <Link href='https://nlp.stanford.edu/projects/glove/' target='_blank' className={classes.link}>GloVe Word Embeddings by Stanford</Link>. 					
              </Typography>
              </Grid>
              <Grid item></Grid>
              <Grid container justify='center' alignItems='center' spacing={2}>
                <Grid item md={4} sm={12}>
                  <Avatar alt="web-shot" src='https://raw.githubusercontent.com/krohak/QuoteGen/master/outputs/1.jpg' variant="rounded"  className={classes.medium} />
                </Grid>
                <Grid item md={4} sm={12}>
                  <Avatar alt="web-shot" src='https://raw.githubusercontent.com/krohak/QuoteGen/master/outputs/2.png' variant="rounded"  className={classes.medium} />
                </Grid>
              </Grid>
              <Grid item></Grid>
              <Grid container justify='center' alignItems='center' spacing={2}>
                <Grid item md={4} sm={12}>
                  <Avatar alt="web-shot" src='https://raw.githubusercontent.com/krohak/QuoteGen/master/outputs/3.png' variant="rounded"  className={classes.medium} />
                </Grid>
                <Grid item md={4} sm={12}>
                  <Avatar alt="web-shot" src='https://raw.githubusercontent.com/krohak/QuoteGen/master/outputs/5.jpg' variant="rounded"  className={classes.medium} />
                </Grid>
              </Grid>
              <Grid item></Grid>
              <Grid item>
                  <Typography  component='span' style={{color:'#5d5d5d'}}>
                  Made with Tensorflow Keras, the Machine Learning model uses LSTM and Dense hidden layers and is trained using the Adam optimizer. Checkout the Jupyter notebook with the detailed code walk-through <Link href='https://github.com/krohak/QuoteGen/blob/master/Quotes%20Generation%20using%20Word%20Embeddings.ipynb' target='_blank' className={classes.link}>here</Link>. Or read the full paper explaining our commplete process <Link href='https://github.com/krohak/QuoteGen/blob/master/QuoteGen-Report.pdf' target='_blank' className={classes.link}>here</Link>. 
                  </Typography>
              </Grid>
              <Grid item >
                  <Typography component='span' style={{color:'#5d5d5d'}}>      
<pre> {`  ________________________________________
/ ----- ----- Input seed: life lived for \\
| tomorrow will always be ----- Output:  |
\\ afraid of death -----                  /
----------------------------------------
        \\   ^__^
        \\  (oo)\\_______
           (__)\\       )\\/\\
               ||----w |
               ||     ||`}</pre>
              </Typography>
              </Grid>   
              <Grid item>
                  <Typography component='span' style={{color:'#5d5d5d'}}>
                  Built with <Link href='https://www.linkedin.com/in/ish-handa-a12948111/' target='_blank' className={classes.link}>@ishhanda </Link>
                  .</Typography>
              </Grid>                    
          </Grid>
        </Grid>
      </Container>
    </Grid>
        )
}


export default QuoteGen