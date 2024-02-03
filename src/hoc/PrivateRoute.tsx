import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

type PropsPrivate = {
  children: React.ReactNode;
};

const PrivateRout: FC<PropsPrivate> = ({ children }) => {
  const { user } = useAppSelector((state) => state.userSlice)
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRout;
