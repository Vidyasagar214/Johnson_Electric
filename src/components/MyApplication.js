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
import ReactBootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'; 




function MyApplication() {

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


const columns = [
  {
    dataField: "employeeName",
    text: "Employee Name",
    sort:true,
    
    headerStyle: { backgroundColor: 'bisque' }
  },
  {
    dataField: "costCenter",
    text: "Cost Center",
    sort: true ,
    headerStyle: { backgroundColor: 'bisque' }
  },
  {
    dataField: "expenseType",
    text: "ExpenseType",
    sort:true,
    headerStyle: { backgroundColor: 'bisque' }

  },
  {
    dataField: "employeeName",
    text:"",
    filter: textFilter({
      placeholder: 'Search The Employee',
      
    })  ,
    headerStyle: { backgroundColor: 'bisque' },
    formatter: (data, index) => {
      return (
        <>
        <div className='text-end'>
         <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}> 
             <NavLink to="/MyWork/EditData" style={{cursor:'pointer'}}><FaEdit  className='mx-2 icon' onClick={() => setData(data)}/></NavLink>
          </OverlayTrigger>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}> 
             <a><RiDeleteBin5Line className='mx-2 icon'  onClick={()=>handleShow(index.id)}/></a>
          </OverlayTrigger>
          </div>
       </>
      );
    },
  },
];
const defaultSortedBy = [{
    dataField: "employeeName",
    order: "desc"
  }];

return (
  <>
          
      <div className='row'style={{height:"50rem"}}>
          <Header />
           <div className='col bg-light m-0 p-0 '>      
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
                       <h4>My Application</h4>
                        <div className='buttons rounded'>
                           {/* <NavLink to="/MyWork/AddEar"  style={{cursor:'pointer'}}> */}
                             <button className='btn  btn-sm text-white fw-bold px-2 '><FaPlus size={17}/> New EAR</button>
                             {/* </NavLink> */}
                        </div>
                   </div>
                </div>
                <div className='row mx-4'>
                 <div className='col'>

        {/* Table for Displaying Data------------------------------ */}
               <ReactBootstrapTable
                   keyField="employeeName"
                   bootstrap4
                   striped
                   hover
                   data={APIData}
                   columns={columns}
                   rowStyle={ { backgroundColor: 'white',borderOutline:'none' } }
                   filter={ filterFactory() }
                   pagination={ paginationFactory({
                    withFirstAndLast: false, // hide the going to first and last page button
                    alwaysShowAllBtns: true, // always show the next and previous page button
                    firstPageText: 'First', // the text of first page button
                    prePageText: 'Prev', // the text of previous page button
                    nextPageText: 'Next', // the text of next page button
                    lastPageText: 'Last', // the text of last page button
                    nextPageTitle: 'Go to next', // the title of next page button
                    prePageTitle: 'Go to previous', // the title of previous page button
                    firstPageTitle: 'Go to first', // the title of first page button
                    lastPageTitle: 'Go to last', // the title of last page button
                    hideSizePerPage: false, // hide the size per page dropdown
                    hidePageListOnlyOnePage: true, // hide pagination bar when only one page, default is false
                    } ) }
                   defaultSorted={defaultSortedBy}
                   />
                 
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
                <NavLink to="/ArchiveDatabase"  activeClassName="active" className='link d-flex'><FaDatabase size={20} className="mx-2"/>Archive Database</NavLink>
             </div>
          </Offcanvas>

           

  </> 
)
}

export default MyApplication