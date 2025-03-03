
import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "small" | "medium" | "large" | "full";
}

const Container = ({ 
  children, 
  className, 
  size = "default", 
  ...props 
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full px-6 mx-auto",
        {
          "max-w-[1400px]": size === "default",
          "max-w-[800px]": size === "small",
          "max-w-[1100px]": size === "medium",
          "max-w-[1800px]": size === "large",
          "max-w-none": size === "full",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
