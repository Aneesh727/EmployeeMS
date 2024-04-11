import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Category = () => {
    const[category, setCategory] = useState([])
    
    // Get all category data
    // Fetch data when component mounts
    useEffect(()=> {
        axios.get('http://localhost:3000/auth/category')
        .then(result => {
            console.log(result)
            if(result.data.Status){
                setCategory(result.data.Result);
            } else{
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])   //empty array to render the updated 
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3 style={{color:'white'}}>Department List</h3>
        </div>
        <Link to="/dashboard/add_category" className='btn btn-primary btn-sm' style={{float:'right'}}>Add Department</Link>
        <div className='mt-3'>
            <table className='table' 
            style={{backgroundColor:'none'}}>
                <thead>
                    <tr>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.map(c => (
                            <tr>
                                <td>{c.category_name}</td>
                                
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Category
