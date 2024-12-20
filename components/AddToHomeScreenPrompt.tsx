import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function AddToHomeScreenPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleAddToHomeScreen = () => {
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt')
      }
      setDeferredPrompt(null)
      setShowPrompt(false)
    })
  }

  if (!showPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50">
      <p className="mb-2">Add Kolerr to your home screen for quick access!</p>
      <Button onClick={handleAddToHomeScreen}>Add to Home Screen</Button>
    </div>
  )
}

