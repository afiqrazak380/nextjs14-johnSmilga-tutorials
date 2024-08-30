import db from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  const tasks = await db.task.findMany();
  return NextResponse.json({ data: tasks });
};

export const POST = async (request) => {
  // parse JSON body of incoming request, then store it in 'data' variable
  const data = await request.json();

  // create new record in the 'task' collection in the data bases
  const task = await db.task.create({
    //
    data: {
      content: data.content,
    },
  });
  return NextResponse.json({ data: task });
};
