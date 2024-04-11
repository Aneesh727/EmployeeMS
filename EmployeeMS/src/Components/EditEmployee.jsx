import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const EditEmployee = () => {
    const {id} = useParams()
    const [employee, setEmployee] = useState({
        empId: '',
        designation: '',
        name: '',
        grade: '',
        mobile: '',
        email: '',
        category: '',
        location: '',
        dob: '',
        state: '',
        doj: '',
        isActive:'',
    });
    

    const[category, setCategory] = useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get('http://localhost:3000/auth/category')
        .then(result => {
            if(result.data.Status){
                setCategory(result.data.Result);
            } else{
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))

        axios.get('http://localhost:3000/auth/employee/'+ id)
        .then(result=>{
            console.log(result.data.Result)
            console.log(result.data.Result[0])
            console.log(result.data.Result[0].empId)
            console.log ((result.data.Result[0].doj).split("T")[0])
            setEmployee({
                ...employee,
                empId: result.data.Result[0].empId,
                designation: result.data.Result[0].designation,
                name: result.data.Result[0].name,
                grade: result.data.Result[0].grade,
                mobile: result.data.Result[0].mobile,
                email: result.data.Result[0].email,
                category: result.data.Result[0].category,
                location: result.data.Result[0].location,
                dob: (result.data.Result[0].dob).split("T")[0],
                state: result.data.Result[0].state,
                doj: (result.data.Result[0].doj).split("T")[0],
                isActive: result.data.Result[0].isActive,
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_employee/'+ id, employee)
        .then(result => {
            if(result.data.Status){
                navigate('/dashboard/employee')
            }else{
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center">
    <div className="w-50" style={{borderWidth: '10px'}}>
      <h3 className="text-center" style={{color:'white'}}>Edit Employee</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div class='form-inline'>
        <div class='typee' style={{display:'flex', gap:'1rem',width:"100%",marginBottom:'1rem'}}> 
                <div class="container">
                <label for ='empId' style={{color:'white'}}>Employee-ID</label>
                <input type='text'id='inputid' 
                placeholder="Enter Employee ID"
                style={{display:'block', width:'95%'}} 
                value={employee.empId}
                onChange={(e) =>{
                    console.log(employee)
                    setEmployee({...employee,empId:e.target.value})
                    }} required />
                </div>
                <div class='container'>
                <label for ='designation' style={{color:'white'}}>Designation</label>
                <input type='text'id='inputdesg' 
                placeholder="Enter Designation" 
                style={{display:'block', width:'95%'}}
                value={employee.designation}
                onChange={(e) =>{
                    console.log(employee)
                    setEmployee({...employee,designation:e.target.value})
                    }} required />
                </div>
                <div class='container'>
                <label for ='name' style={{color:'white'}}>Name</label>
                <input type='text'id='inputname' 
                placeholder="Enter Employee Name"
                style={{display:'block', width:'95%'}} 
                value={employee.name}
                onChange={(e) =>{
                    console.log(employee)
                    setEmployee({...employee,name:e.target.value})
                    }} required />
                </div>
            </div>
            
            <div class='typee2' style={{display:'flex', gap:'1rem',width:"100%",marginBottom:'1rem'}}>
                <div class='container'>
                <label for ='grade' style={{color:'white'}}>Grade</label>
                <input type='text'id='inputgrade' 
                placeholder="Enter Employee Grade"
                style={{display:'block', width:'95%'}} 
                value={employee.grade}
                onChange={(e) =>{
                    console.log(employee)
                    setEmployee({...employee,grade:e.target.value})
                    }} required />
                </div>

                <div class='container'>
                <label for ='empId' style={{color:'white'}}>Phn-number</label>
                <input type='text'id='inputnumber' 
                placeholder="Enter Employee Contact"
                style={{display:'block', width:'95%'}}
                value={employee.mobile} 
                onChange={(e) =>{
                    console.log(employee)
                    setEmployee({...employee,mobile:e.target.value})
                    }} required />
                </div>

                <div class='container'>
                <label for ='email' style={{color:'white'}}>Email</label>
                <input type='email'id='inputid' 
                placeholder="Enter Employee Email" 
                style={{display:'block', width:'95%'}}
                value={employee.email}
                onChange={(e) =>{
                    console.log(employee)
                    setEmployee({...employee,email:e.target.value})
                    }} required />
                </div>
            </div>
            
            <div class='typee3' style={{display:'flex', gap:'1rem',width:"100%",marginBottom:'1rem'}}>
            <div class='container'>
            <label for ='category' style={{color:'white'}}>Department</label>
            <select name="category" id="category" className="form-select" value={employee.category} 
                    onChange={(e) => setEmployee({...employee, category: e.target.value})}>
                        <option> Select Department </option>
                        {/* <option>None</option>
                        <option>CD</option>
                        <option>IT</option>
                        <option>Dev</option> */}
                        {category.map(c => {
                            return (
                              <>
                              <option key={c.category_id} value={c.category_id}>{c.category_name}</option>
                              </>
                            
                            )
                        })} required
            </select>
            </div>
            <div class='container'>
            <label for ='dob' style={{color:'white'}}>Date-Of-Birth</label>
            <input 
                    type="date"
                    format=""  
                    id="inputdob" 
                    style={{display:'block', width:'95%'}}
                    placeholder='Enter Employee DOB'
                    value={employee.dob}
                    onChange={(e) => setEmployee({...employee, dob: (e.target.value).split("T")[0]})} required />
            </div>
            <div class='container'>
            <label for ='state' style={{color:'white'}}>Branch</label>
            <input type='state'id='inputstate' 
            placeholder="Enter Employee Branch"
            style={{display:'block', width:'95%'}} 
            value={employee.state}
            onChange={(e) =>{
                console.log(employee)
                setEmployee({...employee,state:e.target.value})
                }} required />
            </div>
            </div>

            <div class='typee4' style={{display:'flex', gap:'1rem',width:"100%",marginBottom:'1rem'}}>
                <div class='container'>
                <label for ='dob' style={{color:'white'}}>Date-Of-Joining</label>
                <input 
                        type="date"
                        format=""  
                        id="inputdoj" 
                        style={{display:'block'}}
                        placeholder='Enter Employee DOJ'
                        value={employee.doj}
                        onChange={(e) => setEmployee({...employee, doj: (e.target.value).split("T")[0]})} required />
                </div>
                <div class='container'>
                    <label for ='isActive' style={{color:'white'}}>Working</label>
                    <select name="working" id="inputworking" className="form-select" value={employee.isActive} 
                            onChange={(e) => setEmployee({...employee, isActive: e.target.value})}>
                                <option> Select type </option>
                                <option value="Active">Active</option>
                                <option value="Inactive">In-active</option>
                    </select>
                </div>
            </div>

            <button type="submit" className='btn btn-primary w-100'>
                  Edit Employee
            </button>
          </div>
      </form>
    </div>
  </div>
  )
}

export default EditEmployee;


{/* <div className="d-flex" style={{marginBottom:"10px"}}>
            <div className="col-6" >
                style={{marginRight:"20px"}}>
                <label for='inputid' className="form-label">
                  Employee ID &nbsp; </label>
                  <br></br>
                <input 
                type="number" 
                classname="form-control rounded-0" 
                id="inputid" 
                placeholder='Enter Employee ID'
                value={employee.empId}
                onChange={(e) => {
                   console.log(employee)
                    setEmployee({...employee,empId:e.target.value})
                }
                setEmployee({...employee, empId: e.target.value})
                
                }  required/>
            </div>
            <div className='col-6'>
                <label for='inputdesignation' className="form-label">Designation &nbsp;</label><br></br>
                <input 
                type="text" 
                classname="form-control rounded-0" 
                id="inputdesignation" 
                placeholder='Enter Designation'
                value={employee.designation}
                onChange={(e) => setEmployee({...employee, designation: e.target.value})} required />
            </div>
            <div className='col-6'>
                 style={{marginRight:"20px"}}>
                <label for='inputName' className="form-label">Name &nbsp;</label><br></br>
                <input 
                type="text" 
                classname="form-control rounded-0" 
                id="inputName" 
                placeholder='Enter Name'
                value={employee.name}
                onChange={(e) => setEmployee({...employee, name: e.target.value})} required />
            </div>
        </div>

        <div class="d-flex" 
         style={{marginBottom:"20px"}}>
            <div className='col-6'>
                <label for='inputGrade' className="form-label">Grade &nbsp;</label><br></br>
                <input 
                type="text" 
                classname="form-control rounded-0" 
                id="inputGrade" 
                placeholder='Enter Grade'
                value={employee.grade}
                onChange={(e) => setEmployee({...employee, grade: e.target.value})} required />
            </div>
          
          <div class="d-flex" >
            style={{marginBottom:"20px"}}>
            <div className='col-6'>
                 style={{marginRight:"20px"}}>
                <label for='inputMobile' className="form-label">Mobile No &nbsp;</label><br></br>
                <input 
                type="text" 
                classname="form-control rounded-0" 
                id="inputMobile" 
                placeholder='Enter Mobile-no'
                value={employee.mobile}
                onChange={(e) => setEmployee({...employee, mobile: e.target.value})} required />
            </div>
            <div className='col-6'>
                <label for='inputEmail' className="form-label">Email Id &nbsp;</label><br></br>
                <input 
                type="text" 
                classname="form-control rounded-0" 
                id="inputEmail" 
                placeholder='Enter Email-Id'
                value={employee.email}
                onChange={(e) => setEmployee({...employee, email: e.target.value})} required />
            </div>
        </div>
        
        <div class="d-flex" style={{marginBottom:"20px"}}>
            <div className='col-6' >
            style={{marginRight:"20px"}}>
                <label for='category' className="form-label">Category &nbsp;</label><br></br>
                <select name="category" id="category" className="form-select"
                onChange={(e) => setEmployee({...employee, category: e.target.value})}>
                    {category.map(c => {
                        return <option key={c.category_id} value={c.category_id}>{c.category_name}</option>  //{employee.category}</option>
                    })} required
                </select>
            </div>
        
        <div className="d-flex"> 
        style={{marginBottom:"20px"}}>
            <div className='col-6'>
                <label for='inputLocation' className="form-label">Location &nbsp;</label><br></br>
                <input 
                type="text" 
                classname="form-control rounded-0" 
                id="inputLocation" 
                placeholder='Enter Location'
                value={employee.location}
                onChange={(e) => setEmployee({...employee, location: e.target.value})} required />
            </div>

          <div class="d-flex" style={{marginBottom:"20px"}}>
            <div className='col-6' >
            style={{marginRight:"20px"}}>
                <label for='inputdob' className="form-label">DOB &nbsp;</label><br></br>
                <input 
                type="date" 
                classname="form-control rounded-0" 
                id="inputdob" 
                placeholder='Enter Employee ID'
                value={employee.dob}
                onChange={(e) => setEmployee({...employee, dob: (e.target.value).split("T")[0]})} required />
            </div>
        </div>
        <div className="d-flex" style={{marginBottom:"20px"}}>
            <div className='col-6'>
                <label for='inputstate' className="form-label">Branch &nbsp;</label><br></br>
                <input 
                type="text" 
                classname="form-control rounded-0" 
                id="inputstate" 
                placeholder='Enter State'
                value={employee.state}
                onChange={(e) => setEmployee({...employee, state: e.target.value})} required />
            </div>
    
           <div className='col-6'>
           style={{marginRight:"20px"}}>
              <label for='inputdoj' className="form-label">DOJ &nbsp;</label><br></br>
              <input 
              type="date" 
              classname="form-control rounded-0" 
              id="inputdoj" 
              placeholder='Enter Employee ID'
              value={employee.doj}
              onChange={(e) => setEmployee({...employee, doj: (e.target.value).split("T")[0]})} required />
              </div>
            </div>
         */}

          {/* <div className='col-12 mb-3'>
              <label className="form-label" for='inputGroupFile01'>Profile Picture</label>
              <input 
              type="file" 
              classname="form-control rounded-0" 
              id="inputGroupFile01"
              name="image" 
              onChange={(e) => setEmployee({...employee, image: e.target.files[0]})} />
          </div> */}

          {/* Adding active inactive state of employee */}
{/* 
          <div className='col-12'>
              <label for='inputstate' className="form-label">Status</label>
              <input 
              type="text" 
              classname="form-control rounded-0" 
              id="inputstate" 
              placeholder='Enter Employee ID'
              onChange={(e) => setEmployee({...employee, state: e.target.value})} />
          </div> */}