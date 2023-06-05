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
  userId: number;
  content: string;
  additionalContentId: number;
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
  const [messages, setMessages] = useState<message[]>([
    {
      id: 1,
      userId: 1,
      content: "test 1",
      additionalContentId: 0,
    },
    {
      id: 2,
      userId: 2,
      content: "test 2",
      additionalContentId: 0,
    },
    {
      id: 1,
      userId: 1,
      content: "test 3",
      additionalContentId: 0,
    },
    {
      id: 1,
      userId: 1,
      content: "test 4",
      additionalContentId: 0,
    },
  ]);

  const addMessage = (message: message) => {
    setMessages([...messages, message]);
  };

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
