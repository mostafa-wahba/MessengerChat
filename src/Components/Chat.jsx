import React, { useContext } from "react";
import Cam from "../assets/—Pngtree—vector video camera icon_3787761.png";
import Add from "../assets/user-avatar-svgrepo-com.svg";
import More from "../assets/more-icon-png-1.jpg";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

export default function Chat() {
  const { data } = useContext(ChatContext);

  return (<>
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
    </>
  );
};