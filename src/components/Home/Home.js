import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Table, Image, Space, Input } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuFoldOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import './home.css'; // Custom CSS for additional styling

const { Header, Sider, Content } = Layout;

function Home() {
  const navigate = useNavigate();

  const dataSource = [
    {
      key: '1',
      name: 'Sample Name',
      text: 'Sample Text',
      imageUrl: 'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/a0abb91f-ca01-4541-bb84-8dd58355c891.jpeg',
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
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search text"
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
      title: 'Image',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: (text, record) => (
        <div style={{ width: 100, height: 100 }}>
          <Image
            width={100}
            height={100}
            src={record.imageUrl}
            alt="cities img"
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
          <Button type="primary" danger onClick={() => handleDelete(record.key)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleEdit = (key) => {
    console.log('Edit item with key:', key);
    // Navigate or handle edit functionality here
  };

  const handleDelete = (key) => {
    console.log('Delete item with key:', key);
    // Implement delete functionality here
  };

  function logoutFunc() {
    navigate('/login');
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} className="site-layout-background">
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" icon={<UserOutlined />} onClick={() => navigate('/categories')}>
            Categories
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={() => navigate('/cities')}>
            Cities
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />} onClick={() => navigate('/brands')}>
            Brands
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Button
            type="text"
            icon={<MenuFoldOutlined />}
            style={{ fontSize: 16, width: 64, height: 64 }}
            onClick={logoutFunc}
          />
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', borderRadius: 8 }}>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{
              position: ['bottomRight'],
            }}
          />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
