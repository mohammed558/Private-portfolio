"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect, useMemo } from "react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Palette, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  GitBranch, 
  Cloud,
  Shield,
  Cpu,
  Layers,
  TrendingUp
} from "lucide-react"

const AnimatedSkills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [progressValues, setProgressValues] = useState<Record<string, number>>({})

  const skills = useMemo(() => [
    {
      category: "Frontend Development",
      icon: Code,
      color: "blue",
      skills: [
        { name: "React", level: 95, years: "5+ years" },
        { name: "Next.js", level: 90, years: "4+ years" },
        { name: "TypeScript", level: 88, years: "4+ years" },
        { name: "Tailwind CSS", level: 92, years: "3+ years" }
      ]
    },
    {
      category: "Backend Development",
      icon: Database,
      color: "green",
      skills: [
        { name: "Node.js", level: 85, years: "4+ years" },
        { name: "Python", level: 80, years: "3+ years" },
        { name: "PostgreSQL", level: 82, years: "3+ years" },
        { name: "MongoDB", level: 78, years: "2+ years" }
      ]
    },
    {
      category: "UI/UX Design",
      icon: Palette,
      color: "purple",
      skills: [
        { name: "Figma", level: 90, years: "3+ years" },
        { name: "Adobe Creative Suite", level: 75, years: "2+ years" },
        { name: "User Research", level: 85, years: "3+ years" },
        { name: "Prototyping", level: 88, years: "3+ years" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: Zap,
      color: "orange",
      skills: [
        { name: "Git", level: 92, years: "5+ years" },
        { name: "Docker", level: 80, years: "3+ years" },
        { name: "AWS", level: 75, years: "2+ years" },
        { name: "CI/CD", level: 78, years: "2+ years" }
      ]
    }
  ], [])

  const technologies = [
    { name: "JavaScript", icon: Code, color: "yellow" },
    { name: "TypeScript", icon: Code, color: "blue" },
    { name: "React", icon: Globe, color: "cyan" },
    { name: "Next.js", icon: Layers, color: "gray" },
    { name: "Node.js", icon: Cpu, color: "green" },
    { name: "Python", icon: Code, color: "yellow" },
    { name: "PostgreSQL", icon: Database, color: "blue" },
    { name: "MongoDB", icon: Database, color: "green" },
    { name: "Tailwind CSS", icon: Palette, color: "cyan" },
    { name: "Figma", icon: Palette, color: "purple" },
    { name: "Git", icon: GitBranch, color: "orange" },
    { name: "Docker", icon: Cloud, color: "blue" },
    { name: "AWS", icon: Cloud, color: "orange" },
    { name: "Security", icon: Shield, color: "red" }
  ]

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        skills.forEach(category => {
          category.skills.forEach(skill => {
            setProgressValues(prev => ({
              ...prev,
              [skill.name]: skill.level
            }))
          })
        })
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView, skills])

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A comprehensive overview of my technical skills and expertise across different domains
          </motion.p>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {/* Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className={`p-3 rounded-xl bg-${category.color}-100`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <category.icon className={`w-6 h-6 text-${category.color}-600`} />
                      </motion.div>
                      <CardTitle className="text-xl font-semibold">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary" className="text-xs">
                              {skill.years}
                            </Badge>
                            <span className="text-sm text-gray-500 font-medium">
                              {progressValues[skill.name] || 0}%
                            </span>
                          </div>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={progressValues[skill.name] || 0} 
                            className="h-2 bg-gray-200"
                          />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technologies Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 1 + (index * 0.05) }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="h-24 flex flex-col items-center justify-center space-y-2 hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm group-hover:bg-white/80">
                    <motion.div
                      className={`p-2 rounded-lg bg-${tech.color}-100 group-hover:bg-${tech.color}-200 transition-colors`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <tech.icon className={`w-6 h-6 text-${tech.color}-600`} />
                    </motion.div>
                    <span className="text-xs font-medium text-gray-700 text-center">
                      {tech.name}
                    </span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { number: "50+", label: "Projects Completed", icon: TrendingUp },
              { number: "5+", label: "Years Experience", icon: Cpu },
              { number: "100+", label: "Happy Clients", icon: Shield },
              { number: "24/7", label: "Support Available", icon: Zap }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + (index * 0.1) }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + (index * 0.1) }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AnimatedSkills
