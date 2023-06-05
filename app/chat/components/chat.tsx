import { message } from "@/lib/entities";

export default function Chat({ messages }: { messages: message[] }) {
  return (
    <>
      <div className="bg-gray-500 w-full h-14 content-start">User Name</div>
      <ul className="overflow-auto h-full p-3">
        {messages.map(({ content, id, userId }) => (
          <div
            className={`
            bg-red-950 w-fit rounded-xl p-5  + ${userId == 1 ? "ml-auto" : ""}
            `}
            key={id}
          >
            {userId}: {content}
          </div>
        ))}
      </ul>
    </>
  );
}
