import React,{useState} from 'react';
import {Form,Modal} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Fade from 'react-reveal';
import '../App.css'


function LoginForm() {

const navigate= useNavigate();

const adminUser = {
  email:"admin@admin.com",
  password:"1234"
}
const [user,setUser] = useState({email:"",password:""});
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");    
const [error,setError] = useState("");

const submitHandler = e =>{
  e.preventDefault();
  if(email!=="" && password!==""){
  if(email === adminUser.email && password === adminUser.password){
    console.log("Logged in");
    display();
    setError("");
    setUser({email:email,password:password});
    navigation();
    close();
  }
  else
  {
    setError("Email and password not matched");
  }}
  else{
    setError("Email & Password are required");
   
  }
}

function navigation(){
  setTimeout(()=> navigate("/MyWork"),1000)
}

// for Login Success Msg-----------
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
function display(){
  setTimeout(()=> handleShow(),300)
}
function close() {
   setTimeout(() => handleClose(), 1000)
 }



  return (
    <>
  
          <div className='row'>
            <Fade left>
              <div className='col-lg-6 col-md-6 d-none d-lg-block d-md-block text-md-center'>
                  <img src='../images/background/js-off.jpg' className='img-fluid' alt='no pic' style={{height:"657px"}}></img>
              </div>
              </Fade>
              <Fade right>
              <div className='col-lg-6 col-md-6 py-5'>
              <Form onSubmit={submitHandler}  method="POST">
                    <div className='text-center'>
                      <img src='../images/je-logo.jpg' alt='no pic'></img>
                    </div>
                      <h4 className=' text-center my-4'>Log in</h4>
                     
                    <div className='col-6 m-auto mt-5'>
                   
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email Address" onChange={e=> setEmail(e.target.value)} value={email}/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Control type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} value={password}/>
                      </Form.Group>
                      {<div className='error m-auto text-danger mb-2'><i>{error}</i></div>}
                      <Form.Group className="mb-4 text-secondary" controlId="formBasicCheckbox">
                        <small><Form.Check type="checkbox" label="Remember me" /></small>
                      </Form.Group>
                      <Form.Group className="mb-3 buttons rounded" controlId="formBasicButton"> 
                           <Form.Control className='btn  btn-sm text-white fw-bold' type="submit" value="Log In" />
                      </Form.Group>
                    
                    </div>
                    </Form>
              </div>
              </Fade>
          </div>
   
             {/* Modal For Login Success Message---------------- */}
             <Modal show={show} onHide={handleClose} id="deleteModalBox">
                  <Modal.Body id="deleteModal" ><h5 className='text-center pt-2'>Logging In Successfully.</h5></Modal.Body>
                  <Modal.Footer  id="deleteModal">
                  </Modal.Footer>
                </Modal>  
    </>
  )
}

export default LoginForm;

