import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Sparkles, Star } from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-0 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="container py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Enhanced Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-800">
                  <circle cx="5" cy="6" r="3"/>
                  <path d="M5 9v6"/>
                  <circle cx="5" cy="18" r="3"/>
                  <path d="M12 3v18"/>
                  <circle cx="19" cy="6" r="3"/>
                  <path d="M16 15.7A9 9 0 0 0 19 9"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Mohammed Arshad
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
            Build and manage full web applications by working on both frontend and backend components. Utilize databases, APIs, and contemporary frameworks to provide comprehensive solutions.
            </p>
            {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {/* <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
              <span>Developed by Mohammed Arshad</span>
            </div> */}
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2">
              <Link href="#home" className="text-sm text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <Star className="w-3 h-3 text-blue-500 group-hover:animate-pulse" />
                Home
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-purple-600 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <Star className="w-3 h-3 text-purple-500 group-hover:animate-pulse" />
                About
              </Link>
              <Link href="#education" className="text-sm text-muted-foreground hover:text-indigo-600 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <Star className="w-3 h-3 text-indigo-500 group-hover:animate-pulse" />
                Education & Experience
              </Link>
              <Link href="#projects" className="text-sm text-muted-foreground hover:text-green-600 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <Star className="w-3 h-3 text-green-500 group-hover:animate-pulse" />
                Projects
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-pink-600 transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group">
                <Star className="w-3 h-3 text-pink-500 group-hover:animate-pulse" />
                Contact
              </Link>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-500">
                <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
                <path d="m21 3 1 11h-2"/>
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/>
                <path d="M3 4h8"/>
              </svg>
              Connect
            </h4>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/mohammed558"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gray-800 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="h-5 w-5 group-hover:animate-bounce" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mohammed-arshad-576b15262"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="h-5 w-5 group-hover:animate-bounce" />
              </Link>
              <Link
                href="https://x.com/realdexterrr?t=0ry2ykVCKxVWVG-mzRlCMg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-400 transition-all duration-300 hover:scale-110 group"
              >
                <Twitter className="h-5 w-5 group-hover:animate-bounce" />
              </Link>
              <Link
                href="mailto:noorjanmysore842@gmail.com"
                className="text-muted-foreground hover:text-red-600 transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="h-5 w-5 group-hover:animate-bounce" />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              Let's build something amazing together!
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200/50 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            {/* <Heart className="w-4 h-4 text-red-500 animate-pulse" /> */}
            <p>&copy; 2025 Mohammed Arshad. All rights reserved.</p>
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
              Designed and Developed by Mohammed Arshad
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
