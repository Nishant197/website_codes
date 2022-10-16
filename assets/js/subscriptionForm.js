// circular Form Functions
function subscriptionForm() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyZ-NT7AXCpZe8__-GaBZnsYI5tOQm-3SH_ZUsSNepceIVpAIKRHxAhOvSsh5w2PI3i/exec'
    const form = document.forms['subscription-form']
    form.addEventListener('submit', e => {
        document.getElementById("subscriptionSubmitButton").disabled = true;
        document.getElementById("subscriptionSubmitButton").value = 'Loading..';
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => submittedsubscriptionForm())
            .catch(error => console.error('Error!', error.message))
    })
}


function submittedsubscriptionForm() {
    document.getElementById("subscriptionSubmitButton").value = "Subscribed";
    document.getElementById("subscriptionFormAlert").innerHTML = "Thanks For Your Subscription";
    document.getElementById("subscription-Form").reset();
}