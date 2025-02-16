import { axiosInstance } from "@/lib/axios"
import type { ApiResponse } from "@/types/api"
import type { Todo } from "../types"
import { useQuery } from "@tanstack/react-query"

const getTodoByID = async (id?: string) => {
    const response = await axiosInstance.get<ApiResponse<Todo>>(`/todos/${id}`)
    return response.data.data
}

export const useTodoByID = (id: string) => {
    return useQuery({
        queryKey: ["todos", id],
        queryFn: () => getTodoByID(id),
    })
}

