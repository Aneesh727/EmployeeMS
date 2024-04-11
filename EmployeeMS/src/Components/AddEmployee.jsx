import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        empId: '',
        designation: '',
        name: '',
        grade: '',
        mobile: '',
        email: '',
        category: 0,
        // location: '',
        dob: '',
        state: '',
        doj: '',
        // image: '',
        isActive: '',
        // isActive: 1,
    });
    const[category, setCategory] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=> {
        axios
        .get('http://localhost:3000/auth/category')
        .then((result) => {
            if(result.data.Status){
                setCategory(result.data.Result);
            } else{
                alert(result.data.Error);
            }
        })
        .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        console.log(employee)
         e.preventDefault()
        // let formData = new FormData(form);
        // formData.append('empId', employee.empId);
        // formData.append('designation', employee.designation);
        // formData.append('name', employee.name);
        // formData.append('grade', employee.grade);
        // formData.append('mobile', employee.mobile);
        // formData.append('email', employee.email);
        // formData.append('category', employee.category);
        // formData.append('location', employee.location);
        // formData.append('dob', employee.dob);
        // formData.append('state', employee.state);
        // formData.append('doj', employee.doj);
        // formData.append('image', employee.image);
        // console.log(formData)

        axios.post('http://localhost:3000/auth/add_employee', employee)
        .then(result => {
            // console.log(result)
            if(result.data.Status){
                console.log(result.data)
                navigate('/dashboard/employee')
            }
            else{
                console.log(result.data.Status)
                console.log(result.data.Error+"here you are:")
        }
    })
    .catch(err => console.log(err))
}
return (
    <div className="d-flex justify-content-center ">
      <div className="w-50" style={{borderWidth: '10px'}}>
        <h3 className="text-center" style={{color:'white'}}>Add Employee</h3>
        <form class='form' onSubmit={handleSubmit}>
            <div class="form-inline">

            <div class='typee' style={{display:'flex', gap:'1rem',width:"100%",marginBottom:'1rem'}}> 
                <div class="container">
                <label for ='empId' style={{color:'white'}}>Employee-ID</label>
                <input type='text'id='inputid'
                placeholder="Enter Employee ID"
                style={{display:'block', width:'95%'}} 
                onChange={(e) =>{
                    console.log(employee)
                    setEmployee({...employee,empId:e.target.value})
                    }} required />
                </div>
                <div class='container' style={{display:'block'}}>
                <label for ='designation' style={{color:'white'}}>Designation</label>
                <input type='text'id='inputdesg' 
                placeholder="Enter Designation"
                style={{display:'block', width:'95%'}} 
                onChange={(e) =>{
                    console.log(employee)
                    setEmployee({...employee,designation:e.target.value})
                    }} required />
                </div>
                <div class='container'>
                <label for ='name' style={{color:'white'}}>Name</label>
                <input type='text'id='inputname' 
                placeholder="Enter Employee Name" style={{display:'block', width:'95%'}}
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
                style={{display:'block', width:'95%'}}
                placeholder="Enter Employee Grade" 
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
                onChange={(e) =>{
                    console.log(employee)
                    setEmployee({...employee,email:e.target.value})
                    }} required />
                </div>
            </div>
            
            <div class='typee3' style={{display:'flex', gap:'1rem',width:"100%",marginBottom:'1rem'}}>
            <div class='container'>
            <label for ='category'style={{color:'white'}}>Department</label>
            <select name="category" id="category" className="form-select" 
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
                    style={{display:'block', width:'80%'}}
                    placeholder='Enter Employee DOB'
                    onChange={(e) => setEmployee({...employee, dob: (e.target.value).split("T")[0]})} required />
            </div>
            <div class='container'>
            <label for ='state' style={{color:'white'}}>Branch</label>
            <input type='state'id='inputstate' 
            placeholder="Enter Employee Branch"
            style={{display:'block', width:'95%'}} 
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
                        placeholder='Enter Employee DOJ'
                        style={{display:'block', width:'55%'}}
                        onChange={(e) => setEmployee({...employee, doj: (e.target.value).split("T")[0]})} required />
                </div>
                <div class='container'>
                    <label for ='isActive' style={{color:'white'}}>Working</label>
                    <select name="working" id="inputworking" className="form-select" 
                            onChange={(e) => setEmployee({...employee, isActive: e.target.value})}>
                                <option> Select type </option>
                                <option value="Active">Active</option>
                                <option value="Inactive">In-active</option>
                    </select>
                </div>
            </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
                Add Employee
            </button>
        {/* // className="row g-1 w-55" id="form" 
        // style={{margin:"50px auto auto auto", marginRight: "100px"}} 
        // onSubmit={handleSubmit}> */}
            {/* <div class="d-flex" style={{marginBottom:"10px"}}> */}
                {/* <div className="col-6" >
                    {/* style={{marginRight:"20px"}}> */}
                    {/* <label for='inputid' className="form-label">
                        Employee ID</label><br></br>
                    <input 
                    type="text" 
                    classname="form-control rounded-0" 
                    id="inputid" 
                    placeholder='Enter Employee ID'
                    onChange={(e) => {
                       console.log(employee)
                    setEmployee({...employee,empId:e.target.value})
                    }
                    setEmployee({...employee, empId: e.target.value})
                    
                    } required/> */}
                {/* // </div> */}
                {/* <div className='col-6'> 
                style={{marginRight:"10px"}}>
                    <label for='inputdesignation' className="form-label">Designation</label><br></br>
                    <input 
                    type="text" 
                    classname="form-control rounded-0" 
                    id="inputdesignation" 
                    placeholder='Enter Designation'
                    onChange={(e) => setEmployee({...employee, designation: e.target.value})} required />
                </div>
                <div className='col-6'>
                    <label for='inputName' className="form-label">Name</label><br></br>
                    <input 
                    type="text" 
                    classname="form-control rounded-0" 
                    id="inputName" 
                    placeholder='Enter Name'
                    onChange={(e) => setEmployee({...employee, name: e.target.value})} required />
                </div> */}
            {/* </div> */}

            {/* <div class="d-flex" */}
            {/* // style={{marginBottom:"20px"}}> */}
                {/* <div className='col-6'>
                    <label for='inputGrade' className="form-label">Grade</label><br></br>
                    <input 
                    type="text" 
                    classname="form-control rounded-0" 
                    id="inputGrade" 
                    placeholder='Enter Grade'
                    onChange={(e) => setEmployee({...employee, grade: e.target.value})} required />
                </div> */}

                {/* <div className='col-6' >
                 style={{marginRight:"20px"}}>
                    <label for='inputMobile' className="form-label">Mobile-No</label><br></br>
                    <input 
                    type="text" 
                    classname="form-control rounded-0" 
                    id="inputMode" 
                    placeholder='Enter Mobile-no'
                    onChange={(e) => setEmployee({...employee, mobile: e.target.value})} required />
                </div> */}

                {/* <div className='col-6' >
                style={{marginRight:"10px"}}>
                    <label for='inputEmail' className="form-label">Email Id</label><br></br>
                    <input 
                    type="text" 
                    classname="form-control rounded-0" 
                    id="inputEmail" 
                    placeholder='Enter Email-Id'
                    onChange={(e) => setEmployee({...employee, email: e.target.value})} required />
                </div> */}
            {/* </div> */}

            {/* <div class="d-flex" style={{marginBottom:"20px"}}> */}
                {/* <div className='col-6' >
                 {/* style={{marginRight:"20px"}}> */}
                    {/* <label for='category' className="form-label">Category</label><br></br>
                    <select name="category" id="category" className="form-select" 
                    onChange={(e) => setEmployee({...employee, category: e.target.value})}>
                        <option> Select category </option>
                        {/* <option>None</option>
                        <option>CD</option>
                        <option>IT</option>
                        <option>Dev</option> */}
                        {/* {category.map(c => {
                            return (
                              <>
                              <option key={c.category_id} value={c.category_id}>{c.category_name}</option>
                              </>
                            
                            )
                        })} required
                    </select>
                </div>  */} 
                {/* <div className='col-6'>
                    <label for='inputLocation' className="form-label">Location</label><br></br>
                    <input 
                    type="text" 
                    classname="form-control rounded-0" 
                    id="inputLocation" 
                    placeholder='Enter Location'
                    onChange={(e) => setEmployee({...employee, location: e.target.value})} required />
                </div> */}

                {/* <div className='col-6'>
                    <label for='inputdob' className="form-label">DOB</label><br></br>
                    <input 
                    type="date"
                    format="" 
                    classname="form-control rounded-0" 
                    id="inputdob" 
                    placeholder='Enter Employee ID'
                    onChange={(e) => setEmployee({...employee, dob: (e.target.value).split("T")[0]})} required />
                </div> */}
            {/* </div> */}

            {/* <div class="d-flex" style={{marginBottom:"20px"}}> */}
                {/* <div className='col-6'>
                    <label for='inputstate' className="form-label">Branch</label><br></br>
                    <input 
                    type="text" 
                    classname="form-control rounded-0" 
                    id="inputstate" 
                    placeholder='Enter State'
                    onChange={(e) => setEmployee({...employee, state: e.target.value})} required />
                </div>
            

                <div className='col-6'>
                    <label for='inputdoj' className="form-label">DOJ</label><br></br>
                    <input 
                    type="date" 
                    classname="form-control rounded-0" 
                    id="inputdoj" 
                    placeholder='Enter Employee ID'
                    onChange={(e) => setEmployee({...employee, doj: (e.target.value).split("T")[0]})} required />
                </div>
                <div className='col-6' >
                 {/* style={{marginRight:"20px"}}> */}
                    {/* <label for='type' className="form-label">Working-Status</label><br></br>
                    <select name="type" id="active" className="form-select" 
                    onChange={(e) => setEmployee({...employee, isActive: e.target.value})}>
                        <option> Select type </option>
                        <option value="Active">Active</option>
                        <option value="InActive">In-active</option>

                    </select>
                </div>  */}
                {/* <div className='col-6 mb-3'>
                    <label className="form-label" for='inputGroupFile01'>Profile Picture</label><br></br>
                    <input 
                    type="file" 
                    classname="form-control rounded-0" 
                    id="inputGroupFile01"
                    name="image" 
                    onChange={(e) => setEmployee({...employee, image: e.target.files[0]})} required />
                </div> */}
            {/* </div> */}

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
             {/* <div className='col-12'>
                <button type="submit" className='btn btn-success w-100'>
                    Add Employee
                </button>
            // </div>  */}
        </form>
      </div>
    </div>
  )
}

export default AddEmployee
