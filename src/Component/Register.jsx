import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
function Register() {
  const [user,setUser]=useState({
    Matricnumber:'',
    Level:'',
    RepeatPassword: '',
    Password:''
  });
  const [errors,setErrors]=useState({});
  const submitData=(e)=>{
    e.preventDefault();
    const newErrors={};
    
    if(user.Matricnumber.trim()== ''){
      newErrors.MatricnumberErr='Your Matric Number is Required'
    }
    if (user.Password.trim() === '') {
      newErrors.PasswordErr = 'Your Password is required';
    }
    
    if (user.RepeatPassword.trim() === '') {
      newErrors.RepeatPasswordErr = 'Your Password is required';
    }
    if (user.Level.trim() === '') {
      newErrors.LevelErr = 'Your Level is required';
    }
    if (user.Password.trim().length != user.RepeatPassword.trim().length){
      newErrors.RepeatPasswordErr='Passwords do not match';
    
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    }
    else {
      let users = [];
      if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
      }

      users.push(user);
      const dataUsers = JSON.stringify(users);
      localStorage.setItem('users', dataUsers);
    }
  }
  return (
    <div style={{backgroundImage:'url(https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_1280.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'120vh'}}>
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
<section className='rew container mt-5'>
<form action="" className='rat'  onSubmit={submitData}>
<div className='rode mt-5' style={{maxWidth:'500px',margin:'auto'}}>
    <div className='root text-center'>
        <img src="https://uniosun.edu.ng/templates/uniosun/images/styling/green/logo.png" className='w-75 img-fluid' alt="" />
    <h1 className='text-center text-light'>
        Register
    </h1>
    </div>
<div class="form-floating my-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="Matricnumber"
   onChange={(e) => {
    setUser({ ...user, Matricnumber: e.target.value });
  }}/>
  <label for="floatingInput" htmlFor="Matricnumber">Matric Number</label>
  {errors.MatricnumberErr && <span style={{ color: 'red' }}>{errors.MatricnumberErr}</span>}
</div>
{/* <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="leve"/>
  <label for="floatingInput">Email address</label>
</div> */}
<select class="form-select my-3" aria-label="Default select example" htmlFor="Level"
 onChange={(e) => {
  setUser({ ...user, Level: e.target.value });
}}>
  <option selected>Select Your Level</option>
  <option value="200 Level">200 level</option>
  <option value="300 Level">300 level</option>
  <option value="400 Level">400 level</option>
  <option value="500 Level">500 level</option>
</select>
{errors.LevelErr && <span style={{ color: 'red' }}>{errors.LevelErr}</span>}

<div class="form-floating">
                 <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                  onChange={(e)=>{
                     setUser({...user, Password:e.target.value})
                   }}/>
                    <span style={{color:'red'}}>
                             {errors.PasswordErr}

                             </span>
                 <label for="floatingPassword" name='Password'>Password</label>
                 </div>
                 <div class="form-floating mt-3">
                 <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                  onChange={(e)=>{
                     setUser({...user, RepeatPassword:e.target.value})
                   }}/>
                    <span style={{color:'red'}}>
                             {errors.RepeatPasswordErr}

                             </span>
                             {/* <span>
                              {newRepeat}
                             </span> */}
                 <label for="floatingPassword" name='RepeatPassword'>RepeatPassword</label>
                 </div> 
<div class="col-12 text-center">
    <button class="btn btn-success my-3" type="submit">Register</button>
  </div>
</div>
</form>
</section>
    </div>
  )
}

export default Register