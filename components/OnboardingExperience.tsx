import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/LanguageContext'
import { Zap, BarChart2, Users, PieChart, MessageCircle, PenToolIcon as Tool, MessageSquare } from 'lucide-react'

const features = [
  { icon: Zap, key: 'aiMatchmaking' },
  { icon: BarChart2, key: 'realTimeCampaign' },
  { icon: Users, key: 'slotSystem' },
  { icon: PieChart, key: 'dataInsights' },
  { icon: MessageCircle, key: 'communityHub' },
  { icon: Tool, key: 'collaborationTools' },
  { icon: MessageSquare, key: 'aiChatbot' },
]

export function OnboardingExperience({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    if (currentStep < features.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-[#005B96] to-[#D72670] p-8 rounded-lg max-w-md w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <features[currentStep].icon className="h-16 w-16 mx-auto mb-4 text-[#FFC107]" />
            <h2 className="text-2xl font-bold mb-4 text-white">{t(features[currentStep].key)}</h2>
            <p className="text-gray-200 mb-6">{t(`${features[currentStep].key}Desc`)}</p>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between items-center mt-8">
          <div className="space-x-2">
            {features.map((_, index) => (
              <span
                key={index}
                className={`inline-block w-2 h-2 rounded-full ${
                  index === currentStep ? 'bg-[#FFC107]' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
          <Button onClick={nextStep} className="bg-[#FFC107] text-black hover:bg-white">
            {currentStep === features.length - 1 ? t('getStarted') : t('next')}
          </Button>
        </div>
      </div>
    </div>
  )
}

