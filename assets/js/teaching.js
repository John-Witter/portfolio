document.addEventListener('DOMContentLoaded', function () {
    const teachingArticle = document.getElementById('teaching');
    const teachingPhilosophyDiv = document.getElementById('teaching-philosophy');
    const coursesTaughtDiv = document.getElementById('courses-taught');
    const selectCourseDescriptionsDiv = document.getElementById('select-course-descriptions');
    
    const teachingPhilosophyLink = document.getElementById('teaching-philosophy-link');
    const coursesTaughtLink = document.getElementById('courses-taught-link');
    const selectCourseDescriptionsLink = document.getElementById('select-course-descriptions-link');

    function showTeachingPhilosophy() {
        teachingPhilosophyDiv.classList.remove('hidden');
        teachingPhilosophyDiv.classList.add('selected');
        coursesTaughtDiv.classList.add('hidden');
        coursesTaughtDiv.classList.remove('selected');
        selectCourseDescriptionsDiv.classList.add('hidden');
        selectCourseDescriptionsDiv.classList.remove('selected');
    }

    function showCoursesTaught() {
        teachingPhilosophyDiv.classList.add('hidden');
        teachingPhilosophyDiv.classList.remove('selected');
        coursesTaughtDiv.classList.remove('hidden');
        coursesTaughtDiv.classList.add('selected');
        selectCourseDescriptionsDiv.classList.add('hidden');
        selectCourseDescriptionsDiv.classList.remove('selected');
    }

    function showSelectCourseDescriptions() {
        teachingPhilosophyDiv.classList.add('hidden');
        teachingPhilosophyDiv.classList.remove('selected');
        coursesTaughtDiv.classList.add('hidden');
        coursesTaughtDiv.classList.remove('selected');
        selectCourseDescriptionsDiv.classList.remove('hidden');
        selectCourseDescriptionsDiv.classList.add('selected');
    }

     // Show teaching philosophy when the article is opened
     teachingArticle.addEventListener('click', function () {
        // Check if the article is not currently visible (or other criteria to ensure this is on open)
        if (teachingArticle.classList.contains('hidden') || !teachingArticle.classList.contains('active')) {
            showTeachingPhilosophy();
        }
    });

    // Handle navigation clicks
    teachingPhilosophyLink.addEventListener('click', function (event) {
        event.preventDefault();
        showTeachingPhilosophy();
    });

    coursesTaughtLink.addEventListener('click', function (event) {
        event.preventDefault();
        showCoursesTaught();
    });

    selectCourseDescriptionsLink.addEventListener('click', function (event) {
        event.preventDefault();
        showSelectCourseDescriptions();
    });
});
