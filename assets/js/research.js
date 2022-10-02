document.addEventListener("DOMContentLoaded", () => {
  const project1 = document.getElementById("project-1");
  const project2 = document.getElementById("project-2");
  const project3 = document.getElementById("project-3");
  const project1Link = document.getElementById("project-1-link");
  const project2Link = document.getElementById("project-2-link");
  const project3Link = document.getElementById("project-3-link");

  project2.classList.add('hidden')
  project3.classList.add('hidden')

  project1Link.addEventListener("click", () => {
    project1.classList.remove("hidden");
    project2.classList.add("hidden");
    project3.classList.add("hidden");
    project1Link.classList.add("selected")
    project2Link.classList.remove("selected")
    project3Link.classList.remove("selected")
  });
  project2Link.addEventListener("click", () => {
    project2.classList.remove("hidden");
    project1.classList.add("hidden");
    project3.classList.add("hidden");
    project2Link.classList.add("selected")
    project1Link.classList.remove("selected")
    project3Link.classList.remove("selected")
  });
  project3Link.addEventListener("click", () => {
    project3.classList.remove("hidden");
    project1.classList.add("hidden");
    project2.classList.add("hidden");
    project3Link.classList.add("selected")
    project1Link.classList.remove("selected")
    project2Link.classList.remove("selected")
  });
});
