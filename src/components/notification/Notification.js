import React from "react";
import PropTypes from "prop-types";
import NotificationWrapper from "./NotificationStyled";

const Notification = ({ message }) => {
  return (
    <NotificationWrapper>
      <h3 className="notification">{message}</h3>
    </NotificationWrapper>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
