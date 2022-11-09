// console.log("Hello from src/index.js!");

// # SELECTIONNER LE BOUTON

// const button = document.querySelector("button");
// const button1 = document.querySelector(".btn");

// const button2 = document.querySelector("#action-btn");
// const button2Bis = document.getElementById("action-btn");

// console.log(button);

// AJOUTER UNE CLASS AU BOUTON

// button.classList.add("la-class")
// button.classList.remove("la-class")
// button.classList.toggle("la-class")
// button.style.color = "red"
// const text = document.querySelector("p")

// text.insertAdjacentHTML("beforeend", `<p>Coucou</p>`)
// text.innerHTML = `<p>Coucou</p>`


// GET REQUEST

// button.addEventListener("click", (event) => {
//   // Callback ⚠️
//   // console.log(event);

//   fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data)
//     // debugger
//     data.Search.forEach((result) => {
//       const movieTag = `<li class="list-inline-item">
//         <img src="${result.Poster}" alt="">
//         <p>${result.Title}</p>
//       </li>`
//       results.insertAdjacentHTML("beforeend", movieTag);
//     })
//   })
// })

// const form = document.getElementById("search-form")
// const results = document.getElementById("results");

// form.addEventListener("submit", (event) => {
//   event.preventDefault()
//   results.innerHTML = ""
//   const search = document.getElementById("search-input").value // => query

//   console.log(search);

//   fetch(`http://www.omdbapi.com/?s=${search}&apikey=adf1f2d7`)
//   .then(response => response.json())
//   .then((data) => {
//     data.Search.forEach((result) => {
//       const movieTag = `<li class="list-inline-item">
//         <img src="${result.Poster}" alt="">
//         <p>${result.Title}</p>
//       </li>`
//       results.insertAdjacentHTML("beforeend", movieTag);
//     })
//   })
// })


// POST REQUEST

const signUp = (event) => {
  event.preventDefault()

  const emailValue = document.getElementById("email").value
  const passwordValue = document.getElementById("password").value

  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"email": emailValue, "password": passwordValue})
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
}

const form = document.querySelector("#form")
form.addEventListener("submit", signUp)
