// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// // import ToggleButton from './ToggleButton';



// const Employee = () => {
//   // const[isActive, setIsActive] = useState()
//   const [employee, setEmployee] = useState([])
//   const navigate = useNavigate()
//   const [open, setOpen] = useState(true);

//   const [empId,setEmpId] = useState("");
//   useEffect(()=> {
//     axios.get('http://localhost:3000/auth/employee')
//     // fetchEmployees();
//     .then(result => {
//         if(result.data.Status){
//             setEmployee(result.data.Result);
//             // setIsActive()
//         } else{
//             alert(result.data.Error)
//         }
//     }).catch(err => console.log(err))
// }, []);






// const handleDelete = (id) => {
//   axios.delete('http://localhost:3000/auth/delete_employee/' + id)
//   .then(result => {
//     if(result.data.Status){
//       Window.Location.relode()
//     } else{
//       alert("here we got error :  "+result.data.Error)
//     }
//   })
// }



// // const handleWorking = (id) => {
// //   axios.post('http://localhost:3000/auth/working_employee/' + id)
// //   .then(result => {
// //     if(result.data.Status){
// //       navigate('/dashboard/employee')
// //     } else{
// //       alert("here we got error :" + result.data.Error)
// //     }
// //   })
// // // }
// // const handleWorking = async (id, currentWorkingStatus) => {
// //   try {
//       // Toggle the currentWorkingStatus
//       // const newWorkingStatus = !currentWorkingStatus;

//       // Send the updated value to the server
//       // const response = await axios.put(`http://localhost:3000/auth/working_employee/ {id}`, {
//           // working: newWorkingStatus
//       // });

//      // console.log(response.data);
//       // Handle success, update your UI or perform any necessary actions
// //   } catch (err) {
// //       console.error(err);
// //       // Handle error
// //   }
// // };

// // Example usage
// // const empId = 1; // Replace with the actual employee ID
// // const currentStatus = true; // Replace with the actual current working status

// // handleWorking(empId, currentStatus);



// // const handleActive = (id) => {
// //   active ? setActive(false):setActive(true)
// // }

// const [toggle, setToggle] = useState(null);

// const handleToggle = async () => {
//   console.log("clcikedd", empId)
//   try {
//     // Toggle the state
//     setToggle(!toggle);

//     // Replace with your backend API endpoint
//     const API_URL = `http://localhost:3000/update_employee/${empId}`;

//     // Send a request to the backend to update the employee status
//     const response = await fetch(API_URL, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         // empId: empId,
//         status: toggle ? 0 : 1, // Toggle between 0 (inactive) and 1 (active)
//       }),
//     });

//     if (!response.ok) {
//       // Handle error if necessary
//       console.error('Failed to update employee status');
//     }
//   } catch (error) {
//     console.error('Error updating employee status:', error);
//   }
// };
//   return (
//     <div className='px-5 mt-3'>
//       <div className='d-flex justify-content-center'>
//         <h3>Employee List</h3>
//       </div>
//       <Link to="/dashboard/add_employee" className='btn btn-primary'>
//         Add Employee
//       </Link>
//       <div className='mt-3'>
//         <table style={{backgroundColor:"none"}}>
//           <thead>
//             <tr>
//               <th style={{padding:"0 1rem"}}>EmployeeID</th>
//               <th style={{padding:"0 1rem"}}>Designation</th>
//               <th style={{padding:"0 1rem"}}>Name</th>
//               <th style={{padding:"0 1rem"}}>Grade</th>
//               <th style={{padding:"0 1rem"}}>Mobile</th>
//               <th style={{padding:"0 1rem"}}>Email</th>
//               <th style={{padding:"0 1rem"}}>Category</th>
//               <th style={{padding:"0 1rem"}}>Location</th>
//               <th style={{padding:"0 1rem"}}>DOB</th>
//               <th style={{padding:"0 1rem"}}>State</th>
//               <th style={{padding:"0 1rem"}}>DOJ</th>
//               <th style={{padding:"0 1rem"}}>ProfilePic</th>
//               <th style={{padding:"0 1rem"}}>Working</th>
//               <th style={{padding:"0 1rem"}}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               employee.map(e => (
//                 <tr style={{overflow:'hidden'}}>
//                   <td style={{padding:"0 1rem"}}>{e.empId}</td>
//                   <td style={{padding:"0 1rem"}}>{e.designation}</td>
//                   <td style={{padding:"0 1rem"}}>{e.name}</td>
//                   <td style={{padding:"0 1rem"}}>{e.grade}</td>
//                   <td style={{padding:"0 1rem"}}>{e.mobile}</td>
//                   <td style={{padding:"0 1rem"}}>{e.email}</td>
//                   <td style={{padding:"0 1rem"}}>{e.category_name}</td>
//                   <td style={{padding:"0 1rem"}}>{e.location}</td>
//                   <td style={{padding:"0 1rem"}}>{(e.dob).split("T")[0]}</td>
//                   <td style={{padding:"0 1rem"}}>{e.state}</td>
//                   <td style={{padding:"0 1rem"}}>{(e.doj).split("T")[0]}</td>
//                   <td style={{padding:"0 1rem"}}>
//                     {/* <img src={`http://localhost:3000/Public/Images/`+e.image} className='employee_image' alt="img" /> */}
//                     {/* <img src='D:\Employee MS\Server\Public\Images' alt='path not correct'/> */}
//                     <img className='employee_image' src='data:image/jpeg;base64,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'>

//                     </img>
//                   </td>
//                   <td class='d-flex' style={{padding:"0 1rem"}}>
//                     {/* <div className={open ? 'sidebar' : 'sidebarset'}></div> */}

//                     <div className='toggle-slider' onClick={()=>{
//                       setEmpId(e.empId)
//                       // setToggle(!toogle)
//                     }}>
//                        <input
//           type="checkbox"
//           id="toggle"
//           checked={toggle}
//           onChange={handleToggle}
//         />
//                       <label htmlFor='toggle' className='slider' />
//                     </div>

//                   </td>
//                   <td style={{padding:" 1rem"}}>
//                   <td>
//                     <Link to={`/dashboard/edit_employee/`+e.empId}  className='btn btn-primary btn-sm me-2'>Edit</Link>
//                   </td>
//                   <td>
//                     <button 
//                       className='btn btn-primary btn-sm me-2' 
//                       onClick={() => 
//                         // console.log("delete call"+e.empId)
//                       handleDelete(e.empId)
//                       }>Delete</button>
//                   </td>
//                   </td>

//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Employee;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const [toggle, setToggle] = useState({}); // Use an object to store toggle state for each employee
  const [empId, setEmpId] = useState(""); // Declare the empId state

  useEffect(() => {
    axios.get('http://localhost:3000/auth/employee')
      .then(result => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
          // Initialize toggle state for each employee
      //     const initialToggleState = result.data.Result.reduce((acc, emp) => {
      //       acc[emp.empId] = false;
      //       return acc;
      //     }, {});
      //     setToggle(initialToggleState);
      //   } else {
      //     alert(result.data.Error);
        }
       })
  //     .catch(err => console.log(err));
  }, []);

  const handleDeleteConfirmation = (id) => {
    const shouldDelete = window.confirm("Are you sure you want to delete?");

    if (shouldDelete){
      handleDelete(id);
    }
  };
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/auth/delete_employee/${id}`)
      .then(result => {
        if (result.data.Status) {
          window.location.reload(); // Reload the page after successful deletion
        } else {
          alert(`Error: ${result.data.Error}`);
        }
      })
      .catch(error => console.error('Error deleting employee:', error));
  };


  // const handleToggle = async (empId) => { // Modify the function to take empId as a parameter
  //   try {
  //     // Toggle the state for the specific employee
  //     setToggle((prevToggle) => ({
  //       ...prevToggle,
  //       [empId]: !prevToggle[empId],
  //     }));

  //     // Replace with your backend API endpoint
  //     const API_URL = `http://localhost:3000/auth/update_employee/${empId}`;

  //     // Send a request to the backend to update the employee status
  //     const response = await fetch(API_URL, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         isActive: !toggle[empId] ? 1 : 0, // Toggle between 0 (inactive) and 1 (active)
  //       }),
  //     });

  //     if (!response.ok) {
  //       // Handle error if necessary
  //       console.error('Failed to update employee status');
  //     }
  //   } catch (error) {
  //     console.error('Error updating employee status:', error);
  //   }
  // };

  // const getEmployeeData = async () => {
  //   axios.get(`http://localhost:3000/auth/employee`)
  //     .then(result => {
  //       console.log("LLLLLLLLLLLLLLLL", result.data)
  //       setEmployee(result.data.Result)
  //     })
  //     .catch(error => console.error('Error fetching employee:', error));
  // }

  // useEffect(() => {
  //   getEmployeeData();
  // }, [])


  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3 style={{color:'white'}}>Employee List</h3>
      </div>
      <div style={{ textAlign: 'right' }}>
        <Link to="/dashboard/add_employee" className='btn btn-primary'>
          Add Employee
        </Link>
      </div>
      <div className='mt-3'>
        <table style={{ padding: '0 1rem', backgroundColor: "none",border:"1px solid black", color:'white'}}>
          <thead>
            <tr>
              <th style={{ padding: "", border:"1px solid white"  }}>EmployeeID</th>
              <th style={{ padding: "", border:"1px solid white"  }}>Designation</th>
              <th style={{ padding: "0 1rem", border:"1px solid white"  }}>Name</th>
              <th style={{ padding: "0 1rem", border:"1px solid white"  }}>Grade</th>
              <th style={{ padding: "0 1rem", border:"1px solid white"  }}>Mobile</th>
              <th style={{ padding: "0 1rem", border:"1px solid white"  }}>Email</th>
              <th style={{ padding: "0 1rem", border:"1px solid white"  }}>Category</th>
              <th style={{ padding: "0 1rem", border:"1px solid white"  }}>DOB</th>
              <th style={{ padding: "0 1rem", border:"1px solid white"  }}>State</th>
              <th style={{ padding: "0 1rem", border:"1px solid white"  }}>DOJ</th>
              <th style={{ padding: "", border:"1px solid white"  }}>Working</th>
              <th style={{ padding: "", border:"1px solid white"  }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              employee.map(e => (
                <tr key={e.empId} style={{ overflow: 'hidden' }}>
                  <td style={{ padding: "",border:"1px solid white" }}>{e.empId}</td>
                  <td style={{ padding: "", border:"1px solid white" }}>{e.designation}</td>
                  <td style={{ padding: "0 1rem", border:"1px solid white" }}>{e.name}</td>
                  <td style={{ padding: "0 1rem",border:"1px solid white" }}>{e.grade}</td>
                  <td style={{ padding: "0 1rem",border:"1px solid white" }}>{e.mobile}</td>
                  <td style={{ padding: "0 1rem",border:"1px solid white" }}>{e.email}</td>
                  <td style={{ padding: "0 1rem",border:"1px solid white" }}>{e.category_name}</td>
                  <td style={{ padding: "0 1rem",border:"1px solid white" }}>{(e.dob).split("T")[0]}</td>
                  <td style={{ padding: "0 1rem",border:"1px solid white" }}>{e.state}</td>
                  <td style={{ padding: "0 1rem",border:"1px solid white" }}>{(e.doj).split("T")[0]}</td>
                  <td style={{ padding: "",border:"1px solid white" }}>{e.isActive}</td>
                    {/* <img src={`http://localhost:3000/Public/Images/`+e.image} className='employee_image' alt="img" /> */}
                    {/* <img src='D:\Employee MS\Server\Public\Images' alt='path not correct'/> */}
                  {/* <td class='d-flex' style={{ padding: "0 1rem" }}>
                    {/* <div className={open ? 'sidebar' : 'sidebarset'}></div> */}

                    {/* <div className='toggle-slider' onClick={()=>{
                       setEmpId(e.empId)
                       setToggle(toggle)
                     }}>
                      
                        <input type="checkbox" id="toggle" checked={toggle} onChange={() => handleToggle(e.empId)} />
                       <label htmlFor='toggle' className='slider' />
                     </div> */}

                    {/* <div className='toggle-slider' onClick={() => {
                      setEmpId(e.empId);
                      setToggle(toggle);
                    }}>
                      <input type="checkbox" id={`toggle-${e.empId}`} checked={toggle[e.empId]} onChange={() => handleToggle(e.empId)} />
                      <label htmlFor={`toggle-${e.empId}`} className={`slider ${toggle[e.empId] ? 'active' : 'inactive'}`}>
                        {e.isActive ? 'Active' : 'Inactive'}
                      </label>
                    </div> */}
                  {/* </td> */}
                  <td style={{ padding: " 1rem", border:"1px solid white" }}>
                    <td>
                      <Link to={`/dashboard/edit_employee/` + e.empId} className='btn btn-primary btn-sm me-2'>Edit</Link>
                    </td>
                    <td>
                      <button
                        className='btn btn-primary btn-sm me-2'
                        onClick={() =>
                          // console.log("delete call"+e.empId)
                          handleDeleteConfirmation(e.empId)}
                      >Delete</button>
                    </td>
                  </td>

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
