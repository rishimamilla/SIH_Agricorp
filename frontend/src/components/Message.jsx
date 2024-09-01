// src/components/Message.jsx

import React from "react";

// Updated Message component
const Message = ({ variant = "info", children }) => {
  return <div className={`alert alert-${variant}`}>{children}</div>;
};

export default Message;
