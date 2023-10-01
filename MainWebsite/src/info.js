import "./sass/main.scss"; // Import your main stylesheet

(function () {
  // Get references to HTML elements
  const jobTitle = document.querySelector(".job-title");
  const company = document.querySelector(".company");
  const descriptionContainer = document.querySelector(".description-container"); // Updated reference
  const profileLinks = document.querySelector(".profile-links");

  // Sample job data
  const job = {
    id: 1,
    position: "Tensorflow",
    company: "tensorflow.org",
    description:
      "TensorFlow is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries, and community resources that lets researchers push the state-of-the-art in ML, and gives developers the ability to easily build and deploy ML-powered applications.\n\n" +
      "TensorFlow provides a collection of workflows with intuitive, high-level APIs for both beginners and experts to create machine learning models in numerous languages. Developers have the option to deploy models on a number of platforms such as on servers, in the cloud, on mobile and edge devices, in browsers, and on many other JavaScript platforms. This enables developers to go from model building and training to deployment much more easily.",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/115px-Tensorflow_logo.svg.png?20170429160244", // Image link
  };

  // Function to populate job information
  function renderJobInfo() {
    // Populate job information
    jobTitle.textContent = job.position;
    company.textContent = job.company;
    
    // Create an image element
    const image = document.createElement("img");
    image.src = job.imageSrc; // Use the image link directly
    
    // Append the image to the description container
    descriptionContainer.appendChild(image);

    // Create a description element
    const descriptionElement = document.createElement("div");
    descriptionElement.textContent = job.description;
    
    // Append the description element to the description container
    descriptionContainer.appendChild(descriptionElement);

  }

  // Render job information
  renderJobInfo();
})();

