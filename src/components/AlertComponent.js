import React, { useEffect } from "react";
import Alert from "react-bootstrap/Alert";

export const AlertComponent = ({ data, setData }) => {
  if (data.isOpen) {
    setTimeout(() => {
      setData({ ...data, isOpen: false });
    }, 5000);
  }

  return (
    <Alert
      variant={data.variant}
      onClose={() =>
        setData({ isOpen: false, message: {}, variant: "success" })
      }
      show={data.isOpen}
      dismissible
    >
      <Alert.Heading>{data.message.heading}</Alert.Heading>
      <ul>
        {data.message.message &&
          Object.keys(data.message.message).map((el, index) => {
            return (
              <li key={index}>
                <b>{el.toUpperCase()}</b>: {data.message.message[el]}
              </li>
            );
          })}
      </ul>
    </Alert>
  );
};
