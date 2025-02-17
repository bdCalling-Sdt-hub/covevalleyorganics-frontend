import { ReactNode } from "react";

export default function Heading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col justify-center ${className}`}>
      <div className=" mx-auto md:mx-0">
        <img className="size-24 " alt="image" src="/green_leaf.png" />
      </div>
      <h2 className="text-3xl oswald md:text-5xl font-medium tracking-wider">
        {children}
      </h2>
    </div>
  );
}
