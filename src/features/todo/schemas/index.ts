import { z } from "zod";

export const createTodoFormSchema = z.object({
    text: z
        .string()
        .min(1, "Todo must be not null")
        .max(100, "Maximum 100 characters"),
})