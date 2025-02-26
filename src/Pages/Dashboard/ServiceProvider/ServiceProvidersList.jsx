// import React, { useState } from "react";
// import { Table, Avatar, ConfigProvider, Input, Button } from "antd"; // Import Button
// // import shop from "../../../assets/gtdandy/icons/shop.png";
// import {
//   MoreOutlined,
//   SearchOutlined,
//   DeleteOutlined,
// } from "@ant-design/icons";

// function ServiceProvidersList() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedRowKeys, setSelectedRowKeys] = useState([]); // Track selected rows
//   const [userData, setUserData] = useState(data); // Store user data

//   // Handle Search
//   const handleSearch = (value) => {
//     setSearchQuery(value);
//   };

//   // Filter data based on search query
//   const filteredData = userData.filter(
//     (user) =>
//       user.providersname.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.phone.includes(searchQuery)
//   );

//   // Handle row selection
//   const rowSelection = {
//     selectedRowKeys,
//     onChange: setSelectedRowKeys,
//   };

//   // Delete selected users
//   const handleDeleteSelected = () => {
//     setUserData(userData.filter((user) => !selectedRowKeys.includes(user.key)));
//     setSelectedRowKeys([]); // Reset selection
//   };

//   return (
//     <ConfigProvider
//       theme={{
//         components: {
//           Table: {
//             rowSelectedBg: "#f5effb",
//             headerBg: "#f5effb",
//           },
//           Pagination: {
//             borderRadius: "3px",
//             itemActiveBg: "#975cdb",
//             // itemHoverBg: "#ffffff",
//             itemBg: "#000000",
//           },
//           Button: {
//             defaultHoverBg: "#975cdb ",
//             defaultHoverColor: "white",
//             defaultHoverBorderColor: "#975cdb ",
//           },
//         },
//       }}
//     >
//       <div className="flex justify-between items-center px-10 py-5">
//         <h1 className="text-[20px] font-medium">Service Providers</h1>
//         <div className="flex gap-3">
//           <Input
//             placeholder="Search by Name, Email or Phone"
//             onChange={(e) => handleSearch(e.target.value)}
//             prefix={<SearchOutlined />}
//             style={{ width: 200, height: 40 }}
//           />
//           {selectedRowKeys.length > 0 && (
//             <Button
//               // type="primary"
//               // danger
//               icon={<DeleteOutlined />}
//               onClick={handleDeleteSelected}
//               className="bg-[#9d6fd6] text-white border-none h-10"
//             >
//               Delete Selected
//             </Button>
//           )}
//         </div>
//       </div>

//       <Table
//         rowSelection={rowSelection}
//         columns={columns}
//         dataSource={filteredData}
//         className="px-10"
//         pagination={{
//           pageSizeOptions: [5, 10, 15, 20],
//           defaultPageSize: 5,
//           position: ["bottomCenter"],
//         }}
//       />
//     </ConfigProvider>
//   );
// }

// export default ServiceProvidersList;

// function UserAvatar({ user, providersname }) {
//   return (
//     <div className="flex gap-2 items-center">
//       <Avatar shape="square" size={40} src={user} />
//       <p>{providersname}</p>
//     </div>
//   );
// }

// const columns = [
//   {
//     title: "Service Provider Name",
//     dataIndex: "providersname",
//     key: "providersname",
//     render: (text, record) => (
//       <div className="flex items-center gap-2.5">
//         <Avatar src={record.avatar} alt={text} shape="circle" size={40} />
//         <div className="flex flex-col">
//           <span>{text}</span>
//           <span>{text}@gmail.com</span>
//         </div>
//       </div>
//     ),
//   },
//   // {
//   //   title: "Email",
//   //   dataIndex: "email",
//   //   key: "email",
//   // },
//   {
//     title: "Category",
//     dataIndex: "category",
//     key: "category",
//   },
//   {
//     title: "Phone Number",
//     dataIndex: "phoneNumber",
//     key: "phone",
//   },
//   {
//     title: "Addess",
//     dataIndex: "address",
//     key: "address",
//   },
//   {
//     title: "Earn",
//     dataIndex: "earn",
//     key: "earn",
//   },
//   {
//     key: "action",
//     render: () => <MoreOutlined className="cursor-pointer w-10 h-10" />,
//   },
// ];

// const data = [
//   {
//     key: 1,
//     providersname: "John Doe",
//     email: "test@gmail.com",
//     phone: "+1234567890",
//     address: "10 Warehouse Road, Apapa, Lagos",
//   },
//   {
//     key: 2,
//     providersname: "Jane Smith",
//     email: "test2@gmail.com",
//     phone: "+1234567891",
//     address: "10 Warehouse Road, Apapa, Lagos",
//   },
//   {
//     key: 3,
//     providersname: "Mark Johnson",
//     email: "test3@ymail.com",
//     phone: "+1234567892",
//     address: "10 Warehouse Road, Apapa, Lagos",
//   },
//   {
//     key: 4,
//     providersname: "Alice Brown",
//     email: "alice@gmail.com",
//     phone: "+1234567893",
//     address: "10 Warehouse Road, Apapa, Lagos",
//   },
//   {
//     key: 5,
//     providersname: "John Doe",
//     email: "test@gmail.com",
//     phone: "+1234567890",
//     address: "10 Warehouse Road, Apapa, Lagos",
//   },
//   {
//     key: 6,
//     providersname: "Jane Smith",
//     email: "test2@gmail.com",
//     phone: "+1234567891",
//     address: "10 Warehouse Road, Apapa, Lagos",
//   },
//   {
//     key: 7,
//     providersname: "Mark Johnson",
//     email: "test3@ymail.com",
//     phone: "+1234567892",
//     address: "10 Warehouse Road, Apapa, Lagos",
//   },
//   {
//     key: 8,
//     providersname: "Alice Brown",
//     email: "alice@gmail.com",
//     phone: "+1234567893",
//     address: "10 Warehouse Road, Apapa, Lagos",
//   },
//   {
//     key: 9,
//     providersname: "John Doe",
//     email: "test@gmail.com",
//     phone: "+1234567890",
//     address: "10 Warehouse Road, Apapa, Lagos",
//   },
//   {
//     key: 10,
//     providersname: "Jane Smith",
//     email: "test2@gmail.com",
//     phone: "+1234567891",
//     address: "10 Warehouse Road, Apapa, Lagos",
//   },
//   {
//     key: 11,
//     providersname: "Mark Johnson",
//     email: "test3@ymail.com",
//     phone: "+1234567892",
//     address: "10 Warehouse Road, Apapa, Lagos",
//   },
//   {
//     key: 12,
//     providersname: "Alice Brown",
//     email: "alice@gmail.com",
//     phone: "+1234567893",
//     address: "10 Warehouse Road, Apapa, Lagos",
//   },
// ];

import React, { useState } from "react";
import { Table, Avatar, ConfigProvider, Input, Button } from "antd";
import {
  MoreOutlined,
  SearchOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

function ServiceProvidersList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [userData, setUserData] = useState(data);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const filteredData = userData.filter(
    (user) =>
      user.providersname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phoneNumber.includes(searchQuery)
  );

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
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
          },
          Pagination: {
            borderRadius: "3px",
            itemActiveBg: "#18a0fb",
            // itemBg: "#000000",
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
        <h1 className="text-[20px] font-medium">Service Providers</h1>
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
        columns={columns}
        dataSource={filteredData}
        pagination={{
          // onChange: cancel,
          defaultPageSize: 5,
          position: ["bottomRight"],
          size: "default",
          total: 50,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
      />
    </ConfigProvider>
  );
}

export default ServiceProvidersList;

const columns = [
  {
    title: "Service Provider Name",
    dataIndex: "providersname",
    key: "providersname",
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
    title: "Category",
    dataIndex: "category",
    key: "category",
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
    title: "Earn",
    dataIndex: "earn",
    key: "earn",
  },
  {
    key: "action",
    render: () => <MoreOutlined className="cursor-pointer w-10 h-10" />,
  },
];

const data = [
  {
    key: 1,
    providersname: "John Doe",
    email: "johndoe@gmail.com",
    category: "Plumbing",
    phoneNumber: "+1234567890",
    address: "10 Warehouse Road, Apapa, Lagos",
    earn: "$5000",
    avatar: "",
  },
  {
    key: 2,
    providersname: "Jane Smith",
    email: "janesmith@gmail.com",
    category: "Electrical",
    phoneNumber: "+1234567891",
    address: "15 Broad Street, Lagos",
    earn: "$4500",
    avatar: "",
  },
  {
    key: 3,
    providersname: "Mark Johnson",
    email: "markjohnson@ymail.com",
    category: "Painting",
    phoneNumber: "+1234567892",
    address: "22 Victoria Island, Lagos",
    earn: "$4000",
    avatar: "",
  },
  {
    key: 4,
    providersname: "Alice Brown",
    email: "alicebrown@gmail.com",
    category: "Carpentry",
    phoneNumber: "+1234567893",
    address: "18 Lekki Phase 1, Lagos",
    earn: "$5500",
    avatar: "",
  },
  {
    key: 5,
    providersname: "Michael Davis",
    email: "michaeldavis@gmail.com",
    category: "Cleaning",
    phoneNumber: "+1234567894",
    address: "25 Ikeja, Lagos",
    earn: "$3000",
    avatar: "",
  },
  {
    key: 6,
    providersname: "Sarah Wilson",
    email: "sarahwilson@gmail.com",
    category: "Landscaping",
    phoneNumber: "+1234567895",
    address: "30 Yaba, Lagos",
    earn: "$3500",
    avatar: "",
  },
  {
    key: 7,
    providersname: "David Martinez",
    email: "davidmartinez@gmail.com",
    category: "Renovation",
    phoneNumber: "+1234567896",
    address: "40 Surulere, Lagos",
    earn: "$6000",
    avatar: "",
  },
  {
    key: 8,
    providersname: "Emily Johnson",
    email: "emilyjohnson@gmail.com",
    category: "Interior Design",
    phoneNumber: "+1234567897",
    address: "12 Ikoyi, Lagos",
    earn: "$7000",
    avatar: "",
  },
  {
    key: 9,
    providersname: "Robert Brown",
    email: "robertbrown@gmail.com",
    category: "Roofing",
    phoneNumber: "+1234567898",
    address: "35 Festac, Lagos",
    earn: "$4800",
    avatar: "",
  },
  {
    key: 10,
    providersname: "Olivia Miller",
    email: "oliviamiller@gmail.com",
    category: "HVAC",
    phoneNumber: "+1234567899",
    address: "50 GRA, Lagos",
    earn: "$5200",
    avatar: "",
  },
  {
    key: 11,
    providersname: "Daniel White",
    email: "danielwhite@gmail.com",
    category: "Welding",
    phoneNumber: "+1234567800",
    address: "28 Magodo, Lagos",
    earn: "$4300",
    avatar: "",
  },
  {
    key: 12,
    providersname: "Sophia Lewis",
    email: "sophialewis@gmail.com",
    category: "Tiling",
    phoneNumber: "+1234567801",
    address: "32 Ogba, Lagos",
    earn: "$3900",
    avatar: "",
  },
];
