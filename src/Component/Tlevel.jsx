import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../../public/lib.mp4'
import { motion } from 'framer-motion'

function Tlevel() {
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
   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABBVBMVEX///9QUHhk2IUAZAAyMlBBQW7c3ORNTXYAXQBd14BKSnRFRXHMzNQcHEIAWwBMTHVm3Yf19fdh14M9PWxY1n0skDtqaoto3opycpGCgp3IyNP5+fvl5eukpLdVVXxPSHcwKE45n0yLi6Pd3eSnp7lPRXc7O1wwKU4uHUzf9uW8vMl2dpSwsMCZma5+fplgYIPR8tpt2oye5bGv6r7w+/NiyYNVeHvG8NFXyHQkhDDq+e5HR2u77cmD35w8VVpUpXOT46lRWXlUcHtWgHxLf3SSvqhTZXpZkX1cqIBbnH9To3NBZ19Mj2szOFFGsF1JgmdDb2E+XFw4RVdGeWUtLWMXAD633MTVOvoQAAAIlUlEQVR4nO2d+3eaSBSAg4IIuKEgQWN8JCZpEmNqTJrm3bptt9vubtN9//9/yoJEBRl53TsydOf7sTk9h+/cO/fODDO4scHhcDgcDofD4XA4HA6Hw+FwOBwOh/M/w6gMOv1TezQa2af9zqBi5P1AqBiDvlyXNFXVZRddVTWpLvQH34mlMWw6ckIYR7M5bOf9eGBq27KmE/Q8dE3druX9iCBaNjF6wUiOiutYsSU5xs9FluxK3o+aCaMvrU7PpWSt9wtYdFrduPwM5Gq3lfcDp6VfT5Kg/lTt5/3IqWjbWio/F80uUOeodJOOQD+6UJiCU9PSZegMWStI32jVM/m51AtRb2rph+ACrQCK+2q2FPWQ1f28BeIwQIKuIuu9307T50modt4K0ZxBBqGHdpa3RBQ1CSwoCBLDPWOnCxuEHnJ3J2+RlSDkqAu7edrGyFEXidUZ6itoHZ2hvspbhUwFJ0ddNDbn4NtYIXSCuJ23DAm0UeiisTgSz/BC6ASRxXKKKego5q0TpoWZpE7DYG8Z1UeOIXsbUxjzNT9y3kLLIDZDD+Za4gG64UHeSkugzdhmsDZz2xmhj8MRW2uodpYt4Gh0tqY1Fdxu6CKxtes2wC40TqkZ5C0VYEjBcJi3VADUabeH2slbKgANQ7aWF8iz0qkhWzNTbpjFkK0s/f7HYQffUGOrln7//RB5D2NqyNY+BupWogdjW/tGF92wy9jLYBt9fcjau2D0hshYw6ewfGJs8eSUGnRDtgqNA/JGjTzKWyhEBzeIjM1oXNrZT7ORqDOXpMj9grle4TLAnNZIrFVSF5zDNB6MHqlBfHXB3EsLD0PACqIsMDYnnYEWREZD6IA0EuVu3iIrAZzw9sPgO/w5KIeG2Dwu9IyBkKcya0vfIKCD+h4sH6B16UBnNhJ7U+4lXsGiqDH2+p5EE1Jt1Gbej58AA3AhQbWZrjIzjFFWRXVUCEFnlZHh9qGLZjO5oiDSz1JRi3WLdJjykqzT6OtsvYmJpSKky1Sty3ijD7OT/LK6IOhSvzhDcEHCDw4U+JMDGxuDboIbwbLUZXHbKSmD2MWGPCqynzMaKzHbqLJdK+II9DBqZ7YUm6ayJNlnrYLMZfy0h6eClPBOsKxKwmmxvsVjDGwt4rs7JFRNswvzVaXadnxuktC1er8Abd8Y2hJg9STZQ7YLj9FJ0gGjkLVuh91kNc7qQD/PUWLUcedARdvV11nM1cEI8zW3xtxMp91MOMtOiiw1mWqQnRQrpaSodXZ2TiuoCbpAY2VR1Uk5fUmOzsSLRCPjxloytGbujaOm459/9qMKOU/kDhBafCSyWs81UzPtiyaW6x0eHv74/sPHn66vz0/u8vCjOQTVnvDp53dXL1wUa8p48nCyXsF25vcTsfTk959du5If01Ss8cX5GgUFWoI94cvVkt3c0pG8fL0mQZlSF+x1P5demES/Z0nlYh2O+zqdItqTv5TI4QsEkn4c2zIlwTdXcX5TlPE1XUEj0+c7Y5EPP0flZyCO1oSqIJ0q2vuULICzMFLsHaDDCKsF38SOwKUwUsvUPpVGf/gxld9U8YGO4AGVqdrhh7SCDnQUUb6NGKKXOoLUFNtoJ4EDgm8S1tCQIv5YpFJl5E/Z/Nzuj11RwSfziBymaRNLimPc6U0F92bMTPCXzIJOX5ygGqJ/aMdF+xUgiDwUka9vecjiFUTQGYp4gvtUBuHub6AQOnl6gWZIpY6+/ArzcxWx6inq3a254DGkzDwbTpAMafT6e1EEh9BRxNmJQ//onIuYbRSaZiNgiDIS8S5u+XgpHqUvpI2n23L59sbnaJoYhjQ6xb149EfqEDa2quVyuVq+8f0bRk80aNRRUdxNXWc8QRffZN18ZDOEL0UxdbdfCG4++fIUoetTKTOi+JYQwsaNQyP870HBcnXPbwjeC6fwUT03hEffCIZb5Wq1vEVU9AmWq0++PyiXUEMKU27dCeHuu5Bh43YqUb0lrIn9guWqv9SAByLCnbQQ7ig8Dg/Dm81ngbBiUNCfpM4yEWhI4Wtl7igUj8MhnFtUb1+s+pP716U0NmHTGoPCFrcbQvErIUkXEsEoRgqWLNjsm8KnvKYhJPT7xl6VrNjY2owQhPb8Jn4M76eGv4dL6Y0/UrcJI+gUU9C+okFh2TRNUlKzaOz5YzUbi3GCwHZBK0nJCwt/ns4SNVYQaGhTSlJxl9Twl6NohsYg4f/ADA1KzXDFlCYUxUZ8BIHjsEUrSYmVhhDFvXhBmCGFdn//bLhqdRiIYjmBIKxboH9Pb24o/rlqdRiIYgJBUMdvU9m98AjP2iIVVwuCNqNovDAUZ4arF8DBRI0TBM28Kazu5blhePW0OooRgrDVE+LvOM3QZ4bkhkiOYpQgqB3i/7DDotCQdzHIUYwULFmAXQwa/X5hGL0T5YtitCBoJ4rCDzvMSylxG4MYxRhB0DCktAclRs9qlhQ3owVh/Z7G64qFYeyGaeOpvLlZfooWLFkAQRqfW/cbxr+ZaSirNk/nwN7MnNLao5lN3GKePgmwV6Q0Dif4DaOafkLMCURwA98vaLh69r2mEG5QebXtN4SfVICFcIfGGaGAofh1DDO0YKeiDPqGu3/BTgwBzyeuwRBWbBToOxkKv3oQmJd6ZM9TswQ9ubcWw6O3mQ0hiwqKhvpyDDMPRYRDwlQM5WVD8ThqKRwhCH71S8lQCBmKx1m6ooVxUqj9t0SB3R9C/PNNSXvWGyOC7neQKLBfI9D6N50itesWFDkZK8kFldIaL1ui8XpiJQ2j9bimi5bYXCuJwqgUMEPnXCixw9FUJgUNoMddtKOpKJM13+nG5+6iZJlkSdNSLgrvN+V8oliKGdB0b6srj5Rvx66V88vHsWlZyhTLMsePl0XsDzHcnZw/XDo8XJ/cFbq4cDgcDofD4XA4HA6Hw+FwOBz2+Q9J7uvI5BPT5wAAAABJRU5ErkJggg==" className='img-fluid' style={{width:"32px"}} alt="" />
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
{/* Next section */}
<section style={{backgroundColor:'rgb(0,0,0,0.6)'}}>
<section  className=' container pb-3'>
  <div>
       <marquee behavior="" className='text-light' direction="">
        This Page Contains Useful Material Resources For All Courses in 200 level
       </marquee>
       <hr style={{color:'white'}} className='my-2 py-2' />
  </div>
  <div className='container text-light my-3 pb-3'>
    <h5>
<u>
    1.  Simplified Applied Electricity <span className='text-warning'>(EEE 201)</span>:

</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbook is title <u><i>SIMPLIFIED APPLIED ELECTRICITY 1</i></u> by Hammed Oyebamiji Lasisi (Ph.D.). The softcopy is not available at the moment but purchasal of the hard copy can be done within the school premises
</p>
    
  </div>
  <div className='text-light text-center py-2'>
       <h6>
        <u>
    Useful Youtube Videos Are Below
          
        </u>
       </h6>
  </div>
  <div className='container-fluid'>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Semi-Conductor
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row g-1">
    <div class="col-md-6 order-last">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/ethnHSgVbHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/ErcH_OuCaNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe> 
    </div><div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/mc979OhitAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
    </div>
    <div class="col-md-6 order-first">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/z3MlkNUuq9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
    </div>
  </div>
</div>
        {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Electrostatic
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/kCp5yYjo9zE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/V9RLc9EX1so" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  
  </div>
</div>
        {/* <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Resistor
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  {/* $$$$$$$$$$$$$$$ */}
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Capacitor
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        Inductor
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgKoRUBX0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/-zzqfChgPOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
       Diodes
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Fwj_d3uO5g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgKoRUBX0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/a4ttjOEdlc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-zzqfChgPOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
       Transistors
      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/AcxDiesy-nI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Fwj_d3uO5g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgKoRUBX0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/J4oO7PT_nzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/a4ttjOEdlc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-zzqfChgPOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
       Short Circuit
      </button>
    </h2>
    <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md-12 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/v5RJf_V0LYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AcxDiesy-nI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Fwj_d3uO5g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgKoRUBX0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
       Ohms Law
      </button>
    </h2>
    <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/_rSHqvjDksg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AcxDiesy-nI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Fwj_d3uO5g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgKoRUBX0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/r-SCyD7f_zI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/J4oO7PT_nzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/a4ttjOEdlc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-zzqfChgPOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
       Kirchoffs Laws
      </button>
    </h2>
    <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/2Zu3ppq3n8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/_rSHqvjDksg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AcxDiesy-nI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Fwj_d3uO5g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgKoRUBX0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/P3QX1PQnoo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/r-SCyD7f_zI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/J4oO7PT_nzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/a4ttjOEdlc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-zzqfChgPOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingEleven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
       Superposition Theorems
      </button>
    </h2>
    <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZJ8zD8m-B1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/2Zu3ppq3n8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/_rSHqvjDksg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AcxDiesy-nI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Fwj_d3uO5g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgKoRUBX0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/vd73I49aFuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/P3QX1PQnoo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/r-SCyD7f_zI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/J4oO7PT_nzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/a4ttjOEdlc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-zzqfChgPOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwelve">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
       Thervenin Theorems
      </button>
    </h2>
    <div id="collapseTwelve" class="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/zTDgziJC-q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZJ8zD8m-B1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/2Zu3ppq3n8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/_rSHqvjDksg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AcxDiesy-nI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Fwj_d3uO5g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgKoRUBX0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/veAFVTIpKyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/vd73I49aFuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/P3QX1PQnoo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/r-SCyD7f_zI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/J4oO7PT_nzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/a4ttjOEdlc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-zzqfChgPOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThirteen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
       Norton's Theorems
      </button>
    </h2>
    <div id="collapseThirteen" class="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/-kkvqr1wSwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zTDgziJC-q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZJ8zD8m-B1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/2Zu3ppq3n8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/_rSHqvjDksg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AcxDiesy-nI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Fwj_d3uO5g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgKoRUBX0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/RkSN_JxBGt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/veAFVTIpKyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/vd73I49aFuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/P3QX1PQnoo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/r-SCyD7f_zI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/J4oO7PT_nzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/a4ttjOEdlc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-zzqfChgPOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
</div>
  </div>
  {/* Next Section */}
<section>
<div className='container text-light mt-5'>
<h5>
<u>
    2.  Engineering Mechanics <span className='text-warning'>(EEE 203)</span>:

</u>


    </h5>
    <p>
  The recommended Textbook is Engineering Mechanics. Volume 1. Statics. Seventh Edition by  J. L. Meriam. L. G. Kraige
</p>
<p>
  <u>
    Click on the Link below to download the pdf 
  </u>
</p>
{/* <p> */}
{/* <i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i><i class="fa-solid fa-circle-down fa-fade text-warning"></i> */}
{/* </p> */}
<p >
<h5>
Link: <a href="https://www.hzu.edu.in/engineering/engineering-mechanics-statics-7th-edition-j-l-meriam-l-g-kraige.pdf" className='text-info' target='_blank'>Engineering Mechanics. Volume 1. Statics. Seventh Edition by  J. L. Meriam. L. G. Kraige</a>
  
  </h5></p>

  <p>
    To discover more helpful videos on Mechanics , Click on this Link: <a className='text-info' href="https://www.youtube.com/@FinalAnswer/videos"> Solved Mechanics by Final Answer</a>
  </p>
</div>
<div className='text-light text-center py-2'>
       <h6>
        <u>
    Useful Youtube Videos Are Below
          
        </u>
       </h6>
  </div>
  <div className='container-fluid'>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Force Vectors
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row g-4">
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/-Uuf5V4Id1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/ethnHSgVbHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/mz7gPpIL0Gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/ErcH_OuCaNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  */}
    </div><div class="col-md-6">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NrL5d-2CabQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/NrL5d-2CabQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/mc979OhitAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/mz7gPpIL0Gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/z3MlkNUuq9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/mz7gPpIL0Gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/z3MlkNUuq9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/X9g4G1eBHCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/mz7gPpIL0Gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/z3MlkNUuq9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/EzquIxEoHRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/X9g4G1eBHCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/mz7gPpIL0Gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/z3MlkNUuq9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/igmrd7mYkfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* {/iframe width="100%" height="315" src="https://www.youtube.com/embed/z3MlkNUuq9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/RfK8G20PmXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/igmrd7mYkfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* {/iframe width="100%" height="315" src="https://www.youtube.com/embed/z3MlkNUuq9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */} 
    </div>
    <div class="col-md-6 ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/l3VbZxGe9kE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/RfK8G20PmXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/igmrd7mYkfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* {/iframe width="100%" height="315" src="https://www.youtube.com/embed/z3MlkNUuq9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */} 
    </div>
  </div>
</div>
        {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Moment and Couple
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/7p8kEo3cAzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/kCp5yYjo9zE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/uV4QDXd0ARM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/V9RLc9EX1so" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/QNNnPZ68STI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/7p8kEo3cAzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/kCp5yYjo9zE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/uV4QDXd0ARM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/uV4QDXd0ARM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/V9RLc9EX1so" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/OffvP-cpMnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/QNNnPZ68STI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/7p8kEo3cAzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/kCp5yYjo9zE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/-66H9QYHkDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/uV4QDXd0ARM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/uV4QDXd0ARM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/V9RLc9EX1so" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/kxnyG3ucDQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/OffvP-cpMnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/QNNnPZ68STI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/7p8kEo3cAzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/kCp5yYjo9zE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JIJDcA3vIvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-66H9QYHkDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/uV4QDXd0ARM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/uV4QDXd0ARM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/V9RLc9EX1so" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/awXcpKrRfnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/kxnyG3ucDQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/OffvP-cpMnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/QNNnPZ68STI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/7p8kEo3cAzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/kCp5yYjo9zE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/u4kbw-1H8KY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/JIJDcA3vIvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-66H9QYHkDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/uV4QDXd0ARM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/uV4QDXd0ARM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/V9RLc9EX1so" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Equilibrium
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/b_JMxiQCRaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/k5fwq5RizWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/los_76VH4go" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/b_JMxiQCRaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/30aVefEY5kg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/k5fwq5RizWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/342FLin6-Kg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/los_76VH4go" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/b_JMxiQCRaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/cS8jZccGVTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/30aVefEY5kg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/k5fwq5RizWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/utAIWuXvlcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/342FLin6-Kg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/los_76VH4go" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/b_JMxiQCRaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/T9u1p0_pVbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/cS8jZccGVTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/30aVefEY5kg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/k5fwq5RizWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  {/* $$$$$$$$$$$$$$$ */}
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Virtual Works
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/q-tpR-gwVfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/a3xvkfaiGY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/2WYaCW4ugJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/a3xvkfaiGY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/q-tpR-gwVfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/pP3IUaDx_aQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/a3xvkfaiGY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/qjmzrEgFZ3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/2WYaCW4ugJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/a3xvkfaiGY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/q-tpR-gwVfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/ilgwG4pRp58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/pP3IUaDx_aQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/a3xvkfaiGY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        Centroid
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/GCUCp-oMO0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgKoRUBX0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/E-vwXiO9Cm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/GCUCp-oMO0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-zzqfChgPOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/nqMLFwzWST4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/GCUCp-oMO0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgKoRUBX0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/mrdvzuIDwOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/E-vwXiO9Cm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/GCUCp-oMO0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-zzqfChgPOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
       Structural Analysis
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="container">
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/RF7U7AOLBN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Fwj_d3uO5g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgKoRUBX0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/9V-V3XAqN-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/a4ttjOEdlc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-zzqfChgPOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/p0-CV2lZL7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/RF7U7AOLBN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Fwj_d3uO5g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgKoRUBX0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/FK5RrWlS0hQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/9V-V3XAqN-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/a4ttjOEdlc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-zzqfChgPOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
  <div class="row">
    <div class="col-md ">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/99mmTS89Szo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/p0-CV2lZL7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/RF7U7AOLBN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Fwj_d3uO5g8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jgKoRUBX0Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="550" height="315" src="https://www.youtube.com/embed/7mdc-lRrW1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
    <div class="col-md">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/6xfMMx8yYrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/FK5RrWlS0hQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/9V-V3XAqN-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/a4ttjOEdlc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-zzqfChgPOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zaT4JorVUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    {/* <iframe width="540" height="315" src="https://www.youtube.com/embed/dEuBykX5_B4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    </div>
  
  </div>
</div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
</div>
  </div>
</section>
<section>
<div className='container text-light my-3 pb-3'>
    <h5>
<u>
    3.  Structured Programming <span className='text-warning'>(CSC 201)</span>:

</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbook is title <u><i>Learn C Programming (c programming language) by tutorial point simplifylearning</i></u> 
</p>
<p>
  Click on the Link below to download the pdf
</p>
<p>
  Link: <a href="https://www.tutorialspoint.com/cprogramming/cprogramming_tutorial.pdf" className='text-info'> Learn C Programming by tutorial point simplifylearning</a>
  </p>  

  <p>
    You can also check out breakdown of All topics from w3school.com;Just click on the Link below to check it out
    </p>
    <p>
      Link:  
      <a href="https://www.w3schools.com/c/index.php" className='text-info'>w3schools.com</a>
      </p>  
  </div>

  <section className='mt-3 container-fluid'>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        C Programming Full course
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
        </div>
        {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>

  
</div>
  </section>
</section>
{/* French section */}
<section>
<div className='container text-light my-3 pb-3'>
    <h5>
<u>
    4.  Basic French <span className='text-warning'>(GNS 211)</span>:

</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbook is title <u><i>Beginning French for the Utterly Confused by A. Sebastian Mercado,MA</i></u> 
</p>
<p>
  Click on the Link below to download the pdf
</p>
<p>
  Link: <a href="https://www.ircambridge.com/books/french-for-beginners.pdf" className='text-info'>Beginning French for the Utterly Confused</a>
  </p>  

  </div>

  <section className='mt-3 container-fluid'>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFourteen">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="true" aria-controls="collapseFourteen">
        Basic French Full course
      </button>
    </h2>
    <div id="collapseFourteen" class="accordion-collapse collapse show" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div className="row">
          <div className="col-md">
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
          <div className="col-md">
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
        </div>
        {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>

  
</div>
  </section>
</section>
{/* Statistics */}
<section>
<div className='container text-light my-3 pb-3'>
    <h5>
<u>
    5.  Statistics for Physical Sciences and Engineering <span className='text-warning'>(STA 221)</span>:

</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbook is title <u><i>Applied Statistics and Probability for Engineers" by Douglas C. Montgomery and George C. Runger.</i></u> 
</p>
<p>
  Click on the Link below to download the pdf
</p>
<p>
  Link: <a href="https://library.uoh.edu.iq/admin/ebooks/76469-applied-statistics-&-probability-for-engineers-3rd-ed.---d.-montgomery,-g.-runger-(2003)-ww.pdf" className='text-info'>Applied Statistics and Probability for Engineers" by Douglas C. Montgomery and George C. Runger.</a>
  </p>  

  </div>
  <section className='mt-3 container-fluid'>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFifteen">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="true" aria-controls="collapseFifteen">
        Statistics Full Course
      </button>
    </h2>
    <div id="collapseFifteen" class="accordion-collapse collapse show" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/WUjsSB7E-ko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/pNMUlsjgNNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/94AmzeR9n2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/WUjsSB7E-ko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/SkidyDQuupA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/pNMUlsjgNNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        <div className="row">
          <div className="col-md">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/0T-CaQCiSf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/94AmzeR9n2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/WUjsSB7E-ko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/d6G-mAKQ_uo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/SkidyDQuupA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/pNMUlsjgNNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        <div className="row">
          <div className="col-md">
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/0T-CaQCiSf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/lWAdPyvm400" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/94AmzeR9n2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/WUjsSB7E-ko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/aHwWaohtsRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/d6G-mAKQ_uo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/SkidyDQuupA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/pNMUlsjgNNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        <div className="row">
          <div className="col-md">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/zJ8e_wAWUzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/0T-CaQCiSf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/lWAdPyvm400" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/94AmzeR9n2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/WUjsSB7E-ko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/DlwOTOydeyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/aHwWaohtsRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/d6G-mAKQ_uo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/SkidyDQuupA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/pNMUlsjgNNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        <div className="row">
          <div className="col-md">
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zJ8e_wAWUzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/wiYJWyfdGg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/0T-CaQCiSf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/lWAdPyvm400" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/94AmzeR9n2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/WUjsSB7E-ko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/-FtlH4svqx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/DlwOTOydeyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/aHwWaohtsRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/d6G-mAKQ_uo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/SkidyDQuupA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/pNMUlsjgNNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/11c9cs6WpJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zJ8e_wAWUzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/wiYJWyfdGg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/0T-CaQCiSf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/lWAdPyvm400" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/94AmzeR9n2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/WUjsSB7E-ko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ou2QGSJVd0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-FtlH4svqx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/DlwOTOydeyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/aHwWaohtsRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/d6G-mAKQ_uo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/SkidyDQuupA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/pNMUlsjgNNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        <div className="row">
          <div className="col-md">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/aztcS-3MwH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/11c9cs6WpJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zJ8e_wAWUzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/wiYJWyfdGg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/0T-CaQCiSf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/lWAdPyvm400" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/94AmzeR9n2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/WUjsSB7E-ko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/P8hT5nDai6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ou2QGSJVd0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-FtlH4svqx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/DlwOTOydeyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/aHwWaohtsRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/d6G-mAKQ_uo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/SkidyDQuupA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/pNMUlsjgNNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        <div className="row">
          <div className="col-md">
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/aztcS-3MwH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/dXB3cUGnaxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>

          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/11c9cs6WpJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zJ8e_wAWUzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/wiYJWyfdGg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/0T-CaQCiSf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/lWAdPyvm400" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/94AmzeR9n2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/WUjsSB7E-ko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/HKDqlYSLt68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/P8hT5nDai6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ou2QGSJVd0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-FtlH4svqx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/DlwOTOydeyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/aHwWaohtsRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/d6G-mAKQ_uo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/SkidyDQuupA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/pNMUlsjgNNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        <div className="row">
          <div className="col-md">
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/aztcS-3MwH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/dXB3cUGnaxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/zjHfAhcU6kE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/11c9cs6WpJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/zJ8e_wAWUzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/wiYJWyfdGg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/0T-CaQCiSf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/lWAdPyvm400" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/94AmzeR9n2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/WUjsSB7E-ko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/HKDqlYSLt68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Uk98hiMQgN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/P8hT5nDai6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ou2QGSJVd0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-FtlH4svqx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/DlwOTOydeyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/aHwWaohtsRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/d6G-mAKQ_uo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/SkidyDQuupA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/pNMUlsjgNNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>

  
</div>
  </section>
</section>
<section className='container-fluid'>
<div className='container text-light my-3 pb-3'>
    <h5>
<u>
    6. Fundamental Of Electromagnetic Induction, Electrical Machines & Digital Electronics[Applied Electricity II] <span className='text-warning'>(EEE 202)</span>:

</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbook is title <u><i>Fundamental Of Electromagnetic Induction, Electrical Machines & Digital Electronics[Applied Electricity II]</i></u> by Hammed Oyebamiji Lasisi (Ph.D.). The softcopy is not available at the moment but purchasal of the hard copy can be done within the school premises
</p>
    
  </div>
  <div className='text-light text-center py-2'>
       <h6>
        <u>
    Useful Youtube Videos Are Below
          
        </u>
       </h6>
  </div>
  {/* acordion section */}
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSixteen">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="true" aria-controls="collapseSixteen">
        ALTERNATING CURRENT CIRCUIT
      </button>
    </h2>
    <div id="collapseSixteen" class="accordion-collapse collapse show" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div className="row">
          <div className="col-md">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/tcP9c6SnGQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/ERIToctYUcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        <div className="row">
          <div className="col-md">
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/tcP9c6SnGQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ybz9ahH4GCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/MhfIZpDA3aA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/ERIToctYUcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
       
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwentyOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyOne" aria-expanded="false" aria-controls="collapseTwo">
      ELECTROMAGNETIC INDUCTION
      </button>
    </h2>
    <div id="collapseTwentyOne" class="accordion-collapse collapse" aria-labelledby="headingTwentyOne" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div className="row">
          <div className="col-md">
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/tcP9c6SnGQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/jz92oOkJFNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/LDOa7UdfcMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/ERIToctYUcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/gMn0MDl4vkc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/tcP9c6SnGQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ybz9ahH4GCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/9UVu7DvaNMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/MhfIZpDA3aA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/ERIToctYUcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
       
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwentyTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyTwo" aria-expanded="false" aria-controls="collapseTwentyTwo">
        ELECTRICAL MACHINE
      </button>
    </h2>
    <div id="collapseTwentyTwo" class="accordion-collapse collapse" aria-labelledby="headingTwentyTwo" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/nscqJxCIEHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/tcP9c6SnGQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jz92oOkJFNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/H1aKEcM2YOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/LDOa7UdfcMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/ERIToctYUcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/Rx_Zn_1eJBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/gMn0MDl4vkc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/tcP9c6SnGQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ybz9ahH4GCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/U8IOOdwEGbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/9UVu7DvaNMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/MhfIZpDA3aA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/ERIToctYUcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
       
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* @############# */}
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwentyThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyThree" aria-expanded="false" aria-controls="collapseTwentyThree">
        TRANSFORMER
      </button>
    </h2>
    <div id="collapseTwentyThree" class="accordion-collapse collapse" aria-labelledby="headingTwentyThree" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/9hBmgdGjt1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/nscqJxCIEHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/tcP9c6SnGQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jz92oOkJFNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/-j3W_RpiWoo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/H1aKEcM2YOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/LDOa7UdfcMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/ERIToctYUcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y4FLaqdNaTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Rx_Zn_1eJBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/gMn0MDl4vkc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/tcP9c6SnGQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ybz9ahH4GCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/IKx5yHPn3V8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/U8IOOdwEGbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/9UVu7DvaNMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/MhfIZpDA3aA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/ERIToctYUcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
       
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* %%%%%%%%%%%%%%%% */}
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwentyFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyFive" aria-expanded="false" aria-controls="collapseTwentyFive">
        DIGITAL ELECTRONICS
      </button>
    </h2>
    <div id="collapseTwentyFive" class="accordion-collapse collapse" aria-labelledby="headingTwentyFive" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/gI-qXk7XojA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/9hBmgdGjt1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/nscqJxCIEHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/tcP9c6SnGQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jz92oOkJFNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/JQBRzsPhw2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/-j3W_RpiWoo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/H1aKEcM2YOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/LDOa7UdfcMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/ERIToctYUcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
        <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/RO5alU6PpSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y4FLaqdNaTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Rx_Zn_1eJBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/gMn0MDl4vkc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/tcP9c6SnGQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ybz9ahH4GCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/FFDMzbrEXaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/IKx5yHPn3V8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/U8IOOdwEGbM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/9UVu7DvaNMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/MhfIZpDA3aA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/ERIToctYUcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
       
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
{/* dynamics */}
<section className='container-fluid'>
<div className='container text-light my-3 pb-3'>
    <h5>
<u>
    7. ENGINEERING MECHANICS II(DYNAMICS) 2 Units.
</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbook is title <i>"Engineering Mechanics: Dynamics" by Russell C. Hibbeler.</i>
</p>
<p>
  Click on the Link below to download the pdf
</p>
<p>
  Link: <a href="https://construction.gtu.ge/wp-content/uploads/2018/11/engineering_mechanics_-_dynamics__rc_hibbeler.pdf" className='text-info'>"Engineering Mechanics: Dynamics" by Russell C. Hibbeler.</a>
  </p>  
    
  </div>
  <div className='text-light text-center py-2'>
       <h6>
        <u>
    Useful Youtube Videos Are Below
          
        </u>
       </h6>
  </div>
  {/* acordion section */}
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSixteen">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="true" aria-controls="collapseSixteen">
       Kinetics
      </button>
    </h2>
    <div id="collapseSixteen" class="accordion-collapse collapse show" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div className="row">
          <div className="col-md">
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/tcP9c6SnGQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      <iframe width="100" height="315" src="https://www.youtube.com/embed/ulXdXTkIkAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/0fpDALtkKus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/ERIToctYUcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/87SH2Cn0s9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KDctLHs6iM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwentyOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyOne" aria-expanded="false" aria-controls="collapseTwo">
      Rectilinear Motion
      </button>
    </h2>
    <div id="collapseTwentyOne" class="accordion-collapse collapse" aria-labelledby="headingTwentyOne" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/V7WOSxvkagc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/tcP9c6SnGQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jz92oOkJFNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/AdfwQXJ0ZVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/LBmET4sH460" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwentyTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyTwo" aria-expanded="false" aria-controls="collapseTwentyTwo">
        Relative Motion
      </button>
    </h2>
    <div id="collapseTwentyTwo" class="accordion-collapse collapse" aria-labelledby="headingTwentyTwo" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/_39hCnqbNXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/pygnrS75HLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* @############# */}
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwentyThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyThree" aria-expanded="false" aria-controls="collapseTwentyThree">
      Rectangular curvilinear Motion
      </button>
    </h2>
    <div id="collapseTwentyThree" class="accordion-collapse collapse" aria-labelledby="headingTwentyThree" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/hwHy4Dewc7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/9hBmgdGjt1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
  
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/j2TmanuHLvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  {/* %%%%%%%%%%%%%%%% */}
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwentyFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyFive" aria-expanded="false" aria-controls="collapseTwentyFive">
      Projectile Motion
      </button>
    </h2>
    <div id="collapseTwentyFive" class="accordion-collapse collapse" aria-labelledby="headingTwentyFive" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/8NLzuURxFwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/gI-qXk7XojA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/tfItlGfPHyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/JQBRzsPhw2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        
          </div>
        </div>
       
      </div>
    </div>
  </div>
  {/* %%%%%%%%%%%%%%%%% */}
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwentyFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyFive" aria-expanded="false" aria-controls="collapseTwentyFive">
      Normal and Tangential Motion 
      </button>
    </h2>
    <div id="collapseTwentyFive" class="accordion-collapse collapse" aria-labelledby="headingTwentyFive" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/jCwgcwFp3zQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/8NLzuURxFwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/gI-qXk7XojA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/Q6xjR0lwaDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/tfItlGfPHyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/JQBRzsPhw2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        
          </div>
        </div>
       
      </div>
    </div>
  </div>
  {/* (*&^%$#@) */}
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwentyFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyFive" aria-expanded="false" aria-controls="collapseTwentyFive">
      Polar Coordinates and Cylindrical Coordinates & Work energy and power
      </button>
    </h2>
    <div id="collapseTwentyFive" class="accordion-collapse collapse" aria-labelledby="headingTwentyFive" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/FLQXW6G9P8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jCwgcwFp3zQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/8NLzuURxFwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/gI-qXk7XojA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/_MR1Dp8-F8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Q6xjR0lwaDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/tfItlGfPHyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/JQBRzsPhw2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        
          </div>
        </div>
       
      </div>
    </div>
  </div>
  {/* -098765432456789098765432 */}
   <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwentyFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyFive" aria-expanded="false" aria-controls="collapseTwentyFive">
      second newton's law of motion &  Impulse and Momentum
      </button>
    </h2>
    <div id="collapseTwentyFive" class="accordion-collapse collapse" aria-labelledby="headingTwentyFive" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/ou9YMWlJgkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/FLQXW6G9P8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/jCwgcwFp3zQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/8NLzuURxFwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/gI-qXk7XojA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/E13h1E_Pc00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/_MR1Dp8-F8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Q6xjR0lwaDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/tfItlGfPHyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/JQBRzsPhw2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        
          </div>
        </div>
        <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/1WIECGg71WY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/KqxzLu8Tyno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/M2xnGcaaAi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/1WIECGg71WY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y-QOfc2XqOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/KqxzLu8Tyno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
        </div>
       
      </div>
    </div>
  </div>
</div>
</section>
<section className='container-fluid'>
<div className='container text-light my-3 pb-3'>
    <h5>
<u>
    7. BASIC THERMODYNAMICS  3 Units.
</u>

    </h5>
    <p style={{textAlign:'justify'}}>
  The recommended Textbook is title <i>Yunus A. Cengel  "Thermodynamics: An Engineering Approach."</i>
</p>
<p>
  Click on the Link below to download the pdf
</p>
<p>
  Link: <a href="https://netedu.xauat.edu.cn/sykc/gcrlx/content/jcjs/Engineering%20Thermodynamics.pdf" className='text-info'>Yunus A. Cengel  "Thermodynamics: An Engineering Approach."</a>
  </p>  
    
  </div>
  {/* aCCORDION SECTION */}
  
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        {/* Accordion Item #1 */}
        First Law Of Thermodynamics
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/NyOYW07-L5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/7Siv2NNCFag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Second Law Of Thermodynamics
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/DWiCaDPM7Hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/NyOYW07-L5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/mGDJO2M7RBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/7Siv2NNCFag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
        </div>
      
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Third Law Of Thermodynamics
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/kswiDQ2aAKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/DWiCaDPM7Hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/NyOYW07-L5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/scKfEoHX6Ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/mGDJO2M7RBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/7Siv2NNCFag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
        </div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFifty">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifty" aria-expanded="false" aria-controls="collapseFifty">
       Entropy
      </button>
    </h2>
    <div id="collapseFifty" class="accordion-collapse collapse" aria-labelledby="headingFifty" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/xJf6pHqLzs0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/kswiDQ2aAKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/DWiCaDPM7Hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/NyOYW07-L5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/Bdn3u2OHvKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/scKfEoHX6Ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/mGDJO2M7RBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/7Siv2NNCFag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
        </div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSixty">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixty" aria-expanded="false" aria-controls="collapseSixty">
     Maxwell
      </button>
    </h2>
    <div id="collapseSixty" class="accordion-collapse collapse" aria-labelledby="headingSixty" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="row">
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/K40lNL3KsJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="col-md">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/mOEFTX9DAEw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
      </div>
    </div>
  </div>
</div>
</section>
</section>
</section>



    </motion.div>
  )
}

export default Tlevel