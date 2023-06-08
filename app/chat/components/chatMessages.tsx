import { getMessages } from "@/lib/messages/get-messages";
<<<<<<< HEAD
import Message from "./messages/message";
=======
import Message from "./message/message";
>>>>>>> 04c57ef (fixed)

export default function ChatMessages() {
  return (
    <div className="overflow-auto p-3 flex-grow">
      {getMessages().then((res) =>
        res.map((message) => <Message message={message} />)
      )}
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 04c57ef (fixed)
