// "use client"
// import { Line } from "react-chartjs-2"
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from "chart.js"

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

// export function SalesChart() {
//   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         mode: "index",
//         intersect: false,
//       },
//     },
//     scales: {
//       y: {
//         min: 0,
//         max: 50,
//         ticks: {
//           stepSize: 10,
//           callback: (value : string) => value + "0",
//         },
//         grid: {
//           color: "rgba(0, 0, 0, 0.05)",
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//     },
//     interaction: {
//       mode: "nearest",
//       axis: "x",
//       intersect: false,
//     },
//     elements: {
//       line: {
//         tension: 0.4,
//       },
//       point: {
//         radius: 0,
//       },
//     },
//   }

//   const data = {
//     labels: months,
//     datasets: [
//       {
//         label: "Current Year",
//         data: [20, 18, 25, 27, 22, 24, 20, 15, 17, 14, 15, 17],
//         borderColor: "#1f8a70",
//         backgroundColor: "rgba(31, 138, 112, 0.1)",
//         fill: true,
//         borderWidth: 2,
//       },
//       {
//         label: "Previous Year",
//         data: [15, 10, 15, 20, 25, 30, 25, 30, 25, 20, 15, 20],
//         borderColor: "#4fd1c5",
//         backgroundColor: "rgba(79, 209, 197, 0.1)",
//         fill: true,
//         borderWidth: 2,
//       },
//     ],
//   }

//   return <Line options={options} data={data} />
// }