import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TodoTableBody } from "./TodoTableBody"


export const TodoTable = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-16">No</TableHead>
                    <TableHead>Todo</TableHead>
                    <TableHead className="text-center w-16">Status</TableHead>
                    <TableHead className="text-center w-32">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TodoTableBody />
        </Table>
    )
}