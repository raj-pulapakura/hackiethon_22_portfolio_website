const projectLinks = {
  numberPredictor: "https://github.com/ajray4k/Number-Predictor-V2-w-Flutter",
  ultraride: "https://github.com/ajray4k/ultraride",
  utilities: "https://github.com/ajray4k/build-graphql-api",
  chatto: "https://github.com/ajray4k/chat-website",
};

function addLinks() {
  const projects = document.getElementsByClassName("project-box");
  console.log(projects);
  for (const project of projects) {
    const img = project.firstElementChild;

    project.addEventListener("mouseover", (e) => {
      img.style.display = "block";
    });

    project.addEventListener("mouseout", (e) => {
      img.style.display = "none";
    });

    img.addEventListener("click", (e) => {
      window.location.href = projectLinks[project.dataset.projectName];
    });
  }
}

addLinks();
