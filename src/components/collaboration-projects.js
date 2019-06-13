import React from 'react'
import ProjectsList from './ProjectsList';
import ProjectModal from './ProjectModal';


class  CollaborationProjects extends React.Component {
 
 state = {
 
}

render() {
 return (
<div >
<h2  style={{color:'brown'}}>Collaboration Projects</h2>
          <div className='collaboration'> 
            <ProjectModal/>
            <ProjectsList/>
          </div>
</div>
);
}
}
export default  CollaborationProjects ;





 

