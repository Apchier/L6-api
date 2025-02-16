'use client'
import { CreateTodoFormInner } from "./CreateTodoFormInner"
import type { UpdateTodoFormSchema } from "../types"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateTodoFormSchema } from "../schemas"
import { Form } from "@/components/ui/form"
import { useTodoByID, useUpdateTodo } from "../api"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

type EditTodoFormProps = {
    todoID: string
}

export const EditTodoForm = ({ todoID }: EditTodoFormProps) => {
    const router = useRouter()
    const { data: todo } = useTodoByID(todoID)
    console.log(todo)

    const form = useForm<UpdateTodoFormSchema>({
        defaultValues: {
            text: ""
        },
        resolver: zodResolver(updateTodoFormSchema),
    })

    const { mutate: updateTodo } = useUpdateTodo({
        onSuccess: () => {
            router.push('/todo')
            toast.success("Todo updated successfully")
        },
    })

    const onSubmit = (values: UpdateTodoFormSchema) => updateTodo({ id: todoID, values })

    useEffect(() => {
        if (todo) {
            form.setValue('text', todo.text)
        }
    }, [form, todo])

    return (
        <Form {...form} >
            <CreateTodoFormInner formID="edit-todo-form" onSubmit={onSubmit} />
        </Form>
    )
}
