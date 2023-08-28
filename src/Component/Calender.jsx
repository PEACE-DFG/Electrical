import { motion } from 'framer-motion'
import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
// import { motion } from 'framer-motion'

function Calender() {
     const navigate=useNavigate()
  let user=JSON.parse(localStorage.getItem('users'))
  console.log(user)
  function Logout(){
    localStorage.clear()
    navigate('/Registers')
    
  }
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
    {/* navbar */}
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
    </motion.div>
  )
}

export default Calender