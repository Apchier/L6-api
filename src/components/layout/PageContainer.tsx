import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
import { Header } from "@/components/elements/Header";
import { Footer } from "@/components/elements/Footer";
import { MainLayout } from "./MainLayout";

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
    { className, children, withHeader = false, withFooter = false, ...props },
    ref,
  ) => {
    return (
      <MainLayout>
          {withHeader && <Header />}
          <main ref={ref} className={cn("flex flex-col", className)} {...props}>
            {children}
          </main>
          {withFooter && <Footer />}
      </MainLayout>
    );
  },
);

PageContainer.displayName = "PageContainer";
