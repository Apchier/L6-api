import { Pencil, Trash2, Eye } from "lucide-react";
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Button } from "@/components/ui/button";
import { renderElements } from "@/utils/render-elements";
import { useTodos } from "../api/useTodos";
import { TodoTableBodySkeleton } from "../components/skeleton/TodoTableBodySkeleton";
import { TodoCheckBox } from "../components";
import Link from "next/link";

export const TodoTableBody = () => {
    const { data: TodoList, isLoading: isTodoLoading } = useTodos()

    if (isTodoLoading) {
        return <TodoTableBodySkeleton />
    }

    return (
        <TableBody>
            {renderElements({
                of: TodoList,
                render: (todo, index) => (
                    <TableRow key={todo.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{todo.text}</TableCell>
                        <TableCell className="text-center">
                            <TodoCheckBox todoID={todo.id} statusChecked={todo.status}/>
                        </TableCell>
                        <TableCell className="text-center">
                            <div className="flex justify-center gap-2">
                                <Link href="/">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                                    >
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="#">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 text-yellow-500 hover:text-yellow-600 hover:bg-yellow-50"
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="#">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </TableCell>
                    </TableRow>
                )
            }
            )}
        </TableBody>
    )
}