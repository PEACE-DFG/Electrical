import React from 'react'
import { Link } from 'react-router-dom'

function Calender() {
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
    {/* navbar */}
        {/* $$$$$$$$$$$$$$$$$$$$$4444 */}<nav class="navbar sticky-top navbar-expand-lg navbar-light " style={{backgroundColor:'rgb(255,255,255,0.8)'}}>
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
            <li><a class="dropdown-item" href="#">              <Link to='/Abouts'>Department</Link></a></li>

            <li><a class="dropdown-item" href="#">
              <Link to='/Lecturers'>Lecturers</Link>
              </a></li>
            <li><a class="dropdown-item" href="#">              <Link to='/SchoolCalender'>School Calender</Link>
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
{/* calender section */}
<section className='mt-4 container'>
    <div>
        <h3>
            ACADEMIC CALENDER FOR 2022/2023 SESSION
        </h3>
    </div>

    <div className='mt-3  text-center'>
        <img src="https://uniosun.edu.ng/images/pages/logo.jpg" alt="" className='img-fluid ' style={{width:'100px'}} />
    </div>
    <div>
        <section className='text-center'>
            <h4>
                OSUN STATE UNIVERSITY,
            </h4>
            <p>
            P.M.B 4494, OSOGBO NIGERIA
            </p>
            <div className='mt-4'>
            <h6>
            CALENDAR FOR 2022/2023 ACADEMIC SESSION
            </h6>
            </div>
        </section>
    </div>
    <section>
        <div>
            <h6 className='text-danger'>
                <hr />
            October, 2022
            <hr />
            </h6>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday, 1 <sup>st</sup>-</b>        
            </p>
            <p style={{textAlign:'center'}}>
            Resumption for 2022/2023,
                                                                                                Academic session/Registration &
                                                                                                Commencement of Harmattan Semester
                                                                                                Lectures for returning students
            </p>
        </div>
    </section>

    {/* NNNNNNNNNNNNNNNNNN */}
    <section>
        <div>
            <h6 className='text-danger'>
                <hr />
            November, 2022
            <hr />
            </h6>
        </div>
        <div className='d-flex mt-3'>
            <p style={{borderRight:'1px solid red'}}>
            <b>
            Monday, 7 <sup>th</sup>-</b>        
            </p>
            <p style={{textAlign:'center'}}>
            Resumption for 2022/2023, Academic session/
                                                                                                Registration for Fresh Students
            </p>
        </div>
        <div className='d-flex mt-3'>
            <p style={{borderRight:'1px solid red'}}>
            <b>
            Monday, 14<sup>th</sup>-</b>        
            </p>
            <p style={{textAlign:'center'}}>
            Commencement of Harmattan
                                                                                                Semester Lectures for Fresh Students
            </p>
        </div>
        <div className='d-flex mt-3'>
            <p style={{borderRight:'1px solid red'}}>
            <b>
            Monday, 21 <sup>st</sup>- Wed. 23 <sup>rd</sup>-</b>        
            </p>
            <p style={{textAlign:'center'}}>
            Orientation for Fresh Students
            </p>
        </div>
    </section>

    <section>
        <div>
            <h6 className='text-danger'>
                <hr />
                December, 2022
            <hr />
            </h6>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Friday, 23 December 2022 – Sunday, 8 January, 2023 -</b>        
            </p>
            <p style={{textAlign:'center'}}>
            Christmas/New Year Break
            </p>
        </div>
    </section>
    {/* LLLLLLLLLLLLLLLLLL */}
    <section>
        <div>
            <h6 className='text-danger'>
                <hr />
                January, 2023
            <hr />
            </h6>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday, 9 -</b>        
            </p>
            <p style={{textAlign:'center'}}>
            Resumption from Christmas/New Year Break
            </p>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Tuesday, 17 <sup>th</sup> -</b>        
            </p>
            <p style={{textAlign:'center'}}>
            Matriculation 
            </p>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday, 30 <sup>th</sup> January – Friday, 3 <sup>rd</sup> February 
 -</b>        
            </p>
            <p style={{textAlign:'center'}}>
            Lecture Free Week for Returning
            </p>
        </div>
    </section>

    {/* KKKKKKKKKKkkk */}
    <section>
        <div>
            <h6 className='text-danger'>
                <hr />
                February, 2023
            <hr />
            </h6>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday, 6– Friday, 17  -</b>        
            </p>
            <p style={{textAlign:'center'}}>
            Harmattan Semester Examination (200– 500L)
            </p>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday, 20 <sup>th</sup> – Friday, 24 <sup>th</sup>  -</b>        
            </p>
            <p style={{textAlign:'center'}}>
            GNS Examinations 
            </p>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday, 20 <sup>th</sup> – Friday, 3 <sup>rd</sup> March
 -</b>        
            </p>
            <p style={{textAlign:'center'}}>
            Marking and Grading of Scripts   
            </p>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday, 27 <sup>th</sup> February – Friday, 10 <sup>th</sup> March
 -</b>        
            </p>
            <p style={{textAlign:'center'}}>
            Harmattan Semester Examination (100– 200L)             
            </p>
        </div>
    </section>
    {/* YYYYYYYYYYYYYYYYYYYYYYYYYyy */}
    <section>
        <div>
            <h6 className='text-danger'>
                <hr />
                March, 2023
            <hr />
            </h6>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday, 13 <sup>th</sup> - Friday 17 <sup>th</sup>-</b>        
            </p>
            <p style={{textAlign:'center'}}>
            Semester Break
            </p>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday 7 <sup>th</sup> -</b>        
            </p>
            <p style={{textAlign:'center'}}>
            Resumption for 2022/2023
                                                                                               Rain Semester/ Registration &
                                                                                               Commencement of Lectures for all Students
            </p>
        </div>
        
    </section>
    {/* &&&&&&&&&&&&&&&&&&&&&&&7 */}
    <section>
        <div>
            <h6 className='text-danger'>
                <hr />
                June, 2023
            <hr />
            </h6>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday, 5 <sup>th</sup> - Friday 9 <sup>th</sup>-</b>        
            </p>
            <p style={{textAlign:'center'}}>
           Lecture Free Week
            </p>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday 12 <sup>th</sup> - Friday 23 <sup>rd</sup></b>        
            </p>
            <p style={{textAlign:'center'}}>
            Rain Semester Examinations (All Levels)
                                    
            </p>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday 26 <sup>th</sup> - Friday 30 <sup>rd</sup></b>        
            </p>
            <p style={{textAlign:'center'}}>
                GNS Examinations                                    
            </p>
        </div>
        
    </section>
    {/* WWWWWWWWWWWWWWWWw */}
    <section>
        <div>
            <h6 className='text-danger'>
                <hr />
                July, 2023
            <hr />
            </h6>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday,  3<sup>rd</sup> - Friday 14 <sup>th</sup>-</b>        
            </p>
            <p style={{textAlign:'center'}}>
            Marking and Grading of Scripts/
                                                                                              End of 2022/2023 Academic Session
            </p>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday 17 <sup>th</sup></b>        
            </p>
            <p style={{textAlign:'center'}}>
            Commencement of Annual Leave for Academic Staff                       
            </p>
        </div>        
    </section>
    {/* @@@@@@@@@@@@@@@@@@@@@@2 */}
    <section>
        <div>
            <h6 className='text-danger'>
                <hr />
                September, 2023
            <hr />
            </h6>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday, 15<sup>th</sup> - Thursday, 21 <sup>st</sup>-</b>        
            </p>
            <p style={{textAlign:'center'}}>
            12th Convocation Ceremonies                                                                           End of 2022/2023 Academic Session
            </p>
        </div>
        <div className='d-flex mt-3' >
            <p style={{borderRight:'1px solid red'}}>
            <b  >
            Monday 18 <sup>th</sup></b>        
            </p>
            <p style={{textAlign:'center'}}>
            Resumption for 2023/2024 Session/
                                                                                               End of Annual Leave for Academic Staff
            </p>
        </div>        
    </section>
    <hr style={{color:'black',fontWeight:'600'}} />
</section>
<section>
        <footer className='text-light text-center' style={{backgroundColor:'rgb(91, 150, 2,0.7)'}}>
             <span>Copyright <i class="fa-solid fa-copyright text-light"></i> 2023, Design by CODEMaster</span><i class="fa-brands fa-github"></i>
            </footer>
        </section>
    </div>
  )
}

export default Calender