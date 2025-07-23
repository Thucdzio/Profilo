import type { CVData } from "@/data/cv-data"

export async function generateCVPDF(cvData: CVData): Promise<void> {
  try {
    // Dynamically import jsPDF
    const { jsPDF } = await import("jspdf")

    // Create new PDF document
    const doc = new jsPDF()

    // Set font
    doc.setFont("helvetica")

    // Header
    doc.setFontSize(24)
    doc.setTextColor(40, 40, 40)
    doc.text(cvData.personalInfo.name, 20, 30)

    doc.setFontSize(12)
    doc.setTextColor(100, 100, 100)
    doc.text(cvData.personalInfo.website, 20, 40)
    doc.text(`Email: ${cvData.personalInfo.email}`, 20, 50)
    doc.text(`Mobile: ${cvData.personalInfo.mobile}`, 20, 60)

    // Education Section
    doc.setFontSize(16)
    doc.setTextColor(40, 40, 40)
    doc.text("EDUCATION", 20, 80)

    doc.setFontSize(12)
    doc.setTextColor(60, 60, 60)
    doc.text(cvData.education.institution, 20, 95)
    doc.text(`• ${cvData.education.degree}; GPA: ${cvData.education.gpa}`, 25, 105)
    doc.text(cvData.education.duration, 25, 115)

    // Projects Section
    doc.setFontSize(16)
    doc.setTextColor(40, 40, 40)
    doc.text("PROJECTS", 20, 135)

    doc.setFontSize(12)
    doc.setTextColor(60, 60, 60)

    let yPosition = 150
    cvData.projects.forEach((project) => {
      // Project title and description
      const titleText = `• ${project.title}:`
      doc.text(titleText, 25, yPosition)

      // Split long descriptions into multiple lines
      const descriptionLines = doc.splitTextToSize(`  ${project.description}`, 160)
      doc.text(descriptionLines, 25, yPosition + 10)

      // GitHub URL
      doc.text(`  ${project.githubUrl}`, 25, yPosition + 10 + descriptionLines.length * 10)

      yPosition += 30 + descriptionLines.length * 10
    })

    // Add new page if needed
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 30
    }

    // Knowledge Section
    doc.setFontSize(16)
    doc.setTextColor(40, 40, 40)
    doc.text("KNOWLEDGE", 20, yPosition)

    doc.setFontSize(12)
    doc.setTextColor(60, 60, 60)
    yPosition += 20

    cvData.knowledge.forEach((item) => {
      const lines = doc.splitTextToSize(`• ${item}`, 160)
      doc.text(lines, 25, yPosition)
      yPosition += lines.length * 10 + 5
    })

    // Programming Skills Section
    yPosition += 10
    doc.setFontSize(16)
    doc.setTextColor(40, 40, 40)
    doc.text("PROGRAMMING SKILLS", 20, yPosition)

    doc.setFontSize(12)
    doc.setTextColor(60, 60, 60)
    yPosition += 20

    doc.text(`• Languages: ${cvData.programmingSkills.languages.join(", ")}`, 25, yPosition)
    doc.text(`• Technologies: ${cvData.programmingSkills.technologies.join(", ")}`, 25, yPosition + 15)

    // Footer
    doc.setFontSize(10)
    doc.setTextColor(150, 150, 150)
    doc.text("Generated on " + new Date().toLocaleDateString(), 20, 280)

    // Save the PDF
    doc.save("Le_Tien_Thuc_CV.pdf")
  } catch (error) {
    console.error("Error generating PDF:", error)
    throw error
  }
}

export async function downloadPreGeneratedCV(): Promise<void> {
  try {
    // Try to download pre-generated PDF first
    const response = await fetch("/cv/Le_Tien_Thuc_CV.pdf")

    if (response.ok) {
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Le_Tien_Thuc_CV.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } else {
      throw new Error("Pre-generated PDF not found")
    }
  } catch (error) {
    console.error("Error downloading pre-generated CV:", error)
    throw error
  }
}
