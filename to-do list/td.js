let entertxt = document.querySelector('.enter');
let addBtn = document.querySelector('.addli');
let tasks = document.querySelector('.tasks');

entertxt.addEventListener('keyup', () => {
    if(entertxt.value.trim() != 0){
        addBtn.classList.add('active')
    } else{
        addBtn.classList.remove('active')
    }
})

addBtn.addEventListener('click', () => {
    if(entertxt.value.trim() !=0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML=  ` <p> ${entertxt.value} </p>
            <div class="btn">
                <i class="fa-solid fa-pencil"></i>
                <i class="fa-solid fa-xmark"></i>
            </div>`

            tasks.appendChild(newItem);
            entertxt.value ='';
    }else {
        alert('Please enter a task');
    }
});

tasks.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
} )

tasks.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-pencil')
    ) {
        e.target.parentElement.parentElement.classList.
        toggle('completed');
    }
} )