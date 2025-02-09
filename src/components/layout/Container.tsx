import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Container = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("container flex h-full w-full flex-col", className)}
      {...props}
    >
      {children}
    </section>
  );
});

Container.displayName = "Container";
