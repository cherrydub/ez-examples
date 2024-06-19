"use server";

import db from "@/db/drizzle";
import { todo } from "@/db/schema";
import { asc, eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const getDataAction = async () => {
  const data = await db.select().from(todo).orderBy(asc(todo.id));
  return data;
};

export const addTodoAction = async (text: string) => {
  await db.insert(todo).values({
    // id: id,
    text: text,
  });
  revalidatePath("/tutorials/todos");
};

export const editTodoAction = async (id: number, text: string) => {
  await db
    .update(todo)
    .set({
      text: text,
    })
    .where(eq(todo.id, id));
  revalidatePath("/tutorials/todos");
};

export const toggleTodoAction = async (id: number) => {
  await db
    .update(todo)
    .set({
      done: not(todo.done),
    })
    .where(eq(todo.id, id));

  revalidatePath("/tutorials/todos");
};

export const deleteTodoAction = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));

  revalidatePath("/tutorials/todos");
};

export const deleteAllTodosAction = async () => {
  await db.delete(todo);

  revalidatePath("/tutorials/todos");
};
