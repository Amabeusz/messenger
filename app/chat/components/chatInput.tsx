"use client";

export default function ChatInput() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="appearance-none rounded w-full text-gray-700"
        type="text"
        placeholder="Text"
      />
    </form>
  );
}
