import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const subscriptionTiers = [
  {
    name: 'Free Trial',
    id: 'tier-free-trial',
    price: 'Miễn phí',
    duration: '14 ngày',
    description: 'Trải nghiệm AI matchmaking cơ bản.',
    features: [
      'Trải nghiệm AI matchmaking cơ bản',
      '3 tìm kiếm miễn phí',
    ],
    searches: 3,
  },
  {
    name: 'Basic',
    id: 'tier-basic',
    price: '49,000 VNĐ',
    duration: 'tháng',
    description: 'Tìm kiếm AI cơ bản và tham gia cộng đồng Koler.',
    features: [
      'Tìm kiếm AI cơ bản',
      'Tham gia cộng đồng Koler',
      '15 lượt tìm kiếm mỗi tháng',
    ],
    searches: 15,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    price: '149,000 VNĐ',
    duration: 'tháng',
    description: 'Tất cả tính năng của Basic và phân tích dữ liệu cơ bản.',
    features: [
      'Tất cả tính năng của Basic',
      'Phân tích dữ liệu cơ bản',
      '50 lượt tìm kiếm mỗi tháng',
    ],
    searches: 50,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    price: '399,000 VNĐ',
    duration: 'tháng',
    description: 'Tất cả tính năng của Pro, báo cáo xu hướng nâng cao, và quản lý nhiều chiến dịch.',
    features: [
      'Tất cả tính năng của Pro',
      'Báo cáo xu hướng nâng cao',
      'Quản lý nhiều chiến dịch cùng lúc',
      '150 lượt tìm kiếm mỗi tháng',
    ],
    searches: 150,
  },
]

const additionalSearches = [
  { amount: 1, price: '5,000 VNĐ', note: 'Mua lẻ, linh hoạt.' },
  { amount: 10, price: '45,000 VNĐ', note: 'Giảm 10% (4,500 VNĐ/lượt).' },
  { amount: 50, price: '200,000 VNĐ', note: 'Giảm 20% (4,000 VNĐ/lượt).' },
  { amount: 100, price: '350,000 VNĐ', note: 'Giảm 30% (3,500 VNĐ/lượt).' },
]

export default function SubscriptionsPage() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#FFC107]">Bảng Giá</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Lựa chọn phù hợp cho mọi nhu cầu
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Chúng tôi cung cấp các gói dịch vụ phù hợp với nhu cầu của người dùng tại Việt Nam, đặc biệt là các KOLs mới và các nhãn hàng nhỏ.
        </p>

        {/* Subscription Tiers */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {subscriptionTiers.map((tier) => (
            <Card
              key={tier.id}
              className={`bg-[#111111] border-[#FFC107] flex flex-col justify-between`}
            >
              <CardHeader className="p-8">
                <CardTitle className="text-[#FFC107]">{tier.name}</CardTitle>
                <CardDescription className="mt-4 text-sm leading-6 text-gray-300">
                  {tier.description}
                </CardDescription>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">/{tier.duration}</span>
                </p>
                <Button className="mt-6 w-full bg-[#D72670] hover:bg-[#D72670]/90 text-white" asChild>
                  <Link href={`/checkout/payment?plan=${tier.name}&price=${tier.price}`}>
                    {tier.name === 'Free Trial' ? 'Dùng thử miễn phí' : 'Đăng ký ngay'}
                  </Link>
                </Button>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 p-8">
                <h3 className="text-sm font-semibold leading-6 text-white">Tính năng bao gồm</h3>
                <ul role="list" className="mt-6 space-y-4 text-sm leading-6 text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-[#FFC107]" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pay by Search */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-[#FFC107] mb-8">"Trả phí theo tìm kiếm" (Pay by Search)</h2>
          <Table className="w-full bg-[#111111] border-[#FFC107]">
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#FFC107]">Số lượt mua thêm</TableHead>
                <TableHead className="text-[#FFC107]">Chi phí (VNĐ)</TableHead>
                <TableHead className="text-[#FFC107]">Ghi chú</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {additionalSearches.map((search, index) => (
                <TableRow key={index}>
                  <TableCell className="text-white">{search.amount} lượt</TableCell>
                  <TableCell className="text-white">{search.price}</TableCell>
                  <TableCell className="text-gray-300">{search.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Annual Subscription Offer */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-[#FFC107] mb-4">Ưu Đãi Thanh Toán Theo Năm</h2>
          <p className="text-xl text-white mb-4">Giảm 10% cho thuê bao hàng năm.</p>
          <div className="space-y-2 text-gray-300">
            <p>Ví dụ:</p>
            <p>Basic: 529,000 VNĐ/năm (giảm 59,000 VNĐ).</p>
            <p>Pro: 1,609,000 VNĐ/năm (giảm 179,000 VNĐ).</p>
          </div>
        </div>
      </div>
    </div>
  )
}

