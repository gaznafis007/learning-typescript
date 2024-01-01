const submitBtn = document.getElementById('btn') as HTMLElement;
const inputField = document.getElementById('input-field') as HTMLInputElement;
submitBtn.addEventListener('click', (event)=>{
    const form = event.target as HTMLElement;
    const section= form.parentNode;
    const newMessage = document.createElement('p');
    newMessage.innerText= inputField.value;
    section?.appendChild(newMessage)
    
})