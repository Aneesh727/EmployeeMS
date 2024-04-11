import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartGraph = () => {
  const data = [
    { name: 'Gold', posts: 10 },
    { name: 'Forex', posts: 20 },
    { name: 'Insurance', posts: 30 },
    { name: 'Travel', posts: 16 },

    // ... other data points
  ];

  return (
    <ResponsiveContainer width="35%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis type="number" />
        <Tooltip />
        <Legend />
        <Bar dataKey="posts" fill="#3E6AF3" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartGraph;








// import React from 'react';
// import { ResponsiveContainer, Box, Tooltip, XAxis, YAxis } from 'recharts';

// const BarChart = () => {
//   const data = [
//     { Q1: 10, Q2: 20, Q3: 30, median: 25 },
//     // ... other data points
//   ];

//   return (
//     <ResponsiveContainer width="100%" height={400}>
//       <Box data={data} layout="vertical">
//         <XAxis type="number" />
//         <YAxis dataKey="name" type="category" />
//         <Tooltip />
//       </Box>
//     </ResponsiveContainer>
//   );
// };

// export default BarChart;




// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Bar } from 'react-chartjs-2';
// // Example import for a charting library
// import { LineChart, XAxis, YAxis, CartesianGrid } from 'recharts';

// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const BarChartGraph = () => {
//   const data = [
//     { name: 'Jan', value: 10 },
//     { name: 'Feb', value: 12 },
//     { name: 'Mar', value: 10 },
//     { name: 'Apr', value: 11 },
//     { name: 'May', value: 16 },
//     { name: 'Jun', value: 14 },
//     { name: 'Jul', value: 20 },
//     { name: 'Aug', value: 23},
//     { name: 'Sept', value: 21 },
//     { name: 'Oct', value: 26 },
//     { name: 'Nov', value: 27 },
//     { name: 'Dec', value: 30},
//     // ... other data points
//   ];

//   return (
//     <LineChart width={600} height={300} data={data}>
//       <XAxis dataKey="name" />
//       <YAxis type="linear" />
//       <CartesianGrid stroke="#fff" />
//       <Line type="monotone" dataKey="value" stroke="#8884d8" />
//       {/* <Tooltip /> */}
//       {/* <Legend /> */}
//     </LineChart>
//   );
// };

// export default BarChartGraph;



// const BarChart = () => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May'],
//     datasets: [
//       {
//         label: 'My First Dataset',
//         data: [65, 59, 80, 81, 56],
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//         XAxis: 
//         {
//           type: 'linear',
//           position: 'bottom',
//         },
//         YAxis: 
//         {
//           type: 'linear',
//           position: 'left',
//         },
//     },
//   };
  
//   return (
//     <div>
//       <h2>Simple Line Chart</h2>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default BarChart;
