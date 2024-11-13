// Predefined access key and credentials
const Setusername = "user";
const Setpassword = "password";
const predefinedKey = "key";

// Event listeners for form submission
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validate();
  });

document
  .getElementById("updateForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    update();
  });

document
  .getElementById("deleteForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way
    Delete();
  });

// Validate function for login
function validate() {
  console.log("Debug: Function called");
  const username = document.getElementById("ID").value;
  const password = document.getElementById("password").value;
  const accessKey = document.getElementById("key").value;

  // Check if the provided access key matches the predefined key
  if (accessKey !== predefinedKey) {
    document.getElementById("errorMessage").innerText =
      "Access key is incorrect. Please try again.";
    alert("Access Key is Incorrect. Please Re-enter");
  } else if (username === Setusername && password === Setpassword) {
    // Redirect to test.html if successful
    window.location.href = "test.html";
  } else {
    document.getElementById("errorMessage").innerText =
      "Username or password is incorrect. Please try again.";
  }
}

// Update function to handle form data for updating
function update() {
  console.log("Debug: Function called");
  const aboutUs = document.getElementById("aboutus").value;
  const menuItems = document.getElementById("menu").value;
  const message = document.getElementById("message").value;

  console.log("About Us:", aboutUs);
  console.log("Menu Items:", menuItems);
  console.log("Message:", message);
}

function Delete() {
  console.log("Debug: Function called");
  // Get the value from the textarea
  const itemName = document.getElementById("delete").value;

  // Basic validation
  if (!itemName) {
    alert("Please enter the name of the item to delete.");
    return;
  }
  console.log("Delete:", itemName);
}
