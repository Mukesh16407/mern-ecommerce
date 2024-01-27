import React, { useEffect } from "react";
import { Button, notification } from "antd";
import "./notification.css";

const openNotification = (titleText, messageText) => {
  notification.open({
    message: titleText,
    description: (
      <div
        dangerouslySetInnerHTML={{
          __html: messageText.replace(/\n/g, "<br/>&nbsp;"),
        }}
      />
    ),
  });
};
export const Notification = ({ titleText, messageText }) => {
  return <div>{openNotification(titleText, messageText)}</div>;
};
