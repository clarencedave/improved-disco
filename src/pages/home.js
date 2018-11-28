import React from 'react'
//import { Link } from 'gatsby'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import twit from '../images/twit.png'
import mail from '../images/gmail.png'
import Layout from '../components/layout'
//import gif from '../images/giphy.gif'

const homePage = () => (
  <Layout>
          <div class = "media"> 
          <h1>Find Us On:</h1>
            
          <a  href= "facebook.com"> <img src= {facebook} alt="fb" class = "fb"/></a>
          <a  href= "linkedin.com"> <img src= {linkedin} alt="in"class = "in"/></a>
          <a  href= "twitter.com"> <img src= {twit} alt="twit"class = "twit"/></a>
          <a  href= "gmail.com"> <img src= {mail} alt="mail"class = "mail"/></a>
          <div class="hero-image">
          <div class="hero-text">
         <br/>
         <br/>
          <button>Learn More!</button>
          </div>
          </div>
          </div>

</Layout>
     



    
)

export default homePage
