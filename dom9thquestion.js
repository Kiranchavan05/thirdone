var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

//FILTER event
filter.addEventListener('keyup', filterItems);

function filterItems(e) {
  //filter
  //Code to filter list of items goes here
}



// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
const inputValue = document.getElementById('item').value;
const description = document.getElementById('description').value;


if (!inputValue || !description) {
  alert("Please enter both item and description!");
  return;
}

  // Create new li element
  var li = document.createElement('li');

  // Add class
  li.className = 'list-group-item';

  // Add text node with input value
  li.appendChild(document.createTextNode(inputValue + " "));
  li.appendChild(document.createTextNode(description));
  
  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn=document.createElement('edit');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className='btn btn-danger btn-sm float-right edit'

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('Edit'))

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn)

  // Append li to list
  itemList.appendChild(li);
  itemList.appendChild(itemList);

  document.getElementById('item').value = "";
  document.getElementById('description').value = "";
  
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter item
function filterItems(e){
    // convert text to lowercase
    var keyword= e.target.value.toLowerCase();
    // Get lis
    const items = document.querySelectorAll('.list-group-item');

    // Loop through items
    items.forEach(function(item) {
      // Get item text
      const itemText = item.textContent.toLowerCase();

      // Check if item text contains the keyword
      if(itemText.indexOf(keyword) != -1) {
          // Show item if it contains the keyword
          item.style.display = 'block';
      } else {
          // Hide item if it doesn't contain the keyword
          item.style.display = 'none';
      }
  });

  }
