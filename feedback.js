function submitFeedback() {
  const name = document.getElementById("name").value.trim();
  const feedback = document.getElementById("feedback").value.trim();

  if (name && feedback) {
    alert("Thank you, " + name + "! Your feedback was submitted successfully.");
    document.getElementById("name").value = "";
    document.getElementById("feedback").value = "";
  } else {
    alert("Please fill in both fields before submitting.");
  }
}
