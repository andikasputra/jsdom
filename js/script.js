var taskForm = document.getElementById('task-form')
taskForm.addEventListener('submit', function(e) {
	e.preventDefault();
	var task = document.getElementById('task');
	if (task == '') {
		return;
	}

	// create element
	var li = document.createElement('li')
	// set class
	li.classList.add('collection-item')
	// create text from task
	var liText = document.createTextNode(task.value)
	li.append(liText);
	// button
	// done button
	var doneBtn = document.createElement('a')
	doneBtn.className = 'done-item secondary-content blue-text'
	doneBtn.innerHTML = '<i class="fa fa-check"></i>'
	doneBtn.setAttribute('href', '')
	li.append(doneBtn)
	// delete button
	var deleteBtn = document.createElement('a')
	deleteBtn.classList.add('delete-item')
	deleteBtn.classList.add('secondary-content')
	deleteBtn.innerHTML = '<i class="fa fa-remove"></i>'
	deleteBtn.setAttribute('href', '')
	li.append(deleteBtn)

	// list item
	var collections = document.getElementById('collections')
	collections.appendChild(li)

	// empty task input
	task.value = ''
})

// on click event
var collections = document.getElementById('collections');
collections.addEventListener('click', onClickEventListener)


function onClickEventListener(e) {
	e.preventDefault()
	// if click on done button
	if (e.target.parentElement.classList.contains('done-item')) {
		e.target.parentElement.parentElement.classList.toggle('active')
	// if click on delete button
	} else if (e.target.parentElement.classList.contains('delete-item')) {
		e.target.parentElement.parentElement.classList.add('ease-out')
		setTimeout(function() {
			e.target.parentElement.parentElement.remove()
		}, 500)
	}
}

// var doneButton = document.querySelectorAll('.done-item')
// doneButton.forEach(function(button) {
// 	button.addEventListener('click', doneButtonListener)
// })

// function doneButtonListener(e) {
// 	e.preventDefault()
// 	if (e.target.parentElement.classList.contains('done-item')) {
// 		e.target.parentElement.parentElement.classList.toggle('active')
// 	}
// }

// var deleteButton = document.querySelectorAll('.delete-item')
// deleteButton.forEach(function(button) {
// 	button.addEventListener('click', deleteButtonListener)
// })

// function deleteButtonListener(e) {
// 	e.preventDefault()
// 	if (e.target.parentElement.classList.contains('delete-item')) {
// 		e.target.parentElement.parentElement.remove()
// 	}
// }

// clear tasks
var clearButton = document.querySelector('.clear-tasks')
clearButton.addEventListener('click', function(e) {
	e.preventDefault()
	var taskList = document.getElementById('collections')
	// remove all task
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild)
	}
})