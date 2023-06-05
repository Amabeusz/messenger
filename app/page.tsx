"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  return (
    <div>
      <div>hello</div>
      <button onClick={() => push("/chat")}>chat</button>
    </div>
  );
}
