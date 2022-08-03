const form=document.querySelector("#contact_form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name=event.target[0].value;
    document.querySelector("#success").innerText= `Thanks, ${name}!  Your message has been sent!`  
    
})
