import React from 'react';
//import { Link } from './node_modules/react-router-dom';
//import { Link } from 'react-router'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/Incomplete">Incomplete</Link> | <Link style={linkStyle} to="/Completed">Completed</Link> |<Link style={linkStyle} to="/Search">Search</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;