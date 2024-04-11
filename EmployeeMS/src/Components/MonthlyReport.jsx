import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MonthlyReport = () => {
  const[post, setPost] = useState()
  const[goldpostmon, setGoldPostmon] = useState([])
  const[goldnewsmon, setGoldNewsmon] = useState([])
  const[goldnoticemon, setGoldNoticemon] = useState([])
  const[goldcircularmon, setGoldCircularmon] = useState([])
  const[forexpostmon, setForexPostmon] = useState([])
  const[forexnewsmon, setForexNewsmon] = useState([])
  const[forexnoticemon, setForexNoticemon] = useState([])
  const[forexcircularmon, setForexCircularmon] = useState([])
  const[insurancepostmon, setInsurancePostmon] = useState([])
  const[insurancenewsmon, setInsuranceNewsmon] = useState([])
  const[insurancenoticemon, setInsuranceNoticemon] = useState([])
  const[insurancecircularmon, setInsuranceCircularmon] = useState([])
  const[travelpostmon, setTravelPostmon] = useState([])
  const[travelnewsmon, setTravelNewsmon] = useState([])
  const[travelnoticemon, setTravelNoticemon] = useState([])
  const[travelcircularmon, setTravelCircularmon] = useState([])
  const[generalpostmon, setGeneralPostmon]=useState([])
  const[generalnoticemon, setGeneralNoticemon]=useState([])
  const[generalnewsmon, setGeneralNewsmon]=useState([])
  const[generalcircularmon, setGeneralCircularmon]=useState([])

  useEffect(()=> {
    fetch('http://localhost:3000/auth/goldpostmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGoldPostmon(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/goldnewsmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGoldNewsmon(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/goldnoticemonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGoldNoticemon(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/goldcircularmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGoldCircularmon(data.Result[0].post)
      // setForexPost(data.Result)
    })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/forexpostmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setForexPostmon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/forexnewsmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setForexNewsmon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/forexnoticemonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setForexNoticemon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/forexcircularmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setForexCircularmon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/insurancepostmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setInsurancePostmon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/insurancenewsmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setInsuranceNewsmon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/insurancenoticemonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setInsuranceNoticemon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/insurancecircularmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setInsuranceCircularmon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/travelpostmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setTravelPostmon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/travelnewsmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setTravelNewsmon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/travelnoticemonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setTravelNoticemon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/travelcircularmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setTravelCircularmon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/generalpostmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGeneralPostmon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/generalnoticemonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGeneralNoticemon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/generalnewsmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGeneralNewsmon(data.Result[0].post)
      // setForexPost(data.Result)
      })
  },[])
  useEffect(()=> {
    fetch('http://localhost:3000/auth/generalcircularmonthly')
    .then(res => res.json())
    .then((data)=>{
      console.log(data.Result[0].post)
      setGeneralCircularmon(data.Result[0].post)
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
    Post: goldpostmon,
    Notice: goldnoticemon,
    News: goldnewsmon,
    Circular: goldcircularmon
  },
  {
    name: 'Forex',
    Post: forexpostmon,
    Notice: forexnoticemon,
    News: forexnewsmon,
    Circular: forexcircularmon
  },
  {
    name: 'Insurance',
    Post: insurancepostmon,
    Notice: insurancenoticemon,
    News: insurancenewsmon,
    Circular: insurancecircularmon
  },
  {
    name: 'Travel',
    Post: travelpostmon,
    Notice: travelnoticemon,
    News: travelnewsmon,
    Circular: travelcircularmon
  },
  {
    name: 'General',
    Post: generalpostmon,
    Notice: generalnoticemon,
    News: generalnewsmon,
    Circular: generalcircularmon,
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
);
}

export default MonthlyReport;


  // const data = {
  //   labels: ['gold', 'forex', 'insurance', 'travel'],
  //   datasets: [
  //     {
  //       label: 'Post',
  //       data: [goldpostmon, forexpostmon, insurancepostmon, travelpostmon],
  //       backgroundColor: [
  //         '#4B61D1',
  //       ],
  //       borderColor: [
  //         '#4B61D1',
  //       ],
  //       borderWidth: 1,
  //     },
  //     {
  //       label: 'News',
  //       data: [goldnewsmon, forexnewsmon, insurancenewsmon, travelnewsmon],
  //       backgroundColor: ['#008080'],
  //       borderColor: ['#008080'],
  //       borderWidth: 1,
  //     },
  //     {
  //       label: 'Notice',
  //       data: [goldnoticemon, forexnoticemon, insurancenoticemon, travelnoticemon],
  //       backgroundColor: ['#1a1f71'],
  //       borderColor: ['#1a1f71'],
  //       borderWidth: 1,
  //     },
  //     {
  //       label: 'Circular',
  //       data: [goldcircularmon, forexcircularmon, insurancecircularmon, travelcircularmon],
  //       backgroundColor: ['#0093AF'],
  //       borderColor: ['#0093AF'],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // const chartData = data.labels.map((label, index) => ({
  //   label: label,
  //   ...data.datasets.reduce((acc, dataset) => {
  //     acc[dataset.label] = dataset.data[index];
  //     return acc;
  //   }, {}),
  // }));

  // return (
  //   <ResponsiveContainer width="50%" height={400}>
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

// export default MonthlyReport;











// import React, { useState, useEffect } from 'react'
// import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const MonthlyReport = () => {
//   const[post, setPost] = useState()
//   const[goldmon, setGoldmon] = useState([])
//   const[forexmon, setForexmon] = useState([])
//   const[insurancemon, setInsurancemon] = useState([])
//   const[travelmon, setTravelmon] = useState([])
//   useEffect(()=> {
//     fetch('http://localhost:3000/auth/goldmonthly')
//     .then(res => res.json())
//     .then((data)=>{
//       console.log(data.Result[0].post)
//       setGoldmon(data.Result[0].post)
//       // setForexPost(data.Result)
//     })
//   },[])
//   useEffect(()=> {
//     fetch('http://localhost:3000/auth/forexmonthly')
//     .then(res => res.json())
//     .then((data)=>{
//       console.log(data.Result[0].post)
//       setForexmon(data.Result[0].post)
//       // setForexPost(data.Result)
//       })
//   },[])
//   useEffect(()=> {
//     fetch('http://localhost:3000/auth/insurancemonthly')
//     .then(res => res.json())
//     .then((data)=>{
//       console.log(data.Result[0].post)
//       setInsurancemon(data.Result[0].post)
//       // setForexPost(data.Result)
//       })
//   },[])
//   useEffect(()=> {
//     fetch('http://localhost:3000/auth/travelmonthly')
//     .then(res => res.json())
//     .then((data)=>{
//       console.log(data.Result[0].post)
//       setTravelmon(data.Result[0].post)
//       // setForexPost(data.Result)
//       })
//   },[])

//     const data = [
//         { name: 'Gold', posts: goldmon },
//         { name: 'Forex', posts: forexmon },
//         { name: 'Ins', posts: insurancemon },
//         { name: 'Travel', posts: travelmon },
    
//         // ... other data points
//       ];
    
//       return (
//         <ResponsiveContainer width="50%" height={400}>
//           <BarChart data={data} barSize={60}>
//             <CartesianGrid strokeDasharray="2 2" />
//             <XAxis dataKey="name" />
//             <YAxis type="number" />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="posts" fill="#3E6AF3" />
//           </BarChart>
//         </ResponsiveContainer>
//       );
// };

// export default MonthlyReport
