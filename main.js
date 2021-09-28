// create variables
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password");
form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

// creating event handler for when submit button is clicked, run the funciton engine
form.addEventListener("submit", (e) => {
  e.preventDefault();


  // calling the funciton when submit button has been clicked
  engine(username, 0, "Username Cannot Be Blank");
  engine(email, 1, "Email Cannot Be Blank");
  engine(password, 2, "Password Cannot Be Blank");
});


// creating the function, if section is for failures, else section is for success
let engine = (id, position, message) => {
  if (id.value.trim() === "") {
    errorMsg[position].innerHTML = message;
    failureIcon[position].style.opacity = "1";
    successIcon[position].style.opacity = "0";
  } else {
    errorMsg[position].innerHTML = "";
    failureIcon[position].style.opacity = "0";
    successIcon[position].style.opacity = "1";
  }
};


// .trim makes javascript remove all the spaces
