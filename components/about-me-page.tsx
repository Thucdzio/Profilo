import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

interface AboutMePageProps {
  isDarkMode: boolean;
}

export default function AboutMePage({ isDarkMode }: AboutMePageProps) {
  return (
    <div className="max-w-4xl w-full mx-auto px-2 sm:px-4">
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        } rounded-lg p-4 sm:p-8`}
      >
        <h1 className="text-3xl font-bold mb-6">About Me</h1>

        <div className="space-y-8">
          {/* Introduction Section */}
          <section id="introduction">
            <h2 className="text-xl font-semibold mb-4 text-purple-400 scroll-mt-8">
              👋 Introduction
            </h2>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed mb-4 text-base sm:text-lg`}
            >
              Hello, I&apos;m Thuc! I&apos;m a passionate Information Technology
              student at Vietnam National University, Hanoi. Currently pursuing
              my degree while working as a research student at the Laboratory
              for the Department of Software Engineering.
            </p>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed text-base sm:text-lg`}
            >
              My journey in technology started with curiosity about how things
              work behind the scenes. From building my first &quot;Hello
              World&quot; program to deploying complex distributed systems,
              I&apos;ve been constantly learning and growing in this
              ever-evolving field.
            </p>
          </section>

          {/* What I Do Section */}
          <section id="what-i-do">
            <h2 className="text-xl font-semibold mb-4 text-purple-400 scroll-mt-8">
              🚀 What I Do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className={`${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                } p-4 rounded-lg w-full`}
              >
                <h3 className="font-semibold mb-2 text-base sm:text-lg">
                  Full-Stack Development
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } text-sm`}
                >
                  Building modern web applications with React, Spring Boot, and
                  various databases. I enjoy creating seamless user experiences
                  backed by robust server-side architecture.
                </p>
              </div>
              <div
                className={`${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                } p-4 rounded-lg w-full`}
              >
                <h3 className="font-semibold mb-2 text-base sm:text-lg">
                  Linux & Git
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } text-sm`}
                >
                  Experienced with Linux basics, Git server setup, GitLab
                  workflows, and foundational CI/CD concepts to support modern
                  development practices.
                </p>
              </div>
              <div
                className={`${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                } p-4 rounded-lg w-full`}
              >
                <h3 className="font-semibold mb-2 text-base sm:text-lg">
                  Machine Learning & MLOps
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } text-sm`}
                >
                  Exploring MLOps practices and deploying ML models in
                  production environments. I&apos;m fascinated by the
                  intersection of machine learning and software engineering.
                </p>
              </div>
              <div
                className={`${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                } p-4 rounded-lg w-full`}
              >
                <h3 className="font-semibold mb-2 text-base sm:text-lg">
                  Research & Innovation
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } text-sm`}
                >
                  Contributing to software engineering research at university
                  laboratory. I enjoy exploring new technologies and finding
                  innovative solutions to complex problems.
                </p>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="tech-stack">
            <h2 className="text-xl font-semibold mb-4 text-purple-400 scroll-mt-8">
              💻 Tech Stack
            </h2>

            <div className="space-y-4">
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } mb-4 text-base sm:text-lg`}
              >
                Technologies I&apos;ve worked with in my projects:
              </p>

              <div className="flex flex-wrap gap-2">
                {[...new Set(projects.flatMap((project) => project.tags))]
                  .sort()
                  .map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors ${
                        // Highlight popular technologies
                        ["Docker", "Java", "React", "DevOps", "CI/CD"].includes(
                          tech
                        )
                          ? "border-2 font-semibold"
                          : ""
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
              </div>

              <div
                className={`${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                } p-4 rounded-lg mt-4 w-full`}
              >
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } text-sm`}
                >
                  <strong>Total Technologies:</strong>{" "}
                  {
                    [...new Set(projects.flatMap((project) => project.tags))]
                      .length
                  }{" "}
                  |<strong> Projects:</strong> {projects.length} |
                  <strong> Most Used:</strong>{" "}
                  {
                    // Find most common tag
                    Object.entries(
                      projects
                        .flatMap((p) => p.tags)
                        .reduce((acc, tag) => {
                          acc[tag] = (acc[tag] || 0) + 1;
                          return acc;
                        }, {} as Record<string, number>)
                    ).sort(([, a], [, b]) => b - a)[0]?.[0] || "N/A"
                  }
                </p>
              </div>
            </div>
          </section>

          {/* Goals Section */}
          <section id="goals">
            <h2 className="text-xl font-semibold mb-4 text-purple-400 scroll-mt-8">
              🎯 Goals
            </h2>
            <div className="space-y-4">
              <div
                className={`${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                } p-4 rounded-lg border-l-4 border-purple-400 w-full`}
              >
                <h3 className="font-semibold mb-2 text-base sm:text-lg">
                  Short-term Goals (2025)
                </h3>
                <ul
                  className={`list-disc list-inside ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } space-y-1`}
                >
                  <li>
                    Complete my Bachelor&apos;s degree with honors in
                    Information Technology
                  </li>
                  <li>
                    Publish research papers in software engineering conferences
                  </li>
                  <li>Contribute to 5+ open-source projects</li>
                  <li>
                    Master advanced DevOps practices and cloud architecture
                  </li>
                </ul>
              </div>

              <div
                className={`${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                } p-4 rounded-lg border-l-4 border-blue-400 w-full`}
              >
                <h3 className="font-semibold mb-2 text-base sm:text-lg">
                  Medium-term Goals (2025-2027)
                </h3>
                <ul
                  className={`list-disc list-inside ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } space-y-1`}
                >
                  <li>
                    Pursue a Master&apos;s degree or gain industry experience at
                    a tech company
                  </li>
                  <li>
                    Build and launch a SaaS product that solves real-world
                    problems
                  </li>
                  <li>
                    Become proficient in emerging technologies like AI/ML and
                    blockchain
                  </li>
                  <li>
                    Start mentoring junior developers and sharing knowledge
                    through blogging
                  </li>
                </ul>
              </div>

              <div
                className={`${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                } p-4 rounded-lg border-l-4 border-green-400 w-full`}
              >
                <h3 className="font-semibold mb-2 text-base sm:text-lg">
                  Long-term Vision (5+ years)
                </h3>
                <ul
                  className={`list-disc list-inside ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } space-y-1`}
                >
                  <li>Lead engineering teams and drive technical innovation</li>
                  <li>
                    Establish a technology startup focused on solving societal
                    challenges
                  </li>
                  <li>
                    Contribute to the Vietnamese tech ecosystem through
                    education and mentorship
                  </li>
                  <li>
                    Build scalable and impactful software solutions used by
                    millions
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Personal Touch */}
          <section
            className={`${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            } p-6 rounded-lg mt-8 w-full`}
          >
            <h3 className="font-semibold mb-3 text-purple-400 text-base sm:text-lg">
              💡 Fun Facts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } text-sm mb-2 text-base sm:text-lg`}
                >
                  <strong>Favorite Quote:</strong> &quot;If you know, you
                  know.&quot; - It&apos;s all about the journey of discovery.
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } text-sm text-base sm:text-lg`}
                >
                  <strong>When I&apos;m not coding:</strong> I enjoy reading
                  tech blogs, playing chess, and exploring new coffee shops in
                  Hanoi.
                </p>
              </div>
              <div>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } text-sm mb-2 text-base sm:text-lg`}
                >
                  <strong>Learning Philosophy:</strong> Every bug is a learning
                  opportunity, every project is a chance to grow.
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } text-sm text-base sm:text-lg`}
                >
                  <strong>Dream Project:</strong> Building an AI-powered
                  platform that helps students in Vietnam access quality
                  education.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
