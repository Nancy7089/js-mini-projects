const todoList=[];

function addTodo(){
  const inputEle=document.querySelector('.js-name-input');
  const name=inputEle.ariaValueMax;
  todoList.push(name);
  console.log(todoList);
  inputEle.value='';
}