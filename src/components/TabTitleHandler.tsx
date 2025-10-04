"use client"

import { useEffect } from 'react'

const TabTitleHandler = () => {
  useEffect(() => {
    const originalTitle = document.title
    let timeoutId: NodeJS.Timeout

    const comebackMessages = [
      "🔥 Come back! Mohammed Arshad",
      "💻 Don't forget me! - Mohammed Arshad", 
      "⚡ Hey! You're missing out! - Mohammed Arshad",
      "🚀 Come back to see more! - Mohammed Arshad",
      "💡 Don't leave me hanging! - Mohammed Arshad",
      "🎯 I'm still here! - Mohammed Arshad",
      "✨ Come back for more magic! - Mohammed Arshad",
      "🔥 Your portfolio awaits! - Mohammed Arshad",
      "💻 Ready to code together? - Mohammed Arshad",
      "⚡ Don't miss the fun! - Mohammed Arshad"
    ]

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User switched to another tab
        const randomMessage = comebackMessages[Math.floor(Math.random() * comebackMessages.length)]
        document.title = randomMessage
        
        // Change title every 2 seconds while tab is hidden
        timeoutId = setInterval(() => {
          const randomMessage = comebackMessages[Math.floor(Math.random() * comebackMessages.length)]
          document.title = randomMessage
        }, 2000)
      } else {
        // User came back to the tab
        clearInterval(timeoutId)
        document.title = originalTitle
      }
    }

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Cleanup function
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      clearInterval(timeoutId)
      document.title = originalTitle
    }
  }, [])

  return null // This component doesn't render anything
}

export default TabTitleHandler
