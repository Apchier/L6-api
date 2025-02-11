import { CreateTodoFormInner } from "./CreateTodoFormInner"
import { type CreateTodoFormSchema } from "../types"
import { zodResolver } from "@hookform/resolvers/zod"
import { createTodoFormSchema } from "../schemas"
import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"
import { useCreateTodo, useTodos } from "../api"
import { toast } from "sonner"

export const CreateTodoForm = () => {
    const form = useForm<CreateTodoFormSchema>({
        defaultValues: {
            text: "",
        },
        resolver: zodResolver(createTodoFormSchema),
    })

    const refetch = useTodos()

    const {mutate: createTodo} = useCreateTodo({
        onSuccess() {
            form.reset()
            toast.success("Todo deleted successfully")
            void refetch.refetch()
        },
    })

    const onSubmit = (values: CreateTodoFormSchema) => createTodo(values)

    return (
        <Form {...form} >
            <CreateTodoFormInner formID="create-todo-form" onSubmit={onSubmit} />
        </Form>
    )
}
