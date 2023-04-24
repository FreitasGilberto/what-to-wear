import React, { ReactNode } from 'react';

interface BgAppProps {
  children: ReactNode;
}

const BgApp: React.FC<BgAppProps> = ({ children }) => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      {children}
    </div>
  );
};

export default BgApp;
