import {
    Grid,
    Container,
    Button,
    Typography,
    Avatar,
    makeStyles,
    Link
} from "@material-ui/core";
  // TODO: Add Luxo
  // https://www.instagram.com/p/BwtxChzHCtO/
  // https://innoacademy.engg.hku.hk/projectid42/
  // https://www.youtube.com/watch?v=5-wxpCGBznc
  
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
    </Grid>
        )
}


export default Luxo