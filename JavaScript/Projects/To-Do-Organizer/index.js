const toDoBlock = document.getElementById('to-do-block')

const createToDoDiv = () => {
	const toDoCardDiv = document.createElement('div')
	const cardHeaderDiv = document.createElement('div')
	const priorityDisplaySpan = document.createElement('span')
	const cardBodyDiv = document.createElement('div')
	const cardTitleH5 = document.createElement('h5')
	const deleteButton = document.createElement('a')

	toDoCardDiv.classList = 'card to-do-card'
	cardHeaderDiv.classList = 'card-header'
	priorityDisplaySpan.classList = 'badge rounded-pill bg-warning text-dark'
	cardBodyDiv.classList = 'card-body'
	cardTitleH5.classList = 'card-title'
	deleteButton.classList = 'btn btn-sm btn-danger'

	priorityDisplaySpan.innerText = 'Medium Priority'
	cardTitleH5.innerText = 'Complete revision of Async Await'
	deleteButton.innerText = 'Delete'

	toDoCardDiv.appendChild(cardHeaderDiv)
	cardHeaderDiv.appendChild(priorityDisplaySpan)
	toDoCardDiv.appendChild(cardBodyDiv)
	cardBodyDiv.appendChild(cardTitleH5)
	cardBodyDiv.appendChild(deleteButton)

	toDoBlock.appendChild(toDoCardDiv)

	// <div class="card to-do-card">
	// 	<div class="card-header">
	// 		<span class="badge rounded-pill bg-warning text-dark">Medium Priority</span>
	// 	</div>
	// 	<div class="card-body">
	// 		<h5 class="card-title">Complete revision of Async Await</h5>
	// 		<a class="btn btn-sm btn-danger">Delete</a>
	// 	</div>
	// </div>
}

const createToDo = () => {
	createToDoDiv()
}