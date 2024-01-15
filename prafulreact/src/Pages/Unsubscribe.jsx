import React from 'react'

const Unsubscribe = () => {
  return (
    <div className='bg-black'>
        <div className="container container-max">
            <div className="row">
                <div className="col-md-12 mb-5 mt-5">

                    <div className='card unsubBox col-md-4 mt-5 mb-5 border p-3 bg-light' >
                        <h3 className='fw-bold h3 mb-3'>Unsubscribe</h3>
                        <input type="text" style={{borderRadius:"6px", border:"1px solid #cdcdcd"}} className='py-2'/>
                        <label className='mb-3'>Email Address *</label>
                        
                        <button className='btn btn-sm'>Unsubscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Unsubscribe