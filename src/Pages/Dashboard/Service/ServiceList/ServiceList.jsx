import React, { useState } from "react";
import {
  Table,
  ConfigProvider,
  Modal,
  Form,
  Input,
  Upload,
  message,
  Button,
} from "antd";
import {
  PlusOutlined,
  CloudUploadOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import ButtonEDU from "../../../../components/common/ButtonEDU";

import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import GetPageName from "../../../../components/common/GetPageName";

function ServiceList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [form] = Form.useForm();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [editingKey, setEditingKey] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [tableData, setTableData] = useState([
    {
      key: "1",
      serial: 1,
      category: "Photography",
      icon: "",
      totalServices: 20,
      priceRange: "$50 - $500",
    },
    {
      key: "2",
      serial: 2,
      category: "Graphic Design",
      icon: "",
      totalServices: 15,
      priceRange: "$30 - $300",
    },
    {
      key: "3",
      serial: 3,
      category: "Web Development",
      icon: "",
      totalServices: 25,
      priceRange: "$100 - $1000",
    },
    {
      key: "4",
      serial: 4,
      category: "Marketing",
      icon: "",
      totalServices: 10,
      priceRange: "$50 - $700",
    },
    {
      key: "5",
      serial: 5,
      category: "Writing & Editing",
      icon: "",
      totalServices: 18,
      priceRange: "$20 - $400",
    },
  ]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingRecord, setDeletingRecord] = useState(null);
  const [filteredData, setFilteredData] = useState(tableData);
  const showModal = () => {
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setUploadedImage(null);
    setEditingKey(null);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    if (!value) {
      setFilteredData(tableData); // Reset to full list when search is cleared
      return;
    }

    const newFilteredData = tableData.filter((item) =>
      Object.keys(item).some(
        (key) =>
          key !== "icon" && // Exclude 'icon'
          key !== "serial" && // Exclude 'serial'
          String(item[key]).toLowerCase().includes(value)
      )
    );

    setFilteredData(newFilteredData);
  };
  const handleFormSubmit = (values) => {
    if (!uploadedImage && !isEditing) {
      message.error("Please upload an image!");
      return;
    }

    if (isEditing) {
      // Update existing row
      const updatedData = tableData.map((item) =>
        item.key === editingKey
          ? {
              ...item,
              name: values.name,
              icon: uploadedImage || item.icon,
            }
          : item
      );
      setTableData(updatedData);
      message.success("Slider updated successfully!");
    } else {
      // Add new row
      setTableData([
        ...tableData,
        {
          key: (tableData.length + 1).toString(),
          name: values.name,
          serial: tableData.length + 1,
          icon: uploadedImage,
        },
      ]);
      message.success("Slider added successfully!");
    }

    handleCancel();
  };

  const handleImageUpload = (info) => {
    const file = info.file.originFileObj;
    if (!file) return;

    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleEdit = (record) => {
    setIsEditing(true);
    setEditingKey(record.key);
    setUploadedImage(record.icon);
    form.setFieldsValue({ name: record.name });
    setIsModalOpen(true);
  };

  const handleDelete = (key, name) => {
    setDeletingRecord({ key, name });
    setIsDeleteModalOpen(true);
  };

  const onConfirmDelete = () => {
    setTableData(tableData.filter((item) => item.key !== deletingRecord.key));
    message.success("Slider deleted successfully!");
    setIsDeleteModalOpen(false);
  };

  const onCancelDelete = () => {
    message.info("Delete action canceled.");
    setIsDeleteModalOpen(false);
  };

  const columns = [
    {
      title: "Sl",
      dataIndex: "serial",
      key: "serial",
      render: (serial) => (
        <p className="font-bold text-black text-[16px]">
          {serial < 10 ? "0" + serial : serial}
        </p>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
      render: (icon) => <img width={60} src={icon} alt="slider" />,
    },
    {
      title: "Total Services",
      dataIndex: "totalServices",
      key: "totalServices",
    },
    {
      title: "Price Range",
      dataIndex: "priceRange",
      key: "priceRange",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-4">
          <FiEdit2
            style={{ fontSize: 24 }}
            className="text-black hover:text-blue-500 cursor-pointer"
            onClick={() => handleEdit(record)}
          />
          <RiDeleteBin6Line
            style={{ fontSize: 24 }}
            className="text-black hover:text-red-500 cursor-pointer"
            onClick={() => handleDelete(record.key, record.name)}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <h1 className="text-[20px] font-medium">{GetPageName()}</h1>
        <div className="flex gap-4">
          <Input
            placeholder="Search in all columns"
            value={searchText}
            onChange={handleSearch}
            className="w-36 h-12"
          />
          <button
            className="bg-smart text-white px-4 py-2.5 rounded-md flex items-center"
            onClick={showModal}
          >
            <PlusOutlined className="mr-2" />
            Add New
          </button>
        </div>
      </div>

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
              // itemBg: "#000000",
            },
          },
        }}
      >
        <Table
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

      {/* Delete Confirmation Modal */}
      <Modal
        title="Delete Confirmation"
        visible={isDeleteModalOpen}
        onCancel={onCancelDelete}
        footer={null}
        centered
      >
        <div className="flex flex-col justify-between gap-5">
          <div className="flex justify-center">
            Are you sure you want to delete{" "}
            <span className="font-bold ml-1">{deletingRecord?.name}</span>?
          </div>
          <div className="flex justify-center gap-4">
            <ButtonEDU actionType="cancel" onClick={onCancelDelete} />
            <ButtonEDU actionType="delete" onClick={onConfirmDelete} />
          </div>
        </div>
      </Modal>

      {/* Modal Form */}
      <Modal
        title={isEditing ? "Edit Category" : "Add Service Category"}
        open={isModalOpen}
        onCancel={handleCancel}
        centered
        footer={null}
      >
        <ConfigProvider
          theme={{
            components: {
              Form: {
                labelFontSize: 16,
              },
            },
          }}
        >
          <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter the name!" }]}
            >
              <Input placeholder="Enter slider name" className="h-12" />
            </Form.Item>

            <Form.Item label="Upload Image">
              {uploadedImage ? (
                <div className="relative">
                  <img src={uploadedImage} alt="Uploaded" width={100} />
                  <CloseCircleOutlined
                    className="absolute top-0 right-0 text-red-500 cursor-pointer"
                    onClick={() => setUploadedImage(null)}
                  />
                </div>
              ) : (
                <Upload
                  name="image"
                  listType="picture-card"
                  showUploadList={false}
                  onChange={handleImageUpload}
                >
                  <button style={{ border: 0, background: "none" }}>
                    <CloudUploadOutlined style={{ fontSize: 24 }} />
                    <div>Upload</div>
                  </button>
                </Upload>
              )}
            </Form.Item>

            <div className="flex justify-end">
              <ButtonEDU actionType="save" />
            </div>
          </Form>
        </ConfigProvider>
      </Modal>
    </div>
  );
}

export default ServiceList;
