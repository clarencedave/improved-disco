import React from 'react'
import Layout from '../components/layout'
import logo from '../images/Lighthouse.jpg'
const ContactPage = () => (
  <Layout>
<div class="row">
    <div class="column">
        <div class="container">
            <div class="card">
                 <img src= {logo} alt="Avatar" class="avatar"/>
        <h2>Clarence Dave </h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        
    </div>
    </div>
    </div>

        <div class="column">
             <div class="container">
                 <div class="card">
                    <img src={logo} alt="Jane" class="avatar" />
        <h2>Dave</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        
    </div>  
    </div>
    </div>

        <div class="column">
            <div class="container">
                <div class="card">
                    <img src={logo} alt="Jane" class="avatar" />
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        
    </div>
    </div>
    </div>


    















    </div>

  </Layout>
)

export default ContactPage
