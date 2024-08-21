import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form } from 'antd';
import "./login.css";

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (values) => {
    // Extract values from the form submission
    const { username, password } = values;

    // Implement login logic here
    console.log('Submitted values:', { username, password });
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      navigate('/'); // Redirect to home page after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <Form
          onFinish={handleLogin} // Use onFinish instead of onSubmitCapture
        >
          <Form.Item 
            label="Username"
            name="username" // Ensure name matches form values
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter your username" 
            />
          </Form.Item>
          <Form.Item 
            label="Password"
            name="password" // Ensure name matches form values
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">Login</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
