import {
    Grid,
    Container,
    Button,
    Typography,
    Avatar,
    makeStyles,
    Link
} from "@material-ui/core";

  // TODO: Add QuoteGen
  // https://www.instagram.com/p/Bjaekj4nWEe/
  // https://github.com/krohak/QuoteGen
  // link the paper

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

const QuoteGen=()=>{
   const classes=useStyles();

   return (
    <Grid container spacing={4}>
    </Grid>
        )
}


export default QuoteGen