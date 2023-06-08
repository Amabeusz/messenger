import Chat from "../../.next/chat";
import FriendsList from "./components/friendsList";

export default function ChatPage() {
  return (
    <main className="w-screen h-screen">
      <div className="flex h-full">
        <div className="h-full flex-initial">
          <FriendsList />
        </div>
        <div className="h-full flex-grow">
          <Chat />
        </div>
      </div>
    </main>
  );
}
