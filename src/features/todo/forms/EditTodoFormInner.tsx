import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"
import type { UpdateTodoFormSchema } from "../types"

type UpdateTodoFormInnerProps = {
  formID: string,
  onSubmit: (values: UpdateTodoFormSchema) => void
}

export const UpdateTodoFormInner = ({
  formID,
  onSubmit,
}: UpdateTodoFormInnerProps) => {

  const form = useFormContext<UpdateTodoFormSchema>()

  return (
    <form id={formID} onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      <FormField
        control={form.control}
        name="text"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="add new todo" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  )
}

