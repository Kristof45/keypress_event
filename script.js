window.addEventListener('DOMContentLoaded', ()=>{
    const containerDiv = document.createElement('div')
    containerDiv.classList.add("container")

    const demoSpan=document.createElement('span')
    demoSpan.id='demo'

    const textarea=document.createElement('textarea')
    textarea.name='area'
    textarea.id='area'
    textarea.placeholder='Írd be a jelszavad:'
    textarea.addEventListener('keypress', ()=> jelszo(textarea, demoSpan))

    containerDiv.append(demoSpan, textarea)

    //console.log(containerDiv);
    document.body.append(containerDiv)
})

function jelszo(textare, demoSpan) {
    let csillag='';

    for (let i = 0; i < textarea.value.length; i++) {
        


    }
}