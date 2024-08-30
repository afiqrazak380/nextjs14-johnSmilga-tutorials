'use client';
// editTask rsponsible for handling the form submission logic
import { editTask } from '@/utils/action';

// functional React component that accepts 'task' as a prop
// the 'task' object contains details about the task that needs to be edited
const EditForm = ({ task }) => {
  // Destructuring task object
  const { id, completed, content } = task;
  return (
    // the form element: user can edit the task details
    // uses 'editTask' as the form action, which will handle for submission
    <form
      action={editTask}
      className='max-w-sm p-12 border border-base-300 rounded-lg'
    >
      <input type='hidden' name='id' value={id} />
      {/* content */}
      <input
        type='text'
        required
        defaultValue={content} // to pre-fill the field with the current task content
        name='content'
        className='input input-bordered'
      />
      {/* completed */}
      <div className='form-control my-2'>
        {/*'htmlFor' attribute links the label to the checkbox input with 'id=completed', meaning clicking on the label will toggle the checkbox*/}
        <label htmlFor='completed' className='label cursor-pointer'>
          <span className='label-text'>Completed</span>
          <input
            type='checkbox' // specified that this input is a checkbox
            defaultChecked={completed}
            id='completed' // associates with the lable
            name='completed' // ensure it is correctly identified when the formn is submitted
            className='checkbox checkbox-primary checkbox-sm'
          />
        </label>
      </div>
      <button type='submit' className='btn btn-primary btn-block btn-sm'>
        Edit
      </button>
    </form>
  );
};

export default EditForm;
