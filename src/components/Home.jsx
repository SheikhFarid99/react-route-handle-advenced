import React from 'react'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h4>Home</h4>
      <Outlet />
    </div>
  )
}

export default Home