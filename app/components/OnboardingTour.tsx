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

const steps = [
  {
    title: 'Chào mừng đến với Kolerr!',
    description: 'Hãy cùng khám phá các tính năng chính của nền tảng.',
  },
  {
    title: 'Tạo hồ sơ của bạn',
    description: 'Điền đầy đủ thông tin để tăng cơ hội kết nối với các đối tác phù hợp.',
  },
  {
    title: 'Khám phá chiến dịch',
    description: 'Tìm kiếm và đăng ký tham gia các chiến dịch phù hợp với bạn.',
  },
  {
    title: 'Quản lý chiến dịch',
    description: 'Theo dõi tiến độ và hiệu suất của các chiến dịch bạn tham gia.',
  },
  {
    title: 'Kết nối và tương tác',
    description: 'Sử dụng công cụ chat và bình luận để trao đổi với đối tác.',
  },
  {
    title: "Chọn gói dịch vụ phù hợp",
    content: "Kolerr cung cấp nhiều gói dịch vụ để phù hợp với nhu cầu của bạn. Từ gói Free Trial miễn phí 14 ngày đến gói Enterprise toàn diện, bạn có thể chọn gói phù hợp nhất. Chúng tôi cũng cung cấp tùy chọn trả phí theo tìm kiếm cho nhu cầu đặc biệt.",
  },
  {
    title: "Tận dụng ưu đãi thanh toán theo năm",
    content: "Tiết kiệm 10% khi đăng ký gói dịch vụ hàng năm. Ví dụ, bạn có thể tiết kiệm 59,000 VNĐ với gói Basic năm và 179,000 VNĐ với gói Pro năm.",
  },
]

export function OnboardingTour() {
  const [open, setOpen] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setOpen(false)
    }
  }

  const handleSkip = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{steps[currentStep].title}</DialogTitle>
          <DialogDescription>{steps[currentStep].description || steps[currentStep].content}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={handleSkip}>
            Bỏ qua
          </Button>
          <Button onClick={handleNext}>
            {currentStep === steps.length - 1 ? 'Kết thúc' : 'Tiếp theo'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

