const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const formData = new FormData(event.currentTarget);

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  if (!data.email || !data.password) {
    alert("All fields must be filled out");
  } else {
    console.log(data); 
    event.currentTarget.reset(); 
  }
});
