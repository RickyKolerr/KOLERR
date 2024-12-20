"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const tourSteps = [
  {
    title: 'Chào mừng đến với Kolerr!',
    description: 'Hãy cùng khám phá các tính năng chính của nền tảng.',
  },
  {
    title: 'Bảng điều khiển',
    description: 'Đây là nơi bạn có thể xem tổng quan về hoạt động của mình, bao gồm chiến dịch đã hoàn thành, thu nhập và mức độ hoàn thiện hồ sơ.',
  },
  {
    title: 'Tìm kiếm chiến dịch',
    description: 'Khám phá và đăng ký tham gia các chiến dịch phù hợp với bạn từ tab "Chiến dịch".',
  },
  {
    title: 'Quản lý hồ sơ',
    description: 'Cập nhật thông tin cá nhân và portfolio của bạn để tăng cơ hội được chọn cho các chiến dịch.',
  },
  {
    title: 'Theo dõi thu nhập',
    description: 'Xem chi tiết về thu nhập của bạn từ các chiến dịch đã hoàn thành.',
  },
  {
    title: 'Hỗ trợ',
    description: 'Nếu bạn cần giúp đỡ, đừng ngần ngại liên hệ với đội ngũ hỗ trợ của chúng tôi qua mục "Liên hệ".',
  },
]

interface OnboardingTourProps {
  onClose: () => void
}

export function OnboardingTour({ onClose }: OnboardingTourProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onClose()
    }
  }

  const handleSkip = () => {
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{tourSteps[currentStep].title}</DialogTitle>
          <DialogDescription>{tourSteps[currentStep].description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={handleSkip}>
            Bỏ qua
          </Button>
          <Button onClick={handleNext}>
            {currentStep === tourSteps.length - 1 ? 'Kết thúc' : 'Tiếp theo'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

