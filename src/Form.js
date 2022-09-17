import React, { useState } from 'react'

function Form() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    function handleChange( e ) {
        if ( e.target.name === "username" ) {
            setUsername( e.target.value );
        }
        else {
            setPassword( e.target.value );
        }
    }
    function handleSubmit() {
        console.log( "Username: " + username );
        console.log( "Password: " + password );
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <label htmlFor='username'>Username</label>
              <input
                  type="text" onChange={handleChange} placeholder="Enter username ..." name="username" value={username} />
               <label htmlFor='username'>Password</label>
              <input
                  type="password" onChange={handleChange} placeholder="Enter password ..." name="password"
                  value={password} />
              <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default Form