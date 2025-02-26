// import React from "react";
// import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

// function AppDownloadStat() {
//   const data = [
//     { name: "iOS", value: 400 },
//     { name: "Android", value: 2400 },
//   ];

//   const COLORS = ["#b7e2fe", "#18a0fb"]; // Different colors for each section

//   const totalDownloads = data.reduce((acc, item) => acc + item.value, 0); // Calculate total

//   return (
//     <div className="w-[30%] h-full py-4 relative flex flex-col justify-center items-start p-10  bg-white rounded-lg">
//       <div>
//         <p className="text-[16px] font-semibold">App Download Stats</p>
//         <p className="text-[12px] ">Downloaded by operating system</p>
//       </div>
//       <ResponsiveContainer>
//         <PieChart width={250} height={250}>
//           <Tooltip
//             content={<CustomTooltip />}
//             // cursor={{ fill: "transparent" }}
//             isAnimationActive={true}
//             cursor={false}
//           />
//           <Pie
//             data={data}
//             dataKey="value"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             innerRadius={40}
//             outerRadius={80}
//             label
//           >
//             {data.map((_, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//               />
//             ))}
//           </Pie>
//         </PieChart>
//       </ResponsiveContainer>

//       {/* Centered Total Downloads Text */}
//       <div className="absolute flex flex-col items-center text-lg font-bold text-gray-700">
//         <span className="text-sm text-gray-500">Total </span>
//         {totalDownloads} <br />
//       </div>
//     </div>
//   );
// }

// export default AppDownloadStat;
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="relative flex items-center ml-4">
//         {/* Arrow (pointing left) */}
//         <div className="absolute w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white -left-2"></div>

//         {/* Tooltip Content */}
//         <div className="bg-white p-2 text-black rounded shadow-md ">
//           {payload.map((pld, index) => (
//             <div key={index}>{pld.value}K</div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return null;
// };

import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

function AppDownloadStat() {
  const data = [
    { name: "iOS", value: 4000 },
    { name: "Android", value: 6000 },
  ];

  const COLORS = ["#008DFF", "#A7D8FF"]; // Blue shades for iOS & Android
  const totalDownloads = data.reduce((acc, item) => acc + item.value, 0); // Calculate total

  return (
    <div className="bg-white  rounded-lg p-6 h-full w-[30%]">
      <h2 className="text-lg font-semibold text-gray-700">
        App Download Stats
      </h2>
      <p className="text-sm text-gray-500">Downloaded by operating system</p>

      <div className="relative flex justify-center items-center mt-4">
        <ResponsiveContainer width={180} height={180}>
          <PieChart>
            <Tooltip
              content={<CustomTooltip />}
              // cursor={{ fill: "transparent" }}
              isAnimationActive={true}
              cursor={false}
            />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              stroke="none"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* Centered Total Downloads Text */}
        <div className="absolute text-center">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-2xl font-bold text-gray-800">
            {totalDownloads.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Legend Section */}
      <div className="flex justify-center gap-6 ">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            ></span>
            <p className="text-sm text-gray-600">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppDownloadStat;
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="relative flex items-center ml-4">
        {/* Arrow (pointing left) */}
        <div className="absolute w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white -left-2"></div>

        {/* Tooltip Content */}
        <div className="bg-white p-2 text-black rounded shadow-md ">
          {payload.map((pld, index) => (
            <div key={index}>{pld.value}K</div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};
