export interface CVData {
  personalInfo: {
    name: string
    website: string
    email: string
    mobile: string
  }
  education: {
    institution: string
    degree: string
    gpa: string
    duration: string
  }
  projects: Array<{
    title: string
    description: string
    githubUrl: string
  }>
  knowledge: string[]
  programmingSkills: {
    languages: string[]
    technologies: string[]
  }
}

export const cvData: CVData = {
  personalInfo: {
    name: "Le Tien Thuc",
    website: "https://ltthuc.id.vn",
    email: "letienthuc2004@gmail.com",
    mobile: "0355439413",
  },
  education: {
    institution: "University of Engineering and Technology VNU, Hanoi",
    degree: "Bachelor of Science in Information Technology",
    gpa: "3.22",
    duration: "Oct. 2022 – Present",
  },
  projects: [
    {
      title: "Q Airline",
      description:
        "A full stack web application that provides flight information and booking support. This project provides a Dockerized environment for easy mock deployment",
      githubUrl: "https://github.com/nvicuong/qairline",
    },
    {
      title: "Application to Support learning English",
      description:
        "The application is designed to support learning English. The application is written in Java and uses the JavaFX library. The application is based on the MVC model. The application has two types of dictionaries: English-Vietnamese and Vietnamese-English",
      githubUrl: "https://github.com/prindoll/dictionary",
    },
    {
      title: "Game: Plane_Invader",
      description:
        "A shooting game, you will play the main character as a pilot with your own rank to handle monsters and bosses",
      githubUrl: "https://github.com/Thucdzio/Game/tree/master",
    },
    {
      title: "SingApe App",
      description:
        "A mobile music streaming application that supports background playback, real-time lyrics (karaoke mode), personal playlists, and music charts. Built with React Native, Tailwind CSS, and FastAPI backend",
      githubUrl: "https://github.com/Thucdzio/SingApe_Music",
    },
  ],
  knowledge: [
    "Basic understanding of programming with at least one language (Java, Python, JavaScript, C++)",
    "Fundamental knowledge of Application Development",
    "Proficiency in Git",
    "Ability to research and analyze scientific and technical documents",
  ],
  programmingSkills: {
    languages: ["Python", "Javascript", "C++", "SQL", "Java"],
    technologies: ["Spring Boot", "React", "React Native", "JavaFX"],
  },
}
