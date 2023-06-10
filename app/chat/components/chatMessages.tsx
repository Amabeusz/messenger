import { getMessages } from "@/lib/messages/get-messages";
import MessageComponent from "./messages/message";
import type { Message } from "@prisma/client";

export default function ChatMessages() {
  return (
    <div className="overflow-auto p-3 flex-grow">
      {getMessages().then((res) =>
        res.map((message : Message) => <MessageComponent message={message} key={message.id}/>)
      )}
    </div>
  );
}
