"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Sparkles, Rocket, Zap } from "lucide-react"
import { useState, useEffect } from "react"

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive maps, and historical data visualization.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with user authentication, file sharing, and message encryption for secure communication.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Socket.io", "Express", "JWT", "Multer"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics dashboard with data visualization, custom reports, and real-time monitoring capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-indigo-200/20 rounded-full blur-lg animate-pulse delay-500" />
      
      <div className="container relative z-10">
        <div className={`text-center space-y-4 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200/50 text-sm font-medium text-purple-700 mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work and personal projects that demonstrate my skills and passion
          </p>
        </div>

        {/* Enhanced Featured Projects */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
                <div className="text-4xl font-bold text-muted-foreground/80 flex items-center gap-2">
                  <Rocket className="w-8 h-8 text-blue-600 animate-bounce" />
                  Project Image
                </div>
                <div className="absolute top-4 right-4">
                  <Star className="w-6 h-6 text-yellow-500 animate-pulse" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300 group" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Other Projects */}
        <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-200/50 text-sm font-medium text-green-700 mb-4">
              <Star className="w-4 h-4 mr-2" />
              More Projects
            </div>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 via-green-800 to-teal-800 bg-clip-text text-transparent">
              Other Projects
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-md hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-green-500/20 via-teal-500/20 to-cyan-500/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-teal-600/10" />
                  <div className="text-2xl font-bold text-muted-foreground/80 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-green-600 animate-pulse" />
                    Project
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-green-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200 hover:bg-green-100 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="hover:bg-green-50 hover:text-green-600 transition-all duration-300 group" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 group-hover:animate-bounce" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" className="hover:bg-green-50 hover:text-green-600 transition-all duration-300 group" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 group-hover:animate-pulse" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
