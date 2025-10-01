"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Sparkles, Code, Palette, Zap } from "lucide-react"
import { useState, useEffect } from "react"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-indigo-200/30 rounded-full blur-xl animate-pulse delay-2000" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 text-sm font-medium text-blue-700">
              <Sparkles className="w-4 h-4 mr-2" />
              Available for new projects
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block text-gray-900">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Mohammed Arshad
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                  Full Stack Developer
                </p>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  I craft exceptional digital experiences with modern technologies, 
                  bringing your ideas to life through clean code and beautiful design.
                </p>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <Code className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">React & Next.js</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <Palette className="w-4 h-4 mr-2 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">UI/UX Design</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <Zap className="w-4 h-4 mr-2 text-indigo-600" />
                <span className="text-sm font-medium text-gray-700">Performance</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-gray-50 transition-all duration-300">
                View Portfolio
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <span className="text-sm text-gray-500">Follow me:</span>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-blue-50 hover:text-blue-600 transition-colors" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-blue-50 hover:text-blue-600 transition-colors" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Logo */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20" />
                
                {/* Profile Image Placeholder with enhanced design */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-3xl animate-pulse" />
                    
                    {/* Main profile circle */}
                    <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                      JD
                    </div>
                    
                    {/* Floating elements around profile */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                      <Code className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg animate-bounce delay-1000">
                      <Palette className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg animate-bounce delay-500">
                      <Zap className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-20 blur-xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-500">Scroll to explore</span>
            <ArrowDown className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
