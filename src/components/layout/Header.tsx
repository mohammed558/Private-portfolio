"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, Home, User, Briefcase, Mail, Sparkles, Zap, Star, GraduationCap } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'education', label: 'Education', icon: GraduationCap, href: '#education' },
    { id: 'projects', label: 'Projects', icon: Briefcase, href: '#projects' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' }
  ]

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="p-3 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                Mohammed Arshad
              </span>
              <span className="text-xs text-gray-500 font-medium">Full Stack Developer</span>
            </div>
          </Link>

          {/* Modern Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`group relative flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-all duration-300 ${
                    isActive ? 'animate-pulse' : 'group-hover:scale-110'
                  }`} />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 hover:scale-110"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6 animate-spin" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Modern Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
                    <span className="font-medium">{item.label}</span>
                    {isActive && <Star className="w-4 h-4 ml-auto animate-pulse" />}
                  </Link>
                )
              })}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
