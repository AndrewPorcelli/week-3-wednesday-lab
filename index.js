"use strict";

const message = document.querySelector("#message");

// Function
// delete movie
function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = "Movie Deleted!";
}

// cross off movie
function crossOffMovie(event) {
  event.target.classList.toggle("checked");

  if (event.target.classList.contains("checked")) {
    message.textContent = "Movie Watched!";
  } else {
    message.textContent = "Movie added back!";
  }
}

// add movie
function addMovie(event) {
  event.preventDefault();
  const inputField = document.querySelector("input");

  const movie = document.createElement("li");

  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  const list = document.querySelector("ul");
  list.appendChild(movie);

  inputField.value = "";
}

// event listener
const form = document.querySelector("form");
form.addEventListener("submit", addMovie);
