const toDoBlock = document.getElementById('to-do-block')

let idCount = 1

const createToDoDiv = (toDoInput, toDoPriorityInput, toDoDeadline) => {
	const toDoCardDiv = document.createElement('div')
	const cardHeaderDiv = document.createElement('div')
	const priorityDisplaySpan = document.createElement('span')
	const deadlineDisplaySpan = document.createElement('span')
	const cardBodyDiv = document.createElement('div')
	const cardTitleH5 = document.createElement('h5')
	const deleteButton = document.createElement('a')

	toDoCardDiv.classList = 'card to-do-card'
	cardHeaderDiv.classList = 'card-header'
	cardBodyDiv.classList = 'card-body'
	cardTitleH5.classList = 'card-title'
	deleteButton.classList = 'btn btn-sm btn-danger'

	toDoCardDiv.id = `to-do-card-${idCount}`

	priorityDisplaySpan.innerText = `${toDoPriorityInput} Priority`
	cardTitleH5.innerText = toDoInput
	deadlineDisplaySpan.innerText = toDoDeadline
	deleteButton.innerText = 'Delete'

	switch(toDoPriorityInput) {
		case 'High':
			priorityDisplaySpan.classList = 'badge rounded-pill bg-danger'
			break;
		case 'Medium':
			priorityDisplaySpan.classList = 'badge rounded-pill bg-warning text-dark'
			break;
		case 'Low':
			priorityDisplaySpan.classList = 'badge rounded-pill bg-info text-dark'
			break;
	}

	toDoCardDiv.appendChild(cardHeaderDiv)
	cardHeaderDiv.appendChild(priorityDisplaySpan)
	cardHeaderDiv.appendChild(deadlineDisplaySpan)
	toDoCardDiv.appendChild(cardBodyDiv)
	cardBodyDiv.appendChild(cardTitleH5)
	cardBodyDiv.appendChild(deleteButton)

	toDoBlock.appendChild(toDoCardDiv)

	idCount++
}

	// 	<div class="card to-do-card">
	// 		<div class="card-header">
	// 			<span class="badge rounded-pill bg-warning text-dark">Medium Priority</span>
	// 			<span>2022-05-26 3:00 PM</span>
	// 		</div>
	// 		<div class="card-body">
	// 			<h5 class="card-title">Complete revision of Async Await</h5>
	// 			<a class="btn btn-sm btn-danger">Delete</a>
	// 		</div>
	// 	</div>