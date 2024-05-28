// Handle form submission
document.getElementById("donorForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Get form values
    // var name = document.getElementById("name").value;
    // var bloodGroup = document.getElementById("bloodGroup").value;
    // var email = document.getElementById("email").value;
    // var phone = document.getElementById("phone").value;
  
    // Perform validation (you can add your own validation logic here)
  
    // Display a success message
    alert("Thank you, " + name + "! You have successfully registered as a blood donor.");
    window.open("/home.html")
  });
  