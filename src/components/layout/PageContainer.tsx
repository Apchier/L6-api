import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
import { Header } from "@/components/elements/Header";
import { Footer } from "@/components/elements/Footer";

type PageContainerProps = {
  withHeader?: boolean;             
  withFooter?: boolean;
  title?: string;
};

export const PageContainer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & PageContainerProps
>(
  (
    { className, children, withHeader = true, withFooter = true, ...props },
    ref,
  ) => {
    return (
      <div className="h-full w-full">
        {withHeader && <Header />}
        <main ref={ref} className={cn("flex flex-col", className)} {...props}>
          {children}
        </main>
        {withFooter && <Footer />}
      </div>
    );
  },
);

PageContainer.displayName = "PageContainer";
