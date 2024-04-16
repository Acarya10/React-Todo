import React, { useState } from 'react';
import { Card, Container, TextInput, Button } from '@mantine/core';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = ({ updateAuthentication }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history= useHistory()
  const handleLogin = () => {
    // Simulate authentication
    if (
      (username === 'abcd@gmail.com' && password === '12345') ||
      (username === 'gautamacharya10@gmail.com' && password === '12345')
    ) {
      
      history.push("/todo")
      alert('Login successful');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container size="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card shadow="md" padding="xl" style={{ width: '400px', backgroundColor: 'black', color: 'white' }}>
        <h2>Login</h2>
        <div>
          <TextInput
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ backgroundColor: 'orange' }}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <TextInput
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ backgroundColor: 'orange' }}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button
            onClick={() => {
              handleLogin();
            }}
            style={{ backgroundColor: 'black', color: 'white' }}
          >
            Login
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
