document.getElementById('submit').addEventListener("click", (event) => {
    const task = document.createElement('li');
    document.getElementById('list').appendChild(task);
    task.id = 'task';

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    task.appendChild(checkbox);

    task.innerHTML += document.getElementById('input').value;

    const clicked_checkboxes = document.querySelectorAll('.checkbox');

    for (i = 0; i < clicked_checkboxes.length; i++){
        let checkbox = clicked_checkboxes[i]

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                checkbox.parentNode.style.textDecoration = 'line-through';
            } else {
                checkbox.parentNode.style.textDecoration = '';
            }
        })
    }
});


document.getElementById('remove').addEventListener("click", (event) => {
    const checkboxes = document.querySelectorAll('.checkbox:checked');
    
    for (i = 0; i < checkboxes.length; i++){
        document.getElementById('list').removeChild(checkboxes[i].parentNode);  
    }
});