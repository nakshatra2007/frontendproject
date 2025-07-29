import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Page2.css'

export default class Page2 extends Component {
  render() {
    return (
      <div className='main1'>
        <h1> i am a student in klu</h1>
        <br/><br/>
        <div id='text1'>
          <h2>html and css basic</h2>
        </div>
        
        <br/><br/>
        <Link to="/page1">Go To Page1</Link>
        <br/><br/>
        <div className='link2'>
        <Link to="/">Go to Home Page</Link>
        </div>

      </div>
    )
  }
}