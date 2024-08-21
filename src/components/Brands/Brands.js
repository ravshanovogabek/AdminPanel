import React from 'react';
import { Button, Table, Space, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    name: 'Bugatti',
    cost: '$2,000,000',
    logo: 'https://example.com/bugatti-logo.jpg',
  },
  {
    key: '2',
    name: 'Lamborghini',
    cost: '$1,500,000',
    logo: 'https://example.com/lamborghini-logo.jpg',
  },
  // Add more brands as needed
];

const columns = [
  {
    title: 'Logo',
    dataIndex: 'logo',
    key: 'logo',
    render: (text) => (
      <div style={{ width: 100, height: 50 }}>
        <img
          width={100}
          height={50}
          src={text}
          alt="brand logo"
          style={{ objectFit: 'cover' }}
        />
      </div>
    ),
  },
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
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost',
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
  console.log('Edit brand with key:', key);
  // Implement edit functionality
};

const handleDelete = (key) => {
  console.log('Delete brand with key:', key);
  // Implement delete functionality
};

function Brands() {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
      <Button type="primary" onClick={() => console.log('Add Brand')}>Add Brand</Button>
    </div>
  );
}

export default Brands;
