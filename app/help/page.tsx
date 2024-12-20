import { Search } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const helpCategories = [
  {
    title: "Bắt đầu",
    description: "Hướng dẫn cơ bản cho người mới",
    links: [
      { title: "Tạo tài khoản mới", href: "/help/getting-started/create-account" },
      { title: "Xác minh tài khoản", href: "/help/getting-started/verification" },
      { title: "Thiết lập hồ sơ", href: "/help/getting-started/profile-setup" },
    ]
  },
  {
    title: "Dành cho KOLs",
    description: "Thông tin cho người có tầm ảnh hưởng",
    links: [
      { title: "Tìm chiến dịch phù hợp", href: "/help/kols/find-campaigns" },
      { title: "Quản lý thu nhập", href: "/help/kols/manage-earnings" },
      { title: "Tối ưu hóa hồ sơ", href: "/help/kols/optimize-profile" },
    ]
  },
  {
    title: "Dành cho Thương hiệu",
    description: "Hướng dẫn cho nhãn hàng",
    links: [
      { title: "Tạo chiến dịch", href: "/help/brands/create-campaign" },
      { title: "Tìm KOLs phù hợp", href: "/help/brands/find-kols" },
      { title: "Quản lý ngân sách", href: "/help/brands/budget-management" },
    ]
  },
  {
    title: "Thanh toán & Tài chính",
    description: "Thông tin về thanh toán",
    links: [
      { title: "Phương thức thanh toán", href: "/help/payments/methods" },
      { title: "Xử lý hoàn tiền", href: "/help/payments/refunds" },
      { title: "Câu hỏi về hóa đơn", href: "/help/payments/billing" },
    ]
  },
]

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Trung tâm Trợ giúp</h1>
            <p className="text-muted-foreground">
              Tìm câu trả lời cho các câu hỏi của bạn về Kolerr
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Tìm kiếm trợ giúp..."
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {helpCategories.map((category) => (
              <Card key={category.title} className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-primary hover:underline"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

