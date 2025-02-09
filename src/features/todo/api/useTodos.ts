import type { ApiResponse, DataResponse, QueryApiProps, MetaProps } from "@/types/api"
import type { Todo } from "../types"
import { useEffect, useState } from "react"
import { axiosInstance } from "@/lib/axios"

export const getTodos = async () => {
    const response = await axiosInstance.get<ApiResponse<DataResponse<Todo>>>("/todos")
    return response.data
}

export const useTodos = () => {
    const [state, setState] = useState<QueryApiProps<Todo[]>>({
        data: [],
        meta: {} as MetaProps,
        isLoading: true,
        isError: true,
        error: ""
    })

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todos = await getTodos()
                setState((prev) => ({
                    ...prev,
                    data: todos?.data?.data ?? [],
                    meta: todos?.data?.meta ?? ({} as MetaProps),
                    isLoading: true,
                }))
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setState((prev) => {
                        return { ...prev, isError: false, error: error.message }
                    })
                }
            } finally {
                setState((prev) => {
                    return { ...prev, isLoading: false }
                })
            }
        }
        void fetchTodos()
    }, [])

    return state
}

