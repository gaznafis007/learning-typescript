"use strict";
const submitBtn = document.getElementById('btn');
const inputField = document.getElementById('input-field');
submitBtn.addEventListener('click', (event) => {
    const form = event.target;
    const section = form.parentNode;
    const newMessage = document.createElement('p');
    newMessage.innerText = inputField.value;
    section === null || section === void 0 ? void 0 : section.appendChild(newMessage);
});
