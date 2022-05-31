import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {FaTasks,FaUsers,FaDatabase} from "react-icons/fa";
import { MdApps} from "react-icons/md";
import {BsBagCheckFill} from "react-icons/bs";
import {NavLink} from 'react-router-dom';



function Header() {
  return (
    <>


            <div className='col-2 pt-2 border border-right p-0 m-0 shadow d-none d-lg-block d-xl-block ' >
               
               <div className='text-center p-3 '>
                  <img src='../images/je-logo.jpg' className='img-fluid' alt='no img'></img>
               </div>
                <ListGroup variant="flush" className='text-start ps-2 a1'>
                  <NavLink to="/MyWork"  activeClassName="active" className='link '><FaTasks size={20} className="mx-2"/>   My Work</NavLink>
                  <NavLink to="/MyApplication"  activeClassName="active" className='link '><MdApps size={20} className="mx-2"/> My Application</NavLink>
                  <NavLink to="/ByStatus"  activeClassName="active" className='link '><BsBagCheckFill size={20} className="mx-2"/> By Status</NavLink>
                  <NavLink to="/DelegationProfile"  activeClassName="active" className='link '><FaUsers size={20} className="mx-2"/> Delegation Profile</NavLink>
                  <NavLink to="/ArchiveDatabase"  activeClassName="active" className='link '><FaDatabase size={20} className="mx-2"/>Archive Database</NavLink>
                </ListGroup>
             </div>
            
    </>
  )
}

export default Header