'use client';
import { Card, CardContent } from '@/components/ui/card';
import { TodoTable } from '../tables/TodoTable';
import { CreateTodoForm } from '../forms/CreateTodoForm';
import { PageContainer } from '@/components/layout/PageContainer';
import { SectionContainer } from '@/components/layout/SectionContainer';

export const TodoPage = () => {
    return (
        <PageContainer>
            <SectionContainer>
                <h1 className="text-3xl font-bold mb-8">Todo List</h1>
                <CreateTodoForm />
                <Card>
                    <CardContent className="p-0">
                        <TodoTable />
                    </CardContent>
                </Card>
            </SectionContainer>
        </PageContainer>
    );
};