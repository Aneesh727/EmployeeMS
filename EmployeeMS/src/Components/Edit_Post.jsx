import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Edit_Post = () => {
    const {id} = useParams()
    // const[response,setResponse]=useState([])
    const [post, setPost] = useState({
        posttype: '',
        subtype: '',
        title: '',
        post: '',
        descript: '',
        date:''
    });
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };
     useEffect(()=>{
        axios.get(`http://localhost:3000/auth/post/${id}`)
        .then(result=>{
            // post.posttype=result.data.Result[0].posttype;
            // post.subtype=result.data.Result[0].subtype;
            // post.title=result.data.Result[0].title;
            // post.post=result.data.Result[0].post;
            // post.descript=result.data.Result[0].descript;
             setPost(result.data.Result[0])
            
        }).catch(err => console.log(err))
    
     },[id])       
    
    //  console.log(response)
    const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3000/auth/edit_post/${id}`, post)
        .then(result => {
            if(result.data.Status){
                navigate('/dashboard/post')
            }else{
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }

    console.log(post.posttype)
  return (
    <div className="d-flex justify-content-center align-items-center pt-3">
      <div className="p-3 rounded w-50 justify-content-center align-item-center" >
        <h3 className="text-center">Edit Post</h3>
        <form class="post-form" onSubmit={handleSubmit}>
        <div class='form-inline'>
                <div class='type0' style={{display:'flex', gap:'1rem',width:"100%",marginBottom:'1rem'}}>
                    <div class='container'>
                    <label for ='type'>Post-Type</label>
                    <select name="type" id="category" className="form-select" value={post.posttype}
                            onChange={(e) => setPost({...post, posttype: e.target.value})}>
                                <option> Select type </option>
                                <option value="Forex">Forex</option>
                                <option value="Gold">Gold</option>
                                <option value="Insurance">Insurance</option>
                                <option value="Travel">Travel</option>
                    </select>
                    </div>

                    <div class='container'>
                    <label for ='subtype'>Sub-Type</label>
                    <select name="subtype" id="inputsubtype" className="form-select" value={post.subtype}
                            onChange={(e) => setPost({...post, subtype: e.target.value})}>
                                <option> Select type </option>
                                <option value="Post">Post</option>
                                <option value="News">News</option>
                                <option value="Notice">Notice</option>
                                <option value="Circular">Circular</option>
                    </select>
                    </div>
                </div>

                <div class="type01" style={{display:'flex', gap:'1rem',width:"100%",marginBottom:'1rem'}}>
                    <div class='container'>
                    <label for ='date'>Date</label>
                    <input 
                        type="date"
                        format=""  
                        id="inputdate" 
                        placeholder='Enter Date'
                        value={post.date}
                        onChange={(e) => setPost({...post, date: (e.target.value).split("T")[0]})} required />
                    </div>
                    <div class='container'>
                        <label for ='state'>Title</label>
                        <input 
                        type='title'
                        id='inputtitle'
                        placeholder="Enter Title of Post"
                        value={post.title}
                        onChange={(e) =>{
                            console.log(post)
                            setPost({...post,title:e.target.value})
                            }} required />
                    </div>
                </div>

                <div class='type02' style={{display:'flex', gap:'1rem',width:"100%",marginBottom:'1rem'}}>
                    <div class='container'>
                        <label for ='inputGroupFile01'>Post</label>
                        <input 
                        type="file"  
                        id="inputGroupFile01" 
                        name="post"
                        onChange={(e) => setPost({...post, post: (e.target.value)})} required  />
                    </div>
                    <div class='container'>
                        <label for ='descript'>Description</label>
                        <input 
                        type='descript'
                        id='inputdescript'
                        placeholder="Enter Description"
                        value={post.descript}
                        onChange={(e) =>{
                            console.log(post)
                            setPost({...post, descript:e.target.value})
                            }} required />
                    </div>
                </div>

            </div>
            
                <button type="submit" className='btn btn-primary w-100'>
                    Edit Post
                </button>
            
        </form>
      </div>
    </div>
  )
}

export default Edit_Post





{/* // style={{margin:"50px auto auto auto", marginRight: "100px"}} 
        // onSubmit={handleSubmit}>
                // <div className='col-6' >
        //          style={{marginRight:"20px"}}>
        //             <label for='posttype' className="form-label">PostType</label><br></br>
        //             <select */}
        {/* //                     name="posttype"
        //                     id="posttype"
        //                     className="form-select"
        //                     value={post.posttype}
        //                     onChange={handleChange}
        //                     >
        //                     <option value="#">Select Type</option>
        //                     <option value="Forex">Forex</option>
        //                     <option value="Gold">Gold</option>
        //                     <option value="Travel">Travel</option>
        //                     <option value="Insurance">Insurance</option>
        //                 </select>
        //         </div> */}
                {/* <div className='col-6' > */}
                 {/* style={{marginRight:"20px"}}> */}
                     {/* <label for='subtype' className="form-label">Sub-Type</label><br></br> */}
        {/* //</form>                 <select */}
        {/* //                     name="subtype"
        //                     id="subtype"
        //                     className="form-select"
        //                     value={post.subtype}
        //                     onChange={handleChange}
        //                     >
        //                     <option value="#">Select subType</option>
        //                     <option value="Post">Post</option>
        //                     <option value="News">News</option>
        //                     <option value="Circular">Circular</option>
        //                     <option value="Notice">Notice</option>
        //                 </select> */}

        {/* //         </div>
        //         <div className='col-6'>
        //             <label for='inputdob' className="form-label">Date</label><br></br>
        //             <input 
        //             type="date" */}
        {/* //             format="" 
        //             classname="form-control rounded-0" 
        //             id="inputdob" 
        //             placeholder='Enter Employee ID'
        //             onChange={(e) => setPost({...post, dob: (e.target.value).split("T")[0]})} required />
        //         </div> */}
{/* 
        //     <div className='col-6 mb-3'>
        //             <label className="form-label" for='inputGroupFile01'>Post</label><br></br>
        //             <input 
        //             type="file" 
        //             classname="form-control rounded-0" 
        //             id="inputGroupFile01"
        //             value={post.post}
        //             name="image" 
        //             onChange={(e) => setPost({...post, post: e.target.value})} required />
        //     </div> */}
        {/* //     <div className='col-6'>
        //             <label className="form-label">Title</label><br></br>
        //             <input 
        //             type="text" 
        //             classname="form-control rounded-0" 
        //             id="inputdescription" 
        //             placeholder='Enter Description'
        //             value={post.title}
        //             onChange={(e) => setPost({...post, title: e.target.value})} required />
        //         </div>
        //     <div className='col-6 mb-3'>
        //             <label className="form-label">Description</label><br></br>
        //             <input 
        //             type="text" 
        //             classname="form-control rounded-0" 
        //             id="inputGroupFile01"
        //             value={post.descript}
        //             name="image" 
        //             onChange={(e) => setPost({...post, descript: e.target.value})} required />
        //     </div> */}