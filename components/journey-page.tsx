import { Clock, GraduationCap } from "lucide-react";

interface JourneyPageProps {
  isDarkMode: boolean;
}

export default function JourneyPage({ isDarkMode }: JourneyPageProps) {
  return (
    <div className="max-w-4xl w-full mx-auto px-2 sm:px-4">
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        } rounded-lg p-4 sm:p-8`}
      >
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
            Journey
          </h1>
          <div
            className={`flex items-center ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            } text-xs sm:text-sm`}
          >
            <Clock className="w-4 h-4 mr-1" />1 minute read
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-purple-400" />
              Education
            </h2>

            <div className="space-y-2 sm:space-y-4 ml-3 sm:ml-7">
              <div
                className={`border-l-2 ${
                  isDarkMode ? "border-gray-600" : "border-gray-300"
                } pl-3 sm:pl-6 pb-2 sm:pb-4`}
              >
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-purple-400 rounded-full -ml-8 mt-2"></div>
                  <div className="ml-4">
                    <p
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <strong>October 2022 – Present:</strong> Student at
                      University of Engineering and Technology, Vietnam National
                      University, Hanoi, majoring in{" "}
                      <strong>Information Technology</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`border-l-2 ${
                  isDarkMode ? "border-gray-600" : "border-gray-300"
                } pl-6`}
              >
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-purple-400 rounded-full -ml-8 mt-2"></div>
                  <div className="ml-4">
                    <p
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <strong>June 2024 :</strong> Student at Laboratory for the
                      Department of Software Engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className={`mt-12 pt-6 border-t ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <p
            className={`${
              isDarkMode ? "text-gray-500" : "text-gray-400"
            } text-sm`}
          >
            LICENSED UNDER CC BY-NC-SA 4.0
          </p>
        </div>
      </div>

      <footer
        className={`mt-8 ${
          isDarkMode ? "text-gray-500" : "text-gray-400"
        } text-sm`}
      >
        <p>© 2020 - 2025 Le Tien Thuc</p>
        <p>Built with Hugo</p>
        <p>Theme Stack designed by Jimmy</p>
      </footer>
    </div>
  );
}
