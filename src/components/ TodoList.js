// src/components/TodoList.js
import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { todosAtom, addTodoAtom, removeTodoAtom } from '../store/todoStore';

function TodoList() {
  const [todos] = useAtom(todosAtom);       // Lấy danh sách todo
  const [, addTodo] = useAtom(addTodoAtom); // Atom để thêm công việc
  const [, removeTodo] = useAtom(removeTodoAtom); // Atom để xóa công việc

  const [newTodo, setNewTodo] = useState(''); // Trạng thái để nhập công việc mới

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo(''); // Reset input
    }
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Enter new todo" 
      />
      <button onClick={handleAddTodo}>Add ToDo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
