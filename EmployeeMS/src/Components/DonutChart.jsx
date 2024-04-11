import React, { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  Label,
} from 'recharts';



const DonutChart = () => {
    const [goldpost, setGoldpost] = useState([]);
    const [forexpost, setForexPost] = useState([]);
    const [insurancepost, setInsurancePost] = useState([]);
    const [travelpost, setTravelPost] = useState([]);
    const [generalpost, setGeneralPost] = useState([]);
    const [totalposts, setTotalPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/auth/goldannual')
        .then((res) => res.json())
        .then((data) => {
            console.log(data.Result[0].post);
            setGoldpost(data.Result[0].post);
        });
    }, []);
    
    useEffect(() => {
        fetch('http://localhost:3000/auth/forexannual')
        .then((res) => res.json())
        .then((data) => {
            console.log(data.Result[0].post);
            setForexPost(data.Result[0].post);
        });
    }, []);
    
    useEffect(() => {
        fetch('http://localhost:3000/auth/insuranceannual')
        .then((res) => res.json())
        .then((data) => {
            console.log(data.Result[0].post);
            setInsurancePost(data.Result[0].post);
        });
    }, []);
    useEffect(() => {
        fetch('http://localhost:3000/auth/travelannual')
        .then((res) => res.json())
        .then((data) => {
            console.log(data.Result[0].post);
            setTravelPost(data.Result[0].post);
        });
    }, []);
    useEffect(() => {
        fetch('http://localhost:3000/auth/generalannual')
        .then((res) => res.json())
        .then((data) => {
            console.log(data.Result[0].post);
            setGeneralPost(data.Result[0].post);
        });
    }, []);
    useEffect(() => {
        fetch('http://localhost:3000/auth/total')
        .then((res) => res.json())
        .then((data) => {
            console.log(data.Result[0].post);
            setTotalPosts(data.Result[0].post);
        });
    }, []);
    
    const data = [
        { name: 'Gold', posts: goldpost },
        { name: 'Forex', posts: forexpost },
        { name: 'Ins', posts: insurancepost },
        { name: 'Travel', posts: travelpost },
        { name: 'General', posts: generalpost},
    ];
    const COLORS = ['#3E6AF3', '#4CAF50', '#FFC107', '#E91E63', '#8464a0'];
    console.log({totalposts})
    
    return (
        <ResponsiveContainer width="90%" height={400}>
        <PieChart>
            <Pie
               data={data}
               dataKey= "posts"
               nameKey="name"
               cx="50%"
               cy="50%"
               outerRadius={100}
               innerRadius={40}
               fill="#8884d8"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>

            <Label dataKey={totalposts} position="center" fontSize={30} dy={20} />
            <Pie 
              data={[{name:'', posts: 0}]}
              cx="50%"
              cy="50%"
              outerRadius={40}
              fill="#fff" 
            />
            <Tooltip />
            <Legend />

        </PieChart>
        {/* <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            fontSize: '30px',
            color:'black'
        }}>
            {totalposts > 0 ? totalposts : (<h4 style={{marginLeft:'910px', marginTop:'190px'}}>null</h4>)}
        </div> */}
        </ResponsiveContainer>
    );
};


export default DonutChart;


