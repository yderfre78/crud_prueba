import React from "react";

export const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };
  return <div style={styles}>  <h1>Mensaje</h1>  <p>{msg}</p></div>;
};
 export default Message;