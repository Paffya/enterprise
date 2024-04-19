import React from 'react'

const ButtonToggle = () => {
    const [status, setStatus] = React.useState(true)
  return (
    <div className="App">
    {
      status?  <h1>Subscribe</h1>: null
    }
     
     <button onClick={()=>setStatus(false)}>Hide</button>
     <button onClick={()=>setStatus(true)}>Show</button>
    <button onClick={()=>setStatus(!status)}>Toggle</button>


    
    </div>
  )
}

export default ButtonToggle