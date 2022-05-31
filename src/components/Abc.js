import React,{useState} from 'react';
import {Form} from 'react-bootstrap';





function Abc() {


 
const adminUser = {
  email:"admin@admin.com",
  password:"1234"
}
const [user,setUser] = useState({email:"",password:""});  
const [error,setError] = useState("");
const [details,setDetails] = useState("");

const Login= (details) =>{
  console.log(details);
  if(details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged in");
    setUser({
      email:details.name,
      password:details.password
    })
  }else{
    console.log("invalid Username & password");
    setError("Invalid Email & password")
  }
}

const submitHandler = e =>{
  e.preventDefault();
   
  Login(details);
}


// --------------------------------------------------------------------------
const [email,setEmail]=useState("");
const [emailError,setEmailError]=useState("");

const [password,setPassword]=useState("");
const [passwordError,setPasswordError]=useState("");

const handleEmailChange=(e)=>{
  setEmailError("");
  setEmail(e.target.value);
}
const handlePasswordChange=(e)=>{
  setPasswordError("");
  setPassword(e.target.value);
}

const handleFormSubmit=(e)=>{
   e.preventDefault();
  //  checking if email is empty
  if(email!==""){
    // check for some other condition
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailRegex.test(email)){
      setEmailError("");
      if(email==="admin@admin.com"){
        setEmailError("");
        if(password==="123456"){

        }
        else{
          setPasswordError("Password does not match with the Email.")
        }
      }
      else{
        setEmailError("Email does not match with our Database.")
      }
    }
    else{
      setEmailError("Invalid Email.")
    }
  }
  else{
    setEmailError("Email Required.")
  }
}
  return (
    <>
          <div className='row'>
              <div className='col-lg-6  .d-lg-block'>
                  <img src='../images/background/js-off.jpg' className='img-fluid' alt='no pic'  style={{height:"657px"}}></img>
              </div>

              <div className='col-lg-6 col-sm py-5'>
              <Form onSubmit={submitHandler}>
                    <div className='text-center'>
                      <img src='../images/je-logo.jpg' alt='no pic'></img>
                    </div>
                      <h4 className=' text-center my-4'>Log in</h4>
                     
                    <div className='col-6 m-auto mt-5'>
                    {(error != "") ? (<div className='error m-auto text-muted'><i>{error}</i></div>) : ""}
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email Address" onChange={e=> setDetails({...details, email: e.target.value})} value={details.email}/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Control type="password" placeholder="Password" onChange={e=> setDetails({...details, password: e.target.value})} value={details.password}/>
                      </Form.Group>
                      <Form.Group className="mb-4 text-secondary" controlId="formBasicCheckbox">
                        <small><Form.Check type="checkbox" label="Remember me" /></small>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicButton">
                      
                       <NavLink to="/Dashboard" spy={true} smooth={true} style={{cursor:'pointer'}}><Form.Control className='bg-warning btn-sm' type="submit" value="Log In" /></NavLink>
                      </Form.Group>
                    
                    </div>
                    </Form>
              </div>
          </div>
         

    </>
  )
}

export default Abc;

