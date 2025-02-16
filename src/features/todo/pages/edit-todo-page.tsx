import { PageContainer } from "@/components/layout/PageContainer"
import { SectionContainer } from "@/components/layout/SectionContainer"
import { EditTodoForm } from "../forms/EditTodoForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type EditTodoPageProps = {
    params: Promise<{ id: string }>
}

export const EditTodoPage = async ({ params }: EditTodoPageProps) => {
    const todoID = (await params).id
    

    return (
        <PageContainer withHeader withFooter>
            <SectionContainer>
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Plan Your Day</CardTitle>
                        <p className="text-sm text-gray-500">Stay organized with your daily tasks</p>
                    </CardHeader>
                    <CardContent className="w-full flex gap-2">
                        <EditTodoForm todoID={todoID} />
                        <Button form="edit-todo-form" type="submit" className="bg-black text-white">
                            Update
                        </Button>
                    </CardContent>
                </Card>
            </SectionContainer>
        </PageContainer >
    )
}