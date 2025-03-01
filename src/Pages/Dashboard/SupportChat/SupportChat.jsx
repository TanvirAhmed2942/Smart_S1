import React from "react";
import SidebarContent from "./SidebarContent";
// import { Outlet, useParams } from "react-router-dom";
import ChatRoom from "./ChatRoom";
import ChatHeader from "./ChatHeader";

function SupportChat() {
  return (
    <div className="w-full flex relative overflow-hidden rounded-lg">
      {/* Sidebar */}
      <div className="w-[25%] h-[800px] bg-slate-300">
        <SidebarContent />
      </div>

      {/* Chat Area */}
      <div className="w-[75%] bg-slate-200">
        {/* <div className="h-[100px] bg-blue-400">
          <ChatHeader />
        </div> */}
        <div className="h-[800px] bg-slate-500">
          <ChatRoom />
          {/* <Outlet /> */}
        </div>
        {/* <div className="w-full absolute bottom-0 h-[100px] bg-amber-400">
          keyboard
        </div> */}
      </div>
    </div>
  );
}

export default SupportChat;
