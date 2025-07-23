"use client";

import { Calendar, Clock, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Filters } from "@/hooks/use-filters";
import type { Project } from "@/data/projects";

interface HomePageProps {
  isDarkMode: boolean;
  onProjectClick: (projectId: string) => void;
  filteredProjects: Project[];
  filters: Filters;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

export default function HomePage({
  isDarkMode,
  onProjectClick,
  filteredProjects,
  filters,
  hasActiveFilters,
  onClearFilters,
}: HomePageProps) {
  // Get the latest projects for display (filtered or all)
  const featuredProjects = filteredProjects.slice(
    0,
    hasActiveFilters ? filteredProjects.length : 3
  );

  return (
    <div className="max-w-4xl w-full mx-auto px-2 sm:px-4">
      {/* Hero Banner */}
      <div className="h-48 sm:h-64 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-lg mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-purple-600/20 to-orange-400/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl opacity-90">
              Below are some of the projects I have participated in or developed
            </p>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          } rounded-lg p-4 mb-6`}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Active Filters:</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-red-400 hover:text-red-300"
            >
              <X className="w-4 h-4 mr-1" />
              Clear All
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.years.map((year) => (
              <Badge
                key={year}
                variant="secondary"
                className="bg-blue-600 text-white"
              >
                Year: {year}
              </Badge>
            ))}
            {filters.categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="bg-green-600 text-white"
              >
                {category}
              </Badge>
            ))}
            {filters.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-purple-600 text-white"
              >
                #{tag}
              </Badge>
            ))}
          </div>
          <p
            className={`text-sm mt-2 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Showing {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}

      {/* Featured Projects */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">
          {hasActiveFilters ? "Filtered Projects" : "Featured Projects"}
        </h2>

        {featuredProjects.length === 0 ? (
          <div
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-gray-100"
            } rounded-lg p-8 text-center`}
          >
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } text-lg`}
            >
              No projects found matching your filters.
            </p>
            <Button
              variant="outline"
              onClick={onClearFilters}
              className="mt-4 bg-transparent"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className={`${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-gray-100 hover:bg-gray-50"
                } rounded-lg p-4 sm:p-6 cursor-pointer transition-colors duration-200`}
                onClick={() => onProjectClick(project.id)}
              >
                <Badge
                  className={`mb-4 ${
                    project.category === "Personal Project"
                      ? "bg-green-600 hover:bg-green-700"
                      : project.category === "MLOps"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : project.category === "Backend"
                      ? "bg-purple-600 hover:bg-purple-700"
                      : project.category === "Frontend"
                      ? "bg-orange-600 hover:bg-orange-700"
                      : "bg-gray-600 hover:bg-gray-700"
                  }`}
                >
                  {project.category}
                </Badge>

                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } mb-2 sm:mb-4 leading-relaxed`}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-2 sm:mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={`${
                        isDarkMode
                          ? "border-gray-600 text-gray-400"
                          : "border-gray-400 text-gray-600"
                      } text-xs`}
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge
                      variant="outline"
                      className={`${
                        isDarkMode
                          ? "border-gray-600 text-gray-400"
                          : "border-gray-400 text-gray-600"
                      } text-xs`}
                    >
                      +{project.tags.length - 4} more
                    </Badge>
                  )}
                </div>

                <div
                  className={`flex items-center ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  } text-sm space-x-4`}
                >
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {project.readTime}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Recent Activity - Only show if no filters */}
      {!hasActiveFilters && (
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          } rounded-lg p-6`}
        >
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div
              className={`flex items-center ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              <span className="text-sm">
                Published new project: {filteredProjects[0]?.title}
              </span>
            </div>
            <div
              className={`flex items-center ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-sm">
                Updated documentation for ML deployment project
              </span>
            </div>
            <div
              className={`flex items-center ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
              <span className="text-sm">
                Started research on microservices architecture
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
