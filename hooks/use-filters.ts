"use client"

import { useState, useMemo } from "react"
import { projects } from "@/data/projects"

export interface Filters {
  years: string[]
  categories: string[]
  tags: string[]
}

export function useFilters() {
  const [filters, setFilters] = useState<Filters>({
    years: [],
    categories: [],
    tags: [],
  })

  const toggleYearFilter = (year: string) => {
    setFilters((prev) => ({
      ...prev,
      years: prev.years.includes(year) ? prev.years.filter((y) => y !== year) : [...prev.years, year],
    }))
  }

  const toggleCategoryFilter = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }))
  }

  const toggleTagFilter = (tag: string) => {
    setFilters((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag) ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag],
    }))
  }

  const clearAllFilters = () => {
    setFilters({
      years: [],
      categories: [],
      tags: [],
    })
  }

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Filter by year
      if (filters.years.length > 0) {
        const projectYear = new Date(project.date).getFullYear().toString()
        if (!filters.years.includes(projectYear)) {
          return false
        }
      }

      // Filter by category
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(project.category)) {
          return false
        }
      }

      // Filter by tags
      if (filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some((tag) => project.tags.includes(tag))
        if (!hasMatchingTag) {
          return false
        }
      }

      return true
    })
  }, [filters])

  const hasActiveFilters = filters.years.length > 0 || filters.categories.length > 0 || filters.tags.length > 0

  return {
    filters,
    filteredProjects,
    hasActiveFilters,
    toggleYearFilter,
    toggleCategoryFilter,
    toggleTagFilter,
    clearAllFilters,
  }
}
