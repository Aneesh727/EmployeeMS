import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import SVG from 'react-svg';
// import svgImg from "../assets/ss.svg";
// import svg from '../svg/';
import { BarChart } from 'recharts'
import AnnualReport from './AnnualReport'
import WeeklyReport from './WeeklyReport';
import MonthlyReport from './MonthlyReport';
import { Link, useNavigate } from 'react-router-dom';
import General from './General';
// import {Avatar, AvatarGroup, Box, Button, Grid, List, ListItemAvatar, ListItemButton,
// ListItemSecondaryAction, ListItemText, MenuItem, Stack, TextField, Typography} from '@mui/material';
// import {makeStyles} from '@mui/system';
import { styled } from '@mui/system';

// import { IoIosFunnel } from "react-icons/io";
// import PropTypes from 'prop-types';

// import { RiAdminFill } from "react-icons/ri";
// import { FaUserAlt } from "react-icons/fa";
// import { HiBuildingOffice } from "react-icons/hi2";
// import DonutChart from './DonutChart';
// import {CircularProgress} from '@mui/material';
// import { ClassNames } from '@emotion/react';
// import "~@flaticon/flaticon-uicons/css/all/all";
// import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';

function Home() {
  const [adminTotal, setAdminTotal] = useState()
  const [employeeTotal, setEmployeeTotal] = useState()
  const [branchTotal, setBranchTotal] = useState()
  const [admin, setAdmin] = useState()
  const[graph,setGraph]=useState("annual")
  const [adminName, setAdminName] = useState("Welcome")
  const [activeButton, setActiveButton]=useState('1')
  // const [progress, setProgress] = React.useState(10);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);


  // const[report, setReport]=useState('general')
  // const[weekly,setWeekly]=useState("weekly")
  // const[monthly,setMonthly]=useState("monthly")

  useEffect(() => {
    adminCount();
    employeeCount();
    branchCount();
    // adminC();
  } , [])
  const adminCount = () => {
    axios.get('http://localhost:3000/auth/admin_count')
    .then(result => {
      if(result.data.Status){
        setAdminTotal(result.data.Result[0].admin)
      }
    })
  }
  const employeeCount = () => {
    axios.get('http://localhost:3000/auth/employee_count')
    .then(result => {
      if(result.data.Status){
        setEmployeeTotal(result.data.Result[0].employee)
      }
    })
  }
  const branchCount = () => {
    axios.get('http://localhost:3000/auth/branch_count')
    .then(result => {
      if(result.data.Status){
        setBranchTotal(result.data.Result[0].employee)
      }
    })
  }
  // useEffect(() => {
  //   const fetchAdminNames = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/auth/adminC');
  //       console.log("Response:", response.data);
  //       // Assuming the response is an array of objects with 'name' property
  //       const adminNames = response.data.Result.map(user => user.name);
  //       setAdminName(adminNames);
  //     } catch (error) {
  //       console.error("Error fetching admin names:", error);
  //     }
  //   };
  
  //   fetchAdminNames();
  // }, []);
  

  useEffect(()=>{
    const fetch  = async()=>{
      const d = await axios.get('http://localhost:3000/auth/adminC/email')
  
      console.log("DDDDD", d)
      setAdminName(d.data.Result[0].name)
  
  
      // .then(result => {
      //   console.log("LLLLLLLLLLLLLLLL",adminC.Result[0].name)
      //   if(result.data.Status){
      //     setAdmin(result.data.Result[0].name)
      //   }
      // })
    }
  
    fetch();
  },[])

  // const adminC = () => {
  //   axios.get('http://localhost:3000/auth/adminC/1')
  //   .then(result => {
  //     setAdminName(result.Result[0].name)
  //     console.log("LLLLLLLLLLLLLLLL",adminC.Result[0].name)
  //     if(result.data.Status){
  //       setAdmin(result.data.Result[0].name)
  //     }
  //   })
  // }

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
  //       console.error("Error during logout:", error);
  //     })
  // }

  // const confirmLogout = () =>{
  //   const shouldLogout= window.confirm("Are you sure you want to logout?");

  //   if(shouldLogout){
  //     handleLogout();
  //   }
  // }

  useEffect(() =>{
    handleButtonClick(1);
  }, [])

  const handleButtonClick = (buttonNumber) =>{
    setActiveButton(buttonNumber);
  }

const GraphReport=()=>{
  if(graph==="annual"){
    return <AnnualReport/>
  }
  if(graph==="weekly"){
    return <WeeklyReport/>
  }
  if(graph==="monthly"){
    return <MonthlyReport/>
  }
}

const useStyles = styled((theme) => ({
  progressContainer:{
    position: 'relative',
    display: 'inline-block',
  },
  iconContainer: {
    position: 'absolute',
    top: '30%',
    left: '30%',
    transform: 'translate(-20%, -20%)',
    zIndex: 1,
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: 24,
  },
}));

const classes = useStyles();


// const General=()=>{
//   if(report=="last updated"){
//     return <General />
//   }
//   if(report=="piechart"){
//     return <DonutChart />
//   }
// }
// const notice = () => {
//   const [notification, setNotification] = useState([])
//   useEffect(()=> {
//       axios.get('http://localhost:3000/auth/notification')
//       .then(result => {
//           if(result.data.Status){
//               setNotification(result.data.Result);
//           } else{
//               alert(result.data.Error)
//           }
//       }).catch(err => console.log(err))
//   }, []);

// function CircularProgressWithLabel(props) {
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       <CircularProgress variant='determinate' value={25} size={100} sx={{color: '#e74c3c'}} />
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography variant="caption" component="div" color="text.secondary">
//           {/* {`${Math.round(props.value)}%`} */}
//           <RiAdminFill fontSize={'2.5rem'} />
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// function CircularProgressBar(props) {
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       <CircularProgress variant='determinate' value={59} size={100} sx={{color:'#8CEC2E'}}/>
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography variant="caption" component="div" color="text.secondary">
//           {/* {`${Math.round(props.value)}%`} */}
//           <FaUserAlt fontSize={'2.5rem'} style={{}} />
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// function CircularProgressBaar(props) {
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       <CircularProgress variant='determinate' value={43} size={100} sx={{color:'#FFE033' }}/>
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography variant="caption" component="div" color="text.secondary">
//           {/* {`${Math.round(props.value)}%`} */}
//           <HiBuildingOffice fontSize={'2.5rem'} />
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
// CircularProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate variant.
//    * Value between 0 and 100.
//    * @default 100
//    */
//   value: PropTypes.number.isRequired,
// };




  return (
      <div>
      <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8" style={{marginTop:"1.5rem",display:"flex",justifyContent:"space-around"}}>
        <div class="overflow-hidden shadow d-flex" style={{padding: '1rem', backgroundColor:'#313131', borderRadius:'10px'}}>
          <div style={{margin:'auto', padding:'0.5rem', backgroundColor:'#313131'}}>
            <div className={classes.progressContainer}>
            {/* <CircularProgressWithLabel /> */}
            {/* <div><img src={svgImg} style={{width:'100px', height:'200px'}} /></div> */}
            <div className='admin'>
              {/* <div><img src={svgImg} style={{width:'100px', height:'200px'}} /></div> */}
              <img src='./images/user-white.svg' alt='svg' />
              {/* <ss /> */}
            </div>
            </div>
            {/* <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 4.354a4 4 0 110 5.29M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
            </path>  */}
          </div>
          <div class="d-flex" style={{textAlign:'center', margin:'auto', padding:'0.5rem'}}>
            <h2 class="text-sm tracking-wider" style={{color:'white'}}>Admin:</h2>
          </div>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <p style={{fontSize: '2rem', marginTop:'10px', color:'#f6261e'}}>{adminTotal}</p>
          </div>
        </div>


        {/* <Link to ="/dashboard/employee" */}
        <div class="overflow-hidden shadow d-flex" style={{padding: '1rem', backgroundColor:'#313131', borderRadius:'10px'}}>
          <div style={{margin:'auto', padding:'0.5rem',backgroundColor:'#313131'}}>
            {/* <CircularProgressBar /> */}
            <div className='employee'>
              {/* <div><img src={svgImg} style={{width:'100px', height:'200px'}} /></div> */}
              <img src='./images/employee-white.svg' alt='svg' />
              {/* <ss /> */}
            </div>
            {/* <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 4.354a4 4 0 110 5.29M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
            </path> */}
          </div>
          <div class="d-flex" style={{textAlign:'center', margin:'auto', padding:'0.5rem', color:'black'}}>
            <h2 class="text-sm tracking-wider" style={{color:'white'}}>Employee:</h2>
          </div>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <p style={{fontSize: '2rem', marginTop:'10px', color:'#61fc75'}}>{employeeTotal}</p>
          </div>
        </div>

        {/* </Link> */}
        <div class="overflow-hidden shadow d-flex" style={{padding: '1rem', backgroundColor:'#313131', borderRadius:'10px'}}>
          <div  style={{margin:'auto', padding:'0.5rem', backgroundColor:'#313131'}}>
            {/* <CircularProgressBaar /> */}
            <div className='office'>
              {/* <div><img src={svgImg} style={{width:'100px', height:'200px'}} /></div> */}
              <img src='./images/office-white.svg' alt='svg' />
              {/* <ss /> */}
            </div>
            {/* <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 4.354a4 4 0 110 5.29M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
            </path> */}
          </div>
          <div class="d-flex" style={{textAlign:'center', margin:'auto', padding:'0.5rem'}}>
            <h2 class="text-sm tracking-wider" style={{color:'white'}}>Head-Office:</h2>
          </div>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <p style={{fontSize: '2rem', marginTop:'10px',color:'#feb916'}}>{branchTotal}</p>
          </div>
        </div>


        {/* ADMIN DETIALS CARD */}
        <div class="overflow-hidden shadow d-flex" style={{padding: '1rem', backgroundColor:'#313131', borderRadius:'10px'}}>
          <div style={{margin:'auto', padding:'0.5rem',backgroundColor:'#313131'}}>
            {/* <CircularProgressBar /> */}
            {/* <div className='employee'> */}
              {/* <div><img src={svgImg} style={{width:'100px', height:'200px'}} /></div> */}
              {/* <img src='./images/employee-white.svg' alt='svg' /> */}
              {/* <ss /> */}
            {/* </div> */}
            {/* <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 4.354a4 4 0 110 5.29M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
            </path> */}
          </div>
          <div class="d-flex" style={{textAlign:'center', margin:'auto', padding:'0.5rem', color:'black'}}>
            <h4 class="text-sm tracking-wider" style={{color:'white'}}>Welcome! {JSON.parse(localStorage.getItem('name'))}</h4>
          </div>
          <div className="logout" style={{color:'white', marginTop:'80px'}} onClick={handleLogout}>
                <Link className='nav-link text-white px-0 align-middle'>
                    {/* <i class="bi bi-escape"></i> */}
                    <span class="text" style={{textDecoration:'underline'}}>/Logout</span></Link>
          </div>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <p style={{fontSize: '2rem', marginTop:'10px', color:'#61fc75'}}>{admin}</p>
          </div>
        </div>

        </div>
        <br /><br />

        {/* GRAPH SECTION */}
        <div className='d-flex'>
            <div style={{width:'60%', backgroundColor:'#2b2b2b', borderRadius:'1%', marginLeft:'20px'}}>
              <div>
                <h4 style={{float:'left', color:'white', marginTop:'10px', marginLeft:'60px'}}>PostGraph</h4>
              </div>
              <div style={{float:'right', marginTop:'10px', marginRight:'30px'}}>
                  {/* <Link  className="btn btn-grey btn-rounded" style={{color:'white'}} data-mdb-ripple-init onClick={()=>{
                    setGraph("annual");
                    }}>
                      Annual
                  </Link> <nbsp></nbsp>
                  <Link className="btn btn-grey btn-rounded" style={{color:'white'}} data-mdb-ripple-init onClick={()=>{
                    setGraph("weekly");
                    }}>
                      Weekly
                  </Link> <nbsp></nbsp>
                  <Link className="btn btn-grey btn-rounded" style={{color:'white'}} data-mdb-ripple-init onClick={()=>{
                    setGraph("monthly");
                    }}>
                      Monthly
                  </Link> */}
        <button
          className={`button btn btn-grey btn-rounded ${activeButton === 1 ? 'active' : 'green'}`}
          style={{ color: 'white', backgroundColor: activeButton === 1 ? '#f5c434' : '' }}
          data-mdb-ripple-init
          onClick={() => {
            handleButtonClick(1);
            setGraph("annual");
          }}>
          Annual
        </button>
        <button
          className={`button btn btn-grey btn-rounded ${activeButton === 2 ? 'active' : ''}`}
          style={{ color: 'white', backgroundColor: activeButton === 2 ? '#f5c434' : '' }}
          data-mdb-ripple-init
          onClick={() => {
            handleButtonClick(2);
            setGraph("weekly");
          }}>
          Weekly
        </button>
        <button
          className={`button btn btn-grey btn-rounded ${activeButton === 3 ? 'active' : ''}`}
          style={{ color: 'white', backgroundColor: activeButton === 3 ? '#f5c434' : ''}}
          data-mdb-ripple-init
          onClick={() => {
            handleButtonClick(3);
            setGraph("monthly");
          }}>
          Monthly
        </button>
        </div>
              <div style={{width:'120%', marginTop:'2.5rem'}}>
                <GraphReport/>
              </div>

            </div>

            <div style={{marginLeft:'80px', marginBottom:'20px', backgroundColor:'#313131', border:'1px solid #313131', borderRadius:'3%'}}>
            <Link style={{float:'left', marginBottom:'20px', marginTop:'5px', color:'white'}} className="btn btn-grey btn-rounded" data-mdb-ripple-init 
            // onClick={()=>{
            //   setReport("last updated");
            // }}
            >
              Last Updated Post
            </Link>
            {/* <Link style={{float:'left', marginBottom:'20px', marginTop:'5px'}} className="btn btn-light btn-rounded" data-mdb-ripple-init onClick={()=>{
              setReport("piechart");
            }}>
              Pie Chart
            </Link> */}
            <div style={{marginTop:'60px', backgroundColor:'#2b2b2b'}}>
            <General />
            </div>
            </div>
            {/* <div style={{width:'30%', marginLeft:'80px', marginBottom:'20px'}}>
            backgroundColor:'#f0efef'}}>
            <Link style={{float:'right'}} className="btn btn-light btn-rounded" data-mdb-ripple-init>
              PieChart
            </Link>
            <DonutChart />
            </div> */}
        </div>
     </div>

  )
}

export default Home;





// function Home() {
//   const [adminTotal, setAdminTotal] = useState()
//   const [employeeTotal, setEmployeeTotal] = useState()
//   const [branchTotal, setBranchTotal] = useState()
//   const[graph,setGraph]=useState("annual")
//   // const[weekly,setWeekly]=useState("weekly")
//   // const[monthly,setMonthly]=useState("monthly")

//   useEffect(() => {
//     adminCount();
//     employeeCount();
//     branchCount();
//   } , [])
//   const adminCount = () => {
//     axios.get('http://localhost:3000/auth/admin_count')
//     .then(result => {
//       if(result.data.Status){
//         setAdminTotal(result.data.Result[0].admin)
//       }
//     })
//   }
//   const employeeCount = () => {
//     axios.get('http://localhost:3000/auth/employee_count')
//     .then(result => {
//       if(result.data.Status){
//         setEmployeeTotal(result.data.Result[0].employee)
//       }
//     })
//   }
//   const branchCount = () => {
//     axios.get('http://localhost:3000/auth/branch_count')
//     .then(result => {
//       if(result.data.Status){
//         setBranchTotal(result.data.Result[0].employee)
//       }
//     })
//   }
// const GraphReport=()=>{
//   if(graph==="annual"){
//     return <AnnualReport/>
//   }
//   if(graph==="weekly"){
//     return <WeeklyReport/>
//   }
//   if(graph==="monthly"){
//     return <MonthlyReport/>
//   }
// }

// // const notice = () => {
// //   const [notification, setNotification] = useState([])
// //   useEffect(()=> {
// //       axios.get('http://localhost:3000/auth/notification')
// //       .then(result => {
// //           if(result.data.Status){
// //               setNotification(result.data.Result);
// //           } else{
// //               alert(result.data.Error)
// //           }
// //       }).catch(err => console.log(err))
// //   }, []);


//   return (
//     <div>
//       <div className='p-3 d-flex justify-content-around mt-3'>
//         <div className='px-2 pt-2 pb-2 w-25' id='admin'>
//           <div className='text-center pb-1'>
//             <h4 id="card">Admin</h4>
//           </div>
//           <hr />
//           <div className='d-flex justify-content-between'>
//             <h5 id="card">Total:</h5>
//             <h5 id="card">{adminTotal}</h5>
//           </div>
//         </div>
//         <div className='px-2 pt-2 pb-2 w-25' id='employee'>
//           <div className='text-center pb-1'>
//             <h4 style={{overflow:"hidden"}} id="card">Employee</h4>
//           </div>
//           <hr />
//           <div className='d-flex justify-content-between'>
//             <h5 id="card">Total:</h5>
//             <h5 id="card">{employeeTotal}</h5>
//           </div>
//         </div>
//         <div className='px-3 pt-2 pb-3 border shadow-sm w-25' id='head-office'>
//           <div className='text-center pb-1'>
//             <h4 id="card">Head-Office</h4>
//           </div>
//           <hr />
//           <div className='d-flex justify-content-between'>
//             <h5 id="card">Total:</h5>
//             <h5 id="card">{branchTotal}</h5>
//           </div>
//         </div>
//       </div>
//       <br></br>
//       <div className='graph'> 
//       {/* style={{width:"100%"}}> */}
//       {/* style={{width:"0%"}}> */}
//         <div 
//           style={{width:"140%"}}>
//           <Link  className='btn btn-primary btn-sm' id='button' onClick={()=>{
//             setGraph("annual");
//           }}>
//             Annual
//           </Link> <nbsp></nbsp>
//           <Link className='btn btn-primary btn-sm' id='button1' onClick={()=>{
//             setGraph("weekly");
//           }}>
//             Weekly
//           </Link> <nbsp></nbsp>
//           <Link className='btn btn-primary btn-sm' id='button2' onClick={()=>{
//             setGraph("monthly");
//           }}>
//             Monthly
//           </Link> 
//           <div>
//           <GraphReport/>
//           </div>
//         </div>
        
//         {/* <div className='notification'
//           style={{width:"30%"}}> 
//           {/*<table class="table table-striped">
//             <thead>
//               <tr>
//                 <th>{notification}</th>
//               </tr>
//             </thead>
//             <tbody>
//               {
//                 notification.map(e =>(
//                   <tr>
//                     <td>{e.descript}</td>
//                   </tr>
//                 ))
//               }
//             </tbody>
//           </table> */}
//           {/* <div style={{width:'30%'}}>
//             <General/>
//           </div>  */}
          
//         </div>
//       </div>

//     // </div> 
    
//   )
// }

// export default Home;
