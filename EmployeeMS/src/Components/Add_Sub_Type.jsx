import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Add_Sub_Type = () => {
    const [subtype, setSubType] = useState([])
    const navigate = useNavigate()


    const handleSubmit= (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/add_sub_type', {subtype})
        .then(result => {
            if(result.data.Status){
                
                navigate('/dashboard/post_type')
            }else{
                alert("Field already in table")
            }
        })
        .catch(err => console.log(err))

        console.log(category)
    }
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
            <div className='p-3 rounded w-25 border'>
                <h2>Add Type</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="subtype"><strong>Sub-Type:</strong></label>
                        <input type="text" name="subtype" placeholder='Add SubType' 
                        onChange={(e) => 

                            setSubType(e.target.value)
                            
                        }
                            className='form-control rounded-0' />
                    </div>
                    
                    <button type="submit" className='btn btn-success w-100 rounded-0 mb-2'>Add Type</button>
                </form>
            </div>
        </div>
  
  )
}

export default Add_Sub_Type
