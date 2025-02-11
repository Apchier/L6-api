'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TodoTable } from '../tables/TodoTable';
import { CreateTodoForm } from '../forms/CreateTodoForm';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Button } from '@/components/ui/button';

export const TodoPage = () => {
    return (
        <PageContainer withHeader withFooter>
            <SectionContainer>
                <h1 className="text-3xl font-bold mb-8">Todo List</h1>
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Plan Your Day</CardTitle>
                        <p className="text-sm text-gray-500">Stay organized with your daily tasks</p>
                    </CardHeader>
                    <CardContent className="w-full flex gap-2">
                        <CreateTodoForm />
                        <Button form='create-todo-form' type="submit" className="bg-black text-white">
                            Add
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <TodoTable />
                    </CardContent>
                </Card>
            </SectionContainer>
        </PageContainer>
    );
};