"use client";
import { FC, useState } from "react";
import { todoType } from "@/types/todoType";
import {
  addTodoAction,
  deleteAllTodosAction,
  deleteTodoAction,
  editTodoAction,
  toggleTodoAction,
} from "@/actions/todoActions";
import Todo from "@/components/tutorials/todos/Todo";
import AddTodo from "@/components/tutorials/todos/AddTodo";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Props {
  todos: todoType[];
}

const Todos = ({ todos }: Props) => {
  // State to manage the list of todo items
  // const [todoItems, setTodoItems] = useState<todoType[]>(todos);

  // Function to create a new todo item
  const createTodo = (text: string) => {
    // const id = (todoItems.at(-1)?.id || 0) + 1;
    addTodoAction(text);
    // addTodoAction(id, text);
    // setTodoItems((prev) => [...prev, { id: id, text, done: false }]);
  };

  // Function to change the text of a todo item
  const changeTodoText = (id: number, text: string) => {
    // update the UI before we even send the request
    // setTodoItems((prev) =>
    //   prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    // );
    // updated the backend, will aslo revalidate the page
    editTodoAction(id, text);
  };

  // Function to toggle the "done" status of a todo item
  const toggleIsTodoDone = (id: number) => {
    // setTodoItems((prev) =>
    //   prev.map((todo) =>
    //     todo.id === id ? { ...todo, done: !todo.done } : todo
    //   )
    // );
    toggleTodoAction(id);
  };

  // Function to delete a todo item
  const deleteTodoItem = (id: number) => {
    // setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodoAction(id);
  };

  // Function to delete a todo item
  const deleteTodos = () => {
    toast("Are you sure you want to delete ALL todos?", {
      action: {
        label: "Delete ALL",
        onClick: () => {
          // setTodoItems([]);
          deleteAllTodosAction();
        },
      },
    });
  };

  // Rendering the Todo List component
  return (
    <main className="flex mx-auto max-w-xl w-full min-h-screen flex-col items-center p-16">
      <div className="text-5xl font-medium flex-center">
        Todos{" "}
        {todos.length > 0 && (
          <Trash2
            size={24}
            strokeWidth={1.5}
            className="ml-2 cursor-pointer"
            onClick={deleteTodos}
          />
        )}
      </div>
      <AddTodo createTodo={createTodo} />
      <div className="w-full flex flex-col mt-8 gap-2">
        {/* Mapping through todoItems and rendering Todo component for each */}
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            changeTodoText={changeTodoText}
            toggleIsTodoDone={toggleIsTodoDone}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </div>
      {/* Adding Todo component for creating new todos */}
    </main>
  );
};

export default Todos;
