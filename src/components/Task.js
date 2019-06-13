import React, { Component } from "react";
import axios from "axios";
import { getTasks,addTask,UpdateTask } from "../actions/TaskAction"
import { connect } from "react-redux";
import AddTask from './addTask';
import MemberList  from './MemberList'
 


class Task extends Component {
 state={
    title:"",
    status:"",
    _id:"",
  }
  componentDidMount = () => {
    axios
    .get(`/api/tasks`)
    .then(res => this.props.getTasks(res.data))
    .then(data => console.log(" add tasks"))
    .catch(err => console.log("can not add task"));
  };
  componentDidUpdate = () => {
    axios
    .get(`/api/tasks`)
    .then(res => this.props.getTasks(res.data))
    .then(data => console.log(" add tasks"))
    .catch(err => console.log("can not add task"));
  };

  deleteTasks = _id => {
    axios
      .delete(`/api/tasks/${_id}`)
      .then(res => this.props.getTasks(res.data))
      .then(data => console.log(" task deleted"))
      .catch(err => console.log("can not delete task"));
  };
  
  TakeIt=(_id)=>{
    const obj={
      title:this.state.title,
      status:this.state.status,
    }
    this.props.UpdateTask(obj,_id)
    console.log('fff',obj)

    this.setState({
      status:1,
    })
  }
   componentDidMount=()=>{
    this.setState({
      status:1,
      title:this.props.title,
    })
   }
  

   Done=(_id)=>{
    console.log('hhhhhhhh')
     const obj={
       title:this.state.title,
       status:this.state.status,
     }
     this.props.UpdateTask(obj,_id)
     console.log('fff',obj)
     this.setState({
       status:2,
     })
    }
    componentDidMount=()=>{
     this.setState({
       status:2,
       title:this.props.title,
     })
    }
    componentWillMount =()=>{
      axios
      .get(`/api/tasks/${this.props.id}`)
      .then(res => console.log(res.data ,'res data'))
      // .then(res => this.props.getTasks(res.data))
      // .then(data => console.log(" add tasks"))
      .catch(err => console.log("can not add task"));
    }
   
  render() {
    console.log(this.props.id)
    return (
    <div className="tasksPage" >
       
      <fieldset class="border p-2 member" style={{border:"2px solid red",color:'gree'}}>
       <legend  style={{color:'black'}}class="w-auto"> Members Team </legend>
       
        <MemberList/>
      
      </fieldset>

      <fieldset class="border p-2 tasksToWork" style={{border:"2px solid red",color:'gree'}}>
       <legend  style={{color:'black'}} class="w-auto">Tasks To Work</legend>
       {this.props.tasks.filter(item =>Number(item.status)===0).map((item, index) => {
          return (
            <div key={index} className="tasks1">
              <h5>{item.title}</h5>
              {/* <h5>{item.status}</h5> */}
              <div className="button1">
                <button onClick={() => this.TakeIt(item._id)}> Take it </button>
                <i class="material-icons" onClick={() => this.deleteTasks(item._id)} >delete</i>
              </div>
            </div>
        )}) }
        <AddTask/>
      </fieldset>
  
      <fieldset class="border p-2 tasksInProgress " style={{border:"2px solid red",color:'gree'}}>
       <legend  style={{color:'black'}} class="w-auto"> Tasks In Progress</legend>
       {this.props.tasks.filter(item =>Number(item.status)===1).map((item, index) => {
          return (
            <div key={index} className="tasks2">
              <h5>{item.title}</h5>
              {/* <h5>{item.status}</h5> */}
              <div className="button1">
              <button 
              onClick={() => this.Done(item._id)}>
              <i class="material-icons">done</i>
               </button>
               <i class="material-icons" onClick={() => this.deleteTasks(item._id)} >delete</i>
               </div>
            </div>
        )}) }
      </fieldset>
      
      <fieldset class="border p-2 tasksCompleted " style={{border:"2px solid red",color:'gree'}}>
       <legend   style={{color:'black'}} class="w-auto"> Tasks Completed </legend>
       {this.props.tasks.filter(item =>Number(item.status)===2).map((item, index) => {
          return (
            <div key={index} className="tasks3">
              <h5>{item.title}</h5>
              {/* <h5>{item.status}</h5> */}
              <i class="material-icons"  style={{marginTop:'13px',alignItems:'center'}} onClick={() => this.deleteTasks(item._id)} >delete</i>
            </div>
        )}) }
    
      </fieldset>

    </div>

  
)}
}
    
const mapStateToProps = state => {
  return {
    // tasks:state.tasks,
    tasks: state.projectList.tasks,
    title:state.projectList.title,
  };
};
export default connect(mapStateToProps,{ getTasks ,addTask,UpdateTask})(Task);
