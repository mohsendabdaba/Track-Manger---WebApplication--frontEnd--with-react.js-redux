import React, { Component } from 'react';
import { connect } from 'react-redux';

import {BrowserRouter,Route} from 'react-router-dom'
import Layout from '../../Layout';
import Task from '../Task';

import 'bootstrap/dist/css/bootstrap.min.css';


class Dashboard extends Component {
 
  render() {
    const { user } = this.props.auth;
    return (
      <div className="dashboard">
         <BrowserRouter>
           <Layout/>
           <Route  path="/project/:id" render={props => <Task id={props.match.params.id}/>}/>
          </BrowserRouter>

      </div>
    );
  }
}



const mapStateToProps = state => ({
  
  auth: state.auth
});

export default connect(mapStateToProps, )(
 Dashboard
);
