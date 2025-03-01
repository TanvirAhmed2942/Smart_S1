// import React from "react";
// import { Input, Avatar, Badge } from "antd";

// import { IoIosSearch } from "react-icons/io";
// import { nanoid } from "@reduxjs/toolkit";
// import man from "../../../assets/man.png";
// import { Link } from "react-router-dom";
// function SidebarContent() {
//   return (
//     <div className="">
//       <div className="flex flex-col justify-start gap-2  p-4">
//         <p className="text-[16px] font-semibold text-black">Support Chat</p>
//         <Input
//           prefix={<IoIosSearch />}
//           placeholder="Search..."
//           className="h-10 w-[90%] gap-2"
//         />
//         <p className="text-[#343A40] font-semibold">Recent</p>
//       </div>
//       <div
//         className="overflow-y-auto [&::-webkit-scrollbar]:w-2
//   [&::-webkit-scrollbar-track]:rounded-full
//   [&::-webkit-scrollbar-track]:bg-gray-100
//   [&::-webkit-scrollbar-thumb]:rounded-full
//    [&::-webkit-scrollbar-thumb]:min-h-[20px]
//   [&::-webkit-scrollbar-thumb]:bg-gray-300
//   dark:[&::-webkit-scrollbar-track]:bg-neutral-700
//   dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
//       >
//         {people.map((item) => (
//           <Link to={`/chat/${item.id}`} state={{ user: item }}>
//             <div
//               key={item.id}
//               className="h-16 border-t hover:bg-slate-100 px-4 "
//             >
//               <div className="flex justify-between py-2.5">
//                 <div className="flex items-center gap-2 ">
//                   <Badge dot status="success" className="border-2 rounded-full">
//                     <Avatar
//                       shape="circle"
//                       src={
//                         item?.avatar && item.avatar !== "" ? item.avatar : ""
//                       }
//                     >
//                       {(!item?.avatar || item.avatar === "") &&
//                         item?.name?.charAt(0)}
//                     </Avatar>
//                   </Badge>
//                   <div>
//                     <h3>{item.name}</h3>
//                     <p>Messages</p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-2 items-center">
//                   <p>{item.lastSeen} min ago</p>

//                   {item?.newMessageCount == 0 ? null : (
//                     <p className="rounded-full bg-[#EF476F2E] text-red-500 text-[12px] w-fit px-1.5">
//                       {item.newMessageCount}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SidebarContent;

// const people = [
//   {
//     id: nanoid(),
//     name: "John Doe 1",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 0,
//     avatar: man,
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 2 ",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 3,
//     avatar: man,
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 3",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 0,
//     avatar: man,
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 4",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 5,
//     avatar: "",
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 1",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 0,
//     avatar: man,
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 2 ",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 3,
//     avatar: man,
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 3",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 0,
//     avatar: man,
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 4",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 5,
//     avatar: "",
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 1",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 0,
//     avatar: man,
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 2 ",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 3,
//     avatar: man,
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 3",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 0,
//     avatar: man,
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 4",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 5,
//     avatar: "",
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 1",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 0,
//     avatar: man,
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 2 ",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 3,
//     avatar: man,
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 3",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 0,
//     avatar: man,
//   },
//   {
//     id: nanoid(),
//     name: "John Doe 4",
//     lastSeen: 5,
//     status: "online",
//     newMessageCount: 5,
//     avatar: "",
//   },
// ];

import React from "react";
import { Input, Avatar, Badge } from "antd";
import { IoIosSearch } from "react-icons/io";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import man from "../../../assets/man.png";

function SidebarContent() {
  return (
    <div>
      <div className="flex flex-col justify-start gap-2 p-4">
        <p className="text-[16px] font-semibold text-black">Support Chat</p>
        <Input
          prefix={<IoIosSearch />}
          placeholder="Search..."
          className="h-10 w-[90%] gap-2"
        />
        <p className="text-[#343A40] font-semibold">Recent</p>
      </div>

      <div
        className="h-screen overflow-y-auto
  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-slate-400
  dark:[&::-webkit-scrollbar-thumb]:bg-slate-200"
      >
        {people.map((item) => (
          <Link key={item.id} to={`/chat/${item.id}`} state={{ user: item }}>
            <div className="h-16 border-t hover:bg-slate-100 px-4">
              <div className="flex justify-between py-2.5">
                <div className="flex items-center gap-2">
                  <Badge dot status="success" className="border-2 rounded-full">
                    <Avatar src={item.avatar || ""}>
                      {!item.avatar && item.name.charAt(0)}
                    </Avatar>
                  </Badge>
                  <div>
                    <h3>{item.name}</h3>
                    <p>Messages</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 items-center">
                  <p>{item.lastSeen} min ago</p>
                  {item.newMessageCount > 0 && (
                    <p className="rounded-full bg-[#EF476F2E] text-red-500 text-[12px] w-fit px-1.5">
                      {item.newMessageCount}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SidebarContent;

// People List
const people = [
  {
    id: nanoid(),
    name: "John Doe 1",
    lastSeen: 5,
    newMessageCount: 0,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 2",
    lastSeen: 5,
    newMessageCount: 3,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 3",
    lastSeen: 5,
    newMessageCount: 0,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 4",
    lastSeen: 5,
    newMessageCount: 5,
    avatar: "",
  },
  {
    id: nanoid(),
    name: "John Doe 5",
    lastSeen: 5,
    newMessageCount: 2,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 6",
    lastSeen: 5,
    newMessageCount: 1,
    avatar: "",
  },
  {
    id: nanoid(),
    name: "John Doe 1",
    lastSeen: 5,
    newMessageCount: 0,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 2",
    lastSeen: 5,
    newMessageCount: 3,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 3",
    lastSeen: 5,
    newMessageCount: 0,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 4",
    lastSeen: 5,
    newMessageCount: 5,
    avatar: "",
  },
  {
    id: nanoid(),
    name: "John Doe 5",
    lastSeen: 5,
    newMessageCount: 2,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 6",
    lastSeen: 5,
    newMessageCount: 1,
    avatar: "",
  },
  {
    id: nanoid(),
    name: "John Doe 1",
    lastSeen: 5,
    newMessageCount: 0,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 2",
    lastSeen: 5,
    newMessageCount: 3,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 3",
    lastSeen: 5,
    newMessageCount: 0,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 4",
    lastSeen: 5,
    newMessageCount: 5,
    avatar: "",
  },
  {
    id: nanoid(),
    name: "John Doe 5",
    lastSeen: 5,
    newMessageCount: 2,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 6",
    lastSeen: 5,
    newMessageCount: 1,
    avatar: "",
  },
  {
    id: nanoid(),
    name: "John Doe 1",
    lastSeen: 5,
    newMessageCount: 0,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 2",
    lastSeen: 5,
    newMessageCount: 3,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 3",
    lastSeen: 5,
    newMessageCount: 0,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 4",
    lastSeen: 5,
    newMessageCount: 5,
    avatar: "",
  },
  {
    id: nanoid(),
    name: "John Doe 5",
    lastSeen: 5,
    newMessageCount: 2,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 6",
    lastSeen: 5,
    newMessageCount: 1,
    avatar: "",
  },
  {
    id: nanoid(),
    name: "John Doe 1",
    lastSeen: 5,
    newMessageCount: 0,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 2",
    lastSeen: 5,
    newMessageCount: 3,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 3",
    lastSeen: 5,
    newMessageCount: 0,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 4",
    lastSeen: 5,
    newMessageCount: 5,
    avatar: "",
  },
  {
    id: nanoid(),
    name: "John Doe 5",
    lastSeen: 5,
    newMessageCount: 2,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 6",
    lastSeen: 5,
    newMessageCount: 1,
    avatar: "",
  },
];
