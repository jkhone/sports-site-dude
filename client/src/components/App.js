import React from "react"
import { useUsers } from "../hooks"

function App() {
  const { users } = useUsers()

  console.log(users)

  return (
    
    <div>
      <h1>I hate Him</h1>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default App
