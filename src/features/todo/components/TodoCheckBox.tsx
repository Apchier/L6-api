import { Checkbox } from "@/components/ui/checkbox"
import { useUpdateTodo } from "../api/useUpdateTodo"

type TodoCheckBoxProps = {
    todoID: string
    statusChecked: boolean
}

export const TodoCheckBox = ({ todoID, statusChecked }: TodoCheckBoxProps) => {
    const { mutate: updateTodo,  } = useUpdateTodo()
    const handleCheckBox = async (checked: boolean | "indeterminate") => {
        await updateTodo(todoID, { status: Boolean(checked) })
    }
    return (
        <Checkbox
            checked={statusChecked}
            onCheckedChange={handleCheckBox}
        />
    )
}