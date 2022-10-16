// circular Form Functions
function contactForm() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwDPI62mNzkDYWcImcqrmrO8vPkdWEXG4r4urfxhNmN9FJ-ZTpqTnIwhz1DTrWf-c0/exec'
    const form = document.forms['contact-form']
    form.addEventListener('submit', e => {
        document.getElementById("contactSubmitButton").disabled = true;
        document.getElementById("contactSubmitButton").value = 'Loading..';
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => submittedcontactForm())
            .catch(error => console.error('Error!', error.message))
    })
}


function submittedcontactForm() {
    document.getElementById("contactSubmitButton").value = "Submitted";
    // document.getElementById("contactFormAlert").innerHTML = "Thanks For Contacting Us";
    document.getElementById("contact-Form").reset();
}