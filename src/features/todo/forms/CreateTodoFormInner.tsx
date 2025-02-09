// import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { useForm } from "react-hook-form"

import { Input } from "@/components/ui/input"

type CreateTodoFormInnerProps = {
  formID: string
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleChangeTodo: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const CreateTodoFormInner = ({
  formID,
  onSubmit,
  handleChangeTodo
}: CreateTodoFormInnerProps) => {
  return (
    <form id={formID} onSubmit={onSubmit}className="w-full" >
      <Input onChange={handleChangeTodo} placeholder="Add a new todo..." />
    </form>

    // <form id={formID} onSubmit={onSubmit} className="w-full">
    //   <FormField
    //     control={form.control}
    //     name="todo"
    //     render={({ field }) => (
    //       <FormItem>
    //         <FormLabel>Todo</FormLabel>
    //         <FormControl>
    //           <Input onChange={handleChangeTodo} placeholder="Add a new todo..." {...field} />
    //         </FormControl>
    //         <FormDescription>This is your task to complete.</FormDescription>
    //         <FormMessage />
    //       </FormItem>
    //     )}
    //   />
    // </form >
  )
}


