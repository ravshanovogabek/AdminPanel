import React from 'react';
import { Button, Table, Space, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    name: 'City 1',
    text: 'Description of City 1',
    imageUrl: 'https://example.com/image1.jpg',
  },
  {
    key: '2',
    name: 'City 2',
    text: 'Description of City 2',
    imageUrl: 'https://example.com/image2.jpg',
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
    title: 'Text',
    dataIndex: 'text',
    key: 'text',
  },
  {
    title: 'Image',
    dataIndex: 'imageUrl',
    key: 'imageUrl',
    render: (text, record) => (
      <div style={{ width: 100, height: 100 }}>
        <img
          width={100}
          height={100}
          src={record.imageUrl}
          alt="city img"
          style={{ objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
    ),
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
  console.log('Edit city with key:', key);
  // Implement edit functionality
};

const handleDelete = (key) => {
  console.log('Delete city with key:', key);
  // Implement delete functionality
};

function Cities() {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
      <Button type="primary" onClick={() => console.log('Add City')}>Add City</Button>
    </div>
  );
}

export default Cities;
