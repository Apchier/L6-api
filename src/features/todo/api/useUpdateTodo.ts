import type { ApiProps } from './../../../types/api';
import { axiosInstance } from "@/lib/axios"
import type { ApiResponse } from "@/types/api"
import type { Todo, UpdateTodoFormSchema } from "../types"
import { useMutation } from "@tanstack/react-query"

const updateTodo = async ({id, values}: {id?: string, values: UpdateTodoFormSchema}) => {
    if (!id) throw new Error('id is required')

    console.log(`ID: ${id}`)
    console.log(values)

    const response = await axiosInstance.patch<ApiResponse<Todo>>(`/todos/${id}`, values)
    return response.data
}

export const useUpdateTodo = (props: ApiProps<string> = {}) => {
    const { onSuccess, onError, onMutate } = props
    return useMutation({
        mutationKey: ['mutate', 'update', 'todos'],
        mutationFn: updateTodo,
        onSuccess,
        onError,
        onMutate
    })
}
