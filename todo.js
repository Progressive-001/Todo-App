const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const deleteButtons = document.querySelectorAll('.delete');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html; // Append the new todo item to the list
};

addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the value from the input field and trim whitespace
  const todo = addForm.add.value.trim();

  if (todo.length){
    generateTemplate(todo);
  }
  
  addForm.reset(); // Clear the input field after submission
});

// Delete todos
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove(); // Remove the todo item from the list
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
  .filter((todo) => !todo.textContent.toLowerCase().includes(term))// Filter todos that do not match the search term
  .forEach((todo) => todo.classList.add('filtered'));// Add the 'filtered' class to todos that do not match the search term

  Array.from(list.children)
  .filter((todo) =>  todo.textContent.toLowerCase().includes(term))// Filter todos that match the search term
  .forEach((todo) => todo.classList.remove('filtered'));// Remove the 'filtered' class from todos that match the search term
}


// KeyUp Event
search.addEventListener('keyup', () => {

  const term = search.value.trim().toLowerCase();
  filterTodos(term);
  
});
