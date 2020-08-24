document.querySelector("#add-time")
.addEventListener('click', cloneField)


function cloneField(){
    const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    const fields= newfieldContainer.querySelectorAll('input')
    
    fields.forEach(function(field){
        field.value= ""
    })
    document.querySelector('#schedule-items').appendChild(newfieldContainer)
}