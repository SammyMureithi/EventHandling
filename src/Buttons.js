import React from 'react'

function Buttons() {
    function handleClick( event ) {
        console.log(`Button ${event.target.name} clicked`)
    }
  return (
      <div>
          <button name='one' onClick={handleClick}>One</button><br></br>
          <br></br>
          <button name='two' onClick={handleClick}>Two</button><br></br>
          <br></br>
          <button name='three' onClick={handleClick}>Three</button><br></br>
          <br></br>
          <button name='four' onClick={handleClick}>Four</button><br></br>   
    </div>
  )
}

export default Buttons