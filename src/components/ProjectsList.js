import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjects, deleteProject ,UpdateProject } from '../actions/ProjectActions';
import PropTypes from 'prop-types';
import UpdateProjectModal from './UpdateModal';
import { Link } from "react-router-dom";




class ProjectsList extends Component {
  static propTypes = {
    getProjects: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
  this.props.getProjects()
  }
 
  onDeleteClick =_id => {
    this.props.deleteProject(_id) 
  };
  
  render() {
    const {project1} = this.props
  //  const  {_id,name,deadline,status}=this.props.projects
    return (
      
      <div className="list-project">
        
         {this.props.project1.map(el => (
              
              <div class="card1" style = {{width: "16rem",height:'12rem'}}>
                
                    <Link to={`/project/${el._id}`}>
                    <div className="content" style={{color:"white",textDecorationStyle:'none'}}>
                      <h4>{el.name}</h4>
                      <p>Deadline : {el.deadline}</p> 
                      <p>{el.status}</p>
                    </div>
                    </Link>
                    <div className="buttons">
                      <button href="#" type="button" 
                      class="btn btn-danger" 
                      onClick= { () => this.onDeleteClick(el._id) } > <i class="material-icons">
                      </i>remove</button>
                    <UpdateProjectModal el = {el} index={el._id}  />
                    </div>
                     
            
             </div>  
         )) }
         
      </div>
    );
  }
}

const mapStateToProps = state => ({
  project1: state.projectList.projects
  
});

export default connect(mapStateToProps, { getProjects, deleteProject,UpdateProject } ) (ProjectsList);
