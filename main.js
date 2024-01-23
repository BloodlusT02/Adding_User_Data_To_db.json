const buttonEl = document.querySelector("button");

const handleSubmit = (e) => {
  e.preventDefault();

  // Taking User Input
  let firstnameEl = document.getElementById("firstname").value;
  let lastnameEl = document.getElementById("lastname").value;
  let emailEl = document.getElementById("email").value;
  let passwordEl = document.getElementById("password").value;

  // Creating an object to add data
  const userData = {
    firstname: firstnameEl,
    lastname: lastnameEl,
    email: emailEl,
    password: passwordEl,
  };

  // If the fiels are empty show this
  if (userData.firstname === "") {
    return alert("Please Enter The First Name");
  }else if (userData.lastname === "") {
    return alert("Please Enter The Last Name");
  } else if (userData.email === "") {
    return alert("Please Enter The Email ID");
  } else if (userData.password === "") {
    return alert("Please Enter The Password");
  } else {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("successes");
        return console.log(data);
      })
      .catch((error) => {
        return `ERROR! ${error}`;
      });

    alert("Your Data Is Added");
  }
};

buttonEl.addEventListener("click", handleSubmit);
