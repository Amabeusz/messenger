import { getLoggedUser } from "@/lib/user/get-logged-user";
import { Message } from "@prisma/client";

export default function Message({ message }: { message: Message }) {
  const isLoggedUser = getLoggedUser().id === message.userId;

  return (
    <div className={`w-fit + ${isLoggedUser ? "ml-auto" : ""}`}>
      <div className="bg-red-950 w-fit rounded-xl p-4">
        {message.id} {message.content}
      </div>
      <div className="pl-4 text-gray-500 text-xs">
        {message.createdAt.toLocaleTimeString()}
      </div>
    </div>
  );
}