import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import  MenuList  from '@material-ui/core/List';
import MenuItem from '@material-ui/core/ListItem';
import Menu from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {Grid,Avatar,bigAvatar} from '@material-ui/core';


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import { logoutUser } from '../actions/authActions';

import Profile from "../components/profile";
import MyProjects  from "../components/myprojects";
import { Route,Link} from 'react-router-dom';
import CollaborationProjects from '../components/collaboration-projects'
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

 class Layout extends Component {

  state = {
    mobileOpen: false
  };

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  } 

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
     const { classes } = this.props;
     const {mobileOpen} = this.state
     const { isAuthenticated, user } = this.props.auth;
  const drawer = (
    <div>
     <Hidden smDown >
      <div className={classes.toolbar} />
      </Hidden>
        <MenuList >
    
             <MenuItem  classeName="paths"  style={{color:'brown'}}  button  component={Link} to="/profile">
             <i class="material-icons md-36 orange600 mr-2">view_list</i>
              Profile   
            </MenuItem>
        
            <MenuItem button style={{color:'brown'}}   component={Link} to="/myprojects">
            <i class="material-icons md-36 orange600 mr-2"> person</i>
            My Projects
            </MenuItem>

            <MenuItem button  style={{color:'brown'}}  component={Link} to="/collaboration-projects">
            <i class="material-icons md-36 orange600 mr-2"> group</i>
            Collaboration Projects
            </MenuItem>
        
        </MenuList>
     

    </div>
  );

    return (
    <div className={classes.root}>
    <CssBaseline />
    <AppBar position="Fixed" style={{backgroundColor:'brown'}} className={classes.appBar}>
      <Toolbar className="menu">
        <div className="dashbord">
        <i class="material-icons mr-2">dashboard</i>
        <h5>Dashboard </h5> 
        </div>
        <div className="rightbar">
          <a
        href=""
        onClick={this.onLogoutClick.bind(this)}
        className="nav-link"
      >
        {' '}
        Logout
      </a>
          <i class="material-icons" >notification_important</i>
          <i class="material-icons" style={{marginRight:'10px'}}>drag_indicator</i>
      <Grid container justify="center" alignItems="center" >
      <Avatar alt="Remy Sharp" src="https://i.imgur.com/oIxo0Pg.png" className={classes.bigAvatar} />
      </Grid>
        </div>
      </Toolbar>
    </AppBar>
    <nav className={classes.drawer}>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={this.props.container}
          variant="temporary"
          open={mobileOpen}
          onClose={this.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
    <main className={classes.content}>
      <div className={classes.toolbar} /> 
      <div className="routes">
      <Route  exact path="/profile" render={()=><Profile/>}/>
      <Route  path="/myprojects"  render = {()=> <MyProjects/>}/> 
      <Route path="/collaboration-projects" render={()=><CollaborationProjects/>}/> 
    

      </div>
    </main>
    </div>
    )
  }
}

 Layout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  // logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps,{ logoutUser } )
)(Layout)