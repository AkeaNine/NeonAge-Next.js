import React from "react";

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-center relative">
        <section className="w-full max-w-[1399px] py-2">
          {children}
        </section>
      </div>
    </div>
  );
};

export default ContentWrapper;
