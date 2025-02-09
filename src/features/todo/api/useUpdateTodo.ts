import { axiosInstance } from "@/lib/axios"
import type { Todo, UpdateTodoFormSchema } from "../types"
import type { ApiResponse, MutationApiProps } from "@/types/api"
import { useState } from "react"

export const useUpdateTodo = () => {
    const [state, setState] = useState<MutationApiProps<Todo>>({
        data: {} as Todo,
        isPending: false,
        isError: false,
        error: ""
    })
    const updateTodo = async (todoID: string, values: UpdateTodoFormSchema) => {
        const response = await axiosInstance.patch<ApiResponse<Todo>>(`/todos/${todoID}`, values)
        return response.data
    }

        const mutate = async (todoID: string, values: UpdateTodoFormSchema) => {
            try {
                const todo = await updateTodo(todoID, values)
                setState((prev) => ({
                    ...prev,
                    data: todo.data ?? ({} as Todo),
                    isPending: true
                }))
            } catch (error) {
                if (error instanceof Error) {
                    setState((prev) => {
                        return { ...prev, isError: false, error: error.message }
                    })
                }
            } finally {
                setState((prev) => ({ ...prev, isPending: false }))
            }
        }
    
        return { ...state, mutate }
}