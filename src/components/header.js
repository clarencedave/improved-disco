import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/seattle-angel-logo.png'
import styled from "styled-components";


const HeaderWrapper = styled.div`

marginBottom: 1.45rem;
h1 {
  img {
    height : 100px;
  }
}

`;



const Header = ({ siteTitle }) => (
  <HeaderWrapper>
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
    <a class="active" href="/">HOME</a>
    <a href="#about">CONFERENCE</a>
    <a href="contacts">TEAM</a>
  </div>
  
  <div class="profit">
  <p>A non-profit corporation. Sparking the flame of angel investing in the Northwest</p>
  </div>
</div>




  </HeaderWrapper>
  
)

export default Header
