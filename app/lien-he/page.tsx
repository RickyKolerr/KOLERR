import { ContactForm } from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Liên hệ với chúng tôi</h1>
      <p className="text-center mb-8 text-muted-foreground">
        Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy để lại thông tin liên hệ, và chúng tôi sẽ phản hồi trong thời gian sớm nhất.
      </p>
      <ContactForm type="general" recipientName="Kolerr" />
    </div>
  )
}

