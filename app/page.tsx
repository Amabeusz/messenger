"use client";
import { useEffect, useState } from "react";
import Chat from "./components/chat";
import ChatInput from "./components/chatInput";

type chat = {
  id: number;
  users: user[];
  messages: message[];
};

type chatUser = {
  id: number;
  userId: number;
  chatId: number;
  userNickname: string;
};

type user = {
  id: number;
  login: string;
  name: string;
};

type message = {
  id: number;
  userId: string;
  content: string;
  additionalContent: number;
};

type additionalContent = {
  id: number;
  messageId: number;
  type: number;
  content: string;
};

// table
// poll
// image ?\
type additionalContentType = {
  id: number;
  name: string;
};

type reaction = {
  id: number;
  messageId: number;
  userId: number;
  reaction: string;
};

export default function Home() {
  const [messages, setMessages] = useState<string[]>(["1.a", "2.a"]);

  const addMessage = (message: string) => {
    setMessages([...messages, message]);
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <main className="">
      <div className="grid grid-cols-4 grid-rows-4 w-screen  h-screen bg-green-950">
        <div className="row-span-4 col-span-1 bg-gray-900">
          <h3>hello</h3>
        </div>
        <div className="row-span-3 col-span-3 bg-green-900">
          <Chat messages={messages} />
        </div>
        <div className="col-span-3 bg-blue-950">
          <ChatInput addMessage={addMessage} />
        </div>
      </div>
    </main>
  );
}
