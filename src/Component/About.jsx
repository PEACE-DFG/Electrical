import React from 'react'
import { Link } from 'react-router-dom'
import '../../public/face.jpg'
import '../../public/face2.jpg'
import '../../public/grade.png'
import '../../public/grade1.png'
function About() {
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
{/* text */}
    <section className='container mt-3'>
    <div class="clearfix">
  <img src={'face.jpg'} class="col-md-6  img-fluid float-md-end mb-3 ms-md-3" alt="..."/>

  <h3>
  BRIEF HISTORY OF THE DEPARTMENT
  </h3>
  <hr />

  <p>
  The Department of Electrical and Electronics Engineering is one of the two pioneer
departments in the Faculty of Engineering under the College of Science, Engineering
and Technology of Osun State University. Academic activities commenced in very
first session (2007/2008) of the establishment of the University. The Department
runs a 5-year undergraduate programme leading to the award of the Bachelor of
Engineering (B. Eng.) degree in Electrical and Electronics Engineering.
The academic programme of the Department operates academic curricula that is
tailored along the stipulations contained in the Benchmark Minimum Academic
Standards (BMAS) of the National Universities Commission (NUC) and the BMAS of
the Council for the Regulation of Engineering in Nigeria (COREN). The curriculum
exposes Students to basic knowledge, best practices and current advances in the
field of Electrical and Electronics Engineering as well as entrepreneurial and
industrial training with a view to enabling them to be arrow heads of the
technological development of Nigeria while also being globally competitive. In their
final year, Students can concentrate in any of the following;
  </p>
  <div>
    <ol>
        <li>Power and Machines</li>
        <li>Electronics and Telecommunications</li>
        <li>Computer and Control Engineering</li>
    </ol>
  </div>

  <p>
  The Department enjoys modern communication and information technology facilities
available in the University and these are judiciously utilized for teaching and
research. The first set of students graduated from the Department of Electrical and
Electronic Engineering at the end of the 2011/2012 academic session.
  </p>
</div>

    </section>
    {/* ################## */}
    <section className='container mt-3'>
    <div class="clearfix">
  <img src={'face2.jpg'} class="col-md-6  img-fluid float-md-start mb-3 me-md-4" alt="..."/>

  <h3>
  PHILOSOPHY AND OBJECTIVES

  </h3>
  <hr />
<h5>
Philosophy
</h5>
<hr width="100px" />
  <p>
  The Philosophy of Electrical and Electronics Engineering programme of Osun State
University is to train students and produce graduates with high academic standards
and adequate practical background in Electrical and Electronics Engineering through
broad-based training and exposure to industrial as well as entrepreneurial practices
to enable them satisfy the immediate manpower needs of the industry and the
community.
  </p>
  <div>
    <h5>
    Objectives
    </h5>
    <hr width='100px'/>
  </div>
  <div>
    <p>
    The specific objectives of the programme are:
    </p>
    <div>
    <ol type='a' className='ps-2'>
        <li>
        Provision of broad based academic and practical training to achieve mastery
in Electrical and Electronics Engineering concepts;

        </li>
        <li>
        To provide a wide range of quality learning opportunities for students in
Electrical and Electronics Engineering without distinction of race, creed, sex,
religious or political conviction such that will enhance their best intellectual,
social and personal development;

        </li>
        <li>
        To provide academic, professional and vocational training of high quality in
Electrical and Electronics Engineering, in such a way as to enrich and improve
the state, national and international human resources capabilities and assist
its graduates to contribute to the common good of society;
        </li>
        <li>
        Training individuals in the standard engineering practices as applicable to the
modern techniques; formulating solutions to the various industrial,
manufacturing, and service delivery problems prevalent in our society;

        </li>
        <li>
        To foster academic research in Electrical and Electronics Engineering, which
contributes to human knowledge and the vitality of the institution;
        </li>
        <li>
        To evolve academic programmes in Electrical and Electronics Engineering to
suit the changing social and economic needs of society through continuous
review of curricula and development of new programmes to respond to
societal and technological changes in Osun State in particular, Nigeria and the
world in general.
        </li>
    </ol>
  </div>
  </div>
  

  {/* <p>
  The Department enjoys modern communication and information technology facilities
available in the University and these are judiciously utilized for teaching and
research. The first set of students graduated from the Department of Electrical and
Electronic Engineering at the end of the 2011/2012 academic session.
  </p> */}
</div>

    </section>
    {/* %%%%%%%%%%%%%%%%5 */}
    <section className='container mt-3'>
    <div class="clearfix">
  <img src="https://assets.sunnewsonline.com/2022/03/1-49.jpg" class="col-md-6  img-fluid float-md-start mb-3 me-md-4" alt="..."/>

  <h3>
  ADMISSION REQUIREMENTS

  </h3>
  <hr />
<h5>
General
</h5>
<hr width="100px" />
  <p>
  For admission into first degree programmes of the University, a candidate
shall be required to possess the following minimum qualification:

  </p>
  <ol>
    <li>
    Senior School Certificate Examination (SSCE) or its equivalents with credit
passes in five (5) subjects including English Language and Mathematics, at
not more than two sittings. The candidate must also earn an acceptable score
in the Unified Tertiary Matriculation Examination (UTME) and Post Unified
Tertiary Matriculation Examination (PUTME)
    </li>
    <li>
    In addition to requirement (1), candidates seeking admission by direct entry
must have passes in Maths, Physics and Chemistry at GCE ‘A’ level or
equivalent.
    </li>
  </ol>
  <div>
    <h5>
    Departmental Admission Requirement

    </h5>
    <hr width='350px'/>
  </div>
  <div>
    <p>
    Requirements for admission into Electrical and Electronics Engineering
programme are guided by the University policy on admission and in
accordance with the NUC guidelines.
    </p>
    <div>
    {/* <ol type='a' className='ps-2'>
        <li>
        Provision of broad based academic and practical training to achieve mastery
in Electrical and Electronics Engineering concepts;

        </li>
        <li>
        To provide a wide range of quality learning opportunities for students in
Electrical and Electronics Engineering without distinction of race, creed, sex,
religious or political conviction such that will enhance their best intellectual,
social and personal development;

        </li>
        <li>
        To provide academic, professional and vocational training of high quality in
Electrical and Electronics Engineering, in such a way as to enrich and improve
the state, national and international human resources capabilities and assist
its graduates to contribute to the common good of society;
        </li>
        <li>
        Training individuals in the standard engineering practices as applicable to the
modern techniques; formulating solutions to the various industrial,
manufacturing, and service delivery problems prevalent in our society;

        </li>
        <li>
        To foster academic research in Electrical and Electronics Engineering, which
contributes to human knowledge and the vitality of the institution;
        </li>
        <li>
        To evolve academic programmes in Electrical and Electronics Engineering to
suit the changing social and economic needs of society through continuous
review of curricula and development of new programmes to respond to
societal and technological changes in Osun State in particular, Nigeria and the
world in general.
        </li>
    </ol> */}
    <h5>
    U.T.M.E. Requirements
    </h5>
    <hr />
    <p>
    To qualify for admission into the programme in the Department, a candidate
must possess at least five (5) credit passes in SSCE or NECO (O’ Level),
obtained at not more than two sittings, which must include the following
subjects: English Language, Mathematics, Physics, Chemistry and any other
Science subject.
Candidates with acceptable passes in the Pre-Degree Programme Examination
of the Osun State University and that have an acceptable pass in the UTME
may also be admitted into the 5-year degree programme of the Department.

    </p>
    <h5>
    Direct Entry Requirements
    </h5>
    <hr />
    <p>
    Candidates with passes at the Advanced Level (A-Level) in relevant subjects,
which must include Mathematics, Physics and Chemistry and those with OND
(Upper Credit) and HND (minimum of Lower Credit) from any higher
institution recognized by the University Senate may be admitted into the 200-
level, provided such candidate fulfill the UTME admission requirements of the
Department. In addition, HND holder (with minimum of Upper Credit) may be
admitted into 300 level.

    </p>

    <h5>
    Post UTME Screening
    </h5>
    <hr />
    <p>
    All candidates seeking admission into the University shall be required to pass
the University Post UTME Screening test before being admitted
    </p>
    <h5>
    Registration Procedure
    </h5>
    <hr />
    <ol type='a'>
        <li>Students shall normally complete registration at the beginning of the
semester.</li>
<li>
Any addition or deletion from the courses for which a student is formally
registered must be made with the consent of the course coordinator.
</li>
<li>
A students may be allowed to withdraw from a course by the course
administrator before a third of lectures have been given. Such a student who
withdraws after this time or who fails to sit for examination without reasons
acceptable to the appropriate Faculty/College Board shall be deemed to have
failed the course. A grade point of 0 F shall be recorded for the student in the
course.
</li>
<li>
Late registration in the course may be allowed with penalty of up to 4 weeks
after the commencement of registration.
</li>
    </ol>
    <h5>
    Duration of Degree Programmes
<hr />
    </h5>
    <p>
    The minimum duration for the Bachelor of Engineering (B.Eng) programme is
10 semesters. Direct entry candidates with ND and equivalents shall have
minimum duration of 8 semesters while those with HND shall have minimum
duration of 6 semesters. 
    </p>
  </div>
  </div>
  

  {/* <p>
  The Department enjoys modern communication and information technology facilities
available in the University and these are judiciously utilized for teaching and
research. The first set of students graduated from the Department of Electrical and
Electronic Engineering at the end of the 2011/2012 academic session.
  </p> */}
</div>

    </section>
    {/* */}
   <section className='container'>
   <h5>
    Graduation Requirements
    </h5>
    <hr />
    <div class="clearfix">
  <img src=" https://i-cdn.embed.ly/1/display/crop?height=300&key=fd92ebbc52fc43fb98f69e50e7893c13&url=http%3A%2F%2Fadvancement.uniosun.edu.ng%2Fcomponents%2Fcom_community%2Fassets%2Ffrontpage-image.jpg&width=636" class="col-md-6 img-fluid float-md-end mb-3 ms-md-3" alt="..."/>

  <p>
  To qualify for the award of a degree of the Osun State University, a student is
required to have:
  </p>

 <ol type='i'>
    <li>
    registered and passed all compulsory and required courses as well as
the number of elective courses specified for the programme by the
University.
    </li>
    <li>
    completed and met the standards for all compulsory, required and
optional courses.
    </li>
    <li>
    obtained the prescribed minimum CGPA.
    </li>
 </ol>

  <p>
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
  </p>
</div>
   </section>
   {/* general academics rules */}
   <section className='container'>
   {/* <h5>
    Graduation Requirements
    </h5>
    <hr /> */}
    <hr />
    <div class="clearfix">
  <img src=" https://media.licdn.com/dms/image/C4D03AQFpQAeMFR1c3A/profile-displayphoto-shrink_800_800/0/1608916120442?e=2147483647&v=beta&t=s4jyMi3r6qNzAIUhDVaJ7sIhcBTDEj2PO2hV2UShLrM" class="col-md-6 img-fluid float-md-start mb-3 me-md-3" alt="..."/>

<h5>
GENERAL ACADEMIC REGULATIONS
</h5>
<hr />
<h5>
Student Work Load/Contact Hours

</h5>
<hr width="330px"/>
  <p>
  In compliance with the stipulations in the NUC “Course system and Grade
Point Average” document, every full-time student of Osun State University
shall be required to register for a minimum of 18 Credit Units per semester
and a maximum of 24 credit units except for students on field
experience/industrial attachment.
The Credit Unit is used as a measure of course weighting as well as an
indicator of student’s workload. The number of credit hours for the award of a
degree shall be as approved by Senate on the recommendation of the
appropriate Faculty/College Board.
  </p>
  <h5>
  Academic Year and Scheduling
  </h5>
  <hr width="280px"/>

 {/* <ol type='i'>
    <li>
    registered and passed all compulsory and required courses as well as
the number of elective courses specified for the programme by the
University.
    </li>
    <li>
    completed and met the standards for all compulsory, required and
optional courses.
    </li>
    <li>
    obtained the prescribed minimum CGPA.
    </li>
 </ol> */}

  <p>
  The University shall operate a two semester year (Harmattan and Rain
Semesters) for regular courses and a Long Vacation period for vacation
courses. The Harmattan and Rain Semesters shall last for 17 to 18 weeks,
(including registration, teaching and examination period). Not less than 13
weeks shall be devoted to actual teaching with about 2-3 weeks for
examinations.
The College, Faculty and Departmental timetables shall be scheduled such as
to obviate clashes while ensuring adequate coverage of all the courses on
offer at all levels of studies in the University
  </p>

  <h5>
  Instructional Method
  </h5>
  <hr />
  <p>
  The University shall take full advantage of the leverage and versatility
provided by advances in Information & Communication Technologies (ICTs) in
its teaching and learning activities within a learner-centered pedagogic
framework.
Academic staff of the University are being specifically trained on a continuous
basis, in the use of ICT which shall be fully integrated into all facets of the
academic activities in the University. Furthermore, lecturers shall be actively
encouraged to adopt appropriate combinations of instructional methods
(lectures, tutorials, seminars, laboratory/workshop/studio practice) in the
implementation and delivery of the various curricula in the different academic
disciplines to be taught in the University
  </p>
</div>
   </section>
   <section className='container'>
    <h5>
    Assessment and Scoring of Student Performance
    </h5>
    <hr />
    <div>
        <p>
        Student performance in the various courses shall be assessed as follows:
        </p>
    </div>
    <ol type='i'>
        <li>
        Written examinations last for a minimum of one hour for each unit of
course work and a maximum of three hours for a two or more units course
work.
        </li>
        <li>
        The work done in all courses are evaluated by both written examination
and continuous assessment. The continuous assessments are effected
through home assignments, quizzes, tests, seminar paper presentations
and practical / laboratory exercises.
        </li>
        <li>
        For courses which are basically theoretical in nature, the score for
continuous assessment (CA) constitutes 30% of the final grade, while the
continuous assessment of courses which are purely practical in nature
(including project reports) constitutes 50 - 100% of the final grade.
        </li>
        <li>
        The minimum pass mark in any course is 40%.
        </li>
    </ol>
    <div class="row">
        <h5>
        Grading System
        <hr />
        </h5>
        <p>
        The University shall ensure the use of common assessment scale and grading system
for all courses taught throughout the University. The grading system shall be as
indicated in the table below:

        </p>
    <div class="col-sm-5 col-md-6">
        <img src={'grade.png'} className='img-fluid' alt="" />
    </div>
    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
        <img src={'grade1.png'} className='img-fluid' alt="" />
    </div>
  </div>
   </section>
   <section className='container'>
    <h5>
    Academic Standing
    </h5>
    <hr />
    <h5>
    Good Academic Standing
    <hr width="250px" />
    </h5>
    <p>
    The minimum CGPA to proceed from 100 to 200 level shall be 2.0 and the
student must pass at least 75% of the Credit Units in Mathematics, Physics
and Chemistry.
    </p>
    <h5>
    Probation
    <hr width="200px"/>
    </h5>
    <p>
    From 200 to 500 level, the minimum CGPA to proceed to the next level shall
be 1.5. Hence, a student whose CGPA is below 1.5 at the end of a particular
semester goes on probation the following semester.

    </p>

    <h5>
    Withdrawal
    <hr width="200px"/>
    </h5>
    <p>
    A student would be required to withdraw from the University if:
    </p>
    <ol type='i'>
      <li>
      he/she maintains a Cumulative Grade Point Average (CGPA) that is
below 1.5 for two consecutive semesters
      </li>
      <li>
      he/she has spent the maximum period of study allowed for his/her
programme of study and still has one or more courses outstanding.

      </li>
    </ol>

    <h5>
    Termination of Studentship
<hr width="300px" />
    </h5>
    <p>
    A student may have his/her studentship terminated and be required to
withdraw from the University if he/she fails to register for the required
minimum number of courses/units of instruction for two consecutive
semesters without due approval.
    </p>
    <h5>
    Semester Examination
    <hr width="
    250px"/>
    </h5>
    <p>
    Each course shall normally be completed and examined at the end of each
semester in which it is offered. The examination shall be conducted as
prescribed by Senate.

    </p>
    <h5>
    Dissatisfaction with Examination Result
    <hr width="350px" />
    </h5>
    <ol type='i'>
      <li>A student who is dissatisfied with the result of an examination affecting
him/her may request for a review by submission of an application to the
Senate through the Principal Assistant Registrar (Academic) of the
university within three (3) weeks of release of the said result.</li>
<li>
The senate of the university has the full prerogative to, or not to, effect
any amendment of the said result after the cross examination of it.
</li>
<li>
Any student with frivolous, ill motivated or speculative complaint(s) on
result(s) shall be sanctioned.
</li>
    </ol>
    <h5>
    Transfer
    </h5>
    <hr width="100px"/>
    <p>
    Any student who seeks transfer from the university to another is free to do
so. Request for transcript for this and any other relevant purpose should be
directed to the Admission Officer on fulfilment of every necessary
requirement.
    </p>
   </section>
    </div>
  )
}

export default About