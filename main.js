// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD0uSgDMYfAkkW97SHoFp6JqoWJvfioRG4",
  authDomain: "contact-form-43b93.firebaseapp.com",
  projectId: "contact-form-43b93",
  storageBucket: "contact-form-43b93.appspot.com",
  messagingSenderId: "928890391795",
  appId: "1:928890391795:web:e3ef78b684715b25d2bb86"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
