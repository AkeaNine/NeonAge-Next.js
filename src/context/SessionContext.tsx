"use client"

import { SessionProvider } from "next-auth/react";

interface SessionContextProps {
  children: React.ReactNode;
}

const SessionContext: React.FC<SessionContextProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionContext;
