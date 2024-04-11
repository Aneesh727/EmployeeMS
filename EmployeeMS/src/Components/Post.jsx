import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";


const Post = () => {
    const [post, setPost] = useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get('http://localhost:3000/auth/post')
        .then(result => {
            if(result.data.Status){
                setPost(result.data.Result);
            } else{
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, []);

    const handleDeleteConfirmation=(id)=>{
      const shouldDelete=window.confirm("Are you sure you want to delete?");
      if (shouldDelete){
        handleDelete(id);
      }
    }
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/delete_post/' + id)
        .then(result => {
          if(result.data.Status){
            Window.Location.relode()
          } else{
            alert("here we got error :  "+result.data.Error)
          }
        })
      }
      
  return (
    <div>
        <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3 style={{color:'white'}}>Post List</h3>
      </div>
      <Link to="/dashboard/addpost" className='btn btn-primary btn-sm' style={{ marginRight: '10px' }}>
        Add Post
      </Link><nbsp></nbsp><nbsp></nbsp><nbsp></nbsp>
      <Link to="/dashboard/gold" className='btn btn-primary btn-sm' style={{ marginRight: '10px' }}>
        Gold
      </Link><nbsp></nbsp><nbsp></nbsp><nbsp></nbsp>
      <Link to="/dashboard/insurance" className='btn btn-primary btn-sm' style={{ marginRight: '10px' }}>
        Insurance
      </Link><nbsp></nbsp><nbsp></nbsp><nbsp></nbsp>
      <Link to="/dashboard/forex" className='btn btn-primary btn-sm' style={{ marginRight: '10px' }}>
        Forex
      </Link><nbsp></nbsp><nbsp></nbsp><nbsp></nbsp>
      <Link to="/dashboard/travel" className='btn btn-primary btn-sm' style={{ marginRight: '10px' }}>
        Travel
      </Link>
      <div className='mt-3'>
        <table style={{background:'none', color:'white'}}>
          <thead>
            <tr>
              <th style={{padding:'', border:'1px solid black'}}>NO.</th>
              <th style={{padding:"1 1rem", border:'1px solid white'}}>TYPE</th>
              <th style={{padding:"1 1rem", border:'1px solid white'}}>SUBTYPE</th>
              <th style={{padding:"1 1rem", border:'1px solid white'}}>TITLE</th>
              <th style={{padding:"1 1rem", border:'1px solid white'}}>POST</th>
              <th style={{padding:"1 1rem", border:'1px solid white'}}>DESCRIPTION</th>
              <th style={{padding:"1 1rem", border:'1px solid white'}}>ACTIONS</th>
              {/* <th>date</th> */}
            </tr>
          </thead>
          <tbody>
            {
              post.map(e => (
                <tr>
                  <td style={{padding:'', border:'1px solid white'}}>{e.post_id}</td>
                  <td style={{padding:"0 1rem", border:'1px solid white'}}>{e.posttype}</td>
                  <td style={{padding:"0 1rem", border:'1px solid white'}}>{e.subtype}</td>
                  <td style={{padding:"0 1rem", border:'1px solid white'}}>{e.title}</td>
                  <td style={{padding:" ", border:'1px solid white'}}>{e.post}</td>
                  <td style={{padding:"0 1rem", border:'1px solid white'}}>{e.descript}</td>
                  {/* <td>{(e.date).split("T")[0]}</td> */}
                  {/* <td>{e.category_name}</td>
                  <td>{e.location}</td>
                  <td>{(e.dob).split("T")[0]}</td>
                  <td>{e.state}</td>
                  <td>{(e.doj).split("T")[0]}</td> */}
                  {/* <td>
                    {/* <img src={`http://localhost:3000/Public/Images/`+e.image} className='employee_image' alt="img" /> */}
                    {/* <img src='D:\Employee MS\Server\Public\Images' alt='path not correct'/> */}
                    {/* <img className='employee_image' src='data:image/jpeg;base64,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'>

                    </img>
                  </td>  */}
                  {/* <td>
                    <button className='btn btn-danger btn-sm me-2' onClick={()=>{

                      handleWorking(e.post_id)
                    }}>Active</button>
                  </td> */}
                  <td style={{padding:"1rem", border:'1px solid white'}}>
                  <td style={{padding:"0 1rem"}}>
                    <Link to={`/dashboard/edit_post/`+e.post_id}  className='btn btn-primary btn-sm me-2'>Edit</Link>
                  </td>
                  <td style={{padding:"0 1rem"}}>
                    <button 
                      className='btn btn-primary btn-sm me-2' 
                      onClick={() => 
                        // console.log("delete call"+e.empId)
                      handleDeleteConfirmation(e.post_id)
                      }>Delete</button>
                  </td>
                  </td>
                  
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Post
