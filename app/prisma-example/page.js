import prisma from '@/utils/db';

const prismaHandlers = async () => {
  await prisma.task.create({
    data: { content: 'wake up' },
  });
  const allTask = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return allTask;
};

const PrismaExample = async () => {
  const task = await prismaHandlers();
  return (
    <div>
      <h1 className='text-7xl'>Prisma_Example</h1>
      {task.map((task) => {
        return (
          <h2 key={task.id} className='text-xl py-2'>
            😪{task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExample;
