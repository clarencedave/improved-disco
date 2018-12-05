import React from 'react'
import ReactDOM from 'react-dom'  
import { Timeline } from 'react-twitter-widgets'

// var Timeline = require('react-twitter-widgets').Timeline
 
ReactDOM.render((
  
  <Timeline
    dataSource={{
      sourceType: 'https://twitter.com/maylynsambas',
      screenName: '@maylynsambas'
    }}
    options={{
      username: '@maylynsambas',
      height: '400'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
  />
), document.getElementById('root'))

