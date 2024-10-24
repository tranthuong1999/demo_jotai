// src/store/todoStore.js
import { atom } from 'jotai';

// Atom lưu trữ danh sách công việc
export const todosAtom = atom([]);

// Atom để thêm công việc mới
export const addTodoAtom = atom(null, (get, set, newTodo) => {
    const currentTodos = get(todosAtom);
    set(todosAtom, [...currentTodos, newTodo]);
});

// Atom để xóa công việc
export const removeTodoAtom = atom(null, (get, set, todoIndex) => {
    const currentTodos = get(todosAtom);
    const newTodos = currentTodos.filter((_, index) => index !== todoIndex);
    set(todosAtom, newTodos);
});
