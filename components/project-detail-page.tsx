"use client";

import { Calendar, Clock, Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { useEffect } from "react";
import Image from "next/image";

// Helper function to check if URL is an image
const isImageUrl = (url: string): boolean => {
  const imageExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".webp",
    ".svg",
    ".bmp",
    ".ico",
  ];
  const urlLower = url.toLowerCase();
  return imageExtensions.some((ext) => urlLower.includes(ext));
};

interface ProjectDetailPageProps {
  project: Project;
  isDarkMode: boolean;
  onBack: () => void;
  previousPageName?: string;
}

export default function ProjectDetailPage({
  project,
  isDarkMode,
  onBack,
  previousPageName = "Home",
}: ProjectDetailPageProps) {
  // Cập nhật document title
  useEffect(() => {
    document.title = `${project.title} - Le Tien Thuc`;
    return () => {
      document.title = "Le Tien Thuc - Portfolio";
    };
  }, [project.title]);

  return (
    <div className="max-w-4xl w-full mx-auto px-2 sm:px-4">
      <Button
        variant="ghost"
        onClick={onBack}
        className={`mb-6 focus-none ${
          isDarkMode
            ? "text-gray-400 hover:text-white"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to {previousPageName}
      </Button>

      <article
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        } rounded-lg p-4 sm:p-8`}
      >
        {/* Header */}
        <div className="mb-8">
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
                : project.category === "Mobile Application"
                ? "bg-pink-600 hover:bg-pink-700"
                : project.category === "Web Application"
                ? "bg-cyan-600 hover:bg-cyan-700"
                : project.category === "Desktop Application"
                ? "bg-indigo-600 hover:bg-indigo-700"
                : project.category === "Game Development"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
          >
            {project.category}
          </Badge>

          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

          <div
            className={`flex items-center ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            } text-sm space-x-4 mb-6`}
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

          {/* Action Buttons */}
          <div className="flex space-x-4 mb-6">
            {project.githubUrl && (
              <Button
                variant="outline"
                asChild
                className="focus-none bg-transparent"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
            {project.demoUrl && !isImageUrl(project.demoUrl) && (
              <Button
                variant="outline"
                asChild
                className="focus-none bg-transparent"
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </a>
              </Button>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={`${
                  isDarkMode
                    ? "border-gray-600 text-gray-300"
                    : "border-gray-400 text-gray-600"
                }`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">
              📋 Overview
            </h2>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed text-base sm:text-lg`}
            >
              {project.fullDescription}
            </p>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">
              🛠️ Technologies Used
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className={`${
                    isDarkMode ? "bg-gray-700" : "bg-gray-200"
                  } p-3 rounded-lg text-center font-medium`}
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">
              ⚡ Key Features
            </h2>
            <ul
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } space-y-3`}
            >
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">
              🚀 Results & Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className={`${
                    isDarkMode ? "bg-gray-700" : "bg-gray-200"
                  } p-4 rounded-lg border-l-4 border-green-400`}
                >
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Demo Section - Only show if demoUrl is an image, and place at the end */}
          {project.demoUrl && isImageUrl(project.demoUrl) && (
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                🎯 Demo
              </h2>
              <div className="rounded-lg overflow-hidden border border-gray-600">
                <Image
                  src={project.demoUrl || "/placeholder.svg"}
                  alt={`${project.title} demo`}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>
          )}
        </div>
      </article>
    </div>
  );
}
