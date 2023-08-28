import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import '../../public/calculator.png'
// import Lottie from 'lottie-react';
// import animationData from '../assets/animation_ll8uslw2.json'
import { motion } from 'framer-motion'


function Homepage() {
  const navigate=useNavigate()
  let user=JSON.parse(localStorage.getItem('users'))

  console.log(user)
  function Logout(){
    localStorage.clear()
    navigate('/Registers')
    
  }
  const [outputValue, setOutputValue] = useState('0');

  // const handleButtonClick = (value) => {
  //   if (value === '=') {
  //     try {
  //       const result = eval(outputValue);
  //       setOutputValue(result.toString());
  //     } catch (error) {
  //       setOutputValue('Error');
  //     }
  //   } else if (value === 'C') {
  //     setOutputValue('');
  //   } else if (value === 'DEL') {
  //     setOutputValue(outputValue.slice(0, -1));
  //   } else if (value === 'sqrt') {
  //     setOutputValue(Math.sqrt(Number(outputValue)).toString());
  //   } else if (value === 'sin') {
  //     setOutputValue(Math.sin(Number(outputValue)).toString());
  //   } else if (value === 'cos') {
  //     setOutputValue(Math.cos(Number(outputValue)).toString());
  //   } else if (value === 'tan') {
  //     setOutputValue(Math.tan(Number(outputValue)).toString());
  //   } else if (value === 'log') {
  //     setOutputValue(Math.log10(Number(outputValue)).toString());
  //   } else if (value === 'invLog') {
  //     setOutputValue(Math.pow(10, Number(outputValue)).toString());
  //   } else {
  //     setOutputValue(outputValue + value);
  //   }
  // };  // const handleButtonClick = () => {
  //   setOutputValue('1');
  // };
  return (
    <motion.div
    initial={{ opacity: 0 }}  // Initial state is fully transparent
    animate={{ opacity: 1 }}  // Animate to fully opaque
    transition={{ duration: 1 }} // Transition duration in seconds
    >
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
    {/* $$$$$$$$$$$$$$$$$$$$$4444 */}<nav class="navbar  navbar-expand-lg navbar-light " style={{backgroundColor:'rgb(255,255,255,0.8)'}}>
  <div class="container">
  <div>
                <img src="https://uniosun.edu.ng/templates/uniosun/images/styling/green/logo.png" className='w-75 img-fluid' alt="" />
            </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <Link to='/Home' className='Linke'>Home</Link>
            </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           About Us
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">
            <Link to='/Abouts'>Department</Link></a></li>
            <li><a class="dropdown-item" href="#">
              <Link to='/Lecturers'>Lecturers</Link>
              </a></li>
            <li><a class="dropdown-item" href="#">
              <Link to='/SchoolCalender'>School Calender</Link>
              </a></li>
            <li><hr class="dropdown-divider"/></li>
            {/* <li><a class="dropdown-item" href="#">Upcoming Events</a></li> */}
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Academics
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">
            <Link to='/Courses'>Courses Overviews</Link></a></li>
            <li><hr class="dropdown-divider"/></li>
          </ul>
        </li>
        <div class="dropdown">
  <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    library
  </a>

 {
  localStorage.getItem('users')?
  <>
   <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">
      <Link to='/200level'> 200 level Courses</Link></a></li>
    <li><a class="dropdown-item" href="#"><Link to='/300level'>300 Level Courses</Link></a></li>
    <li><a class="dropdown-item" href="#"><Link to="/400level">400 level Courses</Link></a></li>
  </ul>
  </>:
  <>
  <ul class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuLink">
<h5 className='text-center bg-danger text-light m-0 p-0'> <i class="fa-solid fa-bell fa-shake"></i>
Please Register and Sign in  to access your courses

</h5>
    {/* <li><a class="dropdown-item" href="#"></a></li> */}
    {/* <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li> */}
  </ul>
  {/* <h5>
  </h5> */}
  </>
 }
</div>
       
       {
        localStorage.getItem('users')?
        <>
        <div class="dropdown">
  <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   
   <button type="button" class="btn btn-light position-relative">
   <img src="data:image/png;base64,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" className='img-fluid' style={{width:"32px"}} alt="" />
   {user&& user[0].Matricnumber} 
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
    <span class="visually-hidden">verified User</span>
   <img src="https://i.pinimg.com/originals/1c/35/39/1c35395b28e20035b8adce20d3c8b7bb.png" className='img-fluid' alt="" />

  </span>
</button>
   
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#" onClick={Logout}>
      Logout
      </a></li>
  
  </ul>
</div>   
        </>:
        <>
         <li class="nav-item">
          <a class="nav-link ">
            <Link to='/Registers'>Register</Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">
            <Link to='/Logins'>Login</Link>
          </a>
        </li>
        </>
       }
      </ul>
      <img src="https://i.pinimg.com/736x/c5/8e/13/c58e137d1a8fb49300b869e6b8a732e7.jpg" width={'50px'} alt="" />
    </div>
  </div>
</nav>
{/* Carousel path */}
<div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.uniosun.edu.ng/cache/resized/89a676a84e7a4410bba4e88d528433fe.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{backgroundColor:'rgb(0,0,0,0.5)',lineHeight:'0'}}>
        <h5 > DEPARTMENT OF ELECTRICAL AND ELECTRONIC ENGINEERING </h5>
        <p><i><i class="fa-solid fa-lightbulb text-warning fa-bounce"></i>Power the World and dissipate knowledge....</i></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.uniosun.edu.ng/cache/resized/b284a965e4e7a0396c06d13a47bcbc98.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block"  style={{backgroundColor:'rgb(0,0,0,0.5)'}}>
        <h5>CONDUCIVE ACADEMIC LEARNING ENVIRONMENT</h5>
        <p>Osun State University is a conventional University envisioned to be a centre of excellence through the provision of highly qualitative teaching and learning.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://uniosun.edu.ng/cache/resized/afed5abac16c8901dc784bad157f19b5.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block"  style={{backgroundColor:'rgb(0,0,0,0.5)'}}>
        <h5>      WELCOME TO OSUN STATE UNIVERSITY</h5>
        <p>The Livingspring of Knowledge and Culture</p>
      </div>
    </div>
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden root">Back</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden root">Next</span>
  </button> */}
</div>
{/* Top news se ction */}
    <section className='container '>
      <div className='row my-4'>
        <div className="cold">
          <div className="row">
          {/* <div className='row'> */}
             <h6>TOP UNIVERSITY NEWS</h6>
          {/* </div>¿ */}
                <div className=' my-5 me-0 pe-0'>
                <div className="m-auto " style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
          <div className="cold">
          <div className="card my-3" style={{width:'15rem'}}>
        <img src="https://uniosun.edu.ng/cache/resized/5b9e50a3df6815d39685370bde0b2b06.jpg" className="card-img-top img-fluid w-100" alt="..."/>
        <div className="card-body">
          <h6 className="card-title">UNIOSUN VC FELICITATES WORKERS ON 2023 WORKERS’ DAY</h6>
          <p className="card-text" style={{fontSize:'12px'}}>The Vice-Chancellor of Osun State University, Professor Odunayo Clement Adebooye, has felicitated workers on the occasion of the 2023 Workers’ Day ...</p>
          <a href="#" className="btn btn-light"><i class="fa-solid fa-check"></i> Read more</a>
        </div>
      </div>
          </div>
          <div className="cold">
          <div className="card my-3" style={{width:'15rem'}}>
        <img src="https://uniosun.edu.ng/cache/resized/8eac93ffca3c05e7e83f30e1576ac750.jpg" className="card-img-top img-fluid w-100" alt="..."/>
        <div className="card-body">
          <h6 className="card-title">
      UNIOSUN FRENCH DEPARTMENT EMERGES WINNER  OF ALLIANCE FRANCAISE COMPETITION</h6>
          <p className="card-text" style={{fontSize:'12px'}}>The Department of French of Osun State University has emerged winner of the 2023 Quiz, Debate, Song and Drama competitions...</p>
          <a href="#" className="btn btn-light"><i class="fa-solid fa-check"></i> Read more</a>
        </div>
      </div>
          </div>
          <div className="cold">
          <div className="card my-3" style={{width:'15rem'}}>
        <img src="https://uniosun.edu.ng/cache/resized/18744b655dc35e81037cd6e3a567e17d.jpg" className="card-img-top img-fluid w-100" alt="..."/>
        <div className="card-body">
          <h6 className="card-title">UNIOSUN RECEIVES FULL ACCREDITATION FOR 26 ACADEMIC PROGRAMMES</h6>
          <p className="card-text" style={{fontSize:'12px'}}>The National Universities Commission has conveyed its approval of full accreditation for twenty-six undergraduate and postgraduate academic ...
      </p>
          <a href="#" className="btn btn-light"><i class="fa-solid fa-check"></i> Read more</a>
        </div>
      </div>
          </div>
          <div className="cold">
        <div className="card cross my-3" style={{width:'17rem',backgroundColor:'rgb(91, 150, 2)'}}>
          <div className="div text-center text-light mt-3">
            <h6>
              WELCOME
            </h6>
          </div>
      <div className='text-center' >
  <img src="https://uniosun.edu.ng/images/vc.jpg" style={{borderRadius:'50%',width:'100px'}} class="card-img-top img-fluid " alt="..."/>

      </div>
  <div class="card-body">
  <h5 class="card-title text-center text-light" style={{fontSize:'13px',fontWeight:"700"}}>PROF.ODUNAYO CLEMENT ADEBOOYE</h5>
  <h5 class="card-title text-center" style={{fontSize:'13px',fontWeight:"700",color:'rgb(152, 238, 22)'}}>Vice Chancellor</h5>
    <p class="card-text text-light" style={{fontSize:'12px'}}>I have the pleasure to welcome you to the website of Osun State University, Nigeria. Our main campus is located in Osogbo, the capital of the State of Osun, while our other campuses are located in five other towns ( Ejigbo, Ifetedo, Ikire, Ipetu-Ijesa and Okuku) spread across the six geopolitical zones of the State. Licensed on 21 December, 2006, we opened our doors to full academic activities on 21 September ... <span className='text-warning'><Link to='/VcSpeech'>(Read More)</Link></span>
</p>
  </div>
</div>
        </div>
          </div>

                </div>
          </div>
        </div>
       

      </div>

    </section>
    {/* ############################# constatnt */}
    <section class="rum my-4">
    <section className='container'>
      <div className='text-light pt-4'>
        <h5 className='my-3'>
          Upcoming Events
        </h5>
        <hr />
        <h6>
          <i>
          No Upcoming Events
          </i>
        </h6>

      </div>

    </section>
    </section>
    {/* map section */}
    <section >
    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.265409668215!2d4.59864167412407!3d7.761652207539896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103827489a44ee03%3A0xc8d59bcaa8bfd123!2sOsun%20State%20University!5e0!3m2!1sen!2sng!4v1688103650214!5m2!1sen!2sng" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2851845417463!2d4.6011392096734305!3d7.759549207536331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1038277ff77404a5%3A0x24ec1563c6d58352!2sOsun%20State%20University%2C%20Engineering%2C%20230284%2C%20Osogbo%2C%20Osun!5e0!3m2!1sen!2sng!4v1688105579912!5m2!1sen!2sng" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>


 <section className='container-fluid mt-4'>
  <h5 >
    <i style={{color:'rgb(91, 150, 2)'}}>
    UNIOSUN Tweets <i class="fa-brands fa-twitter text-primary"></i>

    </i>
  </h5>
 </section>
 <section style={{display:'flex', justifyContent:'space-around',flexWrap:'wrap'}}>
    
    <div className="card my-3 text-light " style={{width:'25rem',backgroundColor:'rgb(91, 150, 2,0.7)'}}>
        <img src="https://pbs.twimg.com/media/FUmUYUzXwAAgEmK?format=jpg&name=360x360" className="card-img-top img-fluid w-100" alt="..."/>
        <div className="card-body">
          <h6 className="card-title"><blockquote class="twitter-tweet">
     
            <p lang="en" dir="ltr">Faces of the Engineering faculty Excos….it’s with all joy to be in ADELEKE UNIVERSITY EDE,to present an honorary award to one of their lecturers who had greatly contributed by impacting knowledge to our students during the Engineering week. <a href="https://t.co/J38OsM7bjw">pic.twitter.com/J38OsM7bjw</a></p>&mdash; OSUN STATE UNIVERSITY ENGINEERING FACULTY👷‍♂️ (@uniosunnuesa_) <a href="https://twitter.com/uniosunnuesa_/status/1533920322113642498?ref_src=twsrc%5Etfw">June 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </h6>
        </div>
      </div>
      {/* ##############333 */}
      <div className="card my-3 text-light" style={{width:'25rem',backgroundColor:'rgb(91, 150, 2,0.7)'}}>
        {/* <video controls>
        <source src="https://twitter.com/i/status/1669014952537911296" type="video/mp4"/> 
        </video> */}
        <img src="https://pbs.twimg.com/media/FtmaRU1aUAUOSPr?format=jpg&name=small" className="card-img-top img-fluid w-100" alt="" />
        <div className="card-body">
          <h6 className="card-title">
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">The Vice-Chancellor, Prof. &#39;Ayo Clement Adebooye, on behalf of the Council, Management, Staff and Students cordially invites the general public especially women to UNIOSUN Women&#39;s Day Celebration themed embracing equity on Thursday, 27th April at the Oyinlola Auditorium by noon <a href="https://t.co/pXbGezrUOL">pic.twitter.com/pXbGezrUOL</a></p>&mdash; UNIOSUN (@uniosune) <a href="https://twitter.com/uniosune/status/1646517590980968460?ref_src=twsrc%5Etfw">April 13, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </h6>
        </div>
      </div>

      {/* #####################333 */}
      <div className="card my-3 text-light" style={{width:'25rem',backgroundColor:'rgb(91, 150, 2,0.7)'}}>
        {/* <video controls>
        <source src="https://twitter.com/i/status/1669014952537911296" type="video/mp4"/> 
        </video> */}
        <img src="https://pbs.twimg.com/media/Fd9uuidXwAAc9Fo?format=jpg&name=small" className="card-img-top img-fluid w-100" alt="" />
        <div className="card-body">
          <h6 className="card-title">
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">together by one destiny in an atmosphere of peace and with total commitment and patriotism. On behalf of all of us at Osun State University, we wish all Nigerians a happy 62nd Independence Day anniversary. <a href="https://t.co/U9om0rSRUU">pic.twitter.com/U9om0rSRUU</a></p>&mdash; UNIOSUN (@uniosune) <a href="https://twitter.com/uniosune/status/1576100152095510528?ref_src=twsrc%5Etfw">October 1, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </h6>
        </div>
      </div>
        </section>
        <section>
          
        </section>


        

    </motion.div>
  )
}

export default Homepage