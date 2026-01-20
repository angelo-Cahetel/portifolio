export const HERO_CONTENT = {
  greeting: "Hi folks!",
  title: "About me",
  description:
    "I am a skilled software developer, my specialty lies in architecting and developing robust solutions. With strong expertise across both the Fullstack universe and the dynamic iOS ecosystem. With rapid learning capabilities and a highly collaborative approach, I delve deep into client needs to deliver products that not only function flawlessly but also delight users and generate tangible value. If you're seeking performance, scalability, and an impeccable user experience, let's build the future of technology together!",
};

export const SKILLS = [
  { label: "Frontend", stack: "React.js, JavaScript, TailwindCSS, HTML, CSS" },
  { label: "Backend", stack: "Node.js, Python, Java" },
  { label: "Mobile", stack: "Swift, SwiftUI, ViewCode, UIKit" },
  { label: "Banco de Dados", stack: "SQL, NoSQL (MongoDB)" },
  { label: "Outros", stack: "Git, GitHub, pacote office" },
];

import Peace from "../assets/img/peace_project.jpg";
import Poliverso from "../assets/img/poliverso.jpg";
import Tabnews from "../assets/img/tabnews.jpg";

export const PROJECTS = [
  {
    id: 1,
    title: "peace",
    image: Peace,
    tag: "#Mobile",
    description:
      "Peace is an iOS app that was developed with the goal of helping people get better organized, managing their tasks and tracking their routine in a practical way.",
    githubLink: "https://github.com/angelo-Cahetel",
  },
  {
    id: 2,
    title: "poliverso",
    image: Poliverso,
    tag: "#Web",
    description:
      "Poliverso is an audiovisual agency that connects talents to produce high-quality content.",
    githubLink: "https://github.com/angelo-Cahetel/PoliversoFilms",
  },
  {
    id: 3,
    title: "clone-tabnews",
    image: Tabnews,
    tag: "#FullStack",
    description:
      "The tabnews clone is a project that was developed in the curso.dev course. In it, I learned how to create automated tests, user authentication, and deployment.",
    githubLink: "https://github.com/angelo-Cahetel/clone-tabnews",
  },
];
