const scriptURL = 'https://script.google.com/macros/s/AKfycbzil6gtA73tBDAzmfkru7WkEamYW2ahE84i86OAdcyrx2kN3SqMk38xn028fEgLEJDl/exec'
const form = document.forms['submit-to-google-sheet']
var msg = document.getElementById("msg")
// var msg1 = document.getElementById("msg1")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Thanks for subscribing"
       msg1.innerHTML=URL("https://docs.google.com/spreadsheets/d/1pxqGZ55DKOEMInwysQwFXdHYcsqk6O1MsqEdtCUQLMI/edit?gid=0#gid=0")
        
       
        setTimeout( function(){
            msg.innerHTML="" 
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})