import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const WeeklyReport = () => {
  const[post, setPost]=useState()
  const[goldpostwek, setGoldPostwek]=useState([])
  const[goldnewswek, setGoldNewswek]=useState([])
  const[goldnoticewek, setGoldNoticewek]=useState([])
  const[goldcircularwek, setGoldCircularwek]=useState([])
  const[forexpostwek, setForexPostwek]=useState([])
  const[forexnewswek, setForexNewswek]=useState([])
  const[forexnoticewek, setForexNoticewek]=useState([])
  const[forexcircularwek, setForexCircularwek]=useState([])
  const[insurancepostwek, setInsurancePostwek]=useState([])
  const[insurancenewswek, setInsuranceNewswek]=useState([])
  const[insurancenoticewek, setInsuranceNoticewek]=useState([])
  const[insurancecircularwek, setInsuranceCircularwek]=useState([])
  const[travelpostwek, setTravelPostwek]=useState([])
  const[travelnewswek, setTravelNewswek]=useState([])
  const[travelnoticewek, setTravelNoticewek]=useState([])
  const[travelcircularwek, setTravelCircularwek]=useState([])
  const[generalpostwek, setGeneralPostwek]=useState([])
  const[generalnoticewek, setGeneralNoticewek]=useState([])
  const[generalnewswek, setGeneralNewswek]=useState([])
  const[generalcircularwek, setGeneralCircularwek]=useState([])

  useEffect(()=> {
    fetch('http://localhost:3000/auth/goldpostweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGoldPostwek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/goldnewsweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGoldNewswek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/goldnoticeweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGoldNoticewek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/goldcircularweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGoldCircularwek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/forexpostweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setForexPostwek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/forexnewsweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setForexNewswek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/forexnoticeweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setForexNoticewek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/forexcircularweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setForexCircularwek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/insurancepostweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setInsurancePostwek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/insurancenewsweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setInsuranceNewswek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/insurancenoticeweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setInsuranceNoticewek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/insurancecircularweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setInsuranceCircularwek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/travelpostweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setTravelPostwek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/travelnewsweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setTravelNewswek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/travelnoticeweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setTravelNoticewek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/travelcircularweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setTravelCircularwek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/generalpostweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGeneralPostwek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/generalnoticeweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGeneralNoticewek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/generalnewsweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGeneralNewswek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/generalcircularweekly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGeneralCircularwek(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])


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
    Post: goldpostwek,
    Notice: goldnoticewek,
    News: goldnewswek,
    Circular: goldcircularwek
  },
  {
    name: 'Forex',
    Post: forexpostwek,
    Notice: forexnoticewek,
    News: forexnewswek,
    Circular: forexcircularwek
  },
  {
    name: 'Insurance',
    Post: insurancepostwek,
    Notice: insurancenoticewek,
    News: insurancenewswek,
    Circular: insurancecircularwek
  },
  {
    name: 'Travel',
    Post: travelpostwek,
    Notice: travelnoticewek,
    News: travelnewswek,
    Circular: travelcircularwek
  },
  {
    name: 'General',
    Post: generalpostwek,
    Notice: generalnoticewek,
    News: generalnewswek,
    Circular: generalcircularwek
  }
];

return(
  <div>
    <ResponsiveContainer width="80%" height={400}>
      <BarChart data={data} barSize={12}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='name' />
        <YAxis type='number' />
        <Tooltip />
        <Legend />
        <Bar shape={<CurvedBar />} dataKey='Post' fill='#f55252' />
        <Bar shape={<CurvedBar />} dataKey='Notice' fill='#00f862' />
        <Bar shape={<CurvedBar />} dataKey='News' fill='#12aabc' />
        <Bar shape={<CurvedBar />} dataKey='Circular' fill='#ff9900' />
      </BarChart>
    </ResponsiveContainer>
  </div>
);};

export default WeeklyReport;

//   const data = {
//     labels: ['gold', 'forex', 'insurance', 'travel'],
//     datasets: [
//       {
//         label: 'Post',
//         data: [goldpostwek, forexpostwek, insurancepostwek, travelpostwek],
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
//         data: [goldnewswek, forexnewswek, insurancenewswek, travelnewswek],
//         backgroundColor: ['#008080'],
//         borderColor: ['#008080'],
//         borderWidth: 1,
//       },
//       {
//         label: 'Notice',
//         data: [goldnoticewek, forexnoticewek, insurancenoticewek, travelnoticewek],
//         backgroundColor: ['#1a1f71'],
//         borderColor: ['#1a1f71'],
//         borderWidth: 1,
//       },
//       {
//         label: 'Circular',
//         data: [goldcircularwek, forexcircularwek, insurancecircularwek, travelcircularwek],
//         backgroundColor: ['#0093AF'],
//         borderColor: ['#0093AF'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartData = data.labels.map((label, index) => ({
//     label: label,
//     ...data.datasets.reduce((acc, dataset) => {
//       acc[dataset.label] = dataset.data[index];
//       return acc;
//     }, {}),
//   }));

//   return (
//     <ResponsiveContainer width="50%" height={400}>
//       <BarChart data={chartData} barSize={30}>
//         <CartesianGrid strokeDasharray="4 4" />
//         <XAxis dataKey="label" />
//         <YAxis type="number" />
//         <Tooltip />
//         <Legend />
//         {data.datasets.map((dataset, index) => (
//           <Bar key={index} dataKey={dataset.label} stackId="a" fill={dataset.backgroundColor[0]} />
//         ))}
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default WeeklyReport;

