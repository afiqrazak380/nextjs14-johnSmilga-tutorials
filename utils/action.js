'use server';
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'; // to redirect users to a diffrent route
import { z } from 'zod'; // zod is a library for schema validation

// Retrive all tasks from the database
// Ordered by descending
export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// Create a new task with the content provided in 'form data'
// After a task is created the path ('/task) is revalidated
export const createTask = async (formData) => {
  const content = formData.get('content');
  // console.log(content);
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath('/task');
};

export const createTaskCustom = async (prevState, formData) => {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get('content');

  //  Define a Zod Schema
  const Task = z.object({
    content: z.string().min(5),
  });
  // Validation and Task Creation
  try {
    Task.parse({ content }); // Validate the 'content': A methode to check if the 'content' matches the defined schema, if not it throws an error.
    await prisma.task.create({
      // Create the Task: if validation passed
      data: {
        content,
      },
    });
    revalidatePath('/task');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'error' };
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get('id');
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath('/tasks');
};

// Retrive a single task form the database using its unique 'id'
export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
};

// Updates a task's content and completion status based on 'formData'
// If 'completed' is set to 'on', the task is marked as completed; otherwise, it is not.
// After the update, the user is redirected to the '/tasks' path.
export const editTask = async (formData) => {
  const id = formData.get('id');
  const content = formData.get('content');
  const completed = formData.get('completed');

  await prisma.task.update({
    where: { id },
    data: { content, completed: completed === 'on' ? true : false },
  });
  redirect('/tasks');
};
