document.getElementById('submit').addEventListener("click", (event) => {
    let task = document.createElement('li')
    document.getElementById('list').appendChild(task);
    task.setAttribute('id', "task");  

    let checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("class", "checkbox")
    task.appendChild(checkbox) 

    task.innerHTML += document.getElementById('input').value;


    const clicked_checkboxes = document.querySelectorAll('.checkbox');

    clicked_checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                checkbox.parentNode.style.textDecoration = 'line-through';
            }
      });
    })

});


document.getElementById('remove').addEventListener("click", (event) => {
    const checkboxes = document.querySelectorAll('.checkbox:checked');
    console.log(checkboxes)
    for (i = 0; i < checkboxes.length; i++){
        document.getElementById('list').removeChild(checkboxes[i].parentNode);  
    }
});



// let myarr = [2,4,1,7];
// myarr.push(10);
// myarr.pop();
// myarr.sort((a, b) => b - a); //reverse
// for (let i = 0; i < myarr.length; i++) {
//     console.log("the value currently is " + myarr[i] + " but the index is " + i);
// }
