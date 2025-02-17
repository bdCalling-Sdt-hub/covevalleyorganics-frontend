import React from "react";

interface propsType {
  children: React.ReactNode;
  className?: string;
}
const DashboardTitle = ({ children, className }: propsType) => {
  return (
    <h2 className={`text-3xl text-[#222222] ${className}`}> {children}</h2>
  );
};

export default DashboardTitle;
