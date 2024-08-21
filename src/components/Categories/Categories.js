import React from 'react';
import { Button, Table, Space, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    name: 'Category 1',
  },
  {
    key: '2',
    name: 'Category 2',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search name"
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={confirm}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={confirm}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={clearFilters} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button type="primary" onClick={() => handleEdit(record.key)}>Edit</Button>
        <Button type="primary" danger onClick={() => handleDelete(record.key)}>Delete</Button>
      </Space>
    ),
  },
];

const handleEdit = (key) => {
  console.log('Edit category with key:', key);
  // Implement edit functionality
};

const handleDelete = (key) => {
  console.log('Delete category with key:', key);
  // Implement delete functionality
};

function Categories() {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
      <Button type="primary" onClick={() => console.log('Add Category')}>Add Category</Button>
    </div>
  );
}

export default Categories;
