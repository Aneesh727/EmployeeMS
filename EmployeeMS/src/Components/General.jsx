import React, { useEffect, useState } from 'react';
import axios from 'axios';

const General = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/auth/notification')
      .then(result => {
        if (result.data.Status) {
          setPosts(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="notice-box">
      <ul>
        {posts.map(e => (
        <li>
          {/* <li key={e.post_id}></li> */}
          <li style={{display:'flex', marginTop:'5px', marginRight:'10px'}}><h4>Type:</h4> <h5 style={{marginTop:'3px', marginLeft:'10px'}}>{e.posttype}</h5></li>
          <li style={{display:'flex', marginTop:'20px', marginRight:'10px'}}><h4>SubType: </h4> <h5 style={{marginTop:'3px', marginLeft:'10px'}}>{e.subtype}</h5></li>
          <li style={{display:'flex', marginTop:'20px', marginRight:'10px'}}><h4>Post:</h4> <h6 style={{marginTop:'6px', marginLeft:'10px'}}>File</h6></li>
          <li style={{display:'flex', marginTop:'20px', marginRight:'10px'}}><h4>Title:</h4> <h6 style={{marginTop:'6px', marginLeft:'10px'}}>{e.title}</h6></li>
          <li style={{display:'flex', marginTop:'20px', marginRight:'10px'}}><h4>Description: </h4><h6 style={{marginTop:'6px', marginLeft:'10px'}}>{e.descript}</h6></li>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default General;










// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// // import { useNavigate } from 'react-router-dom'

// const General=() => {
//     const [post, setPost] = useState([])
//     // const navigate = useNavigate()
//     useEffect(()=> {
//         axios.get('http://localhost:3000/auth/notification')
//         .then(result => {
//             if(result.data.Status){
//                 setPost(result.data.Result);
//             } else{
//                 alert(result.data.Error)
//             }
//         }).catch(err => console.log(err))
//     }, []);

//     return (
//     <div className="notice-box" style={{}}>
//         <ul>
//             {data.map(e => (
//                 <li key={e.post_id}></li>
//                 <h3>{e.posttype}</h3>
//                 <h3>{e.subtype}</h3>
//                 <p>File</p>
//                 <p>{e.title}</p>
//                 <p>{e.descript}</p>
//             ))}
//         </ul>
//     </div>
//     );
// };

// export default General



{/* <table className='table' style={{}}> */}
            {/* <thead class='table-head'> */}
                {/* <tr> */}
                    {/* <div style={{marginLeft:'90px', }}>  */}
                    {/* <label>Announcment</label> */}
                    {/* <h5><b>Announcment</b></h5> */}
                    {/* style={{marginLeft:'120px', backgroundColor:'#eeeff1eb', color:'#606060'}} */}
                    {/* <th style={{marginLeft:'120px'}}>Announcment</th> */}
                    {/* <th>Description</th> */}
                    {/* <th style={{display:'grid', }}>Announcment</th> */}
                    {/* <p style={{marginLeft:'100px'}}>Announcment</p> */}
                    {/* <th>title</th>
                    <th>Descript</th> */}
                    {/* </div> */}
                    
                {/* </tr> */}
            {/* </thead> */}
            {/* <tbody class='body-style'>
                {
                    post.map((e)=>{
                        return <>
                        <td style={{padding:'0 1rem', border:'1px solid white'}}>{e.posttype}</td>
                        <td style={{padding:'0 1rem', border:'1px solid white'}}>{e.subtype}</td>
                        <td style={{padding:'0 1rem', border:'1px solid white'}}>{e.title}</td>
                        <td style={{padding:'0 1rem', border:'1px solid white'}}>{"file"}</td>
                        <td style={{padding:'0 1rem', border:'1px solid '}}>{e.descript}</td>
                        
                        </>
                    })
                }
            </tbody>
        </table> */}