import { useQuery } from "@tanstack/react-query";
import { queryClient } from "constants/react-query";
import { NextPageWithLayout } from "pages/_app";
import { v4 } from "uuid";

enum QueryKeys {
  CHATS = "chats",
  ACTIVE_CHAT = "active-chat",
}

export const askQuestion = (question: string) => {
  const newActiveChat = v4();

  queryClient.setQueryData<any>([QueryKeys.CHATS], (chats = {}) => ({
    ...chats,
    [newActiveChat]: question,
  }));

  queryClient.setQueryData<string | null>(
    [QueryKeys.ACTIVE_CHAT],
    newActiveChat
  );
};

const HomePage: NextPageWithLayout = () => {
  const { data } = useQuery([QueryKeys.CHATS]);
  const { data: activeChat } = useQuery<string>([QueryKeys.ACTIVE_CHAT]);

  const setData = () => {
    askQuestion("Need help");
  };

  return (
    <div>
      <div>
        Active chat - {activeChat}
        {JSON.stringify(data)}
      </div>
      <button className="btn" onClick={setData}>
        Set data
      </button>
    </div>
  );
};

export default HomePage;
