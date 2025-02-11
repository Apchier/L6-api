"use client";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HomePage = () => {
  return (
    <PageContainer withHeader>
      <SectionContainer padded>
        <div className="flex justify-center items-center m-10">
          <Link href={'/todo'}>
            <Button>TODOLIST</Button>
          </Link>
        </div>
      </SectionContainer>
    </PageContainer>
  )
}
