import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
    const [category, setCategory] = useState([])
    const navigate = useNavigate()

    // useEffect(() => {
    //     axios
    //     .get('http://localhost:5000/)
    // })

    const handleSubmit= (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/add_category', {category})
        .then(result => {
            if(result.data.Status){
                
                navigate('/dashboard/category')
            }else{
                alert("Field already in table")
            }
        })
        .catch(err => console.log(err))

        console.log(category)
    }

    // const addcategori= () => {
    //    console.log(category)
    // //    setCategory(category.filter((item)=> item != category))
    // }
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
            <div className='p-3 rounded w-25 border'>
                <h2 style={{color:'white'}}>Add Category</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="category" style={{color:'white'}}><strong>Department:</strong></label>
                        <input type="text" name="category" placeholder='Add Category' 
                        onChange={(e) => 

                            setCategory(e.target.value)
                            
                        }
                            className='form-control rounded-0' />
                    </div>
                    
                    <button type="submit" className='btn btn-primary w-100 rounded-0 mb-2'>Add Department</button>
                </form>
            </div>
        </div>
  )
}

export default AddCategory
