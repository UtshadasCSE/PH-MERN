/* eslint-disable react/prop-types */
export function Todo({ task, isDone }) {
  if (isDone) {
    return <li> Finished Task: {task}</li>;
  } else {
    return (
      <>
        <li>Work On Task :{task}</li>
      </>
    );
  }
}
