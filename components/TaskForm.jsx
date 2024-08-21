import { revalidatePath } from 'next/cache';

const createTask = async (formData) => {
  'use server';
  const content = formData.get('content');
  // console.log(content);
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath('/task');
};

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type here'
          name='content'
          required
        ></input>
        <button type='submit' className='btn btn-primary join-item'>
          create task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
