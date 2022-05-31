import React,{useState,useEffect} from 'react';
import { FaSave} from "react-icons/fa";
import {TiCancel } from "react-icons/ti";
import {NavLink} from 'react-router-dom';
import {Modal,Button} from 'react-bootstrap'
import Header from './Header'
import axios from 'axios';

function EditData() {

    const [id, setID] = useState(null);
   const [employeeName, setEmployeeName] = useState('');
   const [costCenter, setCostCenter] = useState('');
   const [expenseType, setExpenseType] = useState('');
   const [error, setError] = useState('');
  
   const updateAPIData = (e) => {
     e.preventDefault();
     e.preventDefault();
     if(employeeName.trim()==="" || costCenter=="" || expenseType==""){
       setError("Employee Name must not be Empty.");
     }
     else{
    axios.put(`https://625fecb853a42eaa07fd7020.mockapi.io/users/${id}`, {
        employeeName,
        costCenter,
        expenseType
	})
    handleShow();
}}
   useEffect(() => {
    setID(localStorage.getItem('ID'))
    setEmployeeName(localStorage.getItem('Employee Name'));
    setCostCenter(localStorage.getItem('Cost Center'));
    setExpenseType(localStorage.getItem('Expense Type'))
}, []);

// TO get the Date & Time in the form------
const current = new Date();
const date = `${current.toLocaleString()}`;

// for update popup---------
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

 return (
    <>
           <div className='row'>
            <Header/>
             <div className='col-lg-10 col-sm bg-light m-0 p-0'>                 
                 <div className='col bg-white d-flex justify-content-between align-items-center shadow-sm  sticky-top'>
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
                    <form> 
                  <div className='row p-4 mx-1'>
                     <div className='col d-flex justify-content-between'>
                         <h4>Add Ear</h4>
                         <div className='d-flex'>
                           <div className='buttons  rounded mx-1'>
                             <button type='btn'  className='btn buttons btn-sm px-3 text-white fw-bold' onClick={updateAPIData}><FaSave size={15} className="mb-1"  /> Update</button>
                           </div>
                            <div className='buttons  rounded mx-1 bg-secondary'>
                           <NavLink to="/MyWork"style={{cursor:'pointer'}} className="cancelbtn"><button className='btn  btn-sm px-3 text-white fw-bold'><TiCancel size={20} className="mb-1"/> Cancel</button></NavLink>
                           </div>
                        </div>
                     </div>
                  </div>

              
                <div class="row g-3 mx-5 my-2 p-3 shadow bg-white rounded">
                            
                             <div class="col-md-3">
                                <label for="" class="form-label">Employee Name<span class="required">*</span></label>
                                <input type="text" class="form-control" name='employeeName' value={employeeName} onChange={(e) => setEmployeeName(e.target.value)}/>
                              </div>
                              <div class="col-md-3">
                                <label for="" class="form-label">Cost Center<span class="required">*</span></label>
                                <select class="form-select " onChange={(e) => setCostCenter(e.target.value)}  value={costCenter} >
                                    <option selected="" disabled>Select</option>
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
                              <select class="form-select" onChange={(e) => setExpenseType(e.target.value)} value={expenseType}>
                                <option selected disabled>Select</option>
                                <option>Business Travel</option>
                                <option>Home Leave</option>
                                <option>Moving & Living</option>
                                <option>Petty Cash</option>
                              </select>
                            </div>
                            <div class="col-md-3">
                                <label for="" class="form-label">Updated Date/Time</label>
                                <p class="form-control-plaintext pt-2">{date}</p>
                              </div>
                              {<p className='text-danger'>{error}</p>}      {/*Error Message  */}
                        </div>
                   </form>   
				       
             </div>
            
        </div>
                  {/* Modal for Update Status of Data..  */}
                  <Modal show={show} id="deleteModalBox">
                  <Modal.Body id="deleteModal" >Data Updated Successfully.
                  <NavLink to='/MyWork' className="cancelbtn"><Button variant="success" className='float-end' onClick={handleClose} >Ok</Button></NavLink>
                  </Modal.Body>
                  </Modal>

    </>
  )
}

export default EditData