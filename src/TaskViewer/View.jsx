import React from 'react'

const View = ({task}) => {
  return task.map((task)=>(
    <>
    <div className="container">
    <div className="card mt-3">
      <div className="card-body  ">
        <div className='<div class="position-relative">'>
         
          <h6 className='position-absolute top-0 start-0 p-2'>{task.taskName}</h6>
        <h6 className='position-absolute top-0 end-0 p-2'>{task.taskTime}</h6>
         
        </div> 
      </div>
    </div>
    </div>
    
    
    </>
  )).reverse();
}

export default View