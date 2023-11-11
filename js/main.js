function puzzle1() {
  var enteredPassword = document.getElementById("userInput").value;
  var correctPassword = "cookie"; // Replace with the actual correct password

  // Check if the entered password is correct
  if (enteredPassword === correctPassword) {
    // Redirect to the next page/puzzle
    window.location.href = "bkjkQ.html"; // Replace 'next_page.html' with the actual URL of the next page
  } else {
    alert("try again hehe"); // You can customize this message
  }
}
