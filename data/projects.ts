export interface Project {
  id: string
  title: string
  category: string
  description: string
  fullDescription: string
  date: string
  readTime: string
  tags: string[]
  image?: string
  githubUrl?: string
  demoUrl?: string
  technologies: string[]
  features: string[]
  results: string[]
}

export const projects: Project[] = [
  {
    id: "singape-app",
    title: "SingApe – Next-Gen Mobile Music Streaming App",
    category: "Mobile Application",
    description:
      "A modern music streaming app that allows users to play songs, search music, view karaoke-style synced lyrics, and share tracks like Zing MP3.",
    fullDescription:
      "SingApe is a personalized mobile music streaming application built with React Native. It features seamless background music playback, real-time lyrics syncing, powerful search capabilities, and track sharing with metadata preview. The backend is powered by FastAPI and Supabase to manage user data, playlists, and song metadata effectively.",
    date: "Jul 22, 2025",
    readTime: "3 minute read",
    tags: ["Mobile", "Music", "React Native", "FastAPI"],
    technologies: [
      "React Native",
      "Expo Router",
      "Zustand",
      "Gluestack UI",
      "Tailwind CSS",
      "React Native Track Player",
      "FastAPI",
      "MySQL",
      "Supabase",
    ],
    features: [
      "Background music playbook with lockscreen media controls (Zing MP3 style)",
      "Smart search by song name, artist, album, or genre",
      "Karaoke-style synchronized lyrics display",
      "Customizable interface with Dark/Light mode and dynamic theme colors from cover art",
      "Integrated music charts from sources like ZingChart",
      "Personal playlists and favorite song collections",
      "Track sharing preview on Facebook and Zalo",
    ],
    results: [
      "Successfully developed and deployed the app on Android devices",
      "Implemented reliable background playback with notification controls",
      "Optimized performance and state management using Zustand",
      "Achieved fast track data retrieval using Supabase backend",
    ],
    githubUrl: "https://github.com/Thucdzio/SingApe_Music",
    demoUrl: "https://drive.google.com/file/d/1I1XG6FSnjPnaHV5Ps4QBkOW133LmICql/view?usp=drive_link",
  },
  {
    id: "qairline",
    title: "Q Airline – Website for Information and Flight Booking Support",
    category: "Web Application",
    description: "A modern web application designed to provide information and support for flight bookings.",
    fullDescription:
      "Q Airline is a full-stack web application developed to offer users flight information and allow them to simulate bookings. It is architectured as a multi-service system composed of an API server (`qairline-api`), a database service (`qairline-mysql`), and a frontend web app (`qairline-web`). The system leverages Docker and Docker Compose for containerized development and deployment. Technologies used span both backend (Java, Spring Boot, MySQL) and frontend (React, React Bootstrap, SCSS).",
    date: "Dec 31, 2024",
    readTime: "2 minute read",
    tags: ["Web", "Flight Booking", "Docker", "Java", "JavaScript", "Spring Boot", "MySQL", "React"],
    technologies: [
      "JavaScript",
      "React",
      "React Bootstrap",
      "Java",
      "Spring Boot",
      "SCSS",
      "CSS",
      "MySQL",
      "Docker",
      "Docker Compose",
    ],
    features: [
      "Provides real-time flight information and booking simulation",
      "Modular architecture with API, database, and web UI components",
      "Dockerized environment for consistent local development",
      "Supports deployment via Docker Compose or direct Dockerfile build",
      "Responsive frontend UI using React and React Bootstrap",
      "Containerized MySQL database integration",
    ],
    results: [
      "Successfully implemented a functional airline booking demo system",
      "Demonstrated container orchestration using Docker Compose",
      "Showcased clean full-stack architecture with service separation",
      "Used modern frontend styling and responsive layout techniques",
    ],
    githubUrl: "https://github.com/nvicuong/qairline",
    demoUrl: "https://github.com/nvicuong/qairline/blob/main/images/demo.png?raw=true",
  },
  {
    id: "english-learning-app",
    title: "English Learning App – JavaFX Dictionary & Games",
    category: "Desktop Application",
    description:
      "A JavaFX-based application to support English learning with dual dictionaries, pronunciation, bookmarking, and educational games.",
    fullDescription:
      "This desktop application, developed using Java and JavaFX, helps users learn English effectively through features such as bilingual dictionaries (English–Vietnamese and Vietnamese–English), search history, bookmarks, pronunciation support, and fun educational games like Hangman and BearFindHoney. It follows the MVC architecture and integrates Google Translate API for real-time translation.",
    date: "Dec 1, 2023",
    readTime: "4 minute read",
    tags: ["Java", "JavaFX", "Desktop", "Dictionary", "Game", "Education"],
    technologies: [
      "Java",
      "JavaFX",
      "Google Translate API",
      "MVC Design Pattern",
      "E_V.txt / V_E.txt (File-based storage)",
    ],
    features: [
      "English–Vietnamese and Vietnamese–English dictionary mode",
      "Bookmarking and search history to track progress",
      "Audio pronunciation feature for each word",
      "Two built-in educational games: Hangman and BearFindHoney",
      "Integration with Google Translate for fast, accurate translation",
      "Support for adding and removing custom words",
      "Simple GUI navigation with icon-based buttons (Add, Delete, Bookmark...)",
    ],
    results: [
      "Successfully developed and deployed a fully functional Java desktop app",
      "Enhanced English vocabulary retention through interactive games",
      "Applied MVC model to organize code structure cleanly",
      "Gained experience integrating external APIs (Google Translate)",
    ],
    githubUrl: "https://github.com/prindoll/dictionary",
    demoUrl: "https://www.youtube.com/watch?v=02taeYQmVbw",
  },
  {
    id: "plane-invader",
    title: "Plane Invader – 2D SDL2 Shooting Game",
    category: "Game Development",
    description:
      "A classic 2D shooting game where players control a fighter plane to battle against waves of enemies and challenging bosses.",
    fullDescription:
      "Plane Invader is a 2D arcade-style shooting game developed using C++ and the SDL2 library. Players take the role of a pilot navigating through enemy territory, dodging bombs and bullets while shooting down enemies and powerful bosses. The game features real-time keyboard controls and engaging visuals, offering an exciting experience inspired by classic bullet-hell arcade games.",
    date: "May 7, 2023",
    readTime: "2 minute read",
    tags: ["Game", "SDL2", "C++", "Arcade"],
    technologies: ["C++", "SDL2", "SDL_Image", "SDL_TTF", "Visual Studio"],
    features: [
      "Player movement using WASD keys and attack with Spacebar",
      "Enemy and boss mechanics with bullet collision detection",
      "Simple sprite rendering and animation using SDL2",
      "Challenging bomb mechanics – cannot be destroyed, must dodge",
      "Game built and run through Visual Studio with `.sln` management",
    ],
    results: [
      "Developed a fully playable SDL2-based game using C++",
      "Practiced low-level game loop, input handling, and rendering",
      "Learned fundamental concepts of 2D game development",
    ],
    githubUrl: "https://github.com/Thucdzio/Game/tree/master",
    demoUrl: "https://user-images.githubusercontent.com/124569106/236681159-2b430b7e-d064-4a39-8669-56ce9a3c519f.png",
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category)
}
