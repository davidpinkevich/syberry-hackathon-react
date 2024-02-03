import React, { FC } from "react";
import { Navigate } from "react-router-dom";

type PropsPrivate = {
  children: React.ReactNode;
};

const PrivateRout: FC<PropsPrivate> = ({ children }) => {
  const user = false;
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRout;
