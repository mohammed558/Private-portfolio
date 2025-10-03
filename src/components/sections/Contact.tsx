"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle, Star, Sparkles, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage("Thank you! Your message has been sent successfully. I'll get back to you soon!")
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
      } else {
        const errorData = await response.json()
        console.error('Server error:', errorData)
        throw new Error(errorData.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
      setSubmitMessage("Sorry, there was an error sending your message. Please try again or contact me directly at noorjanmysore842@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-indigo-200/20 rounded-full blur-lg animate-pulse delay-500" />
      <div className="container relative z-10">
        <div className={`text-center space-y-4 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-200/50 text-sm font-medium text-pink-700 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
              <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
              <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
              <path d="m21 3 1 11h-2"/>
              <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/>
              <path d="M3 4h8"/>
            </svg>
            Let&apos;s Connect
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-pink-800 to-rose-800 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-pink-600" />
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="p-3 bg-pink-100 rounded-lg group-hover:bg-pink-200 transition-colors flex-shrink-0">
                  <Mail className="h-6 w-6 text-pink-600 group-hover:animate-pulse" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-muted-foreground text-sm sm:text-base break-all">noorjanmysore842@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600 group-hover:animate-pulse" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">+91 9008798120</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group sm:col-span-2 lg:col-span-1">
                <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors flex-shrink-0">
                  <MapPin className="h-6 w-6 text-green-600 group-hover:animate-pulse" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Mysuru, Karnataka, India</p>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Follow On
              </h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="hover:bg-pink-50 hover:border-pink-300 hover:text-pink-600 transition-all duration-300 hover:scale-110 group" asChild>
                  <a href="https://github.com/mohammed558" target="_blank" rel="noopener noreferrer">
                    <Mail className="h-5 w-5 group-hover:animate-bounce" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 hover:scale-110 group" asChild>
                <a href="tel:+918747871399" target="_blank" rel="noopener noreferrer">
                    <Phone className="h-5 w-5 group-hover:animate-bounce" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-green-50 hover:border-green-300 hover:text-green-600 transition-all duration-300 hover:scale-110 group" asChild>
                  <a href="https://goo.gl/maps/Y3z7SdSLUwY27V9PA" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-5 w-5 group-hover:animate-bounce" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="border-gray-200 focus:border-pink-300 focus:ring-0 focus:outline-none focus:shadow-none focus:!outline-none transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-gray-200 focus:border-pink-300 focus:ring-0 focus:outline-none focus:shadow-none focus:!outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="border-gray-200 focus:border-pink-300 focus:ring-pink-200 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="border-gray-200 focus:border-pink-300 focus:ring-pink-200 transition-all duration-300"
                    />
                  </div>

                  {/* Status Message */}
                  {submitMessage && (
                    <div className={`p-4 rounded-lg flex items-center space-x-2 ${
                      submitStatus === 'success' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {submitStatus === 'success' ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <AlertCircle className="h-5 w-5" />
                      )}
                      <span className="text-sm">{submitMessage}</span>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
