
import React, { Component } from 'react';

import RecipeReviewCard from './cardProject';

const array=[
  {
  title:"Track manger ",
  deadline:"06/07/2019",
  task1:"  ADD USER",
  task2:" MODIFY USER",
  task3:"  DELETE USER"
},

{
  title:"react-app",
  deadline:"04/09/2019",
  task1:" MAP CARD",
  task2:"  GET ELEMENT",
  task3:"  MATCH projet"
},
{
  title:"management-profile",
  deadline:"24/11/2019",
  task1:" MONGO",
  task2:"REACT",
  task3:" MONGOOSE"
},
]
  class ALLMyProjects extends Component {
    
    state={
    array:array
      }
    

    render(){
      
  return (
    <div className="App1">
     
      {this.state.array.map(el=>
        <div className='own-project'>
            <h3>{el.title}</h3>
            <h5>{el.deadline}</h5>
            <h5>{el.Task1} </h5>
            <h6>{el.Task2}</h6>
        </div>

      )}

    </div>
  );
    }
  }
export default ALLMyProjects;
