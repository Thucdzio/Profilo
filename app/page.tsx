"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Home,
  Archive,
  User,
  MapPin,
  Moon,
  Sun,
  Mail,
  FileUser,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HomePage from "@/components/home-page";
import JourneyPage from "@/components/journey-page";
import AboutMePage from "@/components/about-me-page";
import ArchivesPage from "@/components/archives-page";
import ProjectDetailPage from "@/components/project-detail-page";
import { getProjectById } from "@/data/projects";
import { useFilters } from "@/hooks/use-filters";
import {
  HomeRightSidebar,
  ProjectDetailTableOfContents,
  JourneyTableOfContents,
  AboutTableOfContents,
  ArchivesRightSidebar,
} from "@/components/right-sidebars";

export default function PersonalPortfolio() {
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState("home");
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [previousPage, setPreviousPage] = useState("home");
  const [isInitialized, setIsInitialized] = useState(false);

  // Use filters hook
  const {
    filters,
    filteredProjects,
    hasActiveFilters,
    toggleYearFilter,
    toggleCategoryFilter,
    toggleTagFilter,
    clearAllFilters,
  } = useFilters();

  // Đọc URL parameters khi component mount
  useEffect(() => {
    const page = searchParams.get("page") || "home";
    const projectId = searchParams.get("project");
    const from = searchParams.get("from") || "home";

    if (projectId) {
      setCurrentPage("project-detail");
      setCurrentProjectId(projectId);
      setPreviousPage(from);
    } else {
      setCurrentPage(page);
      setCurrentProjectId(null);
      setPreviousPage(page);
    }

    setIsInitialized(true);
  }, [searchParams]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const updateURL = (page: string, projectId?: string, from?: string) => {
    const params = new URLSearchParams();

    if (projectId) {
      params.set("project", projectId);
      if (from) params.set("from", from);
    } else if (page !== "home") {
      params.set("page", page);
    }

    const url = params.toString() ? `?${params.toString()}` : "/";

    // Sử dụng window.history thay vì router.push để tránh re-render
    window.history.pushState({}, "", url);
  };

  const handleProjectClick = (projectId: string) => {
    const fromPage = currentPage;
    setPreviousPage(fromPage);
    setCurrentProjectId(projectId);
    setCurrentPage("project-detail");
    updateURL("project-detail", projectId, fromPage);
  };

  const handleBackToHome = () => {
    setCurrentProjectId(null);
    setCurrentPage(previousPage);
    updateURL(previousPage);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setCurrentProjectId(null);
    setPreviousPage(page);
    updateURL(page);
  };

  const handleDownloadCV = () => {
    window.open("/cv/ThucResume-1.pdf", "_blank");
  };

  // Không render cho đến khi initialized để tránh flash
  if (!isInitialized) {
    return (
      <div
        className={`min-h-screen ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } flex items-center justify-center`}
      >
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>
      </div>
    );
  }

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            isDarkMode={isDarkMode}
            onProjectClick={handleProjectClick}
            filteredProjects={filteredProjects}
            filters={filters}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={clearAllFilters}
          />
        );
      case "archives":
        return (
          <ArchivesPage
            isDarkMode={isDarkMode}
            onProjectClick={handleProjectClick}
            filteredProjects={filteredProjects}
            filters={filters}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={clearAllFilters}
          />
        );
      case "about":
        return <AboutMePage isDarkMode={isDarkMode} />;
      case "journey":
        return <JourneyPage isDarkMode={isDarkMode} />;
      case "project-detail":
        const project = currentProjectId
          ? getProjectById(currentProjectId)
          : null;
        const getPageDisplayName = (page: string) => {
          switch (page) {
            case "home":
              return "Home";
            case "archives":
              return "Archives";
            case "about":
              return "About Me";
            case "journey":
              return "Journey";
            default:
              return "Home";
          }
        };

        return project ? (
          <ProjectDetailPage
            project={project}
            isDarkMode={isDarkMode}
            onBack={handleBackToHome}
            previousPageName={getPageDisplayName(previousPage)}
          />
        ) : (
          <HomePage
            isDarkMode={isDarkMode}
            onProjectClick={handleProjectClick}
            filteredProjects={filteredProjects}
            filters={filters}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={clearAllFilters}
          />
        );
      default:
        return (
          <HomePage
            isDarkMode={isDarkMode}
            onProjectClick={handleProjectClick}
            filteredProjects={filteredProjects}
            filters={filters}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={clearAllFilters}
          />
        );
    }
  };

  const renderRightSidebar = () => {
    switch (currentPage) {
      case "project-detail":
        return <ProjectDetailTableOfContents isDarkMode={isDarkMode} />;
      case "journey":
        return <JourneyTableOfContents isDarkMode={isDarkMode} />;
      case "about":
        return <AboutTableOfContents isDarkMode={isDarkMode} />;
      case "archives":
        return (
          <ArchivesRightSidebar
            isDarkMode={isDarkMode}
            filters={filters}
            onToggleYearFilter={toggleYearFilter}
            onToggleCategoryFilter={toggleCategoryFilter}
            onToggleTagFilter={toggleTagFilter}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={clearAllFilters}
          />
        );
      default:
        return (
          <HomeRightSidebar
            isDarkMode={isDarkMode}
            filters={filters}
            onToggleYearFilter={toggleYearFilter}
            onToggleCategoryFilter={toggleCategoryFilter}
            onToggleTagFilter={toggleTagFilter}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={clearAllFilters}
          />
        );
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex">
        {/* Left Sidebar */}
        <div
          className={`w-64 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-50"
          } min-h-screen p-6 fixed left-0 top-0`}
        >
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image
                src="/photo.jpg"
                alt="Le Tien Thuc"
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl font-bold text-center">Le Tien Thuc</h1>
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } text-sm text-center mt-2`}
            >
              No pain,no gain.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mb-8">
            {/* GitHub */}
            <Button
              variant="ghost"
              size="sm"
              className={`focus-none ${
                isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              }`}
              asChild
            >
              <a
                href="https://github.com/Thucdzio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </Button>

            {/* LinkedIn */}
            <Button
              variant="ghost"
              size="sm"
              className={`focus-none ${
                isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              }`}
              asChild
            >
              <a
                href="https://www.linkedin.com/in/l%C3%AA-ti%E1%BA%BFn-th%E1%BB%B1c-100132192/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </Button>

            {/* Gmail */}
            <Button
              variant="ghost"
              size="sm"
              className={`focus-none ${
                isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              }`}
              asChild
            >
              <a
                href="mailto:letienthuc2004@gmail.com"
                aria-label="Email"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </Button>

            {/* CV Download */}
            <Button
              variant="ghost"
              size="sm"
              className={`focus-none ${
                isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              }`}
              onClick={handleDownloadCV}
              aria-label="CV"
              title="CV"
            >
              <FileUser className="w-4 h-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <Button
              variant="ghost"
              className={`w-full justify-start transition-colors font-medium focus-none ${
                currentPage === "home" ||
                (currentPage === "project-detail" && previousPage === "home")
                  ? isDarkMode
                    ? "text-white bg-gray-600 border border-gray-500"
                    : "text-gray-900 bg-gray-200 border border-gray-300 shadow-sm"
                  : isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => handlePageChange("home")}
            >
              <Home className="w-4 h-4 mr-3" />
              Home
            </Button>
            <Button
              variant="ghost"
              className={`w-full justify-start transition-colors font-medium focus-none ${
                currentPage === "archives" ||
                (currentPage === "project-detail" &&
                  previousPage === "archives")
                  ? isDarkMode
                    ? "text-white bg-gray-600 border border-gray-500"
                    : "text-gray-900 bg-gray-200 border border-gray-300 shadow-sm"
                  : isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => handlePageChange("archives")}
            >
              <Archive className="w-4 h-4 mr-3" />
              Archives
            </Button>
            <Button
              variant="ghost"
              className={`w-full justify-start transition-colors font-medium focus-none ${
                currentPage === "about" ||
                (currentPage === "project-detail" && previousPage === "about")
                  ? isDarkMode
                    ? "text-white bg-gray-600 border border-gray-500"
                    : "text-gray-900 bg-gray-200 border border-gray-300 shadow-sm"
                  : isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => handlePageChange("about")}
            >
              <User className="w-4 h-4 mr-3" />
              About Me
            </Button>
            <Button
              variant="ghost"
              className={`w-full justify-start transition-colors font-medium focus-none ${
                currentPage === "journey" ||
                (currentPage === "project-detail" && previousPage === "journey")
                  ? isDarkMode
                    ? "text-white bg-gray-600 border border-gray-500"
                    : "text-gray-900 bg-gray-200 border border-gray-300 shadow-sm"
                  : isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => handlePageChange("journey")}
            >
              <MapPin className="w-4 h-4 mr-3" />
              Journey
            </Button>
          </nav>

          {/* Dark Mode Toggle */}
          <div className="absolute bottom-6 left-6">
            <Button
              variant="ghost"
              size="sm"
              className={`focus-none ${
                isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <Moon className="w-4 h-4 mr-2" />
              ) : (
                <Sun className="w-4 h-4 mr-2" />
              )}
              {isDarkMode ? "Dark Mode" : "Light Mode"}
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 mr-80 p-8">
          <div className="transition-opacity duration-200">
            {renderContent()}
          </div>
        </div>

        {/* Right Sidebar - Hidden scrollbar */}
        <div
          className={`hidden md:block w-80 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-50"
          } h-screen fixed right-0 top-0 overflow-y-auto scrollbar-hide`}
          style={{
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE and Edge */,
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none; /* Chrome, Safari, Opera */
            }
          `}</style>
          <div className="p-6">
            <div className="transition-opacity duration-200">
              {renderRightSidebar()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
