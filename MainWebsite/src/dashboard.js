import "./sass/main.scss"; // Import main stylesheet

// Redirects you to the contributors page on GitHub
function redirectToContributors() {
  window.location.href = 'https://github.com/tensorflow/tensorflow/graphs/contributors';
}

// Redirects you to your GitHub page (Replace 'your_username' with your actual GitHub username)
function redirectToGitHub() {
  window.location.href = `https://github.com/tensorflow/tensorflow`;
}

// Show the content of info.js (assuming info.js is in the same directory)
function showInfoContent() {
  // Load info.js dynamically using a script tag
  const script = document.createElement('script');
  script.src = './info.js';
  document.body.appendChild(script);
}

// Attach click event listeners to buttons
document.addEventListener('DOMContentLoaded', function () {
  const contributorsButton = document.getElementById('contributors-button');
  const yourGitHubButton = document.getElementById('your-github-button');
  const showInfoButton = document.getElementById('show-info-button');

  contributorsButton.addEventListener('click', redirectToContributors);
  yourGitHubButton.addEventListener('click', redirectToGitHub);
  showInfoButton.addEventListener('click', showInfoContent);
});

