export default function (data) {
  const jobsContainer = document.querySelector(".job-list");

  const markup = data
    .map(
      (job) => `
    <li class="job-list__job ${job.new || job.featured ? "updated" : ""}">
    <div class="logo">
      <img src="${job.logo}" alt="${job.company} logo" />
    </div>

    <div class="job-info">
      <div class="job-info__head">
        <p class="company">${job.company}</p>
        ${job.new ? `<span class="new">New!</span>` : ""}
        ${job.featured ? `<span class="featured">Featured</span>` : ""}
      </div>

      <a href="./info.html" 
      target="_blank"
      class="job-info__position"
        >${job.position}</a
      >

      <div class="job-info__bottom">
        <span class="postedAt">${job.postedAt}</span>
      </div>
    </div>

    <div class="skills">
      <button class="skill" data-field="${job.role}">${job.role}</button>
      <button class="skill" data-field="${job.level}">${job.level}</button>
      ${
        job.languages.length
          ? job.languages
              .map(
                (lng) =>
                  `<button class="skill" data-field="${lng}">${lng}</button>`,
              )
              .join("")
          : ""
      }

      ${
        job.tools.length
          ? job.tools
              .map(
                (tool) =>
                  `<button class="skill" data-field="${tool}">${tool}</button>`,
              )
              .join("")
          : ""
      }
  
	${
	  job.openTo.length
	    ? job.openTo
		.map((open) => {
		  let buttonClass = "skill";
		  let buttonColor = "";
		  if (open === "LGBTQ+") {
		    buttonColor = "background-color: orange;";
		  } else if (open === "Women") {
		    buttonColor = "background-color: pink;";
		  }

		  return `<div><button class="${buttonClass}" data-field="${open}" style="${buttonColor}">${open}</button></div>`;
		})
		.join("")
	    : ""
	}
  </div>

  </li>
        `,
    )
    .join("");

  jobsContainer.classList.add("hide");
  setTimeout(() => {
    jobsContainer.innerHTML = markup;
    jobsContainer.classList.remove("hide");
  }, 100);
}
