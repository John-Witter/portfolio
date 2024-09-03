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

  const teachingPhilosophy = document.getElementById("teaching-philosophy");
  const coursesTaught = document.getElementById("courses-taught");
  const selectCourseDescriptions = document.getElementById("select-course-descriptions");
  const teachingPhilosophyLink = document.getElementById("teaching-philosophy-link");
  const coursesTaughtLink = document.getElementById("courses-taught-link");
  const selectCourseDescriptionsLink = document.getElementById("select-course-descriptions-link");

  teachingPhilosophyLink.addEventListener("click", () => {
    teachingPhilosophy.classList.remove("hidden");
    coursesTaught.classList.add("hidden");
    selectCourseDescriptions.classList.add("hidden");
    teachingPhilosophyLink.classList.add("selected")
    coursesTaughtLink.classList.remove("selected")
    selectCourseDescriptionsLink.classList.remove("selected")
  });
  coursesTaughtLink.addEventListener("click", () => {
    coursesTaught.classList.remove("hidden");
    teachingPhilosophy.classList.add("hidden");
    selectCourseDescriptions.classList.add("hidden");
    coursesTaughtLink.classList.add("selected")
    teachingPhilosophyLink.classList.remove("selected")
    selectCourseDescriptionsLink.classList.remove("selected")
  });
  selectCourseDescriptionsLink.addEventListener("click", () => {
    selectCourseDescriptions.classList.remove("hidden");
    teachingPhilosophy.classList.add("hidden");
    coursesTaught.classList.add("hidden");
    selectCourseDescriptionsLink.classList.add("selected")
    teachingPhilosophyLink.classList.remove("selected")
    coursesTaughtLink.classList.remove("selected")
  });
});
