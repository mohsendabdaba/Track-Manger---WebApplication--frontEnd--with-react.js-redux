import React, { Component } from 'react';
import { connect } from "react-redux";
import {getMembers,deleteMember} from '../actions/MemberActions';
import MemberModal from './addMember';


class MemberList extends Component {

  componentDidMount=()=> {
    this.props.getMembers();
  }
  onDeleteClick = (id) => {
    this.props.deleteMember(id);
}

  render() {

    return (
        <div>
            <MemberModal/>
    <ul className ="list-group ">
      {this.props.members === undefined ?  <span class="sr-only">Loading...</span> :
       this.props.members.map(el => (
        <li className="list-group-item" key={el.id}>

          <div className="name1">
          <p>{el.name}</p>
          </div >
           <div className="click">
             <p className="status">{el.status}</p>
           <i class="material-icons"  style={{color:'white'}} onClick={()=> this.onDeleteClick(el._id)} >delete_forever</i>
           </div>

        </li>
      ))}
    </ul>
    </div>
    )
   
  }
}
  function mapStateToProps(state) {
    return {
       members:state.projectList.members,
       
    };
  }
   
  export default connect(mapStateToProps, {getMembers, deleteMember}) (MemberList);