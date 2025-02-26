import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  ConfigProvider,
  Avatar,
  Button,
} from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import GetPageName from "../../../components/common/GetPageName";
import { FaBan } from "react-icons/fa6";

const originData = Array.from({ length: 20 }).map((_, i) => ({
  key: i.toString(),
  customername: `Edward ${i}`,
  email: `edward${i}@mail.com`,
  phoneNumber: `12345678${i}`,
  address: `London Park no. ${i}`,
  spent: `$${(i + 1) * 100}`,
  avatar: "",
}));

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[{ required: true, message: `Please Input ${title}!` }]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Customer = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [searchText, setSearchText] = useState("");
  const [editingKey, setEditingKey] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.key);
  };

  const cancel = () => setEditingKey("");

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => item.key === key);
      if (index > -1) {
        newData[index] = { ...newData[index], ...row };
        setData(newData);
      }
      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleDelete = (key) => {
    setData(data.filter((item) => item.key !== key));
  };

  const handleBan = (key) => {
    confirm(key);
  };

  const handleDeleteSelected = () => {
    setData(data.filter((item) => !selectedRowKeys.includes(item.key)));
    setSelectedRowKeys([]);
  };

  const handleDeleteAll = () => {
    setData([]);
    setSelectedRowKeys([]);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const filteredData = data.filter((item) => {
    return Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customername",
      width: "20%",
      editable: true,
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
      width: "10%",
      editable: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      width: "25%",
      editable: true,
    },
    {
      title: "Spent",
      dataIndex: "spent",
      width: "25%",
      editable: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <div className="flex items-center justify-start gap-4">
            <button
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
              className="text-sky-500 hover:text-sky-600"
            >
              <FiEdit3 size={20} />
            </button>
            <Popconfirm
              title="Are you sure to Ban?"
              onConfirm={() => handleBan(record.key)}
            >
              <button className="text-red-400 hover:text-red-600">
                <FaBan size={20} />
              </button>
            </Popconfirm>
            <Popconfirm
              title="Are you sure to delete?"
              onConfirm={() => handleDelete(record.key)}
            >
              <button className="text-red-400 hover:text-red-600">
                <RiDeleteBin6Line size={20} />
              </button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => ({
    ...col,
    onCell: (record) =>
      col.editable
        ? {
            inputType: col.dataIndex === "phoneNumber" ? "number" : "text",
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
          }
        : undefined,
  }));

  return (
    <>
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
          <h1 className="text-[20px] font-medium">{GetPageName()}</h1>
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search by name, email, phone, or address"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              allowClear
              style={{ width: 200, height: 40 }}
            />
            {selectedRowKeys.length >= 2 && (
              <Popconfirm
                title={
                  selectedRowKeys.length === data.length
                    ? "Are you sure to delete all?"
                    : "Are you sure to delete selected?"
                }
                onConfirm={
                  selectedRowKeys.length === data.length
                    ? handleDeleteAll
                    : handleDeleteSelected
                }
              >
                <Button
                  icon={<RiDeleteBin6Line />}
                  style={{ marginLeft: 8 }}
                  className="bg-smart/90 h-10 text-white hover:bg-smart border-none"
                >
                  {selectedRowKeys.length === data.length
                    ? "Delete All"
                    : "Delete Selected"}
                </Button>
              </Popconfirm>
            )}
          </div>
        </div>

        <Form form={form} component={false}>
          <Table
            rowSelection={rowSelection}
            components={{ body: { cell: EditableCell } }}
            bordered
            dataSource={filteredData}
            columns={mergedColumns}
            rowClassName="editable-row"
            pagination={{
              onChange: cancel,
              defaultPageSize: 5,
              position: ["bottomRight"],
              size: "default",
              total: 50,
              showSizeChanger: true,
              showQuickJumper: true,
            }}
          />
        </Form>
      </ConfigProvider>
    </>
  );
};

export default Customer;
