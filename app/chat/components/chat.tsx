import ChatHeader from "./chatHeader";
import { PrismaClient, User } from "@prisma/client";
import ChatInput from "./chatInput";

async function get() {
  const prisma = new PrismaClient();
  const posts = await prisma.user.findMany();

  return {
    props: { posts },
  };
}

export default function Chat() {
  return (
    <div>
      <div>
        <ChatHeader />
        <div className="overflow-auto h-full p-3">
          {get().then((res) =>
            res.props.posts?.map((message) => (
              <div>
                {message.id} {message.name} {message.email}{" "}
                {message.createdAt.toJSON()}
              </div>
            ))
          )}
        </div>
        <ChatInput />
      </div>
    </div>
  );
}
