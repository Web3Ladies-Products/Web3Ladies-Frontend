import React, { useState } from 'react';

import Cancel from './Cancel';
const CurriculumItem = ({title}) => {
  const [ open, setOpen ] = useState
  (false);
  
  return(
    <div className="curriculum-item">
      <div className="curriculum-title">
        <h3>{title} </h3>
        <Cancel onClick={()=> setOpen(!open)}/>
      </div>
      {open ? <div>
        <p>These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.</p>
      </div> : null}
     
    </div>
  )
}

export default CurriculumItem;