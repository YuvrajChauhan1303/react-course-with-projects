import React from 'react'
import './Landing.css'
import shoe from '../../images/shoe_image.png'
import flipkart from "../../images/flipkart.png"
import amazon from "../../images/amazon.png"

const Landing = () => {
  return (
    <div className='landing'>
      <div className="left">
        <div className="upper">
            <h1>your feet deserve the best</h1>
        </div>
        <div className="lower">
            <p>
                your feet deserve the best and we're here to help you with our shoes. your feet deserve the best and we're here to help you with our shoes. 
            </p>
        </div>
        <div className="lower2">
            <button className="btn1">Shop Now</button>
            <button className="btn2">Category</button>
        </div>
        <div className="lower3">
            also available on
        </div>
        <div className="lower4-img">
            <img src={flipkart} alt="" />
            <img src={amazon} alt="" />
        </div>
      </div>
      <div className="right">
        <img src={shoe} alt="" />
      </div>
    </div>
  )
}

export default Landing
