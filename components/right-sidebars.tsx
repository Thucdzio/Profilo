"use client";

import { Archive, Tag, GraduationCap, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import type { Filters } from "@/hooks/use-filters";

interface SidebarProps {
  isDarkMode: boolean;
  filters?: Filters;
  onToggleYearFilter?: (year: string) => void;
  onToggleCategoryFilter?: (category: string) => void;
  onToggleTagFilter?: (tag: string) => void;
  hasActiveFilters?: boolean;
  onClearFilters?: () => void;
}

export function HomeRightSidebar({
  isDarkMode,
  filters,
  onToggleYearFilter,
  onToggleCategoryFilter,
  onToggleTagFilter,
  hasActiveFilters,
  onClearFilters,
}: SidebarProps) {
  // Calculate project counts by year
  const projectsByYear = projects.reduce((acc, project) => {
    const year = new Date(project.date).getFullYear().toString();
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Get unique categories
  const categories = [...new Set(projects.map((p) => p.category))];

  // Get all unique tags
  const allTags = [...new Set(projects.flatMap((p) => p.tags))];

  return (
    <>
      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
            className="w-full text-red-400 border-red-400 hover:bg-red-400 hover:text-white bg-transparent"
          >
            <X className="w-4 h-4 mr-2" />
            Clear All Filters
          </Button>
        </div>
      )}

      {/* Archives */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Archive className="w-5 h-5 mr-2" />
          FILTER BY YEAR
        </h3>
        <div className="space-y-2">
          {Object.entries(projectsByYear)
            .sort(([a], [b]) => Number.parseInt(b) - Number.parseInt(a))
            .map(([year, count]) => (
              <Button
                key={year}
                variant="outline"
                className={`w-full justify-between ${
                  filters?.years.includes(year)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-transparent hover:bg-gray-700"
                }`}
                onClick={() => onToggleYearFilter?.(year)}
              >
                <span>{year}</span>
                <span
                  className={`text-sm px-2 py-1 rounded ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  {count}
                </span>
              </Button>
            ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Tag className="w-5 h-5 mr-2" />
          FILTER BY CATEGORY
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className={`w-full justify-start text-sm ${
                filters?.categories.includes(category)
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-transparent hover:bg-gray-700"
              }`}
              onClick={() => onToggleCategoryFilter?.(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Tag className="w-5 h-5 mr-2" />
          FILTER BY TAGS
        </h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className={`cursor-pointer text-xs ${
                filters?.tags.includes(tag)
                  ? "bg-purple-600 text-white border-purple-600"
                  : isDarkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                  : "border-gray-400 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => onToggleTagFilter?.(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
}

export function ArchivesRightSidebar({
  isDarkMode,
  filters,
  onToggleYearFilter,
  onToggleCategoryFilter,
  onToggleTagFilter,
  hasActiveFilters,
  onClearFilters,
}: SidebarProps) {
  const projectsByYear = projects.reduce((acc, project) => {
    const year = new Date(project.date).getFullYear().toString();
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = [...new Set(projects.map((p) => p.category))];
  const allTags = [...new Set(projects.flatMap((p) => p.tags))];

  return (
    <div>
      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
            className="w-full text-red-400 border-red-400 hover:bg-red-400 hover:text-white bg-transparent"
          >
            <X className="w-4 h-4 mr-2" />
            Clear All Filters
          </Button>
        </div>
      )}

      <h3 className="text-lg font-semibold mb-4">Filter by Year</h3>
      <div className="space-y-2">
        {Object.entries(projectsByYear)
          .sort(([a], [b]) => Number.parseInt(b) - Number.parseInt(a))
          .map(([year, count]) => (
            <Button
              key={year}
              variant="outline"
              className={`w-full justify-between ${
                filters?.years.includes(year)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-transparent hover:bg-gray-700"
              }`}
              onClick={() => onToggleYearFilter?.(year)}
            >
              <span>{year}</span>
              <span>({count})</span>
            </Button>
          ))}
      </div>

      <h3 className="text-lg font-semibold mb-4 mt-8">Filter by Category</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            className={`w-full justify-start text-sm ${
              filters?.categories.includes(category)
                ? "bg-green-600 text-white border-green-600"
                : "bg-transparent hover:bg-gray-700"
            }`}
            onClick={() => onToggleCategoryFilter?.(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-4 mt-8">Filter by Tags</h3>
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className={`cursor-pointer text-xs ${
              filters?.tags.includes(tag)
                ? "bg-purple-600 text-white border-purple-600"
                : isDarkMode
                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                : "border-gray-400 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => onToggleTagFilter?.(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function ProjectDetailTableOfContents({ isDarkMode }: SidebarProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Tag className="w-5 h-5 mr-2" />
        TABLE OF CONTENTS
      </h3>
      <div className="space-y-2">
        <div
          className={`${
            isDarkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } cursor-pointer text-sm`}
        >
          1. Overview
        </div>
        <div
          className={`${
            isDarkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } cursor-pointer text-sm`}
        >
          2. Technologies Used
        </div>
        <div
          className={`${
            isDarkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } cursor-pointer text-sm`}
        >
          3. Key Features
        </div>
        <div
          className={`${
            isDarkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } cursor-pointer text-sm`}
        >
          4. Results & Impact
        </div>
      </div>
    </div>
  );
}

export function JourneyTableOfContents({ isDarkMode }: SidebarProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Tag className="w-5 h-5 mr-2" />
        TABLE OF CONTENTS
      </h3>
      <div className="space-y-2">
        <div
          className={`flex items-center ${
            isDarkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } cursor-pointer`}
        >
          <span className="mr-2">1.</span>
          <GraduationCap className="w-4 h-4 mr-2 text-purple-400" />
          <span>Education</span>
        </div>
      </div>
    </div>
  );
}

export function AboutTableOfContents({ isDarkMode }: SidebarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Tag className="w-5 h-5 mr-2" />
        TABLE OF CONTENTS
      </h3>
      <div className="space-y-2">
        <div
          className={`${
            isDarkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } cursor-pointer transition-colors hover:text-purple-400`}
          onClick={() => scrollToSection("introduction")}
        >
          1. Introduction
        </div>
        <div
          className={`${
            isDarkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } cursor-pointer transition-colors hover:text-purple-400`}
          onClick={() => scrollToSection("what-i-do")}
        >
          2. What I Do
        </div>
        <div
          className={`${
            isDarkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } cursor-pointer transition-colors hover:text-purple-400`}
          onClick={() => scrollToSection("tech-stack")}
        >
          3. Tech Stack
        </div>
        <div
          className={`${
            isDarkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          } cursor-pointer transition-colors hover:text-purple-400`}
          onClick={() => scrollToSection("goals")}
        >
          4. Goals
        </div>
      </div>
    </div>
  );
}
