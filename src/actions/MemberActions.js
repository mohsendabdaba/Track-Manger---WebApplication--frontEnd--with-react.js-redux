import axios from 'axios';
import {GET_MEMBERS} from './types'



export const addMember = member =>dispatch=> {
  console.log(member,'member')
   axios
   .post('/api/members', member)
   .then(res=>dispatch(getMembers()))
  };

  export const getMembers = () => dispatch=> {
    axios
    .get('/api/members')
    .then(res=>
      dispatch({
        type: GET_MEMBERS,
        payload: res.data
      }))
    };
  

  export const deleteMember = id =>dispatch=> {
    axios
    .delete(`/api/members/${id}`)
    .then(res=>dispatch(getMembers()))
  };
