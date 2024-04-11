import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";



const AddPost = () => {
    const [post, setPost] = useState({
        posttype: '',
        subtype: '',
        title: '',
        post:'',
        descript:'',
        date:''
    });

    // const[posttype, setPostType] = useState([])
    // const[subtype, setSubType] = useState([])
    const navigate = useNavigate()

    // useEffect(()=> {
    //     axios
    //     .get('http://localhost:3000/auth/add_post_type')
    //     .then((result) => {
    //         if(result.data.Status){
    //             setPostType(result.data.Result);
    //         } else{
    //             alert(result.data.Error);
    //         }
    //     })
    //     .catch((err) => console.log(err));

    //     axios
    //     .get('http://localhost:3000/auth/add_sub_type')
    //     .then((result) => {
    //         if(result.data.Status){
    //             setSubType(result.data.Result);
    //         } else{
    //             alert(result.data.Error);
    //         }
    //     })
    //     .catch((err) => console.log(err));
    // }, []);
    const handleSubmit = (e) => {
        console.log(post)
         e.preventDefault()

        axios.post('http://localhost:3000/auth/addpost', post)
        .then(result => {
            console.log(result)
            if(result.data.Status){
                console.log(result.data.Status)
                navigate('/dashboard/post')
            }
            else{
                console.log(result.data.Status)
                console.log(result.data.Error+"here you are:")
        }
    })
    .catch(err => console.log(err))
}

  return (
    <div className="d-flex justify-content-center">
      <div className="w-50" style={{borderWidth: '10px'}}>
        <h3 className="text-center">Add Post</h3>
        <form class='post-form' onSubmit={handleSubmit}>
            <div class='form-inline'>
                <div class="types" style={{display:'flex', gap:'1rem',width:"100%",marginBottom:'1rem'}}>
                    <div class='container'>
                    <label for ='type'>Post-Type</label>
                    <select name="type" id="category" className="form-select" 
                            onChange={(e) => setPost({...post, posttype: e.target.value})}>
                                <option> Select type </option>
                                <option value="Forex">Forex</option>
                                <option value="Gold">Gold</option>
                                <option value="Insurance">Insurance</option>
                                <option value="Travel">Travel</option>
                                <option value="General">General</option>   
                    </select>
                    </div>
                    <div class='container'>
                    <label for ='subtype'>Sub-Type</label>
                    <select name="subtype" id="inputsubtype" className="form-select" 
                            onChange={(e) => setPost({...post, subtype: e.target.value})}>
                                <option> Select type </option>
                                <option value="Post">Post</option>
                                <option value="News">News</option>
                                <option value="Notice">Notice</option>
                                <option value="Circular">Circular</option>
                                <option value="Notification">Notification</option>
                    </select>
                    </div>
                </div>

                <div class='type2' style={{display:'flex', gap:'1rem',width:"100%", marginBottom:'1rem'}}>
                    <div class='container'>
                    <label for ='date'>Date</label>
                    <input 
                        type="date"
                        format=""  
                        id="inputdate" 
                        placeholder='Enter Date'
                        onChange={(e) => setPost({...post, date: (e.target.value).split("T")[0]})} required />
                    </div>
                    <div class='container'>
                        <label for ='inputGroupFile01'>Post</label>
                        <input 
                        type="file"  
                        id="inputGroupFile01" 
                        name="post"
                        onChange={(e) => setPost({...post, post: (e.target.value)})} required  />
                    </div>
                </div>

                <div class='type3' style={{display:'flex', gap:'1rem',width:"100%",marginBottom:'1rem'}}>
                    <div class='textbox'>
                        <label for ='state' style={{display:'block'}}>Title</label>
                        <textarea
                        style={{height:"6rem", width:'100%'}}
                        type='title'
                        id='inputtitle'
                        placeholder="Enter Title of Post"
                        onChange={(e) =>{
                            console.log(post)
                            setPost({...post,title:e.target.value})
                            }} required />
                    </div>

                    <div class='textbox'>
                        <label for ='descript' style={{display:'block'}}>Description</label>
                        <textarea 
                        style={{height:"6rem", width:'100%'}}
                        type='descript'
                        id='inputdescript'
                        placeholder="Enter Description"
                        onChange={(e) =>{
                            console.log(post)
                            setPost({...post, descript:e.target.value})
                            }} required />
                    </div>
                </div>

            </div>
            <div class='post-button'>
                <button type="submit" className='btn btn-primary w-100'>
                    Add Post
                 </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AddPost



{/* { */}
            {/* //     <div className='col-6' >
            //      {/* style={{marginRight:"20px"}}> */}
            {/* //         <label for='type' className="form-label">Type</label><br></br>
            //         <select name="type" id="category" className="form-select"  */}
            {/* //         onChange={(e) => setPost({...post, posttype: e.target.value})}> */}
            {/* //             <option> Select type </option> */}
            {/* //             <option value="Forex">Forex</option> */}
            {/* //             <option value="Insurance">Insurance</option> */}
            {/* //             <option value="Gold">Gold</option> */}
            {/* //             <option value="Travel">Travel</option> */}
            {/* //             <option value="General">General</option> */}
                        {/* {posttype.map(c => { */}
                            {/* return (
                              <>
                              <option key={c.id} value={c.id}>{c.name}</option>
                              </>
                            
                            )
                //         })} required */}
                {/* // //     </select>
                // // </div>
                // // <div className='col-6' > */}
                {/* // //  {/* style={{marginRight:"20px"}}> */}
                {/* // //     <label for='type' className="form-label">Sub-Type</label><br></br>
                // //     <select name="type" id="category" className="form-select"  */}
                {/* // //     onChange={(e) => setPost({...post, subtype: e.target.value})}> */}
                {/* // //         <option> Select sub-type </option> */}
                {/* // //         <option value="Post">Post</option>
                // //         <option value="News">News</option>
                // //         <option value="Circular">Circular</option>
                // //         <option value="Notice">Notice</option>
                // //         <option value="Notification">Notification</option> */}
                {/* //         {/* {posttype.map(p => {
                //             return (
                //               <> */}
                {/* //               <option key={p.id} value={p.id}>{p.name}</option> */}
                {/* //               </> */}
                            
                {/* //  /           ) */}
                {/* //         })} required */} 
                {/* // //     </select> */}
                {/* // // </div> */}
                {/* // // <div className='col-6'> */}
                {/* // //     <label for='inputdob' className="form-label">Date</label><br></br> */}
                {/* //     <input  */}
                {/* //     type="date" */}
                {/* //     format=""  */}
                {/* //     classname="form-control rounded-0"  */}
                {/* //     id="inputdate"  */}
                {/* //     placeholder='Enter Employee ID' */}
                    {/* // onChange={(e) => setPost({...post, date: (e.target.value).split("T")[0]})} required /> */}
                {/* // </div> */}

            {/* // <div className='col-6'> */}
            {/* //         <label className="form-label" for='inputGroupFile01'>Post</label><br></br> */}
            {/* //         <input  */}
            {/* //         type="file"  */}
            {/* //         classname="form-control rounded-0"  */}
            {/* //         id="inputGroupFile01" */}
            {/* //         name="image"  */}
                    {/* //  onChange={(e) => setPost({...post, post: e.target.files[0]})} required /> */}
            {/* // </div> */}
            {/* // <div className='col-6'> */}
            {/* //         <label className="form-label">Title</label><br></br> */}
            {/* //         <input  */}
            {/* //         type="text" 
            //         classname="form-control rounded-0" 
            //         id="inputdescription" 
            //         placeholder='Enter Description' */}
            {/* //         onChange={(e) => setPost({...post, title: e.target.value})} required /> */}
            {/* // </div> */}
            {/* // <div className='col-6 mb-3'> */}
            {/* //         <label className="form-label">Description</label><br></br> */}
            {/* //         <input  */}
            {/* //         type="text" 
            //         classname="form-control rounded-0" 
            //         id="inputGroupFile01"
            //         name="image"  */}
            {/* //         onChange={(e) => setPost({...post, descript: e.target.value})} required /> */}
            {/* // </div> */}