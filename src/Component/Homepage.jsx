import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import '../../public/calculator.png'

function Homepage() {
  const [outputValue, setOutputValue] = useState('0');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(outputValue);
        setOutputValue(result.toString());
      } catch (error) {
        setOutputValue('Error');
      }
    } else if (value === 'C') {
      setOutputValue('');
    } else if (value === 'DEL') {
      setOutputValue(outputValue.slice(0, -1));
    } else if (value === 'sqrt') {
      setOutputValue(Math.sqrt(Number(outputValue)).toString());
    } else if (value === 'sin') {
      setOutputValue(Math.sin(Number(outputValue)).toString());
    } else if (value === 'cos') {
      setOutputValue(Math.cos(Number(outputValue)).toString());
    } else if (value === 'tan') {
      setOutputValue(Math.tan(Number(outputValue)).toString());
    } else if (value === 'log') {
      setOutputValue(Math.log10(Number(outputValue)).toString());
    } else if (value === 'invLog') {
      setOutputValue(Math.pow(10, Number(outputValue)).toString());
    } else {
      setOutputValue(outputValue + value);
    }
  };  // const handleButtonClick = () => {
  //   setOutputValue('1');
  // };
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
    <p class="card-text text-light" style={{fontSize:'12px'}}>I have the pleasure to welcome you to the website of Osun State University, Nigeria. Our main campus is located in Osogbo, the capital of the State of Osun, while our other campuses are located in five other towns ( Ejigbo, Ifetedo, Ikire, Ipetu-Ijesa and Okuku) spread across the six geopolitical zones of the State. Licensed on 21 December, 2006, we opened our doors to full academic activities on 21 September ... <span className='text-warning'>(Read More)</span>
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


        <section>
          {/* calculator */}
          <section style={{position:'fixed',top:'580px'}}>
          <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-calculator fs-1"></i></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{backgroundImage:'url(https://cdn.pixabay.com/photo/2019/12/21/20/44/math-work-4711302_1280.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
  <div class="offcanvas-header text-light bg-success">
    <h5 id="offcanvasRightLabel" > CODEMaster  Scientific Calculator</h5>
   
    <button type="button" class="btn-close text-reset bg-light " style={{color:'white'}} data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <marquee behavior="" direction="" style={{color:'white',backgroundColor:"rgb(0,0,0,0.6)"}}>
      Please this Calculator is very Sensitive and  may not function well without following the right Syntax please read the manual before use
    </marquee>
  <hr />

  <div class="offcanvas-body">
    <section  style={{maxWidth:'280px',margin:'auto',border:'1px solid black',padding:'20px',borderRadius:'10px',boxShadow:'8px 8px 15px grey',backgroundColor:'rgb(0,0,0,0.7)'}}>
   <section style={{textAlign:'center'}}>
   <div >
        <input type="text" style={{fontSize:'20px',borderRadius:'10px'}} id="output" className='py-2' size={'15'} placeholder={outputValue}/>     
     </div>
        
  
  <div class="btn-group mt-3 " role="group" aria-label="First group">
  <button type="button" style={{fontSize:'15px'}} className="btn btn-outline-secondary ms-2 bg-dark text-light " onClick={() => handleButtonClick('atan')}>tan<sup>-1</sup></button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary  bg-dark text-light" onClick={() => handleButtonClick('acos')}>cos <sup>-1</sup></button>
    <button type="button" style={{fontSize:'15px'}}class="btn btn-outline-secondary bg-dark text-light " onClick={() => handleButtonClick('asin')}>sin <sup>-1</sup></button>
    <button type="button"style={{fontSize:'15px'}} class="btn btn-outline-secondary bg-dark text-light "  onClick={() => handleButtonClick('tan')}>tan</button>
  </div>
  <div class="btn-group " role="group" aria-label="First group">
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-3 ms-2 bg-dark text-light" onClick={() => handleButtonClick('cos')}>cos</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4  bg-dark text-light"  onClick={() => handleButtonClick('sin')}>sin</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4  bg-dark text-light" onClick={() => handleButtonClick('sqrt')}>√</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-3  bg-dark text-light" onClick={() => handleButtonClick('**')}>^</button>

  </div>
  <div class="btn-group " role="group" aria-label="First group">
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4 ms-2 bg-dark text-light" onClick={() => handleButtonClick('/')}>/</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4 bg-dark text-light" onClick={() => handleButtonClick('*')}>*</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4 bg-dark text-light" onClick={() => handleButtonClick('-')}>-</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4 bg-dark text-light" onClick={() => handleButtonClick('+')}>+</button>
  </div>

  <div class="btn-group " role="group" aria-label="First group">
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary ms-2 px-4 bg-light text-dark"  onClick={ ()=> handleButtonClick('9')}>9</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4 bg-light text-dark"  onClick={ ()=> handleButtonClick('8')}>8</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4 bg-light text-dark"  onClick={ ()=> handleButtonClick('7')}>7</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4 bg-light text-dark"  onClick={ ()=> handleButtonClick('6')}>6</button>
  </div>

  <div class="btn-group " role="group" aria-label="First group">
  <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4 ms-2 bg-light text-dark"  onClick={ ()=> handleButtonClick('5')}>5</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4 bg-light text-dark"  onClick={ ()=> handleButtonClick('4')}>4</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4  bg-light text-dark"  onClick={ ()=> handleButtonClick('3')}>3</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4 bg-light text-dark" onClick={ ()=> handleButtonClick('2')}>2</button>
  
  </div>
 
  <div class="btn-group " role="group" aria-label="First group">
  <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4 ms-2 bg-light text-dark " onClick={ ()=> handleButtonClick('1')}>1</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4 bg-light text-dark " onClick={() => handleButtonClick('0')}>0</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-secondary px-4 bg-warning text-dark "  onClick={() => handleButtonClick('C')}>C</button>
    <button type="button" style={{fontSize:'15px'}} class="btn btn-outline-danger bg-danger text-dark px-3 " onClick={() => handleButtonClick('DEL')}>DEL</button>
  </div>

  
  <div className="btn-group m-auto  " role="group" aria-label="First group">
  <button type="button" style={{fontSize:'12px'}} class="btn btn-outline-light bg-dark text-light px-4 mx-1 ms-3" onClick={() => handleButtonClick('log')}>log</button>
  <button type="button" style={{fontSize:'12px'}} class="btn btn-outline-light bg-dark text-light px-4 mx-1" onClick={() => handleButtonClick('invLog')}>log <span><sup>-1</sup></span></button>
  <button type="button" class="btn btn-outline-primary bg-primary text-light px-3 mx-1 " onClick={() => handleButtonClick('=')}>=</button>
  </div>
  
   </section>
    </section>
  <section>
    <hr />
    <section>
      <h3 className='text-center text-light' style={{backgroundColor:'rgb(0,0,0,0.8)'}}>
      <i className='fa-solid fa-calculator'></i> Calculator Manual
      </h3>
      <hr />
    </section>
  <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        About Calculator
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <img src={'calculator.png'} alt="" />
        </div>
        <div>
          <p>
            This is a scientific programmable calculator that was created by CODEMaster. It can carry out basic arithmetic operations
            such as: Addition,Subtraction,Multiplication,Division,Exponential and Trigonmetric Operations such as Sine,Cosine,Tangent,arcsine,arccos,arctan,logarithm and inverse logarithm.
            <span>

            </span><i className='text-warning'>
                Please Proceed to the Operation mode to understand its use. <i class="fa-solid fa-arrow-down"></i><i class="fa-solid fa-arrow-down"></i><i class="fa-solid fa-arrow-down"></i>
            </i>
          </p>
        </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Principle Of Operation
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" >
      <h6 className='text-dark'>Please read the instructions carefully</h6>
<hr />
<ol>
  <li>
    <p>
      The arithmetic operation for addition,subtraction,division and multiplication is working fine. So you can make use of it similar to other calculators
      e.g 2+2=4,3-3=0,5/3=1.66667,etc.
    </p>
  </li>
  <li>
    <p>
      The <span style={{border:'1px solid orange',backgroundColor:'orange',padding:'2px 3px'}}>C</span> button is used to clear the screen irrespective of the string of characters
    </p>
  </li>
  <li>
  <p>
      The <span style={{border:'1px solid red',backgroundColor:'red',padding:'2px 3px'}}>DEL</span> button is used to delete individual characters starting from the end Backwards.
    </p>
  </li>
  <li>
    <p>
      To perform any of this operations: sin,cos,tan,√; enter the number first before pressing the opertional button e.g <kbd>press 49 + √</kbd> = <kbd>7</kbd> similarly <kbd>press 90 + sin</kbd>= <kbd>0.8939...</kbd>
    </p>
  </li>
  
</ol>
        </div>
    </div>
    
  </div>
  {/* <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div> */}
</div>
  </section>
    
  </div>
</div>

          </section>
        <footer className='text-light text-center' style={{backgroundColor:'rgb(91, 150, 2,0.7)'}}>
             <span>Copyright <i class="fa-solid fa-copyright text-light"></i> 2023, Design by CODEMaster</span><i class="fa-brands fa-github"></i>
            </footer>
        </section>

    </div>
  )
}

export default Homepage