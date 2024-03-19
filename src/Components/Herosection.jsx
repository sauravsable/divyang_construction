import React from 'react'
import logo from '../images/logo-removebg-preview.png';
export default function Herosection() {
  return (
    <section className='herosection'>
      <div className="herosectionrow1">
            <img src={logo} alt="" />
      </div>

      <div className="herosectionrow2">
        <div className="herosectioncolumn">
            <h1>Experienced</h1>
            <h1>Contractor Building</h1>
            <h1>Dreams Into Reality</h1>

            <div className="herosectionparadiv">
            <p>With a proven track record of successful projects, I bring expertise and quality craftsmanship to every job.</p>

            <div className="herosectionbuttondiv">
                <button> +91 9825033853</button>
                <button>E-Mail</button>
            </div>
            </div>
            
        </div>
      </div>
    </section>
  )
}
