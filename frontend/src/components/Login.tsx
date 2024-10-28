import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-1/2 mt-[60px]">
      <form onSubmit={handleLogin} className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-white mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full p-2 mb-4 rounded-md bg-gray-700 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 mb-4 rounded-md bg-gray-700 text-white"
        />
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;