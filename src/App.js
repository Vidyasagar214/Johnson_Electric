import React from 'react';
import MyWork from './components/MyWork';
import LoginForm from './components/LoginForm';
import AddEar from './components/AddEar';
import {Routes,Route,Redirect} from 'react-router-dom';
import MyApplication from './components/MyApplication';
import ByStatus from './components/ByStatus';
import DelegationProfile from './components/DelegationProfile';
import ArchiveDatabase from './components/ArchiveDatabase';
import EditData from './components/EditData';


function App() {
 
  return (
    <>
   
  <Routes>
       <Route path='' element={<LoginForm/>}></Route>
  </Routes>
  <Routes>
       <Route path='/mywork' element={<MyWork/>}></Route>
       <Route path="/MyApplication" element={<MyApplication/>}></Route>
       <Route path="/ByStatus" element={<ByStatus/>}></Route>
       <Route path="/DelegationProfile" element={<DelegationProfile/>}></Route>
       <Route path="/ArchiveDatabase" element={<ArchiveDatabase/>}></Route>
  </Routes>
  <Routes>
       <Route path='/mywork/addear' element={<AddEar/>}></Route>
       <Route path='/mywork/editdata' element={<EditData/>}></Route>
  </Routes>
  
    </>
  );
}

export default App;
