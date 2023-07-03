import React from 'react'
import { Link } from 'react-router-dom'
import '../../public/uni-1.jpg'
import '../../public/uni-2.jpg'
import '../../public/uni-3.jpg'

function Course() {
  return (
    <div>
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
            <li><a class="dropdown-item" href="#">Levels Overviews</a></li>
            <li><a class="dropdown-item" href="#">
              <Link to='/Courses'>Courses Overviews</Link></a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Academic Gurus</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link ">Library</a>
        </li>
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
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" >
    <div class="carousel-item active">
      <img src={'uni-1.jpg'} class="d-block w-100 " style={{height:'400px'}} alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{backgroundColor:'rgb(0,0,0,0.5)',lineHeight:'0'}}>
        <h5 > DEPARTMENT OF ELECTRICAL AND ELECTRONIC ENGINEERING </h5>
        <p><i><i class="fa-solid fa-lightbulb text-warning fa-bounce"></i>Power the World and dissipate knowledge....</i></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={'uni-2.jpg'} class="d-block w-100" style={{height:'400px'}} alt="..."/>
      <div class="carousel-caption d-none d-md-block"  style={{backgroundColor:'rgb(0,0,0,0.5)'}}>
        <h5>CONDUCIVE ACADEMIC LEARNING ENVIRONMENT</h5>
        <p>Osun State University is a conventional University envisioned to be a centre of excellence through the provision of highly qualitative teaching and learning.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={'uni-3.jpg'} class="d-block w-100" style={{height:'400px'}} alt="..."/>
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
<section className='container mt-4'style={{backgroundColor:'rgb(91, 150, 2,0.7)'}} >
  
    <div className='text-center text-light' style={{backgroundColor:'rgb(91, 150, 2)'}}>
    <hr />
        <h3>
            Courses Overview
        </h3>
        <hr />
    </div>
    <hr />
    {/* 
    image section */}
    <section>
        <div className='m-auto text-center'>
            <div>
                <img src={'f1.png'} className='w-75  img-fluid' alt="" />
            </div>
            <div>
                <img src={'f2.png'} className='w-75 img-fluid' alt="" />
            </div>
            <div>
                <img src={'f3.png'} className='w-75 img-fluid' alt="" />
            </div>
            <div>
                <img src={'f4.png'} className='w-75 img-fluid' alt="" />
            </div>
            {/* <div>
                <img src={'f5.png'} className='w-100 img-fluid' alt="" />
            </div>
            <div>
                <img src={'f6.png'} className='w-100 img-fluid' alt="" />
            </div>
            <div>
                <img src={'f7.png'} className='w-100 img-fluid' alt="" />
            </div>
            <div>
                <img src={'f8.png'} className='w-100 img-fluid' alt="" />
            </div>
            <div>
                <img src={'f9.png'} className='w-100 img-fluid' alt="" />
            </div>
            <div>
                <img src={'f10.png'} className='w-100 img-fluid' alt="" />
            </div> */}
        </div>
    </section>
</section>

<section>
        <footer className='text-light text-center' style={{backgroundColor:'rgb(91, 150, 2,0.7)'}}>
             <span>Copyright <i class="fa-solid fa-copyright text-light"></i> 2023, Design by CODEMaster</span><i class="fa-brands fa-github"></i>
            </footer>
        </section>
    </div>
  )
}

export default Course