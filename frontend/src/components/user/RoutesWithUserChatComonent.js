import { Outlet } from "react-router-dom";
import UserChatComponent from "./UserChatComponent";

const RoutesWithUserChatComonent = () => {
  return (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  );
};

export default RoutesWithUserChatComonent;
