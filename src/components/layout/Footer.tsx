import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Code, Sparkles, Heart, Star } from "lucide-react"

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
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Portfolio
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A modern portfolio built with Next.js, ShadCN UI, and Tailwind CSS. 
              Crafted with passion and attention to detail.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>Made with love</span>
            </div>
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
              <Heart className="w-4 h-4 text-red-500" />
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
                href="https://www.linkedin.com/in/mohammed-arshad-576b15262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <p>&copy; 2024 Mohammed Arshad. All rights reserved.</p>
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
