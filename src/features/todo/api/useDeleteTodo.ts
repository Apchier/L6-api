import type { ApiProps, ApiResponse } from "@/types/api"
import type { Todo } from "../types"
import { axiosInstance } from "@/lib/axios"
import { useMutation } from "@tanstack/react-query"


const deleteTodo = async (id?: string) => {
    const response = await axiosInstance.delete<ApiResponse<Todo>>(`/todos/${id}`)
    return response.data
}

export const useDeleteTodo = ({onSuccess, onError, onMutate}: ApiProps) => {
    return useMutation({
        mutationKey: ['mutate' , 'delete','todos'],
        mutationFn: deleteTodo,
        onSuccess,
        onError,
        onMutate,
    })
}