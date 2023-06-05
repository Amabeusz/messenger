export default function Chat({ messages }: { messages: string[] }) {
  return (
    <>
      <div className="bg-gray-500 w-full h-14 content-start">dupa dupalska</div>
      <ul className="overflow-auto h-full p-3">
        {messages.map((message: string, index: number) => (
          <div
            className="bg-red-950 w-fit rounded-xl p-5 even:ml-auto"
            key={index}
          >
            {message}
          </div>
        ))}
      </ul>
    </>
  );
}
