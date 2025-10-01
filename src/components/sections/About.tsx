import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Database, Smartphone, Globe, Zap } from "lucide-react"

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: Code, description: "React, Next.js, TypeScript" },
    { name: "UI/UX Design", icon: Palette, description: "Figma, Adobe Creative Suite" },
    { name: "Backend Development", icon: Database, description: "Node.js, Python, PostgreSQL" },
    { name: "Mobile Development", icon: Smartphone, description: "React Native, Flutter" },
    { name: "Web Technologies", icon: Globe, description: "HTML, CSS, JavaScript" },
    { name: "Performance", icon: Zap, description: "Optimization, SEO, Analytics" },
  ]

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "Tailwind CSS", "Figma", "Git", "Docker"
  ]

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Hello! I'm Mohammed Arshad</h3>
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

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-sm">{skill.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs">
                      {skill.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
