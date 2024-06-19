"use client";
import { KeyboardEvent } from "react";
import { ChangeEvent, FC, useState } from "react";
import { todoType } from "@/types/todoType";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CircleX, Pencil, Save, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface Props {
  todo: todoType;
  changeTodoText: (id: number, text: string) => void;
  toggleIsTodoDone: (id: number, done: boolean) => void;
  deleteTodoItem: (id: number) => void;
}

const Todo: FC<Props> = ({
  todo,
  changeTodoText,
  toggleIsTodoDone,
  deleteTodoItem,
}) => {
  // State for handling editing mode
  const [editing, setEditing] = useState(false);

  // State for handling text input
  const [text, setText] = useState(todo.text);

  // State for handling "done" status
  const [isDone, setIsDone] = useState(todo.done);

  // Event handler for text input change
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // Event handler for toggling "done" status
  const handleIsDone = async () => {
    toggleIsTodoDone(todo.id, !isDone);
    setIsDone((prev) => !prev);
  };

  // Event handler for initiating the edit mode
  const handleEdit = () => {
    setEditing(true);
  };

  // Event handler for saving the edited text
  const handleSave = async () => {
    changeTodoText(todo.id, text);
    setEditing(false);
  };

  // Event handler for canceling the edit mode
  const handleCancel = () => {
    setEditing(false);
    setText(todo.text);
  };

  // Event handler for deleting a todo item
  const handleDelete = () => {
    toast("Are you sure you want to delete this item?", {
      action: {
        label: "Yes delete",
        onClick: () => deleteTodoItem(todo.id),
      },
    });
  };

  // Event handler for key down
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      editing ? handleSave() : handleEdit();
    }
  };

  // Rendering the Todo component
  return (
    <div className="flex items-center gap-2 p-2 border-gray-200 border-solid border rounded-lg">
      {/* Checkbox for marking the todo as done */}
      <Input
        type="checkbox"
        className="text-blue-200 rounded-sm h-4 w-4"
        checked={isDone}
        onChange={handleIsDone}
      />
      {/* Input field for todo text */}
      <Input
        type="text"
        value={text}
        onClick={() => setEditing(true)}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        readOnly={!editing}
        className={cn(
          "outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full",
          todo.done ? "line-through" : "",
          editing && "border border-yellow-400"
        )}
      />

      {/* className={`${
          todo.done ? "line-through" : ""
        } outline-none read-only:border-transparent focus:border border-gray-200 rounded px-2 py-1 w-full`}
      /> */}
      {/* Action buttons for editing, saving, canceling, and deleting */}
      <div className="flex gap-1 ml-auto">
        {editing ? (
          <Button onClick={handleSave} className="" variant={"secondary"}>
            <Save size={16} strokeWidth={1.5} />
          </Button>
        ) : (
          <Button onClick={handleEdit} className="" variant={"outline"}>
            <Pencil size={16} strokeWidth={1.5} />
          </Button>
        )}
        {editing ? (
          <Button
            onClick={handleCancel}
            variant={"default"}
            // className="bg-red-400 w-16 text-red-50 rounded px-2 py-1"
          >
            <CircleX size={16} strokeWidth={1.5} />
          </Button>
        ) : (
          <Button onClick={handleDelete} variant={"destructive"}>
            <Trash2 strokeWidth={1.5} size={16} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Todo;
