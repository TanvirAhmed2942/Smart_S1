// import React, { useState } from "react";
// import { Table, Avatar, ConfigProvider, Input, Button } from "antd";
// import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
// import GetPageName from "../../../components/common/GetPageName";
// import PopOver from "../../../components/common/PopOver";
// import CustomerEditModal from "../Service/CategoryList/CustomerEditModal";

// function Customer() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
//   const [userData, setUserData] = useState(data);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedProvider, setSelectedProvider] = useState(null);

//   const handleSearch = (value) => {
//     setSearchQuery(value);
//   };

//   const rowSelection = {
//     selectedRowKeys,
//     onChange: setSelectedRowKeys,
//   };

//   // Handle edit button click
//   const handleEdit = (record) => {
//     setSelectedProvider(record); // Store selected provider's data
//     setIsModalOpen(true); // Open modal
//   };

//   // Handle ban functionality
//   const handleBan = (provider) => {
//     setUserData((prevData) =>
//       prevData.map((user) =>
//         user.key === provider.key ? { ...user, banned: !user.banned } : user
//       )
//     );
//     alert(
//       `${provider.customerName} has been ${
//         provider.banned ? "unbanned" : "banned"
//       }`
//     );
//   };

//   // Handle saving edited provider
//   const handleSave = (updatedProvider) => {
//     setUserData((prevData) =>
//       prevData.map((user) =>
//         user.key === updatedProvider.key ? updatedProvider : user
//       )
//     );
//     setIsModalOpen(false);
//   };

//   const handleDeleteSelected = () => {
//     setUserData(userData.filter((user) => !selectedRowKeys.includes(user.key)));
//     setSelectedRowKeys([]);
//   };

//   return (
//     <ConfigProvider
//       theme={{
//         components: {
//           Table: {
//             rowSelectedBg: "#f6f6f6",
//             headerBg: "#f6f6f6",
//             headerSplitColor: "none",
//             headerBorderRadius: "none",
//             cellFontSize: "16px",
//           },
//           Pagination: {
//             borderRadius: "3px",
//             itemActiveBg: "#18a0fb",
//           },
//           Button: {
//             defaultHoverBg: "#18a0fb ",
//             defaultHoverColor: "white",
//             defaultHoverBorderColor: "#18a0fb ",
//           },
//         },
//       }}
//     >
//       <div className="flex justify-between items-center py-5">
//         <h1 className="text-[20px] font-medium">{GetPageName()}</h1>
//         <div className="flex gap-3">
//           <Input
//             placeholder="Search by Name, Email or Phone"
//             onChange={(e) => handleSearch(e.target.value)}
//             prefix={<SearchOutlined />}
//             style={{ width: 200, height: 40 }}
//           />
//           {selectedRowKeys.length > 0 && (
//             <Button
//               icon={<DeleteOutlined />}
//               onClick={handleDeleteSelected}
//               className="bg-smart hover:bg-smart text-white border-none h-10"
//             >
//               Delete Selected
//             </Button>
//           )}
//         </div>
//       </div>

//       <Table
//         rowSelection={rowSelection}
//         columns={columns(handleEdit, handleBan)} // Pass handleEdit and handleBan to columns
//         dataSource={filteredData}
//         pagination={{
//           defaultPageSize: 5,
//           position: ["bottomRight"],
//           size: "default",
//           total: 50,
//           showSizeChanger: true,
//           showQuickJumper: true,
//         }}
//       />
//       {/* Edit Modal */}
//       <CustomerEditModal
//         isModalOpen={isModalOpen}
//         handleCancel={() => setIsModalOpen(false)}
//         providerData={selectedProvider}
//         onSave={handleSave}
//       />
//     </ConfigProvider>
//   );
// }

// export default Customer;

// const columns = (handleEdit, handleBan) => [
//   {
//     title: "Customer Name",
//     dataIndex: "customerName",
//     key: "customerName",
//     render: (text, record) => (
//       <div className="flex items-center gap-2.5">
//         <Avatar src={record.avatar} alt={text} shape="circle" size={40} />
//         <div className="flex flex-col">
//           <span>{text}</span>
//           <span>{record.email}</span>
//         </div>
//       </div>
//     ),
//   },

//   {
//     title: "Phone Number",
//     dataIndex: "phoneNumber",
//     key: "phoneNumber",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
//   {
//     title: "Spent",
//     dataIndex: "spent",
//     key: "spent",
//   },
//   {
//     key: "action",
//     render: (text, record) => (
//       <PopOver
//         onEdit={() => handleEdit(record)}
//         onBan={() => handleBan(record)} // Pass the handleBan function
//       />
//     ),
//   },
// ];

// const data = [
//   {
//     key: 1,
//     customerName: "John Doe",
//     email: "johndoe@gmail.com",

//     phoneNumber: "+1234567890",
//     address: "10 Warehouse Road, Apapa, Lagos",
//     spent: "$5000",
//     avatar: "",
//     banned: false, // Add banned field
//   },
//   {
//     key: 2,
//     customerName: "Jane Smith",
//     email: "janesmith@gmail.com",

//     phoneNumber: "+1234567891",
//     address: "15 Broad Street, Lagos",
//     spent: "$4500",
//     avatar: "",
//     banned: false, // Add banned field
//   },
// ];

import React, { useState } from "react";
import { Table, Avatar, ConfigProvider, Input, Button } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
import GetPageName from "../../../components/common/GetPageName";
import PopOver from "../../../components/common/PopOver";
import CustomerEditModal from "../Service/CategoryList/CustomerEditModal";

function Customer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [userData, setUserData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const filteredData = userData.filter((user) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      user.customerName.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower) ||
      user.phoneNumber.includes(searchQuery) ||
      user.address.toLowerCase().includes(searchLower) ||
      user.spent.toLowerCase().includes(searchLower) ||
      (user.avatar && user.avatar.toLowerCase().includes(searchLower)) // Add checks for any other fields if necessary
    );
  });

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  // Handle edit button click
  const handleEdit = (record) => {
    setSelectedProvider(record); // Store selected provider's data
    setIsModalOpen(true); // Open modal
  };

  // Handle ban functionality
  const handleBan = (provider) => {
    setUserData((prevData) =>
      prevData.map((user) =>
        user.key === provider.key ? { ...user, banned: !user.banned } : user
      )
    );
    alert(
      `${provider.customerName} has been ${
        provider.banned ? "unbanned" : "banned"
      }`
    );
  };

  // Handle saving edited provider
  const handleSave = (updatedProvider) => {
    setUserData((prevData) =>
      prevData.map((user) =>
        user.key === updatedProvider.key ? updatedProvider : user
      )
    );
    setIsModalOpen(false);
  };

  const handleDeleteSelected = () => {
    setUserData(userData.filter((user) => !selectedRowKeys.includes(user.key)));
    setSelectedRowKeys([]);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            rowSelectedBg: "#f6f6f6",
            headerBg: "#f6f6f6",
            headerSplitColor: "none",
            headerBorderRadius: "none",
            cellFontSize: "16px",
          },
          Pagination: {
            borderRadius: "3px",
            itemActiveBg: "#18a0fb",
          },
          Button: {
            defaultHoverBg: "#18a0fb ",
            defaultHoverColor: "white",
            defaultHoverBorderColor: "#18a0fb ",
          },
        },
      }}
    >
      <div className="flex justify-between items-center py-5">
        <h1 className="text-[20px] font-medium">{GetPageName()}</h1>
        <div className="flex gap-3">
          <Input
            placeholder="Search by Name, Email or Phone"
            onChange={(e) => handleSearch(e.target.value)}
            prefix={<SearchOutlined />}
            style={{ width: 200, height: 40 }}
          />
          {selectedRowKeys.length > 0 && (
            <Button
              icon={<DeleteOutlined />}
              onClick={handleDeleteSelected}
              className="bg-smart hover:bg-smart text-white border-none h-10"
            >
              Delete Selected
            </Button>
          )}
        </div>
      </div>

      <Table
        rowSelection={rowSelection}
        columns={columns(handleEdit, handleBan)} // Pass handleEdit and handleBan to columns
        dataSource={filteredData}
        pagination={{
          defaultPageSize: 5,
          position: ["bottomRight"],
          size: "default",
          total: 50,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
      />
      {/* Edit Modal */}
      <CustomerEditModal
        isModalOpen={isModalOpen}
        handleCancel={() => setIsModalOpen(false)}
        providerData={selectedProvider}
        onSave={handleSave}
      />
    </ConfigProvider>
  );
}

export default Customer;

const columns = (handleEdit, handleBan) => [
  {
    title: "Customer Name",
    dataIndex: "customerName",
    key: "customerName",
    render: (text, record) => (
      <div className="flex items-center gap-2.5">
        <Avatar src={record.avatar} alt={text} shape="circle" size={40} />
        <div className="flex flex-col">
          <span>{text}</span>
          <span>{record.email}</span>
        </div>
      </div>
    ),
  },

  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Spent",
    dataIndex: "spent",
    key: "spent",
  },
  {
    key: "action",
    render: (text, record) => (
      <PopOver
        onEdit={() => handleEdit(record)}
        onBan={() => handleBan(record)} // Pass the handleBan function
      />
    ),
  },
];

const data = [
  {
    key: 1,
    customerName: "John Doe",
    email: "johndoe@gmail.com",
    phoneNumber: "+1234567890",
    address: "10 Warehouse Road, Apapa, Lagos",
    spent: "$5000",
    avatar: "",
    banned: false, // Add banned field
  },
  {
    key: 2,
    customerName: "Jane Smith",
    email: "janesmith@gmail.com",
    phoneNumber: "+1234567891",
    address: "15 Broad Street, Lagos",
    spent: "$4500",
    avatar: "",
    banned: false, // Add banned field
  },
];
