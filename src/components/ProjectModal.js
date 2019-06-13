import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addProject } from '../actions/ProjectActions';
import PropTypes from 'prop-types';

class ProjectModal extends Component {
  state = {
    modal: false,
    name: '',
    deadline:'',
    status:'',
    _id:'',
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
       [e.target.name]: e.target.value,
       [e.target.deadline]: e.target.value,
       [e.target.status]: e.target.value ,
  
  });
  };

  onSubmit = e => {
    e.preventDefault();

    const newProject = {
      name: this.state.name,
      deadline: this.state.deadline,
      status: this.state.status,
    };

    // Add project via addProject action
    this.props.addProject(newProject);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
    
          <button
            style={{backgroundColor:"green",margin:'10px',color:'white',
            border:'none',borderRadius:'4px',height:'40px',fontSize:'18px',paddingBottom:'13px'}}
       
            onClick={this.toggle}>
            {/* <i class="material-icons mr-2">add_box</i> */}
            Create Project
          </button>
      
        <Modal isOpen={this.state.modal} toggle={this.toggle} style={{marginTop:'100px'}} >
          <ModalHeader toggle={this.toggle}>Add To Project List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='project'>Project</Label>

                <Input  type='text'name='name'
                  placeholder=' Name Project'
                  onChange={this.onChange}
                />

                 <Input type='text'name='deadline'
                  className="input"
                  placeholder='deadline'
                  onChange={this.onChange}
                />
               <select class="mdb-select md-form" onChange={this.onChange} name='status' >
               <option value="Project status" disabled selected>Project status </option>
               <option value="In progress"> In progress</option>
               <option value="Finished"> Finished </option>
               </select>
              
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                Add Project
                </Button>

              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projectList.projects
  
});

export default connect( mapStateToProps,{ addProject })(ProjectModal);
