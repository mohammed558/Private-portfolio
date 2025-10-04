
"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Sparkles, Code, Zap, Star, Rocket, Database } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Resume.pdf'
    link.download = 'Mohammed_Arshad_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-0 sm:pt-1 lg:pt-2">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100 via-transparent to-transparent" />
      
      {/* Enhanced Floating Elements with better animations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-indigo-400/40 to-blue-400/40 rounded-full blur-xl animate-pulse delay-2000" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-xl animate-pulse delay-500" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />

      <div className="container relative z-10 py-1 sm:py-2 lg:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-1 sm:space-y-2 lg:space-y-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 text-sm font-medium text-blue-700 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mx-4">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Available for new projects
              <Star className="w-3 h-3 ml-2 text-yellow-500 animate-bounce" />
            </div>

            {/* Enhanced Main Heading */}
            <div className="space-y-0 sm:space-y-1 lg:space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-gray-900 animate-fade-in">Hi, I&apos;m</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                  Mohammed Arshad
                </span>
              </h1>
              
              <div className="space-y-0 sm:space-y-1">
                <p className="text-2xl md:text-3xl font-semibold text-gray-800 flex items-center gap-2">
                  <Rocket className="w-8 h-8 text-blue-600 animate-bounce" />
                  Full Stack Developer
                </p>
                <p className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed">
                  I craft exceptional digital experiences with modern technologies, 
                  bringing your ideas to life through clean code and beautiful design.
                </p>
              </div>
            </div>

            {/* Enhanced Skills Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
                <Code className="w-4 h-4 mr-2 text-blue-600 animate-pulse" />
                <span className="text-sm font-medium text-gray-700">React & Next.js</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-purple-50">
                <Zap className="w-4 h-4 mr-2 text-purple-600 animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Node.js, C# .NET</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-indigo-50">
                <Database className="w-4 h-4 mr-2 text-indigo-600 animate-pulse" />
                <span className="text-sm font-medium text-gray-700">PostgreSQL, MySQL, MSSQL</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group" onClick={handleDownloadResume}>
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              {/* <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:border-blue-300 group">
                <span className="group-hover:animate-pulse">View Portfolio</span>
              </Button> */}
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-6 pt-4 mb-2">
              <span className="text-sm text-gray-500 font-medium">Follow On:</span>
              <div className="flex space-x-4 mb-2">
                <Button variant="ghost" size="icon" className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg group" asChild>
                  <a href="https://github.com/mohammed558" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 group-hover:animate-bounce" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg group" asChild>
                  <a href="https://www.linkedin.com/in/mohammed-arshad-576b15262" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 group-hover:animate-bounce" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content - Image/Logo */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Enhanced Main Image Container */}
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20" />
                <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/10 via-transparent to-cyan-500/10" />
                
                {/* Enhanced Profile Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Enhanced outer glow ring */}
                    <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-3xl animate-pulse" />
                    <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-15 blur-2xl animate-pulse delay-1000" />
                    
                    {/* Enhanced main profile circle */}
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 group">
                      <Image 
                        src="/Profile Pic.png" 
                        alt="Mohammed Arshad" 
                        width={256}
                        height={256}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                    
                    {/* Enhanced floating elements around profile */}
                    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg animate-bounce-slow hover:scale-110 transition-all duration-300 group">
                      <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:animate-spin" style={{animationDuration: '3s'}} />
                    </div>
                    <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg animate-bounce-slow delay-1000 hover:scale-110 transition-all duration-300 group">
                      <Database className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 group-hover:animate-spin" style={{animationDuration: '3s'}} />
                    </div>
                    <div className="absolute top-1/2 -left-4 sm:-left-8 w-8 h-8 sm:w-12 sm:h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg animate-bounce-slow delay-500 hover:scale-110 transition-all duration-300 group">
                      <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-indigo-600 group-hover:animate-pulse" style={{animationDuration: '2s'}} />
                    </div>
                    <div className="absolute top-1/4 -right-4 sm:-right-8 w-8 h-8 sm:w-10 sm:h-10 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg animate-bounce-slow delay-700 hover:scale-110 transition-all duration-300 group">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 group-hover:animate-spin" style={{animationDuration: '3s'}} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000" />
              <div className="absolute top-1/3 -left-4 w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-15 blur-lg animate-pulse delay-500" />
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2 group cursor-pointer">
            <span className="text-sm text-gray-500 font-medium group-hover:text-gray-700 transition-colors">Scroll to explore</span>
            <ArrowDown className="h-6 w-6 text-gray-400 group-hover:text-gray-600 group-hover:animate-pulse transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
