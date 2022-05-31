import React,{useState} from 'react';
import { FaSave,FaTasks,FaUsers} from "react-icons/fa";
import {Button,Offcanvas,Modal} from 'react-bootstrap';
import {TiCancel } from "react-icons/ti";
import {GrStorage } from "react-icons/gr";
import { GiHamburgerMenu} from "react-icons/gi";
import {BsBagCheckFill} from "react-icons/bs";
import {MdApps} from "react-icons/md";
import {NavLink} from 'react-router-dom';
import Header from './Header';
import axios from 'axios';



function AddEar() {

  
  // //Adding input-----------------
  const [employeeName, setEmployeeName] = useState('');
  const [costCenter, setCostCenter] = useState('');
  const [expenseType, setExpenseType] = useState('');
  const [error, setError] = useState('');
  
  const postData = (e) => {
    e.preventDefault();
    if(employeeName==="" && costCenter==="" && expenseType==="") {
      setError("All Fields Are Required to be filled.");
      return false;
    }
    if(employeeName.trim()==="") {
      setError("Employee Name must be Filled.");
      return false;
    }
    if(costCenter===""){
      setError("Please Make A Selection from Cost Center.");
      return false;
    }
    if(expenseType==="") {
      setError("Please Make A Selection from Expense Type");
      return false;
    }
    else{
        axios.post(`https://625fecb853a42eaa07fd7020.mockapi.io/users`, {
        employeeName,
        costCenter,
        expenseType
        })
        handleShow()
        return true;
      }}

// TO get the Date & Time in the form------
  const current = new Date();
  const date = `${current.toLocaleString()}`;
   
// for Add modal------------------------
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
 
// for OffCanvas----------------------
const [show1, setShow1] = useState(false);
const handleClose1 = () => setShow1(false);
const handleShow1 = () => setShow1(true);

  return (
   
    <>
        <div className='row'>
            <Header/>
             <div className='col-lg-10 col-sm bg-light m-0 p-0'>                 
                 <div className='col bg-white d-flex justify-content-between shadow-sm p-3 sticky-top'>
                 <div className='d-lg-none d-xl-none ms-2'>
                    <Button variant='light'  onClick={handleShow1}><GiHamburgerMenu size={25}/></Button>
                 </div>
                  <h5 class="title d-none d-sm-block ps-2">Expenses Account Reimbursement</h5>
                        <div className="app-utilities">
			                     <div className="app-utility-item app-user-dropdown dropdown">
                                 <img src='https://www.thefamouspeople.com/profiles/images/paul-walker-2539-3.jpg' id='adminImg'></img>
				                   <a className="dropdown-toggle text-muted text-decoration-none pe-2" id="user-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Paul Walker</a>
                               <ul className="dropdown-menu bg-light text-center" aria-labelledby="user-dropdown-toggle">
                                   <li><NavLink to="/"  style={{cursor:'pointer'}} className="text-warning text-decoration-none">Logout</NavLink></li>
                               </ul>
                              </div>
                        </div>
                    </div>
                  <form > 
                  <div className='row p-4 mx-1'>
                     <div className='col d-flex justify-content-between'>
                         <h4>Add EAR</h4>
                         <div className='d-flex'>
                           <div className='buttons  rounded mx-1'>
                             <button type='submit' onClick={postData} className='btn  btn-sm px-3 text-white fw-bold'><FaSave size={15} className="mb-1"/> Save</button>
                           </div>
                           <div className='buttons  rounded mx-1 bg-secondary'>
                           <NavLink to="/MyWork" className="cancelbtn"><button className='btn  btn-sm  text-white fw-bold'><TiCancel size={20} className="mb-1"/> Cancel</button></NavLink>
                           </div>
                        </div>
                     </div>
                  </div>

              
                <div class="row g-3 mx-5 my-2 p-3 shadow bg-white rounded">
                              
                             <div class="col-md-3">
                                <label for="" class="form-label">Employee Name<span class="required">*</span></label>
                                <input type="text" class="form-control" name='employeeName' onChange={(e) => setEmployeeName(e.target.value)} required/>
                              </div>
                              <div class="col-md-3">
                                <label for="" class="form-label">Cost Center<span class="required">*</span></label>
                                <select class="form-select form-control" onChange={(e) => setCostCenter(e.target.value)}>
                                    <option selected disabled>Select</option>
                                    <option>PRC</option>
                                    <option>HK</option>
                                    <option>ILO</option>
                                    <option>JBO</option>
                                    <option>JEK</option>
                                    <option>PARLEX HK</option>
                                    <option>PRC-BEHAI</option>
                                  </select>
                                </div>
                             <div class="col-md-3">
                              <label for="" class="form-label">Expense Type<span class="required">*</span></label>
                              <select class="form-select" onChange={(e) => setExpenseType(e.target.value)}>
                                <option selected disabled>Select</option>
                                <option>Business Travel</option>
                                <option>Home Leave</option>
                                <option>Moving & Living</option>
                                <option>Petty Cash</option>
                              </select>
                            </div>
                            <div class="col-md-3">
                                <label for="" class="form-label">Creation Date/Time</label>
                                <p className="form-control-plaintext pt-2">{date}</p>
                              </div>
                             {/*Error Message  */}  
                         {error&&<p className='text-danger fst-italic'>{error}</p>}
                        </div>
                        
                   </form>   
				       
             </div>
            
        </div>

            {/* Modal for Update Status of Data..--------- */}
                  <Modal show={show} id="deleteModalBox">
                  <Modal.Body id="deleteModal" >Data Added Successfully.
                  <NavLink to='/MyWork'  className="cancelbtn"><Button variant="success" className='float-end btn-sm ' onClick={handleClose} >Ok</Button></NavLink>
                  </Modal.Body>
                  </Modal>
            {/*Responsive Offcanvas Side Nav-------------  */}
            <Offcanvas show={show1} onHide={handleClose1} id="offcanvas">
               <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <div className='text-center  '>
                    <img src='../images/je-logo.jpg' className='img-fluid' alt='no img'></img>
                  </div>
                </Offcanvas.Title>
               </Offcanvas.Header>
               <div className='col  border border-right p-0 m-0 shadow ' style={{height:"657px"}}>
                  <NavLink to="/MyWork"  activeClassName="active" className='link d-flex'><FaTasks size={20} className="mx-2"/>   My Work</NavLink>
                  <NavLink to="/MyApplication"  activeClassName="active" className='link d-flex'><MdApps size={20} className="mx-2"/> My Application</NavLink>
                  <NavLink to="/ByStatus"  activeClassName="active" className='link d-flex'><BsBagCheckFill size={20} className="mx-2"/> By Status</NavLink>
                  <NavLink to="/DelegationProfile"  activeClassName="active" className='link d-flex'><FaUsers size={20} className="mx-2"/> Delegation Profile</NavLink>
                  <NavLink to="/ArchiveDatabase"  activeClassName="active" className='link d-flex'><GrStorage size={20} className="mx-2"/>Archive Database</NavLink>
               </div>
            </Offcanvas>

    </>
  )
}

export default AddEar;
