
import axios from 'axios';
import { GET_TASKS} from './types';


export const  getTasks =() => (dispatch) => {
  axios
    .get('/api/tasks')
    .then(res =>
      dispatch({
        type: GET_TASKS,
        payload: res.data
      })
    )
    .catch(err => console.log("can not get projects"));
};

export const addTask = task => (dispatch) => {
  axios
    .post('/api/tasks',task)
    .then(res => dispatch(getTasks() ) )
    .catch(err => console.log("can not add task"));
};

export const deleteTask = _id => dispatch => {
  
    axios
      .delete(`/api/tasks/${_id}`)
      .then(data =>dispatch (getTasks()))
      .then(data => console.log(" task deleted"))
      .catch(err => console.log("can not delete task"));
};

export const UpdateTask = (obj,_id )  => dispatch => {
  console.log(_id , 'id')
  axios
    .put(`/api/tasks/${_id}`,obj)
    .then(data =>dispatch (getTasks()))
    .catch(err => console.log("can not modified task"));
};






   

