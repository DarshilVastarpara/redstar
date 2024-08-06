
const fname = document.getElementById('fname');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const msg = document.getElementById('msg');


// add event listner on form container...
const submit = document.getElementsByClassName('form-data')[0];



submit.addEventListener('submit', (e) => {

  e.preventDefault();
  console.log("clicked");
  document.getElementById('fname').clear;



  let ebody = `
    <b>Name: </b>${fname.value}
    <br><b>Contact: </b>${contact.value}
    <br><b>Email: </b>${email.value}
    <br><b>Message: </b>${msg.value}
    `

  // email code here 
  Email.send({
      SecureToken : "b0896956-c927-4561-b0da-600185189394",
      To : 'vastarparadarshil@gmail.com',
      From : "vastarparadarshil@gmail.com",
      Subject : "testing mail" + email.value,
      Body : ebody
  }).then(
    message => alert(message)

  );
});
document.getElementById("myForm").addEventListener("submit", function (event) {
  document.getElementById("myForm").reset();
  event.preventDefault();
});


// clear the code inpute fiels 
