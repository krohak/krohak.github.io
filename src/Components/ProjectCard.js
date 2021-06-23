import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    minWidth:250
  },
  media: {
    height: 140,
  },
});


const  ProjectCard =(props)=> {
  const classes = useStyles();
  const {img,content,title,gif,onHandleClickOpen,index}=props;
  const [image,setImage]=useState(img);


  const handleMouseOver=()=>{
    setImage(gif);
}
const handleMouseLeave=()=>{
    setImage(img);
}
  return (
    <Card className={classes.root} onClick={()=> onHandleClickOpen(index)}>
      <CardActionArea>
        <CardMedia
         onMouseOver={handleMouseOver}
         onMouseLeave={handleMouseLeave}
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="h2">
            {title}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard
