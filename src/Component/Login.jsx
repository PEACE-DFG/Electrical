// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import { useContext } from 'react'
// import { loggedIn } from '../App'
// import { useState } from 'react'

// function Login() {
//   const navigate = useNavigate()

//   function BackR(){
//      navigate('/Registers')
//   }
//   let [isLoggedIn,setIsLoggedIn]=useContext(loggedIn)
//   const[user,setUser]=useState({
//     matricnumber:'',
//     password:''
//   })
//   function getUser(e){
//     let name=e.target.name;
//     let value=e.target.value
//     setUser({
//       ...user,[name]:value
//     })
//   }
//   const submitData=(e)=>{
//     e.preventDefault()
//     if (localStorage.getItem('users')){
//       let users = JSON.parse(localStorage.getItem('users'))
//       let validatedUser= users.filter((value,index)=>{
//         return value.Matricnumber == user.matricnumber && value.Password==user.password
//       })
//       console.log(validatedUser)
//        if (validatedUser.length==0){
//            alert('Invalid Details')
//          }
//       else{
//         {
//           localStorage.length==0?
//           <>
//              {
//               <>
//               {
//                alert('Please register')

//               }
//               </>
//               }
//           </>
//            :
//          <>
//             {
//              <>
//              {
//                alert('You are Logged In')
//              }
//            {
//              navigate('/')
     
//            }</>
//             }
//          </>
//      }
 
//     }     
//     }
//   }
//   function Login(){
//     if(localStorage.length==0){
//       alert('You Have Not Registered, Please register ')
//       navigate('/Registers')
//     }
//     // if (validatedUser.length==0){
//     //   alert('Invalid Details')
//     // }
//     // else
//     // {
//     //   alert('You are Logged In ')
//     //   navigate('/Home')
//     // }
//   }
//   return (
//     <div style={{backgroundImage:'url(https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_1280.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh'}}>
//                      <div style={{backgroundColor:'rgb(91, 150, 2)'}} >
//         <div className='container top text-light'  >
//            <header className='d-flex '>
//            <div className='px-3 py-2'>
//                 <h6>
//                     News Letters
//                 </h6>
//             </div>
//             <div className='px-1 py-2'>
//                 <h6>
//                 <i class="fa-solid fa-location-dot fa-bounce"></i>
//                 </h6>
//             </div>
//             <div className='px-1 py-2'>
//                 <h6>
//                 <i class="fa-solid fa-globe fa-spin"></i>
//                 </h6>
//             </div>

//            </header>

//            <header className='d-flex'>
//             <div className="ice px-1 py-2"><i class="fa-brands fa-facebook fa-fade"></i></div>
//             <div className="ice px-1 py-2"><i class="fa-brands fa-twitter fa-fade"></i></div>
//             <div className="ice px-1 py-2"><i class="fa-brands fa-google fa-fade"></i></div>
//            </header>
//         </div>
//     </div>
//     {/* $$$$$$$$$$$$$$$$$$$$$4444 */}<nav class="navbar  navbar-expand-lg navbar-light " style={{backgroundColor:'rgb(255,255,255,0.8)'}}>
//   <div class="container">
//   <div>
//                 <img src="https://uniosun.edu.ng/templates/uniosun/images/styling/green/logo.png" className='w-75 img-fluid' alt="" />
//             </div>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav m-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">
//             <Link to='/Home' className='Linke'>Home</Link>
//             </a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//            About Us
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="#">              <Link to='/Abouts'>Department</Link></a></li>

//             <li><a class="dropdown-item" href="#">
//               <Link to='/Lecturers'>Lecturers</Link>
//               </a></li>
//             <li><a class="dropdown-item" href="#">
//               <Link to='/SchoolCalender'>School Calender</Link>
//               </a></li>
//             <li><hr class="dropdown-divider"/></li>
//             {/* <li><a class="dropdown-item" href="#">Upcoming Events</a></li> */}
//           </ul>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//            Academics
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="#">Levels Overviews</a></li>
//             <li><a class="dropdown-item" href="#">
//             <Link to='/Courses'>Courses Overviews</Link></a></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><a class="dropdown-item" href="#">Academic Gurus</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link ">Library</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link ">
//             <Link to='/Registers'>Register</Link>
//           </a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link ">
//             <Link to='/Logins'>Login</Link>
//           </a>
//         </li>
//       </ul>
//       <form class="d-flex" onSubmit={submitData}>
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
// <section className='rew container mt-5'>
// <form action="" className='rat'>
// <div className='rode mt-5' style={{maxWidth:'500px',margin:'auto'}}>
//     <div className='root text-center'>
//         <img src="https://uniosun.edu.ng/templates/uniosun/images/styling/green/logo.png" className='w-75 img-fluid' alt="" />
//     <h1 className='text-center text-light'>
//         Login
//     </h1>
//     </div>
// <div class="form-floating my-3">
//   <input type="text" name='matricnumber' class="form-control" id="floatingInput" placeholder="matricnumber" onChange={getUser}/>
//   <label for="floatingInput">Matric Number</label>
// </div>
// {/* <div class="form-floating mb-3">
//   <input type="text" class="form-control" id="floatingInput" placeholder="leve"/>
//   <label for="floatingInput">Email address</label>
// </div> */}
// {/* <select class="form-select my-3" aria-label="Default select example">
//   <option selected>Select Your Level</option>
//   <option value="1">200 level</option>
//   <option value="2">300 level</option>
//   <option value="3">400 level</option>
//   <option value="3">500 level</option>
// </select> */}
// <div class="form-floating">
//   <input type="password" name='password' class="form-control" id="floatingPassword" placeholder="Password" onChange={getUser}/>
//   <label for="floatingPassword">Password</label>
// </div>
// <div class="col-12 text-center">
//     <button class="btn btn-success my-3" type="submit" onClick={Login}>Submit form</button>
//   </div>
// </div>
// <div className='text-center'>
//   <p><i>
//     Don't have an account? <span>Sign Up </span> <span className='text-primary' ><button onClick={BackR} style={{border:'none'}}><u className='text-primary'>Here</u></button></span>
//     </i></p>
// </div>
// </form>

// </section>
//     </div>
//   )
// }

// export default Login
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    <div style={{backgroundImage:'url(https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_1280.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh'}}>
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
    </div>
   
  );
}

export default Login;
