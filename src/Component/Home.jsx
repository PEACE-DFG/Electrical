import React from 'react'
import '../../public/library.mp4'
import {Animated} from "react-animated-css";
import '../../public/logo.jpg'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <motion.div
    initial={{ opacity: 0 }}  // Initial state is fully transparent
    animate={{ opacity: 1 }}  // Animate to fully opaque
    transition={{ duration: 2 }} // Transition duration in seconds
    >
         <div className="wrapper">
            <video autoPlay muted loop className="vik">
                <source src={'library.mp4'} type="video/mp4"/>
            </video>
            </div>
    <div style={{backgroundColor:'rgb(91, 150, 2)'}} >
        <div className='container top text-light'  >
           <header className='d-flex '>
           <div className='px-3 py-2'>
                <h6>
                    News Letters
                </h6>
            </div>
            <div className='px-1 py-2'>
                <h6>
                <i class="fa-solid fa-location-dot fa-bounce"></i>
                </h6>
            </div>
            <div className='px-1 py-2'>
                <h6>
                <i class="fa-solid fa-globe fa-spin"></i>
                </h6>
            </div>

           </header>

           <header className='d-flex'>
            <div className="ice px-1 py-2"><i class="fa-brands fa-facebook fa-fade"></i></div>
            <div className="ice px-1 py-2"><i class="fa-brands fa-twitter fa-fade"></i></div>
            <div className="ice px-1 py-2"><i class="fa-brands fa-google fa-fade"></i></div>
           </header>
        </div>
    </div>
    <section className=' py-3' style={{backgroundColor:'rgb(255,255,255,0.8)'}}>
        <div className='container' style={{display:'flex',justifyContent:"space-between",alignItems:'center',flexWrap:'wrap'}}>
            <div>
                <img src="https://uniosun.edu.ng/templates/uniosun/images/styling/green/logo.png" alt="" />
            </div>
            <div>
                 <span style={{display:'flex',justifyContent:"space-around",alignItems:'center'}} >
                    <div>
                    <img src={'logo.jpg'} alt="" style={{width:'60px'}} />

                    </div>
                   <div style={{alignItems:'center'}}>
                   <p className='col ps-2' style={{fontSize:'18px',fontWeight:'600',color:'rgb(91, 150, 2)',lineHeight:'1.2'}}> ELECTRICAL/ELECTRONICS ENGINEERING </p>
                   </div>
                </span>
            </div>
        </div>
    </section>
    <section  style={{backgroundColor:'rgb(0,0,0,0.6)'}}>
        <marquee behavior="" direction="">
            <Animated animationOut="fadeIn" isVisible={true}>
        <span className='text-light rule fa-fade' animationIn="bounceInLeft"><i><i class="fa-solid fa-lightbulb text-warning fa-bounce"></i>Power the World and dissipate knowledge....</i></span>
        </Animated>
        </marquee>
    </section>

    <section className='pt-5 my-5 text-light'>
        <div style={{backgroundColor:'rgb(0,0,0,0.6)',maxWidth:"700px",margin:'auto',padding:'20px 50px',textAlign:'center'}}>
        <img src={'logo.jpg'} alt="" style={{width:'100px',borderRadius:'10px'}} />

            <h2 className='pt-5' style={{fontSize:'20px',fontFamily:'Cursive',fontWeight:'900'}}>
                Welcome To Electrical/ Electronic Department
            </h2>

            <div>

                <button className='mt-4 true px-2 py-1 ' style={{border:'1px solid rgb(72, 233, 72)', borderRadius:'10px'}}>
                <Link to='/Home' className='Link'> 
                <h4 className='text-center'>Get Started <i class="fa-solid fa-arrow-right"></i></h4>
                </Link>
                </button>
            </div>
        </div>
        
    </section>
    <section className='mt-5 pt-5'>
        <div className='bg-dark'>
            <footer className='text-light text-center'>
             <span>Copyright <i class="fa-solid fa-copyright text-light"></i> 2023, Design by CODEMaster</span><i class="fa-brands fa-github"></i>
            </footer>

        </div>

    </section>
        
    </motion.div>
  )
}

export default Home