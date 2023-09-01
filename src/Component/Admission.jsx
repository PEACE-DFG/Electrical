import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

function Admission() {
    const navigate= useNavigate()
    let user=JSON.parse(localStorage.getItem('users'))
    function Logout(){
      localStorage.clear()
      navigate('/Registers') 
    }
  return (
    <div>
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
       <i class='fa-solid fa-home' style={{fontSize:'15px',color:'green'}}></i> <span style={{fontSize:'15px',color:'green'}}>Home </span> <i class='fa-solid fa-greater-than' style={{fontSize:'10px'}}></i><span style={{fontSize:'15px',color:'green'}}> 2023/2024 ADMISSION EXERCISE: NOTICE OF INTER UNIVERSITY TRANSFER</span>

       </div>
</div>
<div className='container'>
       <h3 className='mt-4'>
       2023/2024 ADMISSION EXERCISE: NOTICE OF INTER UNIVERSITY TRANSFER
       </h3>
       <div class="card mb-3" style={{border:'none'}}>
  <div class="">
    <div class="">
      <img src="https://www.uniosun.edu.ng/media/k2/items/cache/6c84d533fc229526581c779693b8a623_L.jpg" class="img-fluid w-75 rounded-start" alt="..."/>
    </div>
    <div class="">
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5> */}
            <h5>
            This is to inform all the prospective applicants intending to transfer their studentship to Osun State University that the University has commenced the sale of Inter University Transfer Form for the 2023/2024 Academic Session.
            </h5>
        <p class="card-text">
            <i>
            Candidates that wish to transfer their studentship to UNIOSUN should visit <a href="http://www.uniosun.edu.ng">http://www.uniosun.edu.ng</a> or <a href="http://admissions.uniosun.edu.ng">http://admissions.uniosun.edu.ng</a> to complete and submit their applications. However, they must provide correct information which will be verified accordingly. They are also expected to forward their Academic Transcripts to the Registrar of Osun State University.
            </i>
        </p>
        <p>
            <h6 className='text-danger'>COMPLETION OF APPLICATION FORMS</h6>
        </p>
        <p>
        Candidates are to register on-line by accessing the University website: <a href="http://www.uniosun.edu.ng">http://www.uniosun.edu.ng</a> or <a href="http://admissions.uniosun.edu.ng">http://admissions.uniosun.edu.ng</a> to complete and submit an application form. They are expected to print two (2) copies of the application form after submission.
        </p>
        <h6 className='text-danger'>
        ELIGIBILITY
        </h6>
        <ol>
            <li>
            Any candidate applying for transfer of studentship to Osun State University must be a current student of the University from which he/she seeks transfer. Any intending transferee whose studentship has lapsed in his/her former university will not be considered for transfer to Osun State University.
            </li>
            <li>
            Any student willing to transfer from other public and private University to Osun State University must transfer into the same course as he/she is studying or any other course, provided he/she satisfies the requirement.
            </li>
            <li>
            The applicant must have minimum cumulative grade point average (CGPA) of 2.5 in a scale of 5.00 as at last session in his/her present University, except for Nursing and MBBS.
            </li>
            <li>
            The duration for inter-University transfer must fall within the season of admission process by Osun State University as stipulated in the University regulations.
            </li>
            <li>
            The applicant must meet the University and programme specific admission requirements as contained in the University regulations. To be specific, the applicant must possess the minimum entry O’ Level requirements and the UTME score must not be lower than the cut-off mark for Osun State University for the same Course during the year of his/her admission
            </li>
            <li>
            Candidates expelled or withdrawn from other universities based on academic record or disciplinary cases shall not be considered for transfer to Osun State University. Any applicant who fails to process his/her academic transcript directly from Academic Affairs Unit to Osun State University will not be considered (Student’s copy of academic transcript is not acceptable, please)
            </li>
            <li>
            Any applicant who fails to submit sworn Court Affidavit on his/her criminal and disciplinary status in the present University will not be considered.
            </li>
            <li>
            At any stage, if irregularity is discovered in the papers presented by the student, such student(s) shall be made to face the Students Disciplinary Panel and appropriate punishment will be applied.
            </li>
            <li>
            Transferees can only be admitted to 200 level, the Osun State University will accept transferees to 200 Level for all 4-year Courses and to 300 Level for Courses above 4-year duration. However, transfer into such programmes will depend on the availability of space.
            </li>
            <li>
            A minimum JAMB Score of 160 is required, except for Nursing and MBBS.
            </li>
        </ol>
        <h6>
        SPECIFIC REQUIREMENTS FOR TRANSFER TO NURSING AND MBBS PROGRAMMES FROM OTHER NIGERIAN UNIVERSITIES
        </h6>
        <ol>
            <li>
            Applicants must be actively registered for MBBS or Nursing, as the case may be in their present University.
            </li>
            <li>
            Applicants must have five (5) O/Level Credits at one sitting in English, Mathematics, Physics, Chemistry and Biology.
            </li>
            <li>
            Applicants must have scored at least 260 for MBBS and 250 for Nursing in UTME exam on admission.
            </li>
            <li>
            Applicants must have a minimum Cumulative Grade Point Average (CGPA) of 4.2 in a scale of 5.0 for MBBS and 4.0 in a scale of 5.0 for Nursing.
            </li>
            <li>
            Applicants must not score less than 50% in any of the courses offered at 100 Level.
            </li>
        </ol>
        <h6 className='text-secondary'>
        Applicants must note that we have limited spaces for Inter-University Transfer for MBBS and Nursing. Admission is therefore not automatic.
        </h6>
        <h6 className='text-danger mt-3'>
        ACCESS TO THE REGISTRATION PORTAL
        </h6>

        <p>
        Visit the UNIOSUN Post UTME Portal via <a href="http://www.uniosun.edu.ng">http://www.uniosun.edu.ng</a> or <a href="http://admissions.uniosun.edu.ng">http://admissions.uniosun.edu.ng</a>. This will take you to the online Application Platform. Ensure you read all registration guidelines and instructions before proceeding to register.
        </p>
        <p>
            <i>
            Payment of N75,000.00 for the Inter University transfer fees is through the Remita Web PAY platform using your ATM Cards (Master Card, Verve Card and Remita enabled Cards.)
            </i>
        </p>
        <h6 className='text-danger'>
        CLOSING DATE: <span><kbd className='text-danger bg-warning'>Submission of forms closes at 12.00 noon on Friday 27th October, 2023</kbd></span>
        </h6>
        <p>
        For further information, please contact the Admissions Office, Osun State University, Osogbo on
        </p>
        <h6>
        Tel: 0805-442-5783 and 0810-797-6419
        </h6>

        <h6 className='mt-2 text-success'>
        Mr. G. A. A. Shittu <br />
        <i>Registrar</i>
        </h6>
       
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
    </div>
  )
}

export default Admission