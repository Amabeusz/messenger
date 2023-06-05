export type chat = {
  id: number;
  users: user[];
  messages: message[];
};

export type chatUser = {
  id: number;
  userId: number;
  chatId: number;
  userNickname: string;
};

export type user = {
  id: number;
  login: string;
  name: string;
};

export type message = {
  id: number;
  userId: number;
  content: string;
  additionalContentId: number;
};

export type additionalContent = {
  id: number;
  messageId: number;
  type: number;
  content: string;
};

// table
// poll
// image ?\
export type additionalContentType = {
  id: number;
  name: string;
};

export type reaction = {
  id: number;
  messageId: number;
  userId: number;
  reaction: string;
};
