import React from 'react'

export default function Signup(props) {
  return (
    <section className ="vh-100">
  <div className ="container h-100">
    <div className ="row d-flex justify-content-center align-items-center h-100">
      <div className ="col-lg-12 col-xl-11">
        <div className ="card text-black" >
          <div className ="card-body p-md-5">
            <div className ="row justify-content-center">
              <div className ="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className ="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                 <h4 className='text-center text-danger'>{props.message}</h4>

                 
                <form className ="mx-1 mx-md-4 mb-4" onSubmit={props.register}>

                  <div className ="d-flex flex-row align-items-center mb-4">
                    <i className ="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className ="form-outline flex-fill mb-0">
                      <input name='name' type="text" id="form3Example1c" className ="form-control" />
                      <label className ="form-label" htmlFor ="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className ="d-flex flex-row align-items-center mb-4">
                    <i className ="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className ="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className ="form-control" name='email'/>
                      <label className ="form-label" htmlFor ="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className ="d-flex flex-row align-items-center mb-4">
                    <i className ="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className ="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className ="form-control"name='password' />
                      <label className ="form-label" htmlFor ="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className ="d-flex flex-row align-items-center mb-4">
                    <i className ="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className ="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className ="form-control" name='confirmpassowrd'/>
                      <label className ="form-label" htmlFor ="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                 

                  <div className ="mx-4 mb-lg-4">
                    <button  type="submit" className ="btn btn-primary btn-lg ">Register</button>
                    <button type="button" onClick ={props.switch} className ="btn btn-primary btn-lg mx-4">Login</button>
                    <button type="button" onClick={props.google} className ="btn btn-danger  btn-lg  ms-2 mt-2 px-1">signup With Google</button>
                  </div>
                 

                </form>

              </div>
              <div className ="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className ="img-fluid" alt="Sample image"></img>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
////// signup