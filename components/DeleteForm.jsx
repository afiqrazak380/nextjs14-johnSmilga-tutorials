import { deleteTask } from '@/utils/action';

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type='hidden' name='id' value={id}></input>
      <button className='btn btn-xs btn-error'>Delete</button>
    </form>
  );
};

export default DeleteForm;
