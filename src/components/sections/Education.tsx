"use client"

import { useState, useEffect } from "react"
import { GraduationCap, Briefcase, Star, Award, Calendar, MapPin, Building } from "lucide-react"

const Education = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('education')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const educationData = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      institution: "University",
      year: "2020 - 2024",
      location: "India",
      icon: "🎓",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      degree: "Diploma",
      field: "Computer Science",
      institution: "Technical Institute",
      year: "2018 - 2020",
      location: "India",
      icon: "📜",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      degree: "10th Standard",
      field: "General Education",
      institution: "School",
      year: "2017 - 2018",
      location: "India",
      icon: "📚",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    }
  ]

  const experienceData = [
    {
      company: "Star-Knowledge",
      position: "Software Developer",
      duration: "2024 - Present",
      location: "Remote",
      description: "Developing full-stack applications using modern technologies and frameworks",
      icon: "⭐",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100"
    },
    {
      company: "Housystan",
      position: "Full Stack Developer",
      duration: "2023 - 2024",
      location: "Remote",
      description: "Building scalable web applications and managing database systems",
      icon: "🏠",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100"
    },
    {
      company: "KodNest",
      position: "Software Developer",
      duration: "2022 - 2023",
      location: "Remote",
      description: "Developing enterprise applications and working with various technologies",
      icon: "💻",
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100"
    },
    {
      company: "AiRobosoft",
      position: "Junior Developer",
      duration: "2021 - 2022",
      location: "Remote",
      description: "Learning and implementing software development best practices",
      icon: "🤖",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-float delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 text-sm font-medium text-blue-700 mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />
            Education & Experience
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            My Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From education to professional experience, here's my path in the world of technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">Education</h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div 
                  key={index}
                  className={`group relative bg-gradient-to-br ${edu.bgColor} backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-white/50`}
                  style={{
                    animation: isVisible ? `fadeIn 0.8s ease-out ${index * 0.2}s both` : 'none'
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{edu.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-gray-600 mb-2">{edu.field}</p>
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <Building className="w-3 h-3 mr-1" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {edu.year}
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div 
                  key={index}
                  className={`group relative bg-gradient-to-br ${exp.bgColor} backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-white/50`}
                  style={{
                    animation: isVisible ? `fadeIn 0.8s ease-out ${index * 0.2}s both` : 'none'
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{exp.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors mb-1">
                        {exp.position}
                      </h4>
                      <p className="text-sm font-medium text-gray-600 mb-2">{exp.company}</p>
                      <p className="text-xs text-gray-500 mb-3 leading-relaxed">{exp.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
