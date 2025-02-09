import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreateTodoFormInner } from "./CreateTodoFormInner"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { useCreateTodo } from "../api/useCreateTodo"

export const CreateTodoForm = () => {
    const [todo, setTodo] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { mutate: createTodo, isPending } = useCreateTodo()

    const handleChangeTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(todo)
        await createTodo({ text: todo })
    }

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Plan Your Day</CardTitle>
                <p className="text-sm text-gray-500">Stay organized with your daily tasks</p>
            </CardHeader>
            <CardContent className="flex w-full gap-2">
                <CreateTodoFormInner
                    formID="todo-form"
                    onSubmit={onSubmit}
                    handleChangeTodo={handleChangeTodo}
                />
                <Button id="todo-form" type="submit" className="bg-black text-white" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Adding...
                        </>
                    ) : (
                        "Add"
                    )}
                </Button>
            </CardContent>
        </Card>
    )
}