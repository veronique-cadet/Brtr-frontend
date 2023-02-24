import React from 'react'
import NavBarTwo from './NavBarTwo'

function Messages({setUser}) {
  return (
    <div>
<NavBarTwo setUser={setUser} />
        <h1>Messages</h1>
    </div>
  )
}

export default Messages