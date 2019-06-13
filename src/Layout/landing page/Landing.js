import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import First from './firstpart'
import Second from './secondpart'
import Third from './thirdpart'
import Last from './lastpart'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css';



class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="App">
      <div className="background-carousel " >
    <Navbar/>
    <Second/>
    </div>
    <First/>
    <Third/>
    <Last/>
    <Footer/>
    </div>
    )}
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
