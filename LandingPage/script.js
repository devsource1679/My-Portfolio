
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfiE5EUpmZYjD_v6n8PGhk0tG6wGg6n3g",
  authDomain: "myportflio-674c3.firebaseapp.com",
  projectId: "myportflio-674c3",
  storageBucket: "myportflio-674c3.firebasestorage.app",
  messagingSenderId: "283982204322",
  appId: "1:283982204322:web:9f0ce2bf4f1ff1e286f6fb",
  measurementId: "G-0M376NY4VD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)


const form = document.querySelector('.message-box')
const feedback = document.querySelector('.feedback')
form.addEventListener("submit", async (e) => {
  e.preventDefault()
  const name = document.querySelector('.name').value;
  const email = document.querySelector('.email').value;
  const number = document.querySelector('.number').value;
  const message = document.querySelector('.message').value;

  try {
    await addDoc(collection(db, "messages"), {
      name,
      email,
      number,
      message,
      // createdAt: new Date()
    });
    feedback.textContent = '✅ Your message has been sent!'
    feedback.style.color ='#674CAE'
    feedback.style.fontSize = '15 px'
    if (typeof form.reset === 'function') {
      form.rest
    } else {
      document.querySelector(".name").value = "";
      document.querySelector(".email").value = "";
      document.querySelector(".number").value = "";
      document.querySelector(".message").value = "";
    }
      
  } catch (error) {
    console.error("❌ Error saving message:", error);
  }

  setTimeout(() => {
    feedback.textContent = ''
  }, 3000);
});


const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
  overlay.classList.remove('active');
});

const textarea = document.getElementById('message');
textarea.addEventListener('input', () => {
  textarea.style.height = 'auto'; // reset height
  textarea.style.height = textarea.scrollHeight + 'px';
});
