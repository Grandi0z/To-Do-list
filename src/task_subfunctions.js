const removeTask = (description) => {
  let arr = JSON.parse(localStorage.getItem('tasks'));
  const newArr = arr.filter((task) => task.description !== description);
  arr = [...newArr];

  document.getElementById('taks_list').remove();
  document.getElementById('btn_clear').remove();
};

const removeCompletedTask = () => {
  const arr = JSON.parse(localStorage.getItem('tasks')) || [];
  // populateTasks(arr)
  if (arr.length) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].completed) {
        removeTask(arr[i].description);
      }
    }
  }
};

export { removeTask, removeCompletedTask };