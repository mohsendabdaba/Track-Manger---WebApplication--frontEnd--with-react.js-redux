import axios from 'axios';
import { GET_PROJECTS} from './types';


export const getProjects =() => (dispatch) => {
  axios
    .get('/api/projects')
    .then(res =>
      dispatch({
        type: GET_PROJECTS,
        payload: res.data
      })
    )
    .catch(err => console.log("can not get projects"));
};

export const addProject = project => (dispatch) => {
  axios
    .post('/api/projects',project)
    .then(res => dispatch(getProjects() ) )
    .catch(err => console.log("can not add project"));
};

export const deleteProject = _id => dispatch => {
  console.log(_id)
    axios
      .delete(`/api/projects/${_id}`)
      .then(data =>dispatch (getProjects()))
      .then(data => console.log(" Project deleted"))
      .catch(err => console.log("can not delete project"));
};

export const UpdateProject = (obj, id )  => dispatch => {
  console.log(id , 'id')
  axios
    .put(`/api/projects/${id}`,obj)
    .then(data =>dispatch (getProjects()))
    .catch(err => console.log("can not modified project"));
};






   

