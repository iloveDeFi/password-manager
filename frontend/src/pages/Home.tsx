// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home: React.FC = () => {
  const [passwords, setPasswords] = useState<{ title: string; _id: string }[]>([]);
  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('');

  const fetchPasswords = async () => {
    const response = await axios.get('http://localhost:5000/api/passwords');
    setPasswords(response.data);
  };

  const addPassword = async () => {
    await axios.post('http://localhost:5000/api/passwords', { title, password });
    fetchPasswords();
    setTitle('');
    setPassword('');
  };

  const deletePassword = async (id: string) => {
    await axios.delete(`http://localhost:5000/api/passwords/${id}`);
    fetchPasswords();
  };

  useEffect(() => {
    fetchPasswords();
  }, []);

  return (
    <div className="pt-[90px] w-full grid justify-center">
      <h2 className="text-xl mb-4">Manage Your Passwords</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-2"
      />
      <button onClick={addPassword} className="text-white flex justify-center items-center p-2 rounded-sm border border-transparent bg-gray-700 hover:bg-gray-600">Add Password</button>
      <ul className="mt-4">
        {passwords.map((pwd) => (
          <li key={pwd._id} className="flex justify-between items-center mb-2">
            <span>{pwd.title}</span>
            <button onClick={() => deletePassword(pwd._id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;


// import React, { useState } from 'react';


// interface HomeProps {
//   messages: string[];
//   setMessages: React.Dispatch<React.SetStateAction<string[]>>;
// }

// const Home: React.FC<HomeProps> = ({}) => {
 
//   return (
//     <div className="flex justify-center items-center min-h-screen pb-[60px] grid-bg home-container rounded-3xl">

//       <div className="w-full text-white from-neutral-100 text-xl">
        
//         <div className="p-[20px] mb-[60px] h-[400px] bg-transparent w-full rounded-xl">
//         </div>

//         <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] rounded-lg inline-block">
//         <div className="new hero flex flex-col justify-center items-center bg-[url('https://images.pexels.com/photos/14786199/pexels-photo-14786199.jpeg')] bg-cover bg-bottom text-white p-[300px] w-full h-[300px] rounded-xl shadow-md">
//   <h1 className='fade-in-up mb-4'>Encrypt your password safely</h1>
//   <p className='fade-in-up mb-4'>Save time now with Password Manager</p>
//   <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">Download</button>
// </div>
// </div>

//       </div>
//     </div>
//   );
// };

// export default Home;
