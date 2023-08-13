
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    matricnumber: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (localStorage.getItem('users')) {
      const users = JSON.parse(localStorage.getItem('users'));
      const matchedUser = users.find(
        (u) => u.Matricnumber === user.matricnumber && u.Password === user.password
      );

      if (matchedUser) {
        // Successful login
        alert('You are Logged In');
        navigate('/Home');
      } else {
        // Invalid login
        setError('Invalid login details');
      }
    } else {
      // No registered users
      setError('You have not registered. Please register first');
    }
  };

  return (
    <motion.div

    initial={{ opacity: 0 }}  // Initial state is fully transparent
      animate={{ opacity: 1 }}  // Animate to fully opaque
      transition={{ duration: 1 }} // Transition duration in seconds
     style={{backgroundImage:'url(https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_1280.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh'}}>
 {/* <div style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_1280.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh' }}> */}
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
      {/* <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(255,255,255,0.8)' }}> */}
        {/* ... Navbar code ... */}
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
             <li><a class="dropdown-item" href="#">              <Link to='/Abouts'>Department</Link></a></li>
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
       <form class="d-flex" >
         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button class="btn btn-outline-success" type="submit">Search</button>
       </form>
     </div>
   </div>
 </nav>
      {/* </nav> */}
      <section className="container mt-5">
        <form className="row mt-5" onSubmit={handleSubmit}>
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Login</h3>
                <div className="mb-3">
                  <label htmlFor="matricnumber" className="form-label">Matric Number</label>
                  <input type="text" className="form-control" id="matricnumber" name="matricnumber" value={user.matricnumber} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={handleChange} />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <div className="text-center mt-3">
                  <p>Don't have an account? <Link to="/Registers">Register here</Link></p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    {/* </div> */}
    </motion.div>
   
  );
}

export default Login;
