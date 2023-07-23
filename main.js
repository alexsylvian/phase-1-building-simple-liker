// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heart = document.getElementsByClassName("like-glyph")
const heartArray = [...heart]

heartArray.forEach((heart) =>
  heart.addEventListener('click', (e) => {
    mimicServerCall() 
    .then(() => {
      e.target.innerHTML = '♥'
      e.target.parentElement.classList.add('activated-heart')
    })
    .catch(() => {
      document.body.classList.remove("hidden")
    })
  })
)

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
