# WEOpenSource 😁

WEOpenSource is an open-source platform designed to connect individuals, open source projects, and organizations in the world of open-source software development. Our mission is to foster inclusivity, collaboration, and accessibility within the open-source community. 

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)




![website](https://github.com/Ruchi-here/WEOpenSource/assets/122676573/cefe99ac-5d95-462e-b7bd-ec62fe265108)




## Features 🌐

WEOpenSource offers a range of features to empower both contributors and organizations:

- **Project Search:** Find open-source projects based on your skills, proficiency level, and project preferences.
- **Inclusivity:** Our platform welcomes contributors from diverse backgrounds, including LGBTQ+ and women, promoting a more inclusive open-source community.
- **Project Hosting:** Open-source organizations can host their projects on WEOpenSource, benefitting from our support and resources.
- **Resource Hub:** Access a wealth of resources to help you get started with open-source contributions.
- **NeedHelp Bot:** A built-in chatbot powered by ChatGPT to assist with queries and technical doubts.

## Getting Started

### Prerequisites

To run WEOpenSource locally, ensure you have the following prerequisites installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager): This is typically included with Node.js installation.
- streamlit package shoule be installed
- openai library should also be installed before running streamlit code

### Installation 🖥️

## Streamlit Bot Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/WEOpenSource.git
```
   
2. Navigate to the Streamlit Bot folder:

```bash
cd WEOpenSource/StreamLitBot
```

3. Run the Streamlit bot:

```bash
streamlit run streamlit_app.py
```

The Streamlit bot should now be running on http://localhost:8501/.




## Main Website Setup

Open a new terminal.



1.Navigate to the Main Website folder:

```bash
cd WEOpenSource/MainWebsite
```
2. Install project dependencies:

```bash
npm install
```
3. Start the development server:

```bash
npm start
```

WEOpenSource should now be running locally at http://localhost:3000/.





![command](https://github.com/Ruchi-here/WEOpenSource/assets/122676573/2994540f-ed77-43cd-9313-7a60180f2f74)

   



## Common Errors 🔴



1. Make sure that you are using OpenAI API Key else you'll encounter the below error

![image](https://github.com/Ruchi-here/WEOpenSource/assets/122676573/9de7eb23-0a70-4f8c-ba7c-1c7cef6e03a8)

2. Make sure you're setting up the streamlit bot before running the main website code, else you won't be able to access the NeedHelp bot

3. Ensure that you have run npm install before running the npm start, else you'll face the following error

![image](https://github.com/Ruchi-here/WEOpenSource/assets/122676573/64ac524e-238a-42b6-9732-dea2eabd93aa)






## Usage

- Visit the website at [http://localhost:3000/](http://localhost:3000/) to explore open-source projects, resources, and more.
- Use the NeedHelp bot for assistance with any questions or technical issues.

## Contributing

We welcome contributions from the open-source community. If you'd like to contribute to WEOpenSource, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

---
