import React from 'react'
import NavBarTwo from './NavBarTwo'

function Browse({user, setUser}) {
  return (
    <div>
      <NavBarTwo setUser={setUser} />
  <h1>Hi {user?.first_name}</h1>
    </div>
  )
}

export default Browse