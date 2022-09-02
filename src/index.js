document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    updateToDo(e.target.input_new_task.value)

  })
});

function updateToDo(todo){
  // let tasklist = document.querySelector('#tasks')
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.textContent = 'x'
  p.textContent = `${todo} `
  
  p.appendChild(btn)
  // document.querySelector('#main-content').appendChild('btn')
  btn.addEventListener('click', handleDelete)
  document.querySelector('#tasks').appendChild(p)

}

function handleDelete(e){
  e.target.parentNode.remove()
}




