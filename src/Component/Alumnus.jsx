import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Alumnus() {
    const navigate= useNavigate()
  let user=JSON.parse(localStorage.getItem('users'))
  function Logout(){
    localStorage.clear()
    navigate('/Registers') 
  }
  return (
    <div>
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
{/* header */}
<div className='container-fluid' style={{backgroundColor:'rgb(211,211,211)'}}>
       <div className='container'>
       <i class='fa-solid fa-home' style={{fontSize:'15px',color:'green'}}></i> <span style={{fontSize:'15px',color:'green'}}>Home </span> <i class='fa-solid fa-greater-than' style={{fontSize:'10px'}}></i><span style={{fontSize:'15px',color:'green'}}> UNIOSUN ALUMNUS WINS £12,623 UK TUITION WAIVER FOR THREE YEARS</span>

       </div>
</div>
<div className='container'>
       <h3 className='mt-4'>
       UNIOSUN ALUMNUS WINS £12,623 UK TUITION WAIVER FOR THREE YEARS
       </h3>
       <div class="card mb-3" style={{border:'none'}}>
  <div class="">
    <div class="">
      <img src="https://www.uniosun.edu.ng/media/k2/items/cache/0561feaa86a9d43b7dc634e81b54e049_L.jpg" class="img-fluid w-75 rounded-start" alt="..."/>
    </div>
    <div class="">
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5> */}
            <h5>
            Osun State University (UNIOSUN) continues to make waves in academia, as one of her Alumni, Obasanjo Okekunle, bagged the prestigious University of Westminster Business School PhD Studentship, which includes a full tuition waiver for three years worth £12,623 per year and an alumni discount of £2,227 per year.
            </h5>
        <p class="card-text">
            <i>
            Obasanjo, in September 2022, successfully obtained an MSc in Finance and Accounting with Distinction from the University of Westminster, London, United Kingdom, and is now poised to embark on a groundbreaking research journey, further contributing to the field of finance and accounting.
            </i>
        </p>
        <p>
        Recall that Obasanjo graduated as the overall best student in the Department of Accounting and the entire Faculty of Management Sciences for the 2018/2019 academic session in Osun State University during his undergraduate days.
        </p>
        <p>
        Reacting to the news, the Vice-Chancellor, Professor 'Ayo Clement Adebooye said "On behalf of the Governing Council, Senate, Management, Staff and Students, I extend my heartfelt congratulations to Obasanjo Okekunle on this well-deserved accomplishment and wish him continued success in his academic pursuits. His dedication and excellence serve as an inspiration to students and scholars alike.
        </p>
        <p>
            <i>
            "UNIOSUN is extremely proud of Obasanjo for his remarkable achievement. It demonstrates the exceptional caliber of our students and their ability to excel academically, both locally and internationally. We will continue to support and encourage our students to reach for the stars," the Vice-Chancellor remarked.
            </i>
        </p>
       
      </div>
    </div>
  </div>
</div>
</div>
<footer className='text-light text-center' style={{backgroundColor:'rgb(91, 150, 2,0.7)'}}>
             <span>Copyright <i class="fa-solid fa-copyright text-light"></i> 2023, Design by CODEMaster</span><i class="fa-brands fa-github"></i>
 </footer>
       
    </div>
    </div>
  )
}

export default Alumnus