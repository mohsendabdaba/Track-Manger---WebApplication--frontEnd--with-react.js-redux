// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';


// const useStyles = makeStyles(theme => {
//   return ({
//     card: {
//       maxWidth: 400,
//     },
//     media: {
//       height: 0,
//       paddingTop: '56.25%',
//     },
//     expand: {
//       transform: 'rotate(0deg)',
//       marginLeft: 'auto',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)',
//     },
//     avatar: {
//       backgroundColor: red[500],
//     },
//   });
// });

// function RecipeReviewCard(props) {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   function handleExpandClick() {
//     setExpanded(!expanded);
//   }

//   return (
//     <Card className={classes.card}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="Recipe" className={classes.avatar}>
//             TM
//           </Avatar>
//         }
//         action={
//           <IconButton>
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={props.el.title}
//         subheader={props.el.deadline}
//       />

  
//       <CardMedia
//         className={classes.media}
//         image="https://www.wns.com/Portals/0/Images/Whitepapers/DesktopImages/651/4/How-to-Develop-a-Closed-Loop-Warranty-Management-_HD.jpg"
//         title="user track"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
          
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="Add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="Share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="Show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph><h2>{props.el.TASKS}</h2></Typography>
//           <Typography paragraph>
//             <h4>{props.el.task1}</h4>
//             <h4>{props.el.task2}</h4>
//             <h4>{props.el.task3}</h4>
           
           
//           </Typography>
          
//         </CardContent>
//       </Collapse>
//     </Card>




        
//   );
// }





// export default RecipeReviewCard;