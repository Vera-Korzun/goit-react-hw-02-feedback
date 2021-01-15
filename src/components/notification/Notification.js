import React from "react";
import NotificationWrapper from "./NotificationStyled";

const Notification = ({ message }) => {
  return (
    <NotificationWrapper>
      <h3 className="notification">{message}</h3>
    </NotificationWrapper>
  );
};

export default Notification;
