import { useState } from "react";

export default function ChatInput({ addMessage }: { addMessage: Function }) {
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMessage(message);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="appearance-none rounded w-full text-gray-700"
        type="text"
        placeholder="Text"
        onChange={handleChange}
      />
    </form>
  );
}
