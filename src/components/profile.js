import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {Grid,Avatar,bigAvatar} from '@material-ui/core';



class Profile extends React.Component {
 constructor(){
 super()
 this.state = {
 
}
}



render() {
    const { classes } = this.props;
    const { isAuthenticated, user } = this.props.auth;
 return (
<div className='profile' style={{marginTop:'100px'}} >

      <div className="data" style={{color:'brown'}} >
                <img src="https://www.lacalama.it/images/welcome.gif" ></img>

              <span  style={{fontSize:"24px"}} className='navbar-text mr-3' >
            <strong>{user ? ` ${user.name}` : ''}</strong>
             </span>
            
             <span style={{fontSize:"24px"}}  >
            <strong>{user ? ` ${user.email}` : ''}</strong>
             </span>
        

         </div> 

         <Grid container justify="center" alignItems="center" >
          <Avatar alt="Remy Sharp" src="https://i.imgur.com/oIxo0Pg.png" style={{width:'120px',height:'120px',border:'1px solid black'}} />
         </Grid>
        

  
</div>
);
}
}

Profile.propTypes = {
   // logoutUser: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
   email: PropTypes.string.isRequired,
 };
 
 const mapStateToProps = state => ({
   auth: state.auth,
   email:state.auth.email
 });
 
 export default connect(mapStateToProps)(Profile);




 

