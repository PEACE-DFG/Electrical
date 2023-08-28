import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import '../../public/engr.bada.jpg'
import { motion } from 'framer-motion'

function Lecture() {
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
{/* carousel section */}
<div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="
    https://uniosun.edu.ng/cache/resized/afed5abac16c8901dc784bad157f19b5.jpg
    " class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{backgroundColor:'rgb(0,0,0,0.5)',lineHeight:'0'}}>
        <h5 > DEPARTMENT OF ELECTRICAL AND ELECTRONIC ENGINEERING </h5>
        <p><i><i class="fa-solid fa-lightbulb text-warning fa-bounce"></i>Power the World and dissipate knowledge....</i></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.uniosun.edu.ng/cache/resized/89a676a84e7a4410bba4e88d528433fe.jpg
      " class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block"  style={{backgroundColor:'rgb(0,0,0,0.5)'}}>
        <h5>CONDUCIVE ACADEMIC LEARNING ENVIRONMENT</h5>
        <p>Osun State University is a conventional University envisioned to be a centre of excellence through the provision of highly qualitative teaching and learning.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.uniosun.edu.ng/cache/resized/b284a965e4e7a0396c06d13a47bcbc98.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block"  style={{backgroundColor:'rgb(0,0,0,0.5)'}}>
        <h5>      WELCOME TO OSUN STATE UNIVERSITY</h5>
        <p>The Livingspring of Knowledge and Culture</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden root">Back</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden root">Next</span>
  </button>
</div>
{/* about lecturers section */}
<section className='container mt-4'>
    <div className='mt-5 mb-3' style={{color:'rgb(91, 150, 2)'}}>
        <h5>STAFF - ELECTRICAL/ELECTRONICS ENGINEERING</h5>
    </div>
<div class="card mb-3" style={{maxWidth:'600px',border:'none'}}>
  <div class="row g-0" >
    <div class="col-md-4 m-auto" >
      <img src="https://uniosun.edu.ng/images/Staff_Pictures/Titus_Ajewole.jpg" class="img-fluid rounded-start w-100 img-fluid" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{lineHeight:'17.5px'}}>
        <p class="card-title " style={{fontSize:'15px'}}> Name: <span className='text-danger'>AJEWOLE Titus Oluwasuji (PhD)</span></p>
        <p class="card-text" style={{fontSize:'15px'}}>Affiliation: Osun State University, Osogbo, Nigeria</p>
        <p class="card-text" style={{fontSize:'15px'}}>Specializations: Regenerative Energies and Electric Microgrids </p>
        <p class="card-text" style={{fontSize:'15px'}}>Link: <span  style={{color:'rgb(91, 150, 2)'}}>https://www.researchgate.net/profile/Titus_Ajewole2</span></p>
        <p class="card-text"><small class="text-muted">Contact: +234 – 805 723 5573; 706 603 7275</small></p>
      </div>
    </div>
  </div>
</div>
<div>
    <p style={{textAlign:'justify'}}>
    <span className='text-danger'>Dr Titus O. Ajewole</span> is currently a Senior Lecturer in the Department of Electrical and Electronic Engineering of the Osun State University, Osogbo, Nigeria, where he teaches Electrical Machines, Electric Power Principles, Power Systems Engineering, Power Electronics, and Electrical Services Designs and Energy Utilization, at both undergraduate and graduate levels. He has headed the department between August 2015 and July 2017 and has since August 2017 been the Deputy Director in the Directorate of Academic Planning of the university. A certified Electrical Engineer, registered with the Council for the Regulation of Engineering in Nigeria (COREN).

The research interest of Dr Ajewole’s is in regenerative energy-based electric micro-/mini-grids, in both the autonomous and the grid-intertied modes of deploying the technology. Between 2012 and 2013, he was a Research Scholar at the Centre for Energy Systems Research of the Tennessee Technological University, Cookeville, USA. He was also a Co-Researcher in the Electric Microgrid Research Team of the African Union (AU) Commission’s High-Level African Panel on Emerging Technologies (APET) between 2017 and 2018.

Notably, Dr Ajewole has been able to developed scaled models of both single-source and hybrid-source autonomous electric microgrids (lab-grids) for use as facilities for real-time demonstration, testing and validation of both standalone and grid-tied microgrid systems, towards detecting possible practical engineering problems and providing feasible solutions to same prior to investment on the actual microgrid projects. This is a technical approach designed to foster seamless penetration of renewable energy-based electric microgrid technology into the energy mixes of electric utilities in the quest to enhance the robustness and the reliability of electricity provision for both the un-served and the under-served end users. The lab-grids enable cost-effective investigations (through experimentations) in determining the dynamic performances of various configurations and sizes of microgrid systems, thereby fostering development and innovations in the technology.

In 2007, Dr Ajewole won the postgraduate fellowship of Osun State University for his MSc and PhD, training, the programmes he commenced in 2008 and completed in 2014 at the Obafemi Awolowo University, Ile-Ife, Nigeria. He has been a two times winner of the Tertiary Education Trust Fund (TETFund) Research Grants: first as a co-investigator and the lead investigator on the second occasion. He is currently conducting studies on the use of agro-residues for clean electricity in Nigeria.
    </p>
    <hr />

</div>
</section>
{/* @@@@@@@@@@@@@@@@@@@@@@@@@22 */}
<section className='container mt-4'>
  
<div class="card mb-3" style={{maxWidth:'600px',border:'none'}}>
  <div class="row g-0" >
    <div class="col-md-4 m-auto" >
      <img src="https://uniosun.edu.ng/images/Staff_Pictures/Awofolaju_Tolulope.jpg" class="img-fluid rounded-start w-100 img-fluid" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{lineHeight:'17.5px'}}>
        <p class="card-title " style={{fontSize:'15px'}}> Name: <span className='text-danger'> AWOFOLAJU Tolulope Tola</span></p>
        <p class="card-text" style={{fontSize:'15px'}}>Affiliation Department of Electrical & Electronic Engineering, Osun State University, Nigeria</p>
        <p class="card-text" style={{fontSize:'15px'}}>Specializations Wireless communication, Internet of Things, Cognitive Radio,</p>
        <p class="card-text" style={{fontSize:'15px'}}>Link: <span  style={{color:'rgb(91, 150, 2)'}}> https://www.researchgate.net/profile/Tolulope_Awofolaju</span></p>
        <p class="card-text"><small class="text-muted">Contact:+234 – 805 723 5573; 706 603 7275</small></p>
      </div>
    </div>
  </div>
</div>
<div>
    <p style={{textAlign:'justify'}}>
    <span className='text-danger'>Awofolaju Tolulope Tola</span> is a lecturer in the Department of Electrical and Electronic Engineering, Osun State University where he teaches courses not limited to Principles of Communication Engineering, Telecommunication Engineering, Statistical Methods, Engineering Mathematics, Measurements and Instrumentation.
She has been fully involved in research activities and has contributed to advances in the field(s) of Wireless communication, Internet of Things as well as in Cognitive Radio, both locally and internationally. She is still actively involved in research with a focus on the development of a technique for real-time channel evaluation of tropospheric links from meteorological data set.
Going by her services to the University, Awofolaju has so far proved herself to be diligent, hardworking and competent in her teaching, research and administrative duties. She remains dedicated to duties assigned to him and has also demonstrated high level of commitment to the vision of the University. Awofolaju Tolulope Tola is currently serving as the Secretary to the Departmental Board of Electrical and Electronic Engineering.
She is a registered Electrical Engineer with the Council for the Regulation of Engineering in Nigeria (COREN) with registration number R.26918. She is also a corporate member of the Nigerian Society of Engineers (NSE) with registration number 38547 and a corporate member of the Association of Professional Women Engineers in Nigeria (APWEN) with registration number APW/0001283.
Awofolaju Tolulope obtained her M.Eng. degree in 2012 from the Federal University of Technology, Akure, Nigeria.
    </p>
    <hr />
    
</div>
</section>
{/* ########################3333 */}
<section className='container mt-4'>
  
<div class="card mb-3" style={{maxWidth:'600px',border:'none'}}>
  <div class="row g-0" >
    <div class="col-md-4 m-auto" >
      <img src="https://uniosun.edu.ng/images/Staff_Pictures/Alawode_Kehinde.jpg" class="img-fluid rounded-start w-100 img-fluid" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{lineHeight:'17.5px'}}>
        <p class="card-title " style={{fontSize:'15px'}}> Name: <span className='text-danger'> Alawode, Kehinde Olukunmi (PhD)</span></p>
        <p class="card-text" style={{fontSize:'15px'}}>Affiliation Osun State University, Nigeria</p>
        <p class="card-text" style={{fontSize:'15px'}}>Specializations Control systems/Optimization/Machine learning</p>
        <p class="card-text" style={{fontSize:'15px'}}>Link: <span  style={{color:'rgb(91, 150, 2)'}}> https://www.researchgate.net/profile/Kehinde_Alawode</span></p>
        <p class="card-text"><small class="text-muted">Contact:+234(0)8056483153; +234(0)8074079605</small></p>
      </div>
    </div>
  </div>
</div>
<div>
    <p style={{textAlign:'justify'}}>
    <span className='text-danger'>Dr. Kehinde O. Alawode</span>  is a lecturer in the Department of Electrical and Electronic Engineering, Osun State University where he lectures in Control Systems Engineering, Engineering Mathematics, Computer Programming and so on. He joined the Department as a Graduate Assistant in 2009. He served as departmental examination officer between 2003 and 2005 and has been the examination officer for the Faculty of Engineering and Environmental Sciences from 2017 till date. His research interest is in control systems, mathematical and evolutionary optimization techniques and machine learning and he has published in various academic journals including IEEE Transactions on Power Systems and Elsevier's Electric Power Systems Research. He has also served as reviewer for Elsevier's Applied Soft Computing journal. Dr. Kehinde O. Alawode is a registered Electrical Engineer with Council for the Regulation of Engineering in Nigeria (COREN) with registration number R. 26852. In 2007, he won the postgraduate fellowship of Osun State University for his MSc and PhD training and completed his PhD in 2017 at the Obafemi Awolowo University, Nigeria.
    </p>
    <hr />
    
</div>
</section>
{/* $$$$$$$$$$$$$$$$$$$$$$$$4444444 */}
<section className='container mt-4'>
  
<div class="card mb-3" style={{maxWidth:'600px',border:'none'}}>
  <div class="row g-0" >
    <div class="col-md-4 m-auto" >
      <img src="https://uniosun.edu.ng/images/Staff_Pictures/Muyideen_Olalekan.jpg" class="img-fluid rounded-start  w-100 img-fluid" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{lineHeight:'17.5px'}}>
        <p class="card-title " style={{fontSize:'15px'}}> Name: <span className='text-danger'>  Muyideen Olalekan LAWAL (PhD)</span></p>
        <p class="card-text" style={{fontSize:'15px'}}>Affiliation Osun State University, Nigeria</p>
        <p class="card-text" style={{fontSize:'15px'}}>Specializations Power Systems Engineering/Renewable Energy</p>
        <p class="card-text" style={{fontSize:'15px'}}>Link: <span  style={{color:'rgb(91, 150, 2)'}}> https://www.researchgate.net/profile/Muyideen_Lawal3</span></p>
        <p class="card-text"><small class="text-muted">Contact:+234(0)803849867</small></p>
      </div>
    </div>
  </div>
</div>
<div>
    <p style={{textAlign:'justify'}}>
    <span className='text-danger'>Dr Muyideen Olalekan LAWAL</span>  obtained his Bachelor’s degree in Electronic and Electrical Engineering from Ladoke Akintola University of Technology, Ogbomoso, Nigeria in 2006. He also obtained the Master of Science and Ph.D. degree in Electronic and Electrical Engineering from Obafemi Awolowo University, Ile-Ife, Nigeria in 2011 and 2016, respectively. His areas of interests are power system optimization, integration of renewable energy sources into power systems, development of renewable energy powered agricultural equipment, power systems control and energy metering.

He is a registered Electrical Engineer with the Council for the Regulation of Engineering in Nigeria (COREN) (R. 27,237).
    </p>
    <hr />
    
</div>
</section>
{/* %%%%%%%%%%%%%%%%%%%%%55555555 */}
<section className='container mt-4'>
  
<div class="card mb-3" style={{maxWidth:'600px',border:'none'}}>
  <div class="row g-0" >
    <div class="col-md-4 m-auto" >
      <img src="https://uniosun.edu.ng/images/Staff_Pictures/Lasisi__Hammed.jpg" class="img-fluid rounded-start  w-100 img-fluid" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{lineHeight:'17.5px'}}>
        <p class="card-title " style={{fontSize:'15px'}}> Name: <span className='text-danger'>  Dr (Engr) Lasisi, Hammed</span></p>
        <p class="card-text" style={{fontSize:'15px'}}>Affiliation Osun State University, Nigeria</p>
        <p class="card-text" style={{fontSize:'15px'}}>Specializations Electrical & Electronic Engineering/Telecommunications</p>
        <p class="card-text" style={{fontSize:'15px'}}>Link: <span  style={{color:'rgb(91, 150, 2)'}}> https://www.researchgate.net/profile/Hammed_Lasisi</span></p>
        <p class="card-text"><small class="text-muted">Contact:08034094040; 08056710150</small></p>
      </div>
    </div>
  </div>
</div>
<div>
    <p style={{textAlign:'justify'}}>
    <span className='text-danger'>Dr (Engr.) Lasisi, Hammed</span> is a lecturer in the Department of Electrical & Electronic Engineering, Faculty of Engineering, College of Science, Engineering and Technology, Osun State University, Osogbo, Nigeria. He obtained Bachelor of Engineering (B.Eng), Masters of Engineering (M.Eng) and PhD Degrees in Electrical Engineering from University of Ilorin in 2000, 2010 and 2017 respectively. He is among the pioneer staff who received the Special Doctoral Staff Fellowship award of Osun State University in 2007. His research interest is in the area of wireless communications, telegraphic engineering as well as radiations and possible environmental effects.
Dr Lasisi, Hammed is lectures in Applied Electricity, Digital Electronics, Electrical Circuit Theory, Communication Principle, Wireless Communications and so on. He headed the department between 1st August 2013 and 31st July 2015. He was also the sub-dean of the Faculty of Engineering and Environmental Sciences on postgraduate matters between January and July 2018. He is the acting head of the department from July, 31st 2018 till date.
His research interest is in the area of wireless communications, telegraphic engineering as well as radiations and possible environmental effects. Among his notable works in the field of telecommunication engineering is the examination and establishment of the practical effects of change in climatic conditions on UHF transmission. This work provides results and recommendations which are useful tools for improving radio frequency transmission, especially in the rage of Ultra-High frequency spectrum.
Recently, Dr Lasisi, H. has been able to demonstrate that: the basic concept of frequency sharing in telecommunications is that different cells can use the same channel given that the cells are separated by a minimum reuse distance in accordance with the system propagation characteristics; otherwise, adjacent channel interference or co-channel interference occurs. In other words, quality of service, QoS, of a mobile communication system depends on effective frequency planning and allocation. Frequency allocation is characterized with some degrees of randomness; thus, the decision of optimal frequency allocation is most efficient with minimum cost criteria and often involves complex algorithms. Fundamentally, frequency allocation schemes fall within the general class of optimization problems because an efficient frequency allocation scheme should adapt to changing traffic conditions and must observe the minimum frequency reuse constraints. Thus, it is required of smart optimization mechanism for frequency assignment for interference management in cellular networks. Hence, he demonstrated this, using hybrid Non-Dominated Sorting Genetic Algorithm-II and Self-Organising Map technique for interference management cellular network.
He is a registered Electrical Engineer with Council for the Regulation of Engineering in Nigeria (COREN, R. 21879). In 2007, he won the postgraduate fellowship of Osun State University for his MSc and PhD training. He has been a co-winner of Tetfund research grants on two occasions. He is currently conducting studies on possible economic effects of base transceivers colocation in cellular communication.
    </p>
    <hr />
    
</div>
</section>
{/* ^^^^^^^^^^^^^^^^^^^^^^^^6666666 */}
<section className='container mt-4'>
  
<div class="card mb-3" style={{maxWidth:'600px',border:'none'}}>
  <div class="row g-0" >
    <div class="col-md-4 m-auto" >
      <img src="https://uniosun.edu.ng/images/Staff_Pictures/Oladepo_Olatunde.jpg" class="img-fluid rounded-start  w-100 img-fluid" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{lineHeight:'17.5px'}}>
        <p class="card-title " style={{fontSize:'15px'}}> Name: <span className='text-danger'>Dr. OLADEPO, Olatunde</span></p>
        <p class="card-text" style={{fontSize:'15px'}}>Affiliation Osun State University, Nigeria</p>
        <p class="card-text" style={{fontSize:'15px'}}>Specializations Power System Engineering</p>
        <p class="card-text" style={{fontSize:'15px'}}>Link: <span  style={{color:'rgb(91, 150, 2)'}}>https://www.researchgate.net/profile/Oladepo_Olatunde</span></p>
        <p class="card-text"><small class="text-muted">Contact:+2347035665642</small></p>
      </div>
    </div>
  </div>
</div>
<div>
    <p style={{textAlign:'justify'}}>
    <span className='text-danger'>Dr Oladepo Olatunde</span> is a lecturer and researcher in Power System from the department of Electrical and Electronic Engineering, Osun State University, Osogbo, Nigeria. Power system engineering is a sub-discipline of electrical engineering and pertains to generation, transmission, distribution and utilization of electrical power while also catering for the devices (electrical), which are used in electrical processes: generators, motors and transformers.

His research interest includes Smart Grid, Distributed Generation, Sustainable Energy, Regulated & Deregulated Power System, Renewable Energy, Power System Analysis, Power System Devices and Apparatus, Power Quality, Power System Protection, etc. He obtained Bachelor of Technology in Electrical and Electronic Engineering from Ladoke Akintola University of Technology Ogbomosho and M Eng. (Electrical Power Engineering) from Federal University of Technology Akure in the year 2003 and 2010 respectively. Currently, he is pursuing Ph.D in Power System Engineering at Universiti Teknologi Malaysia, Johor Malaysia.

He is a registered member of the Council for the Regulation of Engineering in Nigeria (COREN).
    </p>
    <hr />
    
</div>
</section>
{/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&7777777 */}
<section className='container mt-4'>
  
<div class="card mb-3" style={{maxWidth:'600px',border:'none'}}>
  <div class="row g-0" >
    <div class="col-md-4 m-auto" >
      <img src="https://uniosun.edu.ng/images/Staff_Pictures/Obiyemi_new.jpg" class="img-fluid rounded-start  w-100 img-fluid" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{lineHeight:'17.5px'}}>
        <p class="card-title " style={{fontSize:'15px'}}> Name: <span className='text-danger'>Obiseye Oluwaniyi Obiyemi (PhD)</span></p>
        <p class="card-text" style={{fontSize:'15px'}}>Affiliation Department of Electrical & Electronic Engineering, Osun State University, Nigeria</p>
        <p class="card-text" style={{fontSize:'15px'}}>Specializations Radiowave, Microwave and Millimeter wave propagations, embedded electronics</p>
        <p class="card-text" style={{fontSize:'15px'}}>Link: <span  style={{color:'rgb(91, 150, 2)'}}>https://scholar.google.com/citations?user=UE8A2LgAAAAJ&hl=en</span></p>
        <p class="card-text"><small class="text-muted">Contact:+2348034385485; +2347055491357</small></p>
      </div>
    </div>
  </div>
</div>
<div>
    <p style={{textAlign:'justify'}}>
    <span className='text-danger'>Dr Obiseye Obiyemi</span> is a senior lecturer in the Department of Electrical and Electronic Engineering, Osun State University where he teaches courses not limited to Introduction to Electrical and Electronics Engineering; Electronic Circuits I & II; Electromagnetic Fields and waves I; Electronic Devices & Systems; Microelectronics Devices & Circuits I & II and Communications Systems.
He has been fully involved in research activities and has contributed to advances in the field(s) of Radiowave, Microwave and Millimeter wave propagations as well as in embedded electronics, both locally and internationally. He is still actively involved in research with a focus on the mitigation of the climatological effects on the digital satellite television in the Ku-Band for optimal reception over Nigeria and deployment of embedded electronic designs for innovative solutions to problems in immediate community.
Going by his services to the University, Obiseye has so far proved himself to be diligent, hardworking and competent in his teaching, research and administrative duties. He is fully engaged in various activities relevant to the smooth running of the Department, Faculty, College and the University at large. He remains dedicated to duties assigned to him and has also demonstrated high level of commitment to the vision of the University. Obiseye Obiyemi recently served as the Coordinator of the Department of Electrical and Electronic Engineering between August 2017 and July 2018. He is currently serving as the Deputy Director of the Directorate for Inter-Campus and Public Affairs with appointment effective from August 2018.
Obiseye is a registered electrical engineer with the Council for the Regulation of Engineering in Nigeria (COREN) with registration number R. 22445. He is also a corporate member of the Nigerian Society of Engineers (NSE) with registration number 38546. He is a certified teacher and fully registered with the Teachers’ Registration Council of Nigeria (TCN) with registration number KW/T/00768.
Obiseye Obiyemi obtained his Ph.D. degree in 2017 from the University of Ilorin, Ilorin, Nigeria. He obtained a Postgraduate Diploma in Education in 2011 from the National Teachers Institute, Kaduna, Nigeria.
    </p>
    <hr />
    
</div>
</section>
{/* ****************************88888 */}

<section className='container mt-4'>
  
<div class="card mb-3" style={{maxWidth:'600px',border:'none'}}>
  <div class="row g-0" >
    <div class="col-md-4 m-auto" >
      <img src={'engr.bada.jpg'} class="img-fluid rounded-start  w-100 img-fluid" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{lineHeight:'17.5px'}}>
        <p class="card-title " style={{fontSize:'15px'}}> Name: <span className='text-danger'>Engr. BADA, Olalekan Mudasiru</span></p>
        <p class="card-text" style={{fontSize:'15px'}}>Affiliation Osun State University, Osogbo, Nigeria</p>
        <p class="card-text" style={{fontSize:'15px'}}>Specializations Automation, Process Control, Microgrid, Machine Learning, and Artificial Intelligence</p>
        {/* <p class="card-text" style={{fontSize:'15px'}}>Link: <span  style={{color:'rgb(91, 150, 2)'}}>https://scholar.google.com/citations?user=UE8A2LgAAAAJ&hl=en</span></p> */}
        <p class="card-text"><small class="text-muted">Contact:
        +234 806 214 6758</small></p>
      </div>
    </div>
  </div>
</div>
<div>
    <p style={{textAlign:'justify'}}>
    <span className='text-danger'> Engr. BADA, Olalekan Mudasiru</span>  is a lecturer in the Department of Electrical and Electronic Engineering, Osun State University, Osogbo, Nigeria. His specialization is Control aspect of Electrical Engineering. His areas of interest are Automation, Process Control, Microgrid, Machine Learning, and Artificial Intelligence to mention a few. Engr. Bada is a teachable and open minded lecturer who work well independently and in team work. He is currently on his PhD program at the University of Ibadan; and his 
     research area is on Economic dispatch in a Microgrid using Model Predictive Control with Machine Learning. Engr Bada is a positive minded and highly motivated, hardworking person. Some of the undergraduate and post graduate diploma courses He teaches include:
      Numerical Methods, Uses of Engineering Software, Introduction to Control Systems, Modern Control Systems, Measurements and Instrumentation, Digital Signal Processing. He has already supervised the final year project of some undergraduate students. He is presently the Student Industrial Work Experience Scheme (SIWES) coordinator for the Electrical Electronic department Osun state University.
    </p>
    <hr />
    
</div>
</section>

{/* (((((((((((((((((((((((((((((()))))))))))))))))))))))))))))) */}
<section className='container mt-4'>
  
<div class="card mb-3" style={{maxWidth:'600px',border:'none'}}>
  <div class="row g-0" >
    <div class="col-md-4 m-auto" >
      <img src="https://uniosun.edu.ng/images/Staff_Pictures/Aiyedun.jpg" class="img-fluid rounded-start  w-100 img-fluid" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{lineHeight:'17.5px'}}>
        <p class="card-title " style={{fontSize:'15px'}}> Name: <span className='text-danger'>AIYEDUN Idowu Olasunkanmi</span></p>
        <p class="card-text" style={{fontSize:'15px'}}>Affiliation Osun State University, Osogbo, Nigeria</p>
        <p class="card-text" style={{fontSize:'15px'}}>Rank Senior Technologist</p>
        {/* <p class="card-text" style={{fontSize:'15px'}}>Link: <span  style={{color:'rgb(91, 150, 2)'}}>https://scholar.google.com/citations?user=UE8A2LgAAAAJ&hl=en</span></p> */}
        <p class="card-text"><small class="text-muted">Contact:
+234803 073 3835</small></p>
      </div>
    </div>
  </div>
</div>
<div>
    <p style={{textAlign:'justify'}}>
    <span className='text-danger'> AIYEDUN Idowu Olasunkanmi</span>  is a Senior Technologist in the Department of Electrical and Electronics Engineering, Osun State University, Osogbo, Nigeria, with over 7years of experience in the Communications Laboratory section of the department, where he delivers effective practical classes for students and provide necessary guide for both undergraduate and post graduate research works.

He graduated with a B.Sc degree from the Obafemi Awolowo University, Ile-Ife where he studied Electronic and Electrical Engineering.
He is a registered member of the Council for Regulation of Engineering in Nigeria (COREN – R45909), as well as the Nigerian Society of Engineers (NSE - 40419) and the present Public Relation Officer (PRO) of the National Association of Academic Technologists (NAAT), Osun State University branch .
He is a team player who works in an organized manner and has the ability to work in a multi-task assignment within a timeline to deliver result. He coordinates with other Technologists in the department to achieve effective practical classes.
He is presently the Technical Secretary of the Nigerian Institute of Electrical and Electronic Engineers (NIEEE), Osogbo chapter (2019-2021), as well as the Assistant Technical Secretary of the Osogbo branch of the Nigerian Society of Engineers (NSE).
He has attended many conferences both at local and international, and has also attended many workshops and training, part of which is the just concluded Expansion/completion of the TETFund intervention in special Sciences, Engineering and Technology (Set) Project at Gregory University, Uturu, Abia State in August, 2019.
He believes in diligence, prudency, breaking new grounds and touching lives.
    </p>
    <hr />
    
</div>
</section>
{/* )))))))))))))))))))))))))))))))))))))))))))))))))00000 */}
<section className='container mt-4'>
  
<div class="card mb-3" style={{maxWidth:'600px',border:'none'}}>
  <div class="row g-0" >
    <div class="col-md-4 m-auto" >
      <img src="https://uniosun.edu.ng/images/Staff_Pictures/Ojuola_Bosede.jpg" class="img-fluid rounded-start  w-100 img-fluid" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{lineHeight:'17.5px'}}>
        <p class="card-title " style={{fontSize:'15px'}}> Name: <span className='text-danger'>OJUOLA, Bosede M.</span></p>
        <p class="card-text" style={{fontSize:'15px'}}>Affiliation Osun State University, Osogbo, Nigeria</p>
        <p class="card-text" style={{fontSize:'15px'}}>Rank Principal Technologist</p>
        <p class="card-text" style={{fontSize:'15px'}}>Link: <span  style={{color:'rgb(91, 150, 2)'}}> https://www.researchgate.net/profile/Bosede_ojuola</span></p>
        <p class="card-text"><small class="text-muted">Contact:
        +234 803 201 8717</small></p>
      </div>
    </div>
  </div>
</div>
<div>
    <p style={{textAlign:'justify'}}>
    <span className='text-danger'> OJUOLA, Bosede M.</span>   assumed duty as Technologist II in the Department of Electrical and Electronic Engineering on 1st October, 2009. She obtained a National Diploma (ND) in Electrical and Electronic Engineering in 1999 and a Higher National Diploma (HND) in Electrical and Electronic Engineering in 2002. She is a registered member of Nigerian Association of Technologist in Engineering (NATE) and also a registered Technologist of Council for the Regulation of Engineering in Nigeria (COREN).
OJUOLA, Bosede M. is the Principal Technologist in charge of power and machine laboratory of the Department of Electrical and Electronic Engineering.
She effectively carries out any practical works related to Power and machines such as single phase transformer, three phase transformer, D.C machines and also constructed step down transformer, single phase induction motor, Arc Welding Machine, Rechargeable Solar lamp and designed prototypes of two & three bedroom wiring installation. Also, she has basic knowledge on major equipment in other Electrical and Electronic laboratories and their possible applications.
She works and coordinates with other Technologists in the Department to achieve effective practical classes. Also works with minimum or no supervision.
She has been very dutiful in her job schedules, which includes: general maintenance of laboratories equipment, preparation of materials for effective practical and putting students through the use of laboratory equipment.
She is always active in SWEP programmes where 200 and 300 level students are engaged in skill acquisition, assist final year students in their projects. Also, she played active role during COREN & NUC accreditation in 2012, 2017 and 2018 respectively
I am happily married and blessed with kids
    </p>
    <hr />
    
</div>
</section>
{/* ////////////////////////////////////////////// */}
<section className='container mt-4'>
  
<div class="card mb-3" style={{maxWidth:'600px',border:'none'}}>
  <div class="row g-0" >
    <div class="col-md-4 m-auto" >
      <img src="https://uniosun.edu.ng/images/Staff_Pictures/Esho_Adeola.jpg" class="img-fluid rounded-start  w-100 img-fluid" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{lineHeight:'17.5px'}}>
        <p class="card-title " style={{fontSize:'15px'}}> Name: <span className='text-danger'>ESHO Adeola O.</span></p>
        <p class="card-text" style={{fontSize:'15px'}}>Affiliation Osun State University, Osogbo, Nigeria</p>
        <p class="card-text" style={{fontSize:'15px'}}>Rank Senior Technologist</p>
        {/* <p class="card-text" style={{fontSize:'15px'}}>Link: <span  style={{color:'rgb(91, 150, 2)'}}> https://www.researchgate.net/profile/Bosede_ojuola</span></p> */}
        <p class="card-text"><small class="text-muted">Contact:
        +234 705 300 3962</small></p>
      </div>
    </div>
  </div>
</div>
<div>
    <p style={{textAlign:'justify'}}>
    <span className='text-danger'> ESHO Adeola O.</span>   assumed duty as Technologist II in the Department of Electrical and Electronic Engineering on 1st March, 2010. He is a Bachelor science BSc holder in Physics with Electronics. He is a corporate member of the Nigerian institute if science laboratory Technology (NISLT).
ESHO is an Administrator/Technologist in charge of Applied Electricity and Electro-Technique laboratories of the Department of Electrical and Electronic Engineering.
He is Demonstrator, 200 level Engineering practicals for the department of Electrical and Electronic Engineering. He works with other Technologists in the department to provide experimental sessions for the post-graduate diploma students.
He carries out repair of minor fault and maintenance and inventory of laboratory equipments under him.
He is involve in Student work experience programme (SWEP), tests and troubleshoots students’ project, prepares the labs for accreditations and visitations etc
    </p>
    <hr />
    
</div>
</section>

{/* RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR */}
<section className='container mt-4'>
  
<div class="card mb-3" style={{maxWidth:'600px',border:'none'}}>
  <div class="row g-0" >
    <div class="col-md-4 m-auto" >
      <img src="https://uniosun.edu.ng/images/Staff_Pictures/Olowu_Oluwatoyin.jpg" class="img-fluid rounded-start  w-100 img-fluid" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{lineHeight:'17.5px'}}>
        <p class="card-title " style={{fontSize:'15px'}}> Name: <span className='text-danger'> OLOWU Oluwatoyin R.</span></p>
        <p class="card-text" style={{fontSize:'15px'}}>Affiliation Osun State University, Osogbo, Nigeria</p>
        <p class="card-text" style={{fontSize:'15px'}}>Rank Technologist II</p>
        {/* <p class="card-text" style={{fontSize:'15px'}}>Link: <span  style={{color:'rgb(91, 150, 2)'}}> https://www.researchgate.net/profile/Bosede_ojuola</span></p> */}
        <p class="card-text"><small class="text-muted">Contact:
        +234 803 077 1447</small></p>
      </div>
    </div>
  </div>
</div>
<div>
    <p style={{textAlign:'justify'}}>
    <span className='text-danger'> OLOWU Oluwatoyin R. </span>   assumed duty as Technologist II in the Department of Electrical and Electronic Engineering on 12 of Febuaruary, 2019.She obtained a National Diploma in Electrical and Electronic Engineering (ND) in 2002 and Higher National Diploma in Electrical and Electronic in 2006.
OLOWU is one of the Technologist in Applied Electricity and Electro-Technique laboratories of the Department of Electrical and Electronic Engineering.
She is Demonstrator, 200 level Engineering practicals for the department of Electrical and Electronic Engineering. She works with other Technologists in the department to provide experimental sessions for the post-graduate diploma students.
She carries out repair of minor fault and maintenance and inventory of laboratory equipments under her.
She is involve in tests and troubleshoots students’ project, prepares the labs for accreditations and visitations etc.
    </p>
    <hr />
    
</div>
</section>
{/* OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo */}
<section className='container mt-4'>
  
<div class="card mb-3" style={{maxWidth:'600px',border:'none'}}>
  <div class="row g-0" >
    <div class="col-md-4 m-auto" >
      <img src="https://uniosun.edu.ng/images/Staff_Pictures/Olatona_Sarafadeen.jpg" class="img-fluid rounded-start  w-100 img-fluid" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{lineHeight:'17.5px'}}>
        <p class="card-title " style={{fontSize:'15px'}}> Name: <span className='text-danger'>OLATONA Sarafadeen O.</span></p>
        <p class="card-text" style={{fontSize:'15px'}}>Affiliation Osun State University, Osogbo, Nigeria</p>
        <p class="card-text" style={{fontSize:'15px'}}>Rank Technologist II</p>
        {/* <p class="card-text" style={{fontSize:'15px'}}>Link: <span  style={{color:'rgb(91, 150, 2)'}}> https://www.researchgate.net/profile/Bosede_ojuola</span></p> */}
        <p class="card-text"><small class="text-muted">Contact:
        +234803 2513209</small></p>
      </div>
    </div>
  </div>
</div>
<div>
    <p style={{textAlign:'justify'}}>
    <span className='text-danger'>OLATONA Sarafadeen Olalere </span>   a Technologist II in the Department of Electrical and Electronics Engineering, Osun State University, Osogbo, Nigeria, with over 2years of experience in the Communications Laboratory section of the department, where he delivers effective practical classes for students and provide necessary guide.
He graduated with a Higher National Diploma certificate (HND) from the Federal Polytechnic Ede, Osun State, where he studied Electrical and Electronic Engineering.
He is a registered member of the National Association of Technologist Engineering (NATE).

He believes in diligence, and works with little or no supervision.


    </p>
    <hr />
    
</div>
</section>
{/* BBBBBBBBBBBBBBBBBBBBBBBBBBbb */}

<section className='container mt-4'>
  
<div class="card mb-3" style={{maxWidth:'600px',border:'none'}}>
  <div class="row g-0" >
    <div class="col-md-4 m-auto" >
      <img src="https://uniosun.edu.ng/images/Staff_Pictures/Balogun_Oluwafemi.jpg" class="img-fluid rounded-start  w-100 img-fluid" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{lineHeight:'17.5px'}}>
        <p class="card-title " style={{fontSize:'15px'}}> Name: <span className='text-danger'>BALOGUN, Oluwafemi T.</span></p>
        <p class="card-text" style={{fontSize:'15px'}}>Affiliation Osun State University, Osogbo, Nigeria</p>
        <p class="card-text" style={{fontSize:'15px'}}>Rank Technologist II</p>
        <p class="card-text" style={{fontSize:'15px'}}>Link: <span  style={{color:'rgb(91, 150, 2)'}}>https://www.researchgate.net/profile/oluwafemi_balogun</span></p>
        <p class="card-text"><small class="text-muted">Contact:
        +234(0)8035787770</small></p>
      </div>
    </div>
  </div>
</div>
<div>
    <p style={{textAlign:'justify'}}>
    <span className='text-danger'>BALOGUN, Oluwafemi T.</span>  assumed duty as an Assistant Technologist in the Department of Electrical and Electronic Engineering on 15th March, 2012. He obtained a National Diploma (ND) in Electrical and Electronic Engineering in 2005 and a Higher National Diploma (HND) in Electrical and Electronic Engineering in 2013. He is a registered corporate member of Nigerian Association of Technologist in Engineering (NATE).
Oluwafemi T. Balogun. is the Technologist II in Instrumentation and Control, Power and Machine laboratory of the Department of Electrical and Electronic Engineering.
He effectively carries out any practical works related to Instrumentation and Control, Power and machines such as prototyping on Electronics Blinking an LED, Digital Trumpet Distance Sensor, Temperature sensor, single transformer, three phase transformer, D.C machines and also constructed step down transformer, single phase induction motor, Arc Welding Machine, Rechargeable Solar lamp and designed prototypes of two & three bedroom wiring installation. Also, he has basic knowledge on major equipment in other Electrical and Electronic laboratories and their possible applications.
He works with other Technologists in the Department to achieve effective practical classes. Also works with minimum or no supervision.
He has been very dutiful in his job schedules, which includes: general maintenance of laboratories equipment, preparation of materials for effective practical and putting students through the use of laboratory equipment.
He is always active in SWEP programmes where 200 and 300 level students are engaged in skill acquisition, assist final year students in their projects. Also, he played active role during COREN & NUC accreditation in 2012, 2017 and 2018 respectively.

    </p>
    <hr />
    
</div>
</section>

<section>
        <footer className='text-light text-center' style={{backgroundColor:'rgb(91, 150, 2,0.7)'}}>
             <span>Copyright <i class="fa-solid fa-copyright text-light"></i> 2023, Design by CODEMaster</span><i class="fa-brands fa-github"></i>
            </footer>
        </section>
    </motion.div>
  )
}

export default Lecture