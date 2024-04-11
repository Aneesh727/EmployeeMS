import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AnnualReport = () => {
  const[post, setPost] = useState()
  const[goldpost, setGoldPost]=useState([])
  const[goldnews, setGoldNews]=useState([])
  const[goldnotice, setGoldNotice]=useState([])
  const[goldcircular, setGoldCircular]=useState([])
  const[forexpost, setForexPost]=useState([])
  const[forexnews, setForexNews]=useState([])
  const[forexnotice, setForexNotice]=useState([])
  const[forexcircular, setForexCircular]=useState([])
  const[insurancepost, setInsurancePost]=useState([])
  const[insurancenews, setInsuranceNews]=useState([])
  const[insurancenotice, setInsuranceNotice]=useState([])
  const[insurancecircular, setInsuranceCircular]=useState([])
  const[travelpost, setTravelPost]=useState([])
  const[travelnews, setTravelNews]=useState([])
  const[travelnotice, setTravelNotice]=useState([])
  const[travelcircular, setTravelCircular]=useState([])
  const[generalpost, setGeneralPost]=useState([])
  const[generalnotice, setGeneralNotice]=useState([])
  const[generalnews, setGeneralNews]=useState([])
  const[generalcircular, setGeneralCircular]=useState([])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/goldpost')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGoldPost(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/goldnews')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGoldNews(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/goldnotice')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGoldNotice(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/goldcircular')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGoldCircular(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/forexpost')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setForexPost(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/forexnews')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setForexNews(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/forexnotice')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setForexNotice(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/forexcircular')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setForexCircular(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/insurancepost')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setInsurancePost(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/insurancenews')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setInsuranceNews(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/insurancenotice')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setInsuranceNotice(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/insurancecircular')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setInsuranceCircular(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/travelpost')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setTravelPost(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/travelnews')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setTravelNews(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/travelnotice')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setTravelNotice(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/travelcircular')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setTravelCircular(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/generalpost')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setGeneralPost(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/generalnotice')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setGeneralNotice(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/generalnews')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setGeneralNews(data.Result[0].post)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/generalcircular')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      // setGoldpost(data.Result)
      setGeneralCircular(data.Result[0].post)
    })
  },[])
    
//   const data = {
//     labels: ['gold', 'forex', 'insurance', 'travel'],
//     datasets: [
//       {
//         label: 'Post',
//         data: [goldpost, forexpost, insurancepost, travelpost],
//         backgroundColor: [
//           '#4B61D1',
//         ],
//         borderColor: [
//           '#4B61D1',
//         ],
//         borderWidth: 1,
//       },
//       {
//         label: 'News',
//         data: [goldnews, forexnews, insurancenews, travelnews],
//         backgroundColor: ['#008080'],
//         borderColor: ['#008080'],
//         borderWidth: 1,
//       },
//       {
//         label: 'Notice',
//         data: [goldnotice, forexnotice, insurancenotice, travelnotice],
//         backgroundColor: ['#1a1f71'],
//         borderColor: ['#1a1f71'],
//         borderWidth: 1,
//       },
//       {
//         label: 'Circular',
//         data: [goldcircular, forexcircular, insurancecircular, travelcircular],
//         backgroundColor: ['#0093AF'],
//         borderColor: ['#0093AF'],
//         borderWidth: 1,
//       },
//     ],

//  }

// const chartData = data.labels.map((label, index) => ({
//   label: label,
//   ...data.datasets.reduce((acc, dataset) => {
//     acc[dataset.label] = dataset.data[index];
//     return acc;
//   }, {}),
// }));

// return (
//   <ResponsiveContainer width="80%" height={400}>
//     <BarChart data={chartData} barSize={30}>
//       <CartesianGrid strokeDasharray="4 4" />
//       <XAxis dataKey="label" />
//       <YAxis type="number" />
//       <Tooltip />
//       <Legend />
//       {data.datasets.map((dataset, index) => (
//         <Bar key={index} dataKey={dataset.label} stackId="a" fill={dataset.backgroundColor[0]} />
//       ))}
      
//     </BarChart>
    
//   </ResponsiveContainer>
// );
// };

// export default AnnualReport;

const CurvedBar = ({fill, x, y, width, height}) => (
  <g>
    <rect x={x} y={y} width={width} height={height} fill={fill} />
    <path d={`M${x},${y} Q${x + width / 2},${y - 10} ${x + width}, ${y}`} fill={fill} />
    {/* <rect x={x} y={y} width={width} height={2} fill={fill} /> */}
    {/* <rect x={x} y={y + height -2} width={width} height={2} fill={fill} /> */}
  </g>
);

const data = [
  {
    name: 'Gold',
    Post: goldpost,
    Notice: goldnotice,
    News: goldnews,
    Circular: goldcircular
  },
  {
    name: 'Forex',
    Post: forexpost,
    Notice: forexnotice,
    News: forexnews,
    Circular: forexcircular
  },
  {
    name: 'Insurance',
    Post: insurancepost,
    Notice: insurancenotice,
    News: insurancenews,
    Circular: insurancecircular
  },
  {
    name: 'Travel',
    Post: travelpost,
    Notice: travelnotice,
    News: travelnews,
    Circular: travelcircular
  },
  {
    name: 'General',
    Post: generalpost,
    Notice: generalnotice,
    News: generalnews,
    Circular: generalcircular
  }
];

return(
  <div>
    <ResponsiveContainer width="80%" height={400}>
      <BarChart data={data} barSize={12}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='name' />
        <YAxis type='number' /> 
        {/* tick={{stroke: 'none'}} axisLine={false} ticklline={false} /> */}
        <Tooltip />
        <Legend />
        <Bar shape={<CurvedBar />} dataKey='Post' stroke='transparent' strokeWidth={2} fill='#f55252' />
        <Bar shape={<CurvedBar />} dataKey='Notice' stroke='transparent' strokeWidth={2} fill='#00f862' />
        <Bar shape={<CurvedBar />} dataKey='News' stroke='transparent' strokeWidth={2} fill='#12aabc' />
        <Bar shape={<CurvedBar />} dataKey='Circular' stroke='transparent' strokeWidth={2} fill='#ff9900' />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
  


// const chartData = data.labels.map((label, index) => ({
// label: label,
// ...data.datasets.reduce((acc, dataset) => {
//   acc[dataset.label] = dataset.data[index];
//   return acc;
// }, {}),
// }));

// return (
// <ResponsiveContainer width="80%" height={400}>
//   <BarChart data={chartData} barSize={30}>
//     <CartesianGrid strokeDasharray="4 4" />
//     <XAxis dataKey="label" />
//     <YAxis type="number" />
//     <Tooltip />
//     <Legend />
//     {data.datasets.map((dataset, index) => (
//       <Bar key={index} dataKey={dataset.label} stackId="a" fill={dataset.backgroundColor[0]} />
//     ))}
//   </BarChart>
// </ResponsiveContainer>
// );
};

export default AnnualReport;











// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// // import Utils from 'react';

// const AnnualReport = () => {
//   const goldpost = 100; // Replace with your actual data
//   const forexpost = 150; // Replace with your actual data
//   const insurancepost = 75; // Replace with your actual data
//   // const labels = Utils.months({count: 7});
//   const data = {
//   labels: ['gold','forex','insurance','travel','general','froex', 'forrk'],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//       'rgba(255, 159, 64, 0.2)',
//       'rgba(255, 205, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(201, 203, 207, 0.2)'
//     ],
//     borderColor: [
//       'rgb(255, 99, 132)',
//       'rgb(255, 159, 64)',
//       'rgb(255, 205, 86)',
//       'rgb(75, 192, 192)',
//       'rgb(54, 162, 235)',
//       'rgb(153, 102, 255)',
//       'rgb(201, 203, 207)'
//     ],
//     borderWidth: 1
//   },{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//     ],
//     borderColor: [
//       'rgb(201, 203, 207)'
//     ],
//     borderWidth: 1
//   }]
// };
// // </block:setup>

// // <block:config:0>
// const config = {
//   type: 'bar',
//   data: data,
//   options: {
//     scales: {
//       x: {
//         stacked: true
//       },
//       y: {
//         beginAtZero: true,
//         stacked: true
//       }
//     }
//   },
// };
// // </block:config>

// module.exports = {
//   actions: [],
//   config: config,
// };
    
    
//   console.log(data.datasets.data);

//   return (
//     <ResponsiveContainer width="50%" height={400}>
//       <BarChart data={data.datasets} barSize={60}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="label" />
//         <YAxis type="number" />
//         <Tooltip />
//         <Legend />
//         {data.labels.map((label, index) => (
//           <Bar key={index} dataKey={`${label}.value`} stackId="a" fill="#00081d" />
//         ))}
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default AnnualReport;














// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const AnnualReport = () => {
//   const goldpost = 100; // Replace with your actual data
//   const forexpost = 150; // Replace with your actual data
//   const insurancepost = 75; // Replace with your actual data

//   const data = {
//     labels: ['Gold', 'Forex', 'Insurance'],
//     datasets: [
//       {
//         label: 'Gold',
//         // backgroundColor: '#00081d',
//         // borderColor: '#00081d',
//         // borderWidth: 1,
//         data: [
//           {
//             label:'Post',
//             backgroundColor: '#00081d',
//             borderColor: '#00081d',
//             borderWidth:1,
//             data: goldpost.length
//         },
//         {
//           label:'Notice',
//           backgroundColor: '#00081d',
//           borderColor: '#00081d',
//           borderWidth: 1,
//           data: forexpost.length
//         }
//       ]//goldpost, // Wrap the value in an array
//       },
//       {
//         label: 'Insurance',
//         backgroundColor: '#00081d',
//         borderColor: '#00081d',
//         borderWidth: 1,
//         data: insurancepost, // Wrap the value in an array
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         stacked: true,
//       },
//     },
//   };

//   return (
//     <ResponsiveContainer width="50%" height={400}>
//       <BarChart data={data.datasets} barSize={60}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="label" />
//         <YAxis type="number" />
//         <Tooltip />
//         <Legend />
//         {data.datasets.map((dataset, index) => (
//           <Bar key={index} dataKey="data" fill={dataset.backgroundColor} />
//         ))}
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default AnnualReport;








// import React, { useEffect, useState } from 'react'
// import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const AnnualReport = () => {
//   const[post, setpost] = useState()
//   const[goldpost,setGoldpost]=useState([])
//   const[forexpost, setForexPost]=useState([])
//   const[insurancepost, setInsurancePost]=useState([])
//   const[travelpost, setTravelPost]=useState([])
//   useEffect(()=> {
//     fetch('http://localhost:3000/auth/goldannual')
//     .then(res => res.json())
//     .then((data)=>{
//       console.log(data.Result[0].post)
//       setGoldpost(data.Result[0].post)
//       // setForexPost(data.Result)
//     })
//   },[])
//   useEffect(()=> {
//     fetch('http://localhost:3000/auth/forexannual')
//     .then(res => res.json())
//     .then((data)=>{
//       console.log(data.Result[0].post)
//       // setGoldpost(data.Result)
//       setForexPost(data.Result[0].post)
//     })
//   },[])
//   useEffect(()=> {
//     fetch('http://localhost:3000/auth/insuranceannual')
//     .then(res => res.json())
//     .then((data)=>{
//       console.log(data.Result[0].post)
//       // setGoldpost(data.Result)
//       setInsurancePost(data.Result[0].post)
//     })
//   },[])
//   useEffect(()=> {
//     fetch('http://localhost:3000/auth/travelannual')
//     .then(res => res.json())
//     .then((data)=>{
//       console.log(data.Result[0].post)
//       // setGoldpost(data.Result)
//       setTravelPost(data.Result[0].post)
//     })
//   },[])


  
//     const data = [
//         { name: 'Gold', posts: goldpost},
//         { name: 'Forex', posts: forexpost},
//         { name: 'Ins', posts: insurancepost },
//         { name: 'Travel', posts: travelpost },
    
//         // ... other data points
//       ];
    
//       return (
//         <ResponsiveContainer width="50%" height={400}>
//           <BarChart data={data} barSize={60}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name"/>
//             <YAxis type="number"/>
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="posts" fill="#3E6AF3"/>
//           </BarChart>
//         </ResponsiveContainer>
//       );
// };


// export default AnnualReport;



















// import React, { useEffect, useState } from 'react'
// import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const AnnualReport = () => {
  
//     const data = [
//         { name: 'Gold', posts: 10 },
//         { name: 'Forex', posts: 20 },
//         { name: 'Ins', posts: 30 },
//         { name: 'Travel', posts: 16 },
    
//         // ... other data points
//       ];
    
//       return (
//         <ResponsiveContainer width="50%" height={400}>
//           <BarChart data={data} barSize={60}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name"/>
//             <YAxis type="number"/>
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="posts" fill="#3E6AF3"/>
//           </BarChart>
//         </ResponsiveContainer>
//       );
// };


// export default AnnualReport;
