import ChatHeader from "./chatHeader";
import ChatInput from "./chatInput";
import ChatMessages from "./chatMessages";

export default function Chat() {
  return (
    <div className="h-full flex flex-col">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
