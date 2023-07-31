// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { Typography, TextField, Button } from '@mui/material';

const Login = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // ログイン処理を実装
    // バックエンドとの認証を行い、ログインに成功したらスケジュールページに遷移する
    // ここではサンプルとしてダミーのログイン成功をシミュレートしています
    if (email === 'example@example.com' && password === 'password') {
      navigate('/schedule'); // Use navigate instead of push
    } else {
      alert('ログインに失敗しました');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4">ログイン画面</Typography>
      <TextField
        type="email"
        label="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: '10px' }}
      />
      <br />
      <TextField
        type="password"
        label="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: '10px' }}
      />
      <br />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        ログイン
      </Button>
    </div>
  );
};

export default Login;
