"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Zap, Calendar, Users, Smartphone, TrendingUp, ShoppingCart, Car, Dumbbell, Code2 } from "lucide-react"
import { useState, useEffect } from "react"

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Function to generate animated project images based on title
  const getProjectImage = (title: string) => {
    const titleLower = title.toLowerCase()
    
    if (titleLower.includes('race') || titleLower.includes('event')) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-yellow-500/20" />
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center animate-pulse">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-200" />
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-400" />
            </div>
          </div>
        </div>
      )
    }
    
    if (titleLower.includes('organization') || titleLower.includes('management')) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20" />
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center animate-pulse">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200" />
            </div>
          </div>
        </div>
      )
    }
    
    if (titleLower.includes('attendance') || titleLower.includes('mobile')) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20" />
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-200" />
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-400" />
            </div>
          </div>
        </div>
      )
    }
    
    if (titleLower.includes('securities') || titleLower.includes('trading')) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20" />
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce delay-200" />
            </div>
          </div>
        </div>
      )
    }
    
    if (titleLower.includes('rewards') || titleLower.includes('mobile app')) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-rose-500/20 to-purple-500/20" />
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce delay-200" />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-400" />
            </div>
          </div>
        </div>
      )
    }
    
    if (titleLower.includes('e-commerce') || titleLower.includes('shopaholic')) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20" />
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200" />
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-400" />
            </div>
          </div>
        </div>
      )
    }
    
    if (titleLower.includes('car') || titleLower.includes('simulation')) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-slate-500/20 to-zinc-500/20" />
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-500 rounded-full flex items-center justify-center animate-pulse">
              <Car className="w-8 h-8 text-white" />
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200" />
              <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce delay-400" />
            </div>
          </div>
        </div>
      )
    }
    
    if (titleLower.includes('fitness') || titleLower.includes('health')) {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 via-green-500/20 to-emerald-500/20" />
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-500 rounded-full flex items-center justify-center animate-pulse">
              <Dumbbell className="w-8 h-8 text-white" />
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200" />
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-400" />
            </div>
          </div>
        </div>
      )
    }
    
    // Default fallback for any other projects
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
        <div className="relative z-10 flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200" />
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-400" />
          </div>
        </div>
      </div>
    )
  }
  const projects = [
    {
      title: "Race Event Management System",
      description: "A full-stack race event management solution built with C# .NET, featuring real-time inventory management, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["C# .NET", "MSSQL"],
      liveUrl: "https://bibgen.longruntimings.com/",
      // githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "Prosera Organization Management System",
      description: "A collaborative organization management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Node.js", "Socket.io", "PostgreSQL", "Shadcn UI", "Tailwind CSS"],
      liveUrl: "https://prosera.io/",
      // githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "Attendance Management System Using Mobile App",
      description: "A responsive attendance management system with location-based forecasts, interactive maps, and historical data visualization.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Firebase", "HTML", "CSS", "JavaScript"],
      // liveUrl: "https://example.com",
      githubUrl: "https://github.com/mohammed558/Attendance-Management-System-Using-Mobile-Biometric-Technology",
      featured: false
    },
    {
      title: "Rabee Securities",
      description: "Rabee Securities is a stock trading platform that allows users to buy and sell stocks online.",
      image: "/api/placeholder/600/400",
      technologies: ["C# .NET", "MSSQL", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://rs.iq/",
      // githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Into Rewards Mobile App API Integration",
      description: "Into Rewards is a mobile app that allows users to earn rewards by referring friends to buy the product.",
      image: "/api/placeholder/600/400",
      technologies: ["C# .NET", "MSSQL", "ASP.NET", "JWT"],
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Shopaholic E-Commerce Platform",
      description: "Shopaholic is a e-commerce platform that allows users to buy and sell products online.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Paypal", "MongoDB", "Tailwind CSS"],
      // liveUrl: "https://shopaholic.com/",
      // githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "3D Car Simulation Using Computer Graphics",
      description: "3D Car Simulation Using Computer Graphics is a project that allows users to simulate a car driving in a 3D environment.",
      image: "/api/placeholder/600/400",
      technologies: ["C++", "OpenGL", "GLUT", "C"],
      // liveUrl: "https://shopaholic.com/",
      githubUrl: "https://github.com/mohammed558/3D-Car-Simulation-Using-Computer-Graphics-",
      featured: false
    },
    {
      title: "Fast and Fitness Android App",
      description: "Fast and Fitness is a android app that allows users to track their fitness and health.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "MIT App Inventor", "XML", "Firebase"],
      // liveUrl: "https://shopaholic.com/",
      githubUrl: "https://github.com/mohammed558/Fast-and-Fitness-Android-App",
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="6"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>
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
              <div className="aspect-video relative overflow-hidden">
                {getProjectImage(project.title)}
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
                  {project.liveUrl && (
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300 group" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Other Projects */}
        <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-200/50 text-sm font-medium text-green-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
              More Projects
            </div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-teal-800 bg-clip-text text-transparent">
              Other Projects
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-md hover:scale-105">
                <div className="aspect-video relative overflow-hidden">
                  {getProjectImage(project.title)}
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
                    {project.liveUrl && (
                      <Button size="sm" variant="ghost" className="hover:bg-green-50 hover:text-green-600 transition-all duration-300 group" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 group-hover:animate-bounce" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="ghost" className="hover:bg-green-50 hover:text-green-600 transition-all duration-300 group" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 group-hover:animate-pulse" />
                        </a>
                      </Button>
                    )}
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
