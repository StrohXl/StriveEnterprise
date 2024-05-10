const sectionTeam = document.getElementsByClassName("team")[0];
const sectionContact = document.getElementsByClassName("hero")[0];
const sectionAbout = document.getElementsByClassName("about")[0];
const sectionCourses = document.getElementsByClassName("careers")[0];
const moveScrollToSection = (event, number) => {
  event.preventDefault();
  switch (number) {
    case 1:
      sectionAbout.scrollIntoView({ behavior: "smooth" });
      break;
    case 2:
      sectionCourses.scrollIntoView({ behavior: "smooth" });

      break;
    case 3:
      sectionTeam.scrollIntoView({ behavior: "smooth" });
      break;
    case 4:
      sectionContact.scrollIntoView({ behavior: "smooth" });
      break;
  }
};
