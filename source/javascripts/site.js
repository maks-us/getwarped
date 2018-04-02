var hamburger = document.querySelector('.hamburger');
var topNav = document.querySelector('.top-nav');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('open');
  topNav.classList.toggle('open');
});

var URL = 'https://us-central1-arcane-text-177902.cloudfunctions.net/contactUs';

function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  fetch(URL, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  });

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}
