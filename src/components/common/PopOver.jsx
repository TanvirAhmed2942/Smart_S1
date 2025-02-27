// // import React, { useState } from "react";
// // import { Popover, Button } from "antd";
// // import { DeleteFilled, EditFilled } from "@ant-design/icons";
// // import { HiDotsVertical } from "react-icons/hi";
// // import { FaBan } from "react-icons/fa";
// // import GetPageName from "./GetPageName";
// // import EditModal from "../../Pages/Dashboard/ServiceProvider/EditModal";

// // const PopOver = ({ onEdit = () => {}, onDelete = () => {} }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const pageName = GetPageName();

// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const showModal = () => setIsModalOpen(true);
// //   const handleOk = () => setIsModalOpen(false);
// //   const handleCancel = () => setIsModalOpen(false);

// //   return (
// //     <>
// //       <Popover
// //         content={
// //           <div className="flex flex-col items-center gap-2">
// //             <Button icon={<EditFilled />} type="text" onClick={showModal} />
// //             {pageName === "Service Provider List" ? (
// //               <Button icon={<FaBan />} type="text" danger onClick={onDelete} />
// //             ) : (
// //               <Button
// //                 icon={<DeleteFilled />}
// //                 type="text"
// //                 danger
// //                 onClick={onDelete}
// //               />
// //             )}
// //           </div>
// //         }
// //         trigger="hover"
// //         placement="bottom"
// //         open={isOpen}
// //         onOpenChange={setIsOpen}
// //       >
// //         <HiDotsVertical size={20} className="cursor-pointer" />
// //       </Popover>

// //       {/* EditModal should be always present to trigger when needed */}
// //       <EditModal
// //         isModalOpen={isModalOpen}
// //         handleOk={handleOk}
// //         handleCancel={handleCancel}
// //       />
// //     </>
// //   );
// // };

// // export default PopOver;
// import React, { useState } from "react";
// import { Popover, Button } from "antd";
// import { EditFilled } from "@ant-design/icons";
// import { HiDotsVertical } from "react-icons/hi";
// import { FaBan } from "react-icons/fa";

// const PopOver = ({ onEdit }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <Popover
//       content={
//         <div className="flex  items-center gap-2">
//           <Button
//             icon={<EditFilled />}
//             type="text"
//             onClick={() => {
//               onEdit();
//               setIsOpen(false);
//             }}
//           />
//           <Button
//             icon={<FaBan />}
//             type="text"
//             onClick={() => {
//               alert("api call required");
//             }}
//           />
//         </div>
//       }
//       trigger="hover"
//       placement="bottom"
//       open={isOpen}
//       onOpenChange={setIsOpen}
//     >
//       <HiDotsVertical size={20} className="cursor-pointer" />
//     </Popover>
//   );
// };

// export default PopOver;
import React, { useState } from "react";
import { Popover, Button } from "antd";
import { EditFilled } from "@ant-design/icons";
import { HiDotsVertical } from "react-icons/hi";
import { FaBan } from "react-icons/fa";

const PopOver = ({ onEdit, onBan }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      content={
        <div className="flex items-center gap-2">
          <Button
            icon={<EditFilled />}
            type="text"
            onClick={() => {
              onEdit();
              setIsOpen(false);
            }}
          />
          <Button
            icon={<FaBan />}
            type="text"
            danger
            onClick={() => {
              onBan();
              setIsOpen(false); // Close the popover after banning
            }}
          />
        </div>
      }
      trigger="hover"
      placement="bottom"
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <HiDotsVertical size={20} className="cursor-pointer" />
    </Popover>
  );
};

export default PopOver;
