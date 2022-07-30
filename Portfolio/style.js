const scriptURL = 'https://script.google.com/macros/s/AKfycbzoQVYRpu77RYxWFUYlLx2qhE7SuAxgv-5TIBUz7MZkJHYMzkeA23SCU64HBsg85U_9/exec'
const form = document.forms[' form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thanks for Contacting Us..! We will Contact You Soon.."))
    .catch(error => console.error('Error!', error.message))
})