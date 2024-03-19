import React from 'react'
import serviceimage from '../images/serviceimage.jpg';

const data = [
    {
        servicename :"Versatile Construction",
        servicedescription :"Our expert team constructs homes of every type, ensuring durability and comfort with top-notch materials."
    },
    {
        servicename :"Dynamic furniture",
        servicedescription :"Tailored to your taste and space, our custom furniture adds charm and functionality to your home."
    },
    {
        servicename :"Material Sourcing",
        servicedescription :"We select and procure high-quality materials, guaranteeing the longevity and beauty of your project."
    },
    {
        servicename :"24/7 Customer support",
        servicedescription :"Count on us day or night, ready to address your needs with attentive and timely assistance."
    },

]
export default function Service() {
  return (
    <>
     <div className="serviceparadiv">
            <p>With a proven track record of successful projects, I bring expertise and quality craftsmanship to every job.</p>

            <div className="herosectionbuttondiv">
                <button> +91 9825033853</button>
                <button>E-Mail</button>
            </div>
            </div>
            <section className='servicesection'>
      <p>Service</p>

      <div className="servicerow">
        <div className="servicecolumn1">
            <img src={serviceimage} alt="serviceimage" />

            <div className="servicecolumninner">
                <div className="servicecolumninner1">
                    <p>10+</p>
                    <p>Years of</p>
                    <p>Experience</p>
                </div>

                <div className="servicecolumninner1">
                    <p>25+</p>
                    <p>Projects</p>
                    <p>Completed</p>
                </div>
            </div>
        </div>

        <div className="servicecolumn2">
            <p>Service</p>
            {
                data.map((item,index)=>(
                    <div key={index} className="servicedescriptiondiv">
                       <h2>{item.servicename}</h2>
                        <p>{item.servicedescription}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </section>        
    </>
    
  )
}
