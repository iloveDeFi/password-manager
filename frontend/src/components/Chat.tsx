import React, { useState } from 'react';
import { VscSend } from "react-icons/vsc";

// interface ChatProps {
//   question: string;
// }

const Chat: React.FC/*<ChatProps>*/ = () => {
    const [inputValue, setInputValue] = useState('');

    const sendMessage = () => {
      if (inputValue.trim() !== '') {
        // setMessages([...messages, inputValue]);
        setInputValue('');
      }
    };
  
  return (
    <div>
        <p className="text-white text-xl flex justify-center items-center ">Any question? Our team's ready to help you </p>
     

     <div className="chat-container pb-8">
       {/* Chat input area */}
       
       <div className="w-full p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl max-w-lg mx-auto m-5">
 <div className="bg-black w-full p-8 flex justify-center items-center rounded-xl">
   <input
     type="text"
     value={inputValue}
     onChange={(e) => setInputValue(e.target.value)}
     className="text-black chat-input p-2 mr-2 rounded-xl bg-white border border-transparent focus:outline-none"
     placeholder="💬 Write your task here..."
   />
   <button
     className="text-white flex items-center px-4 py-2 rounded-xl border border-transparent bg-gray-700 hover:bg-gray-600"
     onClick={sendMessage}
   >
     Send
     <VscSend className="ml-2" />
   </button>
 </div>
</div>
       
     </div>
    </div>
  );
};

export default Chat;