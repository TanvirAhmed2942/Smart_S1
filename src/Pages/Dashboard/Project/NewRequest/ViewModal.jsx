// import React from "react";
// import { Modal, Descriptions, Avatar } from "antd";
// import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
// import { PiMapPinLight, PiShareFatLight } from "react-icons/pi";
// import { FiPhoneCall } from "react-icons/fi";
// import { MdDateRange } from "react-icons/md";
// import { RiMessageLine } from "react-icons/ri";
// import { BiSolidFilePdf } from "react-icons/bi";
// import { CgSoftwareDownload } from "react-icons/cg";
// const ViewModal = ({ visible, onClose, record }) => {
//   if (!record) return null;

//   return (
//     <Modal
//       title="Service Request Details"
//       visible={visible}
//       onCancel={onClose}
//       footer={null}
//       width={1000}
//     >
//       <div className="w-full flex justify-end gap-2 my-6">
//         <button className="bg-green-400 hover:bg-green-500 flex gap-2 rounded-lg px-3 py-1">
//           <CheckOutlined />
//           Acceppt
//         </button>
//         <button className="bg-red-400 hover:bg-red-500 flex gap-2 rounded-lg px-3 py-1">
//           <CloseOutlined />
//           Reject
//         </button>
//       </div>

//       <div className="flex border p-3 rounded-lg gap-3 my-6">
//         <Avatar src={record.avatar} size={120} shape="square" />
//         <div className="flex w-full items-center justify-between ">
//           <div className="flex flex-col justify-between">
//             <h2 className="text-[20px] font-medium">{record.customername}</h2>
//             {/* <h2 className="text-[16px] font-normal text-paragraph flex items-center gap-2">
//                {record.service}
//             </h2> */}
//             <h2 className="text-[16px] font-normal text-paragraph flex items-center gap-2">
//               <PiMapPinLight />
//               {record.address}
//             </h2>
//             <h2 className="text-[16px] font-normal  text-paragraph flex items-center gap-2">
//               <FiPhoneCall />
//               {/* {record.phone} */}
//               +1236-44454
//             </h2>
//             <h2 className="text-[16px] font-normal  text-paragraph flex items-center gap-2">
//               <MdDateRange />
//               25 Jan 2025
//             </h2>
//           </div>
//           <div className="flex flex-col items-center">
//             <button>
//               <RiMessageLine
//                 size={30}
//                 className="text-prince hover:-scale-x-100 hover:translate-x-1 hover:transition-all duration-100"
//               />
//             </button>
//             <h2 className="text-[20px] font-medium">Send Message</h2>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col gap-3 mb-6">
//         <h1 className="text-[20px] font-medium">Service</h1>
//         <div className="flex flex-col gap-2 border rounded-lg p-3">
//           <h1 className="text-[16px] font-medium">
//             Need Building compliance Certificate for my new building
//           </h1>
//           <h4 className="bg-[#f5effb] px-2 py-0.5 rounded-lg w-fit">
//             {record.service}
//           </h4>
//         </div>
//       </div>
//       <div className="flex flex-col gap-3 mb-6">
//         <h1 className="text-[20px] font-medium">Service Details</h1>
//         <div className="flex flex-col gap-2 border rounded-lg p-3">
//           <p className="text-[16px] font-normal text-paragraph">
//             We need assistance in obtaining a Building Compliance Certificate
//             for a newly constructed residential property. The property includes
//             a 3-story building with 8 units. All construction work has been
//             completed, and we require a professional to verify compliance with
//             local building codes and regulations. Necessary documents and plans
//             will be provided upon request.
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-col gap-3 mb-6 w-1/3">
//         <h1 className="text-[20px] font-medium">Attachment</h1>
//         <div className="flex flex-col gap-2 border rounded-lg p-3">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <BiSolidFilePdf size={50} />
//               <div>
//                 <h2 className="text-[14px] font-medium">File Title.pdf</h2>
//                 <p>313 KB . 31 Aug, 2022 </p>
//               </div>
//             </div>

//             <CgSoftwareDownload
//               size={25}
//               className="text-green-400 hover:text-green-600 cursor-pointer"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center gap-3 text-[20px] font-medium text-prince hover:text-white hover:bg-prince rounded-lg border border-prince w-fit h-10 px-2 py-1.5 mb-6">
//         <PiShareFatLight size={25} />
//         <h2>Forward to Nearby Service Providers</h2>
//       </div>
//     </Modal>
//   );
// };

// export default ViewModal;

import React from "react";
import { Modal, Descriptions, Avatar } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { PiMapPinLight, PiShareFatLight } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { RiMessageLine } from "react-icons/ri";
import { BiSolidFilePdf } from "react-icons/bi";
import { CgSoftwareDownload } from "react-icons/cg";

const ViewModal = ({
  visible,
  onClose,
  record,
  handleAccept,
  handleDelete,
}) => {
  if (!record) return null;

  return (
    <Modal
      title="Service Request Details"
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={1000}
      centered
    >
      <div className="w-full flex justify-end gap-2 my-6">
        <button
          className="bg-green-400 hover:bg-green-500 flex gap-2 rounded-lg px-3 py-1"
          onClick={() => handleAccept(record)}
        >
          <CheckOutlined />
          Accept
        </button>
        <button
          className="bg-red-400 hover:bg-red-500 flex gap-2 rounded-lg px-3 py-1"
          onClick={() => handleDelete(record.key)}
        >
          <CloseOutlined />
          Reject
        </button>
      </div>

      <div className="flex border p-3 rounded-lg gap-3 my-6">
        <Avatar src={record.avatar} size={120} shape="square" />
        <div className="flex w-full items-center justify-between ">
          <div className="flex flex-col justify-between">
            <h2 className="text-[20px] font-medium">{record.customername}</h2>
            <h2 className="text-[16px] font-normal text-paragraph flex items-center gap-2">
              <PiMapPinLight />
              {record.address}
            </h2>
            <h2 className="text-[16px] font-normal  text-paragraph flex items-center gap-2">
              <FiPhoneCall />
              +1236-44454
            </h2>
            <h2 className="text-[16px] font-normal  text-paragraph flex items-center gap-2">
              <MdDateRange />
              25 Jan 2025
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <button className="group">
              <RiMessageLine
                size={30}
                className="text-prince transition-transform duration-200 group-hover:scale-x-[-1] group-hover:translate-x-1"
              />
            </button>
            <h2 className="text-[20px] font-medium">Send Message</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-6">
        <h1 className="text-[20px] font-medium">Service</h1>
        <div className="flex flex-col gap-2 border rounded-lg p-3">
          <h1 className="text-[16px] font-medium">
            Need Building compliance Certificate for my new building
          </h1>
          <h4 className="bg-[#f5effb] px-2 py-0.5 rounded-lg w-fit">
            {record.service}
          </h4>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-6">
        <h1 className="text-[20px] font-medium">Service Details</h1>
        <div className="flex flex-col gap-2 border rounded-lg p-3">
          <p className="text-[16px] font-normal text-paragraph">
            We need assistance in obtaining a Building Compliance Certificate
            for a newly constructed residential property. The property includes
            a 3-story building with 8 units. All construction work has been
            completed, and we require a professional to verify compliance with
            local building codes and regulations. Necessary documents and plans
            will be provided upon request.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-6 w-1/3">
        <h1 className="text-[20px] font-medium">Attachment</h1>
        <div className="flex flex-col gap-2 border rounded-lg p-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BiSolidFilePdf size={50} />
              <div>
                <h2 className="text-[14px] font-medium">File Title.pdf</h2>
                <p>313 KB . 31 Aug, 2022 </p>
              </div>
            </div>

            <CgSoftwareDownload
              size={25}
              className="text-green-400 hover:text-green-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 text-[20px] font-medium text-prince hover:text-white hover:bg-prince rounded-lg border border-prince w-fit h-10 px-2 py-1.5 mb-6">
        <PiShareFatLight size={25} />
        <h2>Forward to Nearby Service Providers</h2>
      </div>
    </Modal>
  );
};

export default ViewModal;
