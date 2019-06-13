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
import { addMember } from '../actions/MemberActions';
import PropTypes from 'prop-types';

class MemberModal extends Component {
  state = {
    modal: false,
    name: '',
    status:'',
   
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
       [e.target.status]: e.target.value ,
  
  });
  };

  onSubmit = e => {
    e.preventDefault();

    const newProject = {
      name: this.state.name,
      status: this.state.status,
    };

    // Add project via addProject action
    this.props.addMember(newProject);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
    
          <button
            style={{backgroundColor:"green",margin:'10px',color:'white',
            border:'none',borderRadius:'4px',height:'40px',fontSize:'18px',paddingBottom:'15px'}}
       
            onClick={this.toggle}>
            Add Member
          </button>
      
        <Modal isOpen={this.state.modal} toggle={this.toggle} style={{marginTop:'100px'}} >
          <ModalHeader toggle={this.toggle}>Add To Member List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='Member'> Member</Label>

                <Input  type='text'name='name'
                  placeholder=' Name Member'
                  onChange={this.onChange}
                  style={{marginBottom:'20px'}}
                />
                       <Label for='project'> Type </Label>
               <select class="mdb-select md-form" onChange={this.onChange} name='status' >
               <option value="Project status" disabled selected> Member status </option>
               <option value="Member"> Member</option>
               <option value="Guest"> Guest </option>
               </select>
              
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                Add Member
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
 members: state.members,
  
});

export default connect( mapStateToProps,{ addMember })(MemberModal);
