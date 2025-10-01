"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Database, Smartphone, Globe, Zap, Star, Award, Users, Coffee } from "lucide-react"
import { useState, useEffect } from "react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: "Frontend Development", icon: Code, description: "React, Next.js, TypeScript", color: "blue" },
    { name: "UI/UX Design", icon: Palette, description: "Figma, Adobe Creative Suite", color: "purple" },
    { name: "Backend Development", icon: Database, description: "Node.js, Python, PostgreSQL", color: "green" },
    { name: "Mobile Development", icon: Smartphone, description: "React Native, Flutter", color: "orange" },
    { name: "Web Technologies", icon: Globe, description: "HTML, CSS, JavaScript", color: "cyan" },
    { name: "Performance", icon: Zap, description: "Optimization, SEO, Analytics", color: "yellow" },
  ]

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "Tailwind CSS", "Figma", "Git", "Docker"
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-200/20 rounded-full blur-lg animate-pulse delay-500" />
      <div className="container relative z-10">
        <div className={`text-center space-y-4 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 text-sm font-medium text-blue-700 mb-4">
            <Star className="w-4 h-4 mr-2" />
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Passionate Developer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Creating exceptional digital experiences with modern technologies and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced About Text */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Coffee className="w-6 h-6 text-blue-600" />
                Hello! I'm Mohammed Arshad
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. I specialize in modern web technologies 
                and have a keen eye for design and user experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="text-3xl font-bold text-blue-600 group-hover:animate-pulse">50+</div>
                <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="text-3xl font-bold text-purple-600 group-hover:animate-pulse">5+</div>
                <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Enhanced Skills Grid */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {skills.map((skill, index) => {
              const Icon = skill.icon
              const colorClasses = {
                blue: "text-blue-600 bg-blue-50 hover:bg-blue-100",
                purple: "text-purple-600 bg-purple-50 hover:bg-purple-100",
                green: "text-green-600 bg-green-50 hover:bg-green-100",
                orange: "text-orange-600 bg-orange-50 hover:bg-orange-100",
                cyan: "text-cyan-600 bg-cyan-50 hover:bg-cyan-100",
                yellow: "text-yellow-600 bg-yellow-50 hover:bg-yellow-100"
              }
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 group bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-lg ${colorClasses[skill.color as keyof typeof colorClasses]}`}>
                        <Icon className="h-5 w-5 group-hover:animate-pulse" />
                      </div>
                      <CardTitle className="text-sm font-semibold">{skill.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs text-muted-foreground">
                      {skill.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Skills Showcase - Card Design */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200/50 text-sm font-medium text-indigo-700 mb-4">
              <Award className="w-4 h-4 mr-2" />
              Skills Showcase
            </div>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
              My Technical Expertise
            </h3>
          </div>
          
          {/* Skills Cards Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  name: "C# .NET", 
                  category: "Backend",
                  description: "Enterprise applications, APIs, and microservices",
                  color: "from-purple-500 to-purple-600",
                  bgColor: "from-purple-50 to-purple-100",
                  icon: "🔷"
                },
                { 
                  name: "Next.js", 
                  category: "Frontend",
                  description: "Full-stack React applications with SSR",
                  color: "from-blue-600 to-blue-700",
                  bgColor: "from-blue-50 to-blue-100",
                  icon: "▲"
                },
                { 
                  name: "React.js", 
                  category: "Frontend",
                  description: "Modern UI components and state management",
                  color: "from-blue-500 to-blue-600",
                  bgColor: "from-blue-50 to-blue-100",
                  icon: "⚛️"
                },
                { 
                  name: "JavaScript", 
                  category: "Language",
                  description: "ES6+, DOM manipulation, and modern features",
                  color: "from-yellow-500 to-yellow-600",
                  bgColor: "from-yellow-50 to-yellow-100",
                  icon: "🟨"
                },
                { 
                  name: "CSS", 
                  category: "Styling",
                  description: "Responsive design and modern CSS features",
                  color: "from-blue-400 to-blue-500",
                  bgColor: "from-blue-50 to-blue-100",
                  icon: "🎨"
                },
                { 
                  name: "HTML", 
                  category: "Markup",
                  description: "Semantic markup and accessibility",
                  color: "from-orange-500 to-orange-600",
                  bgColor: "from-orange-50 to-orange-100",
                  icon: "🌐"
                },
                { 
                  name: "TailwindCSS", 
                  category: "Framework",
                  description: "Utility-first CSS framework",
                  color: "from-cyan-500 to-blue-500",
                  bgColor: "from-cyan-50 to-blue-100",
                  icon: "💨"
                },
                { 
                  name: "ShadCN", 
                  category: "UI Library",
                  description: "Modern component library",
                  color: "from-gray-500 to-gray-600",
                  bgColor: "from-gray-50 to-gray-100",
                  icon: "🧩"
                },
                { 
                  name: "MSSQL", 
                  category: "Database",
                  description: "Microsoft SQL Server management",
                  color: "from-blue-700 to-blue-800",
                  bgColor: "from-blue-50 to-blue-100",
                  icon: "🗄️"
                },
                { 
                  name: "MySQL", 
                  category: "Database",
                  description: "Open-source relational database",
                  color: "from-orange-400 to-orange-500",
                  bgColor: "from-orange-50 to-orange-100",
                  icon: "🐬"
                },
                { 
                  name: "PostgreSQL", 
                  category: "Database",
                  description: "Advanced open-source database",
                  color: "from-indigo-500 to-indigo-700",
                  bgColor: "from-indigo-50 to-indigo-100",
                  icon: "🐘"
                },
                { 
                  name: "Java", 
                  category: "Language",
                  description: "Object-oriented programming",
                  color: "from-red-500 to-red-600",
                  bgColor: "from-red-50 to-red-100",
                  icon: "☕"
                }
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className={`group relative bg-gradient-to-br ${skill.bgColor} backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50`}
                  style={{
                    animation: isVisible ? `fadeIn 0.8s ease-out ${index * 0.1}s both` : 'none'
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{skill.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors mb-2">
                        {skill.name}
                      </h4>
                      <span className="text-sm font-medium text-gray-500 bg-white/70 px-3 py-1 rounded-full">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Corner Decoration */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
            
            {/* Additional Skills Row */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  name: "VS Code", 
                  category: "Tools",
                  description: "Code Editor",
                  color: "from-blue-500 to-blue-600",
                  bgColor: "from-blue-50 to-blue-100",
                  icon: "💻"
                },
                { 
                  name: "Git", 
                  category: "Version Control",
                  description: "Version Control",
                  color: "from-orange-500 to-orange-600",
                  bgColor: "from-orange-50 to-orange-100",
                  icon: "📦"
                },
                { 
                  name: "API Development", 
                  category: "Development",
                  description: "REST & GraphQL",
                  color: "from-green-500 to-green-600",
                  bgColor: "from-green-50 to-green-100",
                  icon: "🔌"
                },
                { 
                  name: "Full Stack", 
                  category: "Development",
                  description: "End-to-End Development",
                  color: "from-purple-500 to-purple-600",
                  bgColor: "from-purple-50 to-purple-100",
                  icon: "🚀"
                }
              ].map((skill, index) => (
                <div 
                  key={index}
                  className={`group relative bg-gradient-to-br ${skill.bgColor} backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/50`}
                  style={{
                    animation: isVisible ? `fadeIn 0.8s ease-out ${(index + 12) * 0.1}s both` : 'none'
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{skill.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors mb-2">
                        {skill.name}
                      </h4>
                      <span className="text-sm font-medium text-gray-500 bg-white/70 px-3 py-1 rounded-full">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Corner Decoration */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
