import { Checkbox } from "@/components/ui/checkbox"
import { useUpdateTodo } from "../api/useUpdateTodo"
import { useTodos } from "../api"

type TodoCheckBoxProps = {
    todoID: string
    statusChecked?: boolean
}

export const TodoCheckBox = ({ todoID, statusChecked }: TodoCheckBoxProps) => {
    const refetch = useTodos()
    const { mutate: updateTodo } = useUpdateTodo({
        onSuccess: () => {
            void refetch.refetch()
        }
    })

    const handleCheckBox = (checked: boolean) => {
        updateTodo({id: todoID, values: { status: checked }})
        console.log(`Updating todo ID: ${todoID}, new status: ${checked}`)
    }

    return (
        <Checkbox
            checked={statusChecked}
            onCheckedChange={handleCheckBox}
        />
    )
}

