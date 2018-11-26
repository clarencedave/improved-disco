import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/seattle-angel-logo.png'
const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#000080',
      marginBottom: '1.45rem',
      
    }}
  >
  
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
      
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            
          }}
        >
          {siteTitle}
        </Link>
        
      </h1>
    </div>

<div class="header">
  <a   href="/" >
  <img src= {logo} alt="Angel"/>
  </a>
  

  <div class="header-right">
    <a class="active" href="/">Home</a>
    <a href="#about">About</a>
    <a href="#news">Resources</a>
    <a href="contacts">Leadership</a>
  </div>
  
  <div class="profit">
  <p>A non-profit corporation. Sparking the flame of angel investing in the Northwest</p>
  </div>
</div>




  </div>
  
)

export default Header
