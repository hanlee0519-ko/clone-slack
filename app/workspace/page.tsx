"use client";

import useMessage from "./hooks/useMessage";
import MessageList from "./components/MessageList";
import MessageAddForm from "./components/MessageAddForm";

export default function Page() {
  const { messageList, createMessageList } = useMessage();

  return (
    <>
      <h1>WorkSpace Page</h1>
      <MessageList messageList={messageList} />
      <MessageAddForm onCreate={createMessageList} />
    </>
  );
}
