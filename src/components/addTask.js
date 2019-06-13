import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTask, getTasks} from '../actions/TaskAction';
import axios from 'axios';


class AddTask extends Component {
  state={
    title:"",
    status:0,
    _id:"",
  }
  handleChange = event => {
    this.setState({
       [event.target.name]: event.target.value 
      });
  };

  componentDidMount=(newProject)=>{
    axios
    .post('/api/tasks',newProject)
    .then(res => this.props.addTask(newProject) )
    .catch(err => console.log("can not add task"));
  }
  componentWillMount=(newProject)=>{
    axios
    .post('/api/tasks',newProject)
    .then(res => this.props.addTask(newProject) )
    .catch(err => console.log("can not add task"));
  }
  onSubmit = dispatch=> {
    const newProject = {
      title: this.state.title,
      status: this.state.status,
    };
    // this.props.addTask(newProject);
    axios
    .post('/api/tasks',newProject)
    .then(res => dispatch(addTask(newProject) ) )
    .catch(err => console.log("can not add task"));

  };

  render() {
    return (
      <div>
        
        <div className="task-input">
          <input placeholder="Title task" name="title" 
          style={{width:'18rem',height:'40px',marginBottom:'10px',borderRadius: '7px'}}
          onChange={this.handleChange}/>

         <button onClick={() => {
          this.onSubmit()
          this.setState({title:""})
        }}
        style={{height:'40px'}}
        >Add</button>
      

        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  
});

export default connect( mapStateToProps,{ addTask,getTasks })(AddTask);
