'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageContainer } from "@/components/layout/PageContainer"
import { SectionContainer } from "@/components/layout/SectionContainer"

export const DetailTodoPage = () => {

    return (
        <PageContainer>
            <SectionContainer>
                <div className="flex justify-center items-center h-screen bg-gray-100">
                    <Card className="w-96 p-4 shadow-lg rounded-2xl bg-white">
                        <CardContent className="text-center mt-4">
                            <h1 className="text-2xl font-bold">Detail Todo</h1>
                            <p className="mt-4">text</p>
                            <Button className="mt-4" onClick={() => window.history.back()}>
                                Kembali
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </SectionContainer>
        </PageContainer>
    )
}