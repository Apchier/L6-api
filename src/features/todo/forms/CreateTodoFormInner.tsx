import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"
import { type CreateTodoFormSchema } from "../types"

type CreateTodoFormInnerProps = {
  formID: string,
  onSubmit: (values: CreateTodoFormSchema) => void
}

export const CreateTodoFormInner = ({
  formID,
  onSubmit,
}: CreateTodoFormInnerProps) => {

  const form = useFormContext<CreateTodoFormSchema>()

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

