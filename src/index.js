const inputTask = document.querySelector('#inputTask');
const buttonAddTask = document.querySelector('#buttonAddTask');
const buttonRemoveTask = document.querySelector('#buttonRemoveTask');
const listTasks = document.querySelector('#containerTask ul');

const tasks = [];

const removeTask = (index) => {
  tasks.splice(index, 1);
  const liElement = document.querySelector(
    `#containerTask ul li#item-${index}`,
  );
  listTasks.removeChild(liElement);
};

const addTask = (text) => {
  const total = tasks.push(text);
  const index = total - 1;

  const taskElement = document.createElement('li');
  const spanElement = document.createElement('span');
  const buttonElement = document.createElement('button');

  taskElement.setAttribute('id', `item-${index}`);

  buttonElement.onclick = () => {
    removeTask(index);
  };

  taskElement.appendChild(spanElement);
  taskElement.appendChild(buttonElement);

  spanElement.innerHTML = text;

  buttonElement.id = 'buttonRemoveTask';
  buttonElement.innerHTML = 'Remover';

  listTasks.appendChild(taskElement);
};

buttonAddTask.onclick = () => {
  if (inputTask.value.trim()) {
    addTask(inputTask.value);
    inputTask.value = '';
  }
};
