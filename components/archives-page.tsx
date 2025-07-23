"use client";

import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Filters } from "@/hooks/use-filters";
import type { Project } from "@/data/projects";

interface ArchivesPageProps {
  isDarkMode: boolean;
  onProjectClick: (projectId: string) => void;
  filteredProjects: Project[];
  filters: Filters;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

export default function ArchivesPage({
  isDarkMode,
  onProjectClick,
  filteredProjects,
  filters,
  hasActiveFilters,
  onClearFilters,
}: ArchivesPageProps) {
  // Group projects by year
  const projectsByYear = filteredProjects.reduce((acc, project) => {
    const year = new Date(project.date).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  // Sort years in descending order
  const sortedYears = Object.keys(projectsByYear).sort(
    (a, b) => Number.parseInt(b) - Number.parseInt(a)
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Personal Project":
        return "border-green-400";
      case "MLOps":
        return "border-blue-400";
      case "Backend":
        return "border-purple-400";
      case "Frontend":
        return "border-orange-400";
      case "Database":
        return "border-red-400";
      default:
        return "border-gray-400";
    }
  };

  return (
    <div className="max-w-4xl">
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        } rounded-lg p-8`}
      >
        <h1 className="text-3xl font-bold mb-6">Project Archives</h1>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div
            className={`${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
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

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } text-lg mb-4`}
            >
              No projects found matching your filters.
            </p>
            <Button variant="outline" onClick={onClearFilters}>
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {sortedYears.map((year) => (
              <section key={year}>
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                  {year} ({projectsByYear[year].length})
                </h2>
                <div className="space-y-4">
                  {projectsByYear[year].map((project) => (
                    <article
                      key={project.id}
                      className={`border-l-4 ${getCategoryColor(
                        project.category
                      )} pl-4 cursor-pointer hover:bg-gray-700/20 p-3 rounded-r-lg transition-colors`}
                      onClick={() => onProjectClick(project.id)}
                    >
                      <h3 className="font-semibold mb-2 hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p
                        className={`${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        } text-sm mb-2`}
                      >
                        {project.date} {project.category}
                      </p>
                      <p
                        className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        } mb-2`}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-2 py-1 rounded ${
                              isDarkMode
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 5 && (
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              isDarkMode
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            +{project.tags.length - 5}
                          </span>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
