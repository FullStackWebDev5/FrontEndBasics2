const createToDo = () => {
	const toDoInput = document.getElementById('todo-input').value
	const toDoPriorityInput = document.getElementById('todo-priority-input').value
	const toDoDeadline = new Date(
    document.getElementById("todo-deadline").value
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
	createToDoDiv(toDoInput, toDoPriorityInput, toDoDeadline)
}

/* 
	Draggable Elements -
	[draggable = "true"]
	1. ondragStart
	2. ondrag

	Parent Elements (Where you have to drop the draggable element)
	1. ondragover
	2. ondrop
*/

const toDoDragStart = (event) => {

}

const toDoDrag = (event) => {

}

const allowDrop = (event) => {
	event.preventDefault()
}

const toDoDrop = (event) => {

}
