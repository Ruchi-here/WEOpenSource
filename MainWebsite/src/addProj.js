// addProj.js

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form values
  const position = document.getElementById('position').value;
  const companyName = document.getElementById('companyName').value;
  const description = document.getElementById('description').value;
  const githubRepoUrl = document.getElementById('githubRepoUrl').value;
  const language = document.getElementById('language').value;
  const category = document.getElementById('category').value;
  const resources = document.getElementById('resources').value;
  const contributionGuidelines = document.getElementById('contributionGuidelines').value;

  // You can perform further validation here if needed

  // Display a notification
  alert('Project has been added!');

  // Redirect to the dashboard (replace 'dashboard.html' with your actual dashboard URL)
  window.location.href = 'dashboard.html';
}

// Add a submit event listener to the form
const form = document.getElementById('projectForm');
form.addEventListener('submit', handleSubmit);

