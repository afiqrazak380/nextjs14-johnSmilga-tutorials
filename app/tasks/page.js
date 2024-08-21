import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';

const TaskPage = () => {
  return (
    <div className='max-w-lg'>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TaskPage;
