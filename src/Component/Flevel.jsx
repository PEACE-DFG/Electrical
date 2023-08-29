import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';


function Flevel() {
    const navigate=useNavigate()
    let user=JSON.parse(localStorage.getItem('users'))
  
    console.log(user)
    function Logout(){
      localStorage.clear()
      navigate('/Registers')
      
    }
  return (
    <motion.div
    initial={{ opacity: 0 }}  
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }} 
    >
                    <div className="wrapper" >
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

            {/* next section */}
            <section style={{backgroundColor:'rgb(0,0,0,0.6)'}}>   
            <section className='container text-light  pb-3'>
        <div>
           <marquee behavior="" className='text-light ' direction="">
        This Page Contains Useful Material Resources For All Courses in 400 level
       </marquee>
       <hr style={{color:'white'}} className='my-2 py-2' />

        </div>
        <div>
       <p className='text-white'>
       <div className='container text-light my-3 pb-3'>
    <h5>
<u>
    1. Introduction to Control Engineering<span className='text-warning'>(EEE 407)</span>:

</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbooks are below:
</p>

<p>
  Click on the Link below to download the pdf
</p>
<p>
  Link: <a href="http://people.disim.univaq.it/~costanzo.manes/EDU_stuff/Feedback%20and%20Control%20System_DiStefano_Schaum_Ch01-09.pdf" className='text-info'>Feedback and Control System_DiStefano_Schaum_RIT.pdf</a>
  </p>
  <p>
  Link: <a href="http://docs.znu.ac.ir/members/pirmohamadi_ali/Control/Katsuhiko%20Ogata%20_%20Modern%20Control%20Engineering%205th%20Edition.pdf" className='text-info'>Modern Control Engineering 5th Edition by katsuhiko Ogata</a>
  </p> 
  <p>
  Link: <a href="https://files.crazt.moe/temp/Modern%20Control%20Systems%2013th.pdf" className='text-info'>Modern Control Systems 13th.pdf by Richard C.Dorf | Robert H. Bishop</a>
  </p>  

  
  </div>
       </p>
         {/* first Accordion */}
         <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Introduction to Control System
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/XMfH2P2Fc6Q?si=OUcChBS6Un8Hi5RF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/DE0hWLdkckg?si=4LpahO80DieOzngD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/8m0VP5_feOY?si=rS8UC7j0dA0ISrzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Euly5rHtex4?si=5Qu89RCmYK1bS33p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
     Laplace Overview
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/O87pL_uS4B0?si=P4R_XV_2-VCxJ6Ep" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/oaKlziuYQek?si=JcHh2u3Xa2CN7CsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/ondVQd-mJ5k?si=TwbCBr7tEMVvbzWu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/OSQpFTEt8Iw?si=YEa9N3H-dB-j1xQt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
    Transfer Function
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/AvaZ_E-nFTk?si=rUSb1hCbLSJHTIbG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/tWQubGjDY48?si=KaizNm7B8FGRiGm1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/yvfpHA_4_bo?si=Y-pWeMSgr9H19OtC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/tnICE28uJto?si=2aaSXiMPbucXCJkj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/9nNSRyLTDNM?si=Hzhhjcv2bbMxo0sU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/kAvFMo6uA14?si=S6RLEUb2zeP8BVWt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/WOyzONYP9D8?si=T3xqeWTt7iq3K3XY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/AZ7_MvANy_Q?si=vZSdooil1lrc6yJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/WOeMqgyJK-A?si=ZCzOIAlwZhlKkgtc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/IRdDcSO_fQw?si=Ikm1Vgf4JiVc0b2q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
    Block diagram and Reduction
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/IqxJpaKuQGo?si=McDih6vkKzh64_Uh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/t_k7oRICmWo?si=iC4DqUjfOPQKQpzG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/iLSb89PK_ec?si=YfBgQGkKREO2PGoH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Aabq8t9EE1M?si=O7mzDaXjDYkBL2jF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/bk5Lmk-mr-I?si=dmhjB7_exWOwvybg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/p8WzG3rM9HY?si=BLTHizV_9r9Q6Arf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/T3AD4rxIJxI?si=1r8vanxf6U1rzTPJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/5dJCEiGrJkE?si=2V-2RdP4P7tFR64V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  
  
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
    Mason Gain Rule
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/10WwDd2QopQ?si=Ceq5KKjuy1Hw_aKy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/k0zeegbCa38?si=kzsvFFpPhgfkJky9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/kYhaqsCxltE?si=etc-aiZF6YPmEXXb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/HXzkI6spMD4?si=SR5Pe1179F1785Cl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/HXzkI6spMD4?si=GGAHqa9WfbDR9o1S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/zy7WFM2Fs5w?si=ASz9ioXB0ST3bY01" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/MTjDqUtaIJo?si=FQ1byxqNuFVPAP63" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/-4JLITSB9oI?si=v6iv8zCHW7BIwCrL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/GEy9V0pQZI8?si=-L0UJ31o4fr6wj9a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/x5BuhkauVsw?si=pQrLiYXVmZUEvoKS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  
  
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
   Stability (Routh Hurwitz Criteria)
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/nzZ19jKm-jk?si=VzPBX0-UvAK2qhbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/cyannwIgg1E?si=XMcDOHmW5u1m4XzD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/eP4Ymo785OI?si=FctX3XfixWdnmfL7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/yg1ZJccfoQE?si=R9g1bqyKdwPw67WH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/S0_Hd5M7aJY?si=TuQA9NwOVF8pAvSb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/A6yoSixJ5eM?si=Dqvj2c-X9xbTQXM9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
   Modelling Electrical and Mechanical Systems
      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/r8vfbfjJAmU?si=Ff-M754LGy1d97nZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/O8SBXQbicro?si=xSxWEMfnJm-tnzPu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/glUrzUxbepE?si=V-MO244W9bpYJKjk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ld3tHMCLEaE?si=d3QTqpnmYOetJd-a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Av86LcNuiMQ?si=MQHaV8p7ASWXkAfD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/7llRzXBHQPA?si=eTnLOQtyTrvdbHOz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
  <div class="row g-1">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/wG-JjZNr42E?si=wh1zoOOYp7-5L-nu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/pW8jeS5qKyI?si=J-4B8ad0tEJMqmfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
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

export default Flevel