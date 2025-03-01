import React from "react";
import { Input, Avatar, Badge } from "antd";

import { IoIosSearch } from "react-icons/io";
import { nanoid } from "@reduxjs/toolkit";
import man from "../../../assets/man.png";
import { Link } from "react-router-dom";
function SidebarContent() {
  return (
    <div className="">
      <div className="flex flex-col justify-start gap-2 mb-3 p-4">
        <p className="text-[16px] font-semibold text-black">Support Chat</p>
        <Input
          prefix={<IoIosSearch />}
          placeholder="Basic usage"
          className="h-10 w-[90%]"
        />
        <p className="text-[#343A40] font-semibold">Recent</p>
      </div>
      {people.map((item) => (
        <Link to={`/chat/${item.id}`} state={{ user: item }}>
          <div key={item.id} className="h-16 border-t hover:bg-slate-100 px-4 ">
            <div className="flex justify-between py-2.5">
              <div className="flex items-center gap-2 ">
                <Badge dot status="success" className="border-2 rounded-full">
                  <Avatar
                    shape="circle"
                    src={item?.avatar && item.avatar !== "" ? item.avatar : ""}
                  >
                    {(!item?.avatar || item.avatar === "") &&
                      item?.name?.charAt(0)}
                  </Avatar>
                </Badge>
                <div>
                  <h3>{item.name}</h3>
                  <p>Messages</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-center">
                <p>{item.lastSeen} min ago</p>

                {item?.newMessageCount == 0 ? null : (
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
  );
}

export default SidebarContent;

const people = [
  {
    id: nanoid(),
    name: "John Doe 1",
    lastSeen: 5,
    status: "online",
    newMessageCount: 0,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 2 ",
    lastSeen: 5,
    status: "online",
    newMessageCount: 3,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 3",
    lastSeen: 5,
    status: "online",
    newMessageCount: 0,
    avatar: man,
  },
  {
    id: nanoid(),
    name: "John Doe 4",
    lastSeen: 5,
    status: "online",
    newMessageCount: 5,
    avatar: "",
  },
];
