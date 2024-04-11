import React, { useState,useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
// import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarOpen = () => {
        setSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    }
    // console.log("close clicked")


    // const[open, setOpen] = useState(false)

    // useEffect(()=>{
    //     setTimeout(()=>{
    //        setOpen(true)
    //     },1)
    // },[])



    // useEffect(() => {
    //     adjustSidebarHeight();
    //     window.addEventListener('resize', adjustSidebarHeight);
    //     return () => {
    //       window.removeEventListener('resize', adjustSidebarHeight);
    //     };
    //   }, [open]);
    
    //   const adjustSidebarHeight = () => {
    //     const sidebar = document.querySelector('.sidebar');
    //     if (sidebar) {
    //       const documentHeight = document.documentElement.scrollHeight;
    //       sidebar.style.height = open ? `${documentHeight}px` : '100%';
    //     }
    //   };

    
    // const anvigate = useNavigate()
    // axios.defaults.withCredentials = true
    // const handleLogout = () => {
    //     axios.get('http://localhost:3000/auth/logout')
    //     .then(result => {
    //         if(result.data.Status){
    //             anvigate('/adminlogin')
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error during logout:', error);
    //     })
    // }

    // const confirmLogout = () =>{
    //     const shouldLogout = window.confirm("Are you sure you want to logout?");

    //     if (shouldLogout){
    //         handleLogout();
    //     }
    // }


// const useToogle = (initialState) => {
//     const[toggleValue, setToggleValue] = useState(initialState);

//     const toggler = () => {setToggleValue(!toggleValue) };
//     return [toggleValue, toggler]
// };

return (
    <div className='sidebar'>
        <div class='sidebar-side'>
        {!sidebarOpen ? (
            <div className='sidebar_icon' onClick={handleSidebarOpen}>
                <i className='bi bi-list'></i>
            </div>
        ) : (
            <>
            <div style={{display:'flex'}}>
            <div className='sidebar_icon' onClick={handleSidebarClose}>
                <i className='bi bi-list'></i>
            </div>
            <div style={{textAlign:'center'}}>
            <img src='./images/paul.jpg' alt='jpg' style={{width:'150px', height:'50px'}} />
                {/* <h2 style={{color:'white'}}><b><i><nbsp><nbsp><nbsp></nbsp></nbsp></nbsp>PML</i></b></h2> */}
            </div>
            </div>
            <div className='sidebar_items'>
                <div className='sidebar_item'>
                <Link to="/dashboard" className='nav-link text-white px-0 align-middle'>
                    <i class="bi bi-speedometer2"></i>
                    <span class="text">Dashboard</span></Link>
                </div>
                <div className='sidebar_item'>
                <Link to="/dashboard/employee" className='nav-link text-white px-0 align-middle'>
                    <i class="bi bi-people"></i>
                    <span class="text">Manage Employees</span>
                </Link>
                </div>
                <div className='sidebar_item'>
                <Link to="/dashboard/category" className='nav-link text-white px-0 align-middle'>
                    <i class="bi bi-inboxes"></i>
                    <span class="text">Department</span>
                </Link>
                </div>
                <div className='sidebar_item'>
                <Link to="/dashboard/post" className='nav-link text-white px-0 align-middle'>
                    <i class="bi bi-file-earmark-post-fill"></i>
                    <span class="text">Post</span>
                </Link>
                </div>
                <div className='sidebar_item'>
                    <Link to="/dashboard/gold" className='nav-link text-white px-0 align-middle'>
                        <i class="bi bi-gem"></i>
                        <span class="text">Gold</span>
                    </Link>
                </div>
                <div className='sidebar_item'>
                <Link to="/dashboard/insurance" className='nav-link text-white px-0 align-middle'>
                    <i class="bi bi-clipboard2-data"></i>
                    <span class="text">Insurance</span>
                    </Link>
                </div>
                <div className='sidebar_item'>
                <Link to="/dashboard/forex" className='nav-link text-white px-0 align-middle'>
                    <i class="bi bi-graph-up-arrow"></i>
                <span class="text">Forex</span>
                </Link>
                </div>
                <div className='sidebar_item'>
                <Link to="/dashboard/travel" className='nav-link text-white px-0 align-middle'>
                    <i class="bi bi-airplane-engines"></i>
                    <span class="text">Travel</span>
                </Link>
                </div>
                <div className='sidebar_item' onClick={handleLogout}>
                <Link className='nav-link text-white px-0 align-middle'>
                    <i class="bi bi-escape"></i>
                    <span class="text">Logout</span></Link>
                </div>
            </div>
        </>
        
        )}</div>
        <div className='col p-0 m-0' id='body'>
                 <div className='p-2 d-flex justify-content-center shadow text-white' id='header'>
                     <h4 id="header-text">Employee Managment System</h4>
                 </div>
                 <Outlet />
        </div>
    </div>


    // <div className='container-fluid'>
    //     <div className='row flex-nowrap' id="body">
    //         <div className= {open? 'sidebar':'sidebarset'} >
    //             <div className='d-flex flex-column align-items-center align-items-sm-start text-white'>
    //                 <div style={{display:'flex', justifyContent: 'space-between',width:'100%'}}>
    //                 <Link to="/dashboard" className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none'>
    //                  <span className='fs-5 fw-bolder d-none d-sm-inline' class="text">PMC</span>
    //                 </Link>
    //                 <i class="bi bi-list" id='icon' onClick={(()=>{setOpen(!open)})}></i>
    //                 </div>
                    
    //                 {/* {toggle && ( */}
    //                 <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start' id='menu'>
    //                     <li className='w-100'>
    //                         <Link to="/dashboard" className='nav-link text-white px-0 align-middle'>
    //                         <i class="bi bi-speedometer2"></i>
    //                             <span className='ms-2 d-none d-sm-inline' class="text"> <nbsp></nbsp><nbsp></nbsp>Dashboard</span></Link>
    //                     </li>
    //                     <li className='w-100'>
    //                         <Link to="/dashboard/employee" className='nav-link px-0 align-middle text-white'><i class="bi bi-people"></i><span className='ms-2 d-none d-sm-inline' class="text"> <nbsp></nbsp><nbsp></nbsp>Manage Employees</span></Link>
    //                     </li>
    //                     <li className='w-100'>
    //                         <Link to="/dashboard/category" className='nav-link px-0 align-middle text-white'><i class="bi bi-inboxes"></i><span className='ms-2 d-none d-sm-inline' class="text"> <nbsp></nbsp><nbsp></nbsp>Category</span></Link>
    //                     </li>
    //                     <li className='w-100'>
    //                         <Link to="/dashboard/profile" className='nav-link px-0 align-middle text-white'><i class="bi bi-person"></i><span className='ms-2 d-none d-sm-inline' class="text"> <nbsp></nbsp><nbsp></nbsp>Profile</span></Link>
    //                     </li>
    //                     <li className='w-100'>
    //                         <Link to="/dashboard/post" className='nav-link px-0 align-middle text-white'><i class="bi bi-file-earmark-post-fill"></i><span className='ms-2 d-none d-sm-inline' class="text"> <nbsp></nbsp><nbsp></nbsp>Post</span></Link>
    //                     </li>
    //                     <li className='w-100'>
    //                         <Link to="/dashboard/gold" className='nav-link px-0 align-middle text-white'><i class="bi bi-gem"></i><span className='ms-2 d-none d-sm-inline' class="text"> <nbsp></nbsp><nbsp></nbsp>Gold</span></Link>
    //                     </li>
    //                     <li className='w-100'>
    //                         <Link to="/dashboard/insurance" className='nav-link px-0 align-middle text-white'><i class="bi bi-clipboard2-data"></i><span className='ms-2 d-none d-sm-inline' class="text"> <nbsp></nbsp><nbsp></nbsp>Insurance</span></Link>
    //                     </li>
    //                     <li className='w-100'>
    //                         <Link to="/dashboard/forex" className='nav-link px-0 align-middle text-white'><i class="bi bi-graph-up-arrow"></i><span className='ms-2 d-none d-sm-inline' class="text"> <nbsp></nbsp><nbsp></nbsp>Forex</span></Link>
    //                     </li>
    //                     <li className='w-100'>
    //                         <Link to="/dashboard/travel" className='nav-link px-0 align-middle text-white'><i class="bi bi-airplane-engines"></i><span className='ms-2 d-none d-sm-inline' class="text"> <nbsp></nbsp><nbsp></nbsp>Travel</span></Link>
    //                     </li>
                        
    //                     <li className='w-100' onClick={handleLogout}>
    //                         <Link className='nav-link px-0 align-middle text-white'>
    //                             <i class="bi bi-escape"></i>
    //                             <span className='ms-2 d-none d-sm-inline' class="text"> <nbsp></nbsp><nbsp></nbsp>Logout</span></Link>
    //                     </li>
    //                 </ul>
    //                 {/* )} */}
                
    //         </div>
    //         </div>
    //         <div className='col p-0 m-0' id='body'>
    //             <div className='p-2 d-flex justify-content-center shadow text-black' id='header'>
    //                 <h4 id="header-text">Employee Managment System</h4>
    //             </div>
    //             <Outlet />
    //         </div>
    //     </div>
    // </div>
  );
}



export default Dashboard;
