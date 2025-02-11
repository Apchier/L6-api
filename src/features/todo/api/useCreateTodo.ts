import type { ApiProps } from './../../../types/api';
import { axiosInstance } from "@/lib/axios"
import type { ApiResponse } from "@/types/api"
import type { CreateTodoFormSchema, Todo } from "../types"
import { useMutation } from "@tanstack/react-query"

const createTodo = async (values: CreateTodoFormSchema) => {
    const response = await axiosInstance.post<ApiResponse<Todo>>('/todos', values)
    return response.data
}

export const useCreateTodo = ({onSuccess, onError, onMutate}: ApiProps) => {
    return useMutation({
        mutationKey: ['todos'],
        mutationFn: createTodo,
        onSuccess,
        onError,
        onMutate,
    })
}