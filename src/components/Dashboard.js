import React,{useState,useEffect} from 'react';
import {OverlayTrigger,Tooltip,Modal,Button, Offcanvas} from 'react-bootstrap';
import { FaPlus,FaEdit,FaTasks,FaUsers,FaDatabase} from "react-icons/fa";
import { RiDeleteBin5Line} from "react-icons/ri";
import{MdApps} from 'react-icons/md'
import{BsBagCheckFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {NavLink} from 'react-router-dom';
import Header from './Header';
import Fade  from 'react-reveal';
import axios from 'axios';



function Dashboard(props) {
  
  // for displaying the data----
  const [APIData, setAPIData] = useState([]);

   useEffect(() => {
    axios.get(`https://625fecb853a42eaa07fd7020.mockapi.io/users`)
        .then((response) => {
            setAPIData(response.data);
          })}, [])

  // for editing the data----
  const setData = (data) => {
    let { id, employeeName, costCenter, expenseType } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Employee Name', employeeName);
    localStorage.setItem('Cost Center', costCenter);
    localStorage.setItem('Expense Type', expenseType)
}

//  for deleting data-----
const onDelete = (id) => {
  axios.delete(`https://625fecb853a42eaa07fd7020.mockapi.io/users/${id}`)
  .then(() => {
    getData();
})
// console.log(id)
}
 
const getData = () => {
   axios.get(`https://625fecb853a42eaa07fd7020.mockapi.io/users`)
     .then((getData) => {
          setAPIData(getData.data);
       })}
  

// for delete popup---------
const [infoId,setInfoId]=useState("");
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = (info) => {
   setShow(true);
   setInfoId(info);
}


// for OffCanvas-----------
const [show1, setShow1] = useState(false);
const handleClose1 = () => setShow1(false);
const handleShow1 = () => setShow1(true);



  return (
   
    <>
            
        <div className='row'>
            <Header />
            
             <div className='col bg-light m-0 p-0 ' style={{height:"60rem"}}> 
                     
		            <div className='col bg-white d-flex justify-content-between shadow-sm p-2 sticky-top'>
                 <div className='d-lg-none d-xl-none ms-2'>
                    <Button variant='light'  onClick={handleShow1}><GiHamburgerMenu size={25}/></Button>
                 </div>
                  <h5 class="title d-none d-sm-block p-2">Expenses Account Reimbursement</h5>
                        <div className="app-utilities">
			                     <div className="app-utility-item app-user-dropdown dropdown">
                                 <img src='https://www.thefamouspeople.com/profiles/images/paul-walker-2539-3.jpg' id='adminImg'></img>
				                   <a className="dropdown-toggle text-muted text-decoration-none pe-2" id="user-dropdown-toggle" data-bs-toggle="dropdown" role="button" >Paul Walker</a>
                               <ul className="dropdown-menu bg-light text-center mt-3 p-2" aria-labelledby="user-dropdown-toggle">
                                   <li><NavLink to="/"  style={{cursor:'pointer'}} className="text-dark fw-bold text-decoration-none">Logout</NavLink></li>
                               </ul>
                              </div>
                        </div>
                  </div>
                 
                  <Fade top>
                  <div className='row p-4 mx-1'>
                     <div className='col d-flex justify-content-between'>
                         <h4>{props.title}</h4>
                          <div className='buttons rounded'>
                             <NavLink to="/MyWork/AddEar"  style={{cursor:'pointer'}}><button className='btn  btn-sm text-white fw-bold px-2 '><FaPlus size={17}/> New EAR</button></NavLink>
                          </div>
                     </div>
                  </div>
                  <div className='row mx-4'>
                   <div className='col '>
                     
                   <table className="table table-hover mb-1">
								<thead className='thead'>
									<tr>
										<th>Employee Name </th>
										<th>Cost Center</th>
										<th>Expense Type</th>
										<th></th>
									</tr>
								</thead>
               
								<tbody className='bg-white'>
                  {APIData.length > 0 ? APIData.map((data) => (
                    <tr key={data.id}>
                      <td>{data.employeeName}</td>
                      <td>{data.costCenter}</td>
                      <td>{data.expenseType}</td>
                      <td className='text-end pe-3'>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}> 
                                <NavLink to="/MyWork/EditData" style={{cursor:'pointer'}}><FaEdit  className='mx-1  icon' onClick={() => setData(data)}/></NavLink>
                             </OverlayTrigger>
                             <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}> 
                                <a><RiDeleteBin5Line className='mx-2 icon'  onClick={()=>handleShow(data.id) }/></a>
                             </OverlayTrigger>
                      </td>
                      </tr> 
                 )) : <tr><td></td><td className='text-warning fw-bold py-3 text-center'>No Records Found</td><td></td><td></td></tr>} 
								</tbody>
							</table>  
                   </div>
                  </div>
                  </Fade> 
             </div>
            
        </div>
      

           {/* Modal For Delete Button---------------- */}
         
              <Modal show={show} onHide={handleClose} id="deleteModalBox">
                  <Modal.Header closeButton  id="deleteModal">
                     <Modal.Title>Confirmation</Modal.Title>
                  </Modal.Header>
                  <Modal.Body id="deleteModal" >Are You Sure To Delete..?</Modal.Body>
                  <Modal.Footer  id="deleteModal">
                  <a  onClick={handleClose}> <Button variant="success" onClick={ () => {onDelete(infoId) }} >Yes</Button></a>
                   <Button variant="danger" onClick={handleClose}>No</Button>
                  </Modal.Footer>
                </Modal>
          
            {/*Responsive Side Nav-------------  */}
            <Offcanvas show={show1} onHide={handleClose1} {...props} id="offcanvas">
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
                  <NavLink to="/ArchiveDatabase"  activeClassName="active" className='link d-flex'><FaDatabase size={20} className="mx-2"/>Archive Database</NavLink>
               </div>
            </Offcanvas>

             

    </> 
  )
}

export default Dashboard;
