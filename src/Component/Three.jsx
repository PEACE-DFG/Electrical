import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';

function Three() {
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
         <div className="wrapper">
            <video autoPlay muted loop className="vik">
                <source src={'lib.mp4'} type="video/mp4"/>
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
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
  </>:
  <>
  <ul class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuLink">
<h5 className='text-center bg-danger text-light m-0 p-0'> <i class="fa-solid fa-bell fa-shake"></i>
Please Register and Sign in  toaccess your courses

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
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{/* next section */}
<section style={{backgroundColor:'rgb(0,0,0,0.6)'}}>   
       <section className='container text-light my-3 pb-3'>
        <div>
           <marquee behavior="" className='text-light ' direction="">
        This Page Contains Useful Material Resources For All Courses in 300 level
       </marquee>
       <hr style={{color:'white'}} className='my-2 py-2' />

        </div>
        <div>
       <p className='text-white'>
       <div className='container text-light my-3 pb-3'>
    <h5>
<u>
    1. Python For Everybody <span className='text-warning'>(EEE 316)</span>:

</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbook is title <u><i>Python For Everybody</i></u> by Dr. Charles R. Severance. 
</p>
<p>
  Click on the Link below to download the pdf
</p>
<p>
  Link: <a href="https://do1.dr-chuck.com/pythonlearn/EN_us/pythonlearn.pdf" className='text-info'> Python For Everybody</a>
  </p>  

  <p>
    You can also check out breakdown of All topics from w3school.com;Just click on the Link below to check it out
    </p>
    <p>
      Link:  
      <a href="https://www.w3schools.com/python/default.asp" className='text-info'>w3schools.com</a>
      </p>  
    
  </div>
       </p>
          <h3>
            
          </h3>
        </div>
       <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Python Full Course
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/rfscVS0vtbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/eWRfhZUzrAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
      </div>
    </div>
  </div>

</div>

{/* SECOND ACCORDION COURSE */}
<div className='container text-light my-3 pb-3'>
    <h5 className='mt-5'>
<u>
    2. Engineering Mathematics <span className='text-warning'>(EEE 331)</span>:

</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbook is title <u><i>Advanced-Engineering-Mathematics</i></u> by Dr. Charles R. Severance. 
</p>
<p>
  Click on the Link below to download the pdf
</p>
<p>
  Link: <a href="https://elektrolibraria.files.wordpress.com/2015/12/197-advanced-engineering-mathematics.pdf" target='_blank' className='text-info'> Advanced-Engineering-Mathematics</a>
  </p> 
    
  </div>
<div class="accordion mt-1" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
       Numerical Analysis
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/fll1HdYy6vk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/ukNbG7muKho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/q87L9R9v274" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/pFTsbsLESpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/-5e2cULI3H8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/_1GTPKIehEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/PjYasDZRbM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/lCkGZ1LTQx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
  </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Laplace Transforms
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/lNlFmnGGH60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/8U0timpoY6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
  </div>
      </div>
    </div>
  </div>

</div>
<div>
       <p className='text-white'>
       <div className='container text-light my-3 pb-3'>
    <h5>
<u>
    3. Use Of Engineering Software Packages <span className='text-warning'>(EEE 307)</span>:

</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbook is title <u><i>MATLAB Programming For Engineers</i></u> by Stephen J. Chapman 
</p>
<p>
  Click on the Link below to download the pdf
</p>
<p>
  Link: <a href="https://www.ssgmce.ac.in/student_resource/Electronics%20&%20Telecommunication%20Engg./CSE_3u/MatLab%20Stephen%20J.%20Chapman.pdf" className='text-info'> MATLAB Programming For Engineers</a>
  </p>  

  <p>
    You can also check out breakdown of All topics from MathWorks;Just click on the Link below to check it out
    </p>
    <p>
      Link:  
      <a href="https://www.mathworks.com/help/matlab/getting-started-with-matlab.html?s_tid=CRUX_lftnav" className='text-info'>MathWorks.com</a>
      </p>  
    
  </div>
       </p>
          <h3>
            
          </h3>
        </div>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
       Mathlab Full Course
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/7f50sQYjNRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/qGiKv3-02vw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
      </div>
    </div>
  </div>
 
</div>

{/* Cirduit theory */}
<div  >
       <p className='text-white'>
       <div className='container text-light my-3 pb-3'>
    <h5>
<u>
    4. Electrical Circuit Theory <span className='text-warning'>(EEE 321)</span>

</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbooks are titled <u><i>Network Analysis And Synthesis-Mc Graw Hill India (2014)</i></u> by Ghosh and A. Chakraborty  <span>And</span> <u><i>Circuit Theory and Networks Analysis and Synthesis-McGraw-Hill Education (2018)</i></u>Ravish R. Singh
</p>
<p>
  Click on the Link below to download the pdf
</p>
<p>
  Link: <a href="https://compress-pdf.obar.info/#google_vignette" target='_blank' className='text-info'> Network Analysis And Synthesis-Mc Graw Hill India (2014)</a>
  </p>
  <p>
  Link: <a href="https://compress-pdf.obar.info/" target='_blank' className='text-info'> Circuit Theory and Networks Analysis and Synthesis-McGraw-Hill Education (2018)</a>
  </p>   
    
  </div>
       </p>
          <h3>
            
          </h3>
        </div>
        <div class="accordion " id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
      Electrical Circuit Theory
      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/QlM1dC2gBLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/pn777Ya0OHk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZfTWdlb2BYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/rzmW9fMBcVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/bRXQfZMzVJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/PWDNPFN6zTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/jWbWWoCY5n8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/LnqVN4ebOxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/7np1d5ez1hs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/5_mmZNkn9J0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
      </div>
    </div>
  </div>
 
</div>

{/* Electromagnetic */}

<div>
       <p className='text-white'>
       <div className='container text-light my-3 pb-3'>
    <h5>
<u>
    5. Electromagnetic fields and WavesAnd Applications <span className='text-warning'>(EEE 323)</span>:

</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbook is title <u><i>ELECTROMAGNETIC_FIELDS_AND_WAVES AND APPPLICATIONS</i></u> by Isreal Esan OWOLABI,Ph.D,Adedayo Olukayode OJO,M.Sc,Adedayo AJIBADE,M.Sc
</p>
<p>
  Click on the Link below to download the pdf
</p>
<p>
  Link: <a href="https://portal.abuad.edu.ng/lecturer/documents/1585933303ELECTROMAGNETIC_FIELDS_AND_WAVES3.pdf" className='text-info'>ELECTROMAGNETIC_FIELDS_AND_WAVES</a>
  </p>  

 
    
  </div>
       </p>
         
        </div>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
      Electromagnetic fields and Waves
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/kCp5yYjo9zE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/eCCbUdnj0j4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/q1eor6oIuUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/meWRs2khg2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
      </div>
    </div>
  </div>
 
</div>

{/* Electrical Electronics */}

<div>
       <p className='text-white'>
       <div className='container text-light my-3 pb-3'>
    <h5>
<u>
    6. Electronic Circuits I <span className='text-warning'>(EEE 313)</span>:

</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbook is title <u><i>Fundamentals_of_Electric_Circuits_6th_Sadiku</i></u> by  Charles K. Alexander || Mathew N.O Sadiku
</p>
<p>
  Click on the Link below to download the pdf
</p>
<p>
  Link: <a href="https://bank.engzenon.com/tmp/5e7f9acb-39dc-47b3-afd0-4ff1c0feb99b/5bf85097-f60c-4c96-b1cc-4230c0feb99b/Fundamentals_of_Electric_Circuits_6th_Sadiku.pdf" className='text-info'> Fundamentals_of_Electric_Circuits_6th_Sadiku</a>
  </p>  

 
    
  </div>
       </p>
          <h3>
            
          </h3>
        </div>
       <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
      Electronic Circuits
      </button>
    </h2>
    <div id="collapseNine" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/ethnHSgVbHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/g54vURe47gM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/aOKc5_s_8LM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JQBRzsPhw2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/W7YTfLaPWRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/TIYTI8rhaN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
      </div>
    </div>
  </div>
  
</div>

{/* Dr lawal Part */}

<div>
       <p className='text-white'>
       <div className='container text-light my-3 pb-3'>
    <h5>
<u>
    7. Digital Circuit Analysis and Design <span className='text-warning'>(EEE 308)</span>:

</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbook is title <u><i>digital-systems-principles-and-applications-10th-edition</i></u> by Ronald J. Tocci,Neal S. Widmer,Gregory L. Moss
</p>
<p>
  Click on the Link below to download the pdf
</p>
<p>
  Link: <a href="https://eceatglance.files.wordpress.com/2018/07/digital-systems-principles-and-applications-10th-edition-tocci-widmer.pdf" className='text-info'>digital-systems-principles-and-applications-10th-edition</a>
  </p>  

 
    
  </div>
       </p>
         
        </div>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="true" aria-controls="collapseEleven">
      Electromagnetic fields and Waves
      </button>
    </h2>
    <div id="collapseEleven" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/0rLiYpy2CqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/AM0tr8Kyvzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/rsxT4FfRBaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/sJXTo3EZoxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/meWRs2khg2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/AE-27BSbkJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/yPu57aSj9kA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/ChtmE09BSy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/1o0RPZeY8mQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/Bwih7_AT1oI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/DdMcAUlxh1M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/RO5alU6PpSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/FPrcIhqNPVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZayoUTi2tsA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/_F9nAb6m4U4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/Soj8BfhEdy4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/4c6z9RKrC8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/mXoQ4WAQ0qk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/4c6z9RKrC8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/6mf64D0bayE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/56ouFodPZ6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
      </div>
    </div>
  </div>
 
</div>
       </section>
  </section>
    </motion.div>
  )
}

export default Three