import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Add_Post_Type = () => {
    const [posttype, setPostType] = useState([])
    const navigate = useNavigate()

    // useEffect(() => {
    //     axios
    //     .get('http://localhost:5000/)
    // })

    const handleSubmit= (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/add_post_type', {posttype})
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
                        <label htmlFor="type"><strong>Type:</strong></label>
                        <input type="text" name="type" placeholder='Add Type' 
                        onChange={(e) => 

                            setPostType(e.target.value)
                            
                        }
                            className='form-control rounded-0' />
                    </div>
                    
                    <button type="submit" className='btn btn-success w-100 rounded-0 mb-2'>Add Type</button>
                </form>
            </div>
        </div>
  )
}

export default Add_Post_Type
