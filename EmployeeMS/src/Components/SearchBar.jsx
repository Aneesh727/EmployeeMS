import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SearchBar = () => {
    const[searchInput, setSearchInput] = useState("");
    const[post, setPost] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3000/auth/post')
        .then(result => {
            if(result.data.Status){
                setPost(result.ddata.Result);
            }else{
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, []);
    const posts = [
        title,
        descript,
    ];
    // const employee = [];

    const handleChange = (e) => {
        e.prventDefault();
        setSearchInput(e.target.value);
    };
    if(searchInput.length > 0){
        posts.filter((post)=> {
            return post.title.match(searchInput);
        });
    }
    // else if(searchInput.length > 0){
    //     employee.filter((employeee) => {
    //         return employeee.name.match(searchInput);
    //     });
    // }
  return (
    <div>
        <input type='text' placeholder='Search here' onChange={handleChange} value={searchInput} />
        <table>
            <tr>
                <th>Titile</th>
                <th>Description</th>
            </tr>
        {post.map((title) =>{
            <div>
                <tr>
                    <td>{post.title}</td>
                    <td>{post.descript}</td>
                </tr>
            </div>
        })}
        </table>
    </div>
  )
};

export default SearchBar
