import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Post_Type = () => {

    const[posttype, setPostType] = useState([])
    const[subtype, setSubType] = useState([])
    
    // Get all category data
    // Fetch data when component mounts
    useEffect(()=> {
        axios.post('http://localhost:3000/auth/add_post_type')
        .then(result => {
            console.log(result)
            if(result.data.Status){
                setPostType(result.data.Result);
                console.log(posttype)
            } else{
                alert(result.data.Error)
                console.log("error in posttype")
            }
        }).catch(err => console.log(err))

        axios.post('http://localhost:3000/auth/add_sub_type')
        .then(result => {
            // console.log("this error")
            console.log(result)
            if(result.data.Status){
                setSubType(result.data.Result);
            } else{
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    },[])


         

  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>Post Type List</h3>
        </div>
        <Link to="/dashboard/add_post_type" className='btn btn-success btn-sm'>Add Post Type</Link> <nbsp></nbsp> <nbsp></nbsp>
        <Link to="/dashboard/add_sub_type" className='btn btn-success btn-sm'>Add sub-Post Type</Link>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Sub-Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posttype.map(p => (
                            <tr>
                                <td>{p.type}</td>
                                
                            </tr>

                        ))
                    }
                    {
                        subtype.map(s => (
                            <tr>
                                <td>{s.subtype}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Post_Type
