import React from 'react'

const Addreview = ({setOpenModal}) => {
  return (
   <>
   <section className='modalbackground'>
   <div className='container'>
   <div className='row'>
   <div className='col-lg-8 col-md-8 col-12'>
   <h1 className='text-center'> Add Review</h1>
   <p>Please Add Your Review And give Rating </p>

   <input type="text"  placeholder="enter Review"/>
   <button onClick={(e)=>setOpenModal(false)}>Cancl</button>
   </div>
   </div>
   </div>
   </section>
   </>
  )
}

export default Addreview