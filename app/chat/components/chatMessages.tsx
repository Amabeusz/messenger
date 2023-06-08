import { getMessages } from "@/lib/messages/get-messages";
import Message from "./messages/message";

export default function ChatMessages() {
  return (
    <div className="overflow-auto p-3 flex-grow">
      {getMessages().then((res) =>
        res.map((message) => <Message message={message} />)
      )}
    </div>
  );
}
