import { GET_PROJECTS,GET_TASKS , GET_MEMBERS} from '../actions/types';


const initialState = {
 projects: [],
 tasks:[],
 members:[],

};

 const  ProjectReducer = (state = initialState, action) =>{
  
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
     
      };
      case GET_TASKS:
        return {
          ...state,
          tasks: action.payload,
          
        };

        case  GET_MEMBERS:
          return {   ...state,
             members:action.payload    };


    
    default:
      return state;
  }
}
export default ProjectReducer