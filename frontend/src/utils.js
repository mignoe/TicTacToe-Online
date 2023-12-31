const displayError = (message) => {
    const errorElement = document.getElementById("error-message");
    if (errorElement) {
      errorElement.innerText = message;
      errorElement.style.color = "red";
    } else {
      console.log("Error element not found");
    }
  };

export default displayError;
  