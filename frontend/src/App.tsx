// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import Chat from './components/Chat';
import PasswordManager from './components/PasswordManager';
import { IconContext } from 'react-icons';


// interface PasswordManagerProps {
//   taskName: string;
//   taskDescription: string;
// }

const App: React.FC = () => {
  // const [passwords, setPasswords] = useState<PasswordManagerProps[]>([]);

  return (
    <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
      <Router>
        <div className='p-4 flex flex-col min-h-screen bg-gray-900 bg-gradient-to-br from-gray-800 to-black text-white'>
          <Header />
          {/* <PasswordManager /> */}
          <main className='mt-6 flex-grow'>
            <Routes>
            <Route 
                path="/" 
                element={<Home />} />

              <Route 
                path="/home" 
                element={<Home />} />

              <Route 
              path="/register" 
              element={<Register />} />

              <Route 
              path="/login" 
              element={<Login />} />

              <Route 
              path="/contact" 
              element={<Login />} />
        </Routes>
          </main>
          <Chat />
          <Footer />
        </div>
      </Router>
    </IconContext.Provider>
  );
};

export default App;