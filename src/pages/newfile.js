import React from 'react'
import Layout from '../components/layout'

const filePage = () => (
  <Layout>
    
   <div>

     <form name = "contact" method = "post" netlify>
       <input Fname = "Fname " placeholder = "Your First Name" type ="text"/>
       <input Lname = "Lname " placeholder = "Your Last name" type ="text"/>
       <input address = "address " placeholder = "Address" type ="text"/>
       <input email = "mail " placeholder = "Email" type ="text"/>
       <button>Send</button>
     </form>

   </div>
 
  </Layout>
  
)

export default filePage
