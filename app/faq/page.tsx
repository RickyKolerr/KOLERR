import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "Kolerr là gì?",
      answer: "Kolerr là nền tảng kết nối KOLs (Key Opinion Leaders) và thương hiệu, tạo điều kiện cho việc hợp tác trong các chiến dịch marketing và quảng cáo."
    },
    {
      question: "Làm thế nào để đăng ký làm KOL trên Kolerr?",
      answer: "Để đăng ký làm KOL, bạn cần truy cập trang đăng ký KOL trên website của chúng tôi, điền đầy đủ thông tin cá nhân và chuyên môn, sau đó gửi đơn đăng ký. Đội ngũ của chúng tôi sẽ xem xét và phản hồi trong thời gian sớm nhất."
    },
    {
      question: "Làm thế nào để tạo một chiến dịch trên Kolerr?",
      answer: "Để tạo chiến dịch, bạn cần đăng nhập vào tài khoản thương hiệu, chọn 'Tạo chiến dịch mới', điền các thông tin chi tiết về chiến dịch như mục tiêu, ngân sách, thời gian, và yêu cầu đối với KOL. Sau khi hoàn tất, chiến dịch của bạn sẽ được đăng tải để các KOL có thể xem và đăng ký tham gia."
    },
    {
      question: "Kolerr có tính phí sử dụng không?",
      answer: "Kolerr áp dụng mô hình phí dịch vụ. Chúng tôi thu một tỷ lệ phần trăm nhỏ từ giá trị hợp đồng giữa KOL và thương hiệu khi một chiến dịch được hoàn thành thành công. Việc đăng ký tài khoản và duyệt các chiến dịch hoàn toàn miễn phí."
    },
    {
      question: "Làm thế nào để đảm bảo an toàn khi sử dụng Kolerr?",
      answer: "Kolerr cam kết bảo vệ quyền lợi của cả KOL và thương hiệu. Chúng tôi có hệ thống xác minh danh tính, đánh giá uy tín, và quy trình thanh toán an toàn. Ngoài ra, chúng tôi cũng có đội ngũ hỗ trợ 24/7 để giải quyết mọi vấn đề phát sinh."
    },
    {
      question: "Tôi có thể rút lui khỏi một chiến dịch sau khi đã đăng ký không?",
      answer: "Trong trường hợp bất khả kháng, bạn có thể yêu cầu rút khỏi chiến dịch. Tuy nhiên, việc này cần được thực hiện càng sớm càng tốt và phải có lý do chính đáng. Việc rút lui thường xuyên có thể ảnh hưởng đến đánh giá uy tín của bạn trên nền tảng."
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Câu hỏi thường gặp</h1>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

