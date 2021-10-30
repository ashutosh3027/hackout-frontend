import React from 'react'
import '../assets/styles/homepage.css'
import shoppingImg from '../assets/img/shopping-img.svg'
function Home() {
    return (
        <>
               <div className="ball1"></div>
               <div className="ball2"></div>
           <div className="container">

               <div className="home container-box">
                 <img src={shoppingImg} alt="" />
                 <div className="intro">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime dignissimos earum recusandae blanditiis rerum sint? Ex iure quisquam sunt cum numquam nam nobis accusantium ullam necessitatibus consequatur. Molestiae eius atque esse eos vero totam similique ut, dolorum doloribus fuga libero! Cupiditate pariatur hic facere?</div>
               </div>
              
           </div>
        </>
    )
}

export default Home;
