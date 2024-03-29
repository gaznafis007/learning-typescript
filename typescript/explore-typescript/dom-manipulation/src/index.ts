const headingText = document.querySelector(".heading-text") as HTMLElement;
const colorBtn = document.getElementById('color-btn') as HTMLButtonElement;
const defaultColorBtn = document.getElementById('default-color') as HTMLButtonElement;
const generateText = document.getElementById("auto-text") as HTMLButtonElement;
const removeStyle = document.getElementById("remove-style") as HTMLButtonElement;
const removeText = document.getElementById("remove-text") as HTMLButtonElement;
// const textPlacement = document.getElementById("generated-text") as HTMLElement;
const section = document.getElementById("practice-section") as HTMLElement;
const sectionHeader = document.getElementById('section-header') as HTMLElement;

console.log(sectionHeader);
console.log("hello DOM");

sectionHeader.addEventListener('click', ()=>{
    const text = sectionHeader.innerText;
    sectionHeader.classList.add('color-red');
    let insertedText = document.getElementById('inserted-text') as HTMLElement;
    let previousText = insertedText.innerText;
    insertedText.innerText = `${previousText} ${text}`
    
})

colorBtn.addEventListener('click', ()=>{
    headingText.classList.add('color-red')
})
defaultColorBtn.addEventListener('click', ()=>{
    headingText.classList.remove('color-red')
})
generateText.addEventListener('click', ()=>{
    let textPlacement = document.createElement('p')
    let autoText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officia, perspiciatis illo modi earum veritatis eaque iure quis ipsam enim consequuntur fugiat magnam commodi veniam autem itaque voluptatibus voluptate inventore. Ullam exercitationem reiciendis error quidem inventore, vero voluptatem nisi ipsam tempore molestias ex quaerat deleniti consequatur maxime corrupti eligendi ipsa repellendus accusantium deserunt omnis doloribus! Voluptatem enim quam, animi repudiandae commodi alias similique iste eos molestias at adipisci ullam dolorem vel assumenda corporis laboriosam sit culpa? Cumque quae repellat alias, aperiam eveniet sapiente numquam beatae commodi? Fuga iure, nemo, tempore temporibus sit sint similique maxime corporis, quasi libero laborum harum!"
    textPlacement.innerText = autoText;
    textPlacement.classList.add('auto-text');
    section.appendChild(textPlacement)
})
removeStyle.addEventListener('click', ()=>{
    let text = document.querySelector('.auto-text') as HTMLElement;
    text.classList.remove('auto-text')
})
removeText.addEventListener('click', ()=>{
    let practiceText = document.querySelector('.auto-text') as HTMLElement;
    console.log(practiceText);
    practiceText.remove();
    // textPlacement.classList.remove('auto-text')
})