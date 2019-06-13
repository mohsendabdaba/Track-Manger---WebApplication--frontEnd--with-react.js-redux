import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { UpdateProject, deleteProject } from "../actions/ProjectActions";
import axios from 'axios';

class UpdateProjectModal extends Component {
  state = {
    modal: false,
    name: "",
    deadline:"",
    status: "",
    _id:"",
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
 this.setState({ [e.target.name]: e.target.value });
  };

//PUT
onSubmit = (id) => {
   console.log('on subot')
    const newProject = {
      name: this.state.name,
      deadline: this.state.deadline,
      status: this.state.status,
    };
   // update action
    this.props.UpdateProject(newProject , id);

    // Close modal
    this.toggle();
  };
 componentDidMount = () => {
     this.setState({
        name: this.props.el.name,
        deadline: this.props.el.deadline,
        status: this.props.el.status,
     })
 }
  render() {
    return (
      <div>

        <button onClick={this.toggle} class="btn btn-warning" >Edit</button>
      
        <Modal isOpen={this.state.modal} toggle={this.toggle} style={{marginTop:'100px'}} >
          <ModalHeader toggle={this.toggle}>Edit Project</ModalHeader>
          <ModalBody>
           
              <FormGroup>
                <Label for='project'>Project</Label>

                <Input  type='text'  name='name'
                  placeholder='Name Project'
                  onChange={this.onChange}
                  value={this.state.name}
                />

                 <Input type='text'name='deadline'
                 className="input"
                  placeholder='deadline'
                  onChange={this.onChange}
                  value={this.state.deadline}
                />
                <select class="mdb-select md-form" onChange={this.onChange} name='status'
                  value={this.state.status} >
               <option value="Project status" disabled selected>Project status </option>
               <option value="In progress"> In progress</option>
               <option value="Finished"> Finished </option>
               </select>

                <Button  onClick ={() => this.onSubmit(this.props.el._id)  }   color='dark' style={{ marginTop: '2rem' }} block>
                Save Modification
                </Button>
              </FormGroup>
       
          </ModalBody>
        </Modal>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
});

export default connect(
  mapStateToProps,
  { UpdateProject, deleteProject }
)(UpdateProjectModal);