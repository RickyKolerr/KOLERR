import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Filters } from "@/components/Filters"

const brands = [
  { id: 1, name: 'TechGiant', logo: '/placeholder.svg', industry: 'Công nghệ', campaignsCount: 15, rating: 4.8 },
  { id: 2, name: 'Fashionista', logo: '/placeholder.svg', industry: 'Thời trang', campaignsCount: 22, rating: 4.7 },
  { id: 3, name: 'GourmetDelight', logo: '/placeholder.svg', industry: 'Ẩm thực', campaignsCount: 18, rating: 4.9 },
  { id: 4, name: 'EcoFriendly', logo: '/placeholder.svg', industry: 'Môi trường', campaignsCount: 10, rating: 4.6 },
  { id: 5, name: 'TravelWonders', logo: '/placeholder.svg', industry: 'Du lịch', campaignsCount: 20, rating: 4.8 },
  { id: 6, name: 'HealthyLife', logo: '/placeholder.svg', industry: 'Sức khỏe', campaignsCount: 12, rating: 4.7 },
]

export default function BrandsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-[#FFC107]">Brands</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Filters type="brand" />
        </div>
        <div className="md:col-span-3">
          <div className="space-y-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">AI Matchmaking Search</h2>
              <div className="flex gap-4">
                <Input
                  placeholder="Nhập yêu cầu của bạn..."
                  className="flex-grow"
                />
                <Button>Tìm kiếm AI</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Ví dụ: "Tìm thương hiệu trong ngành mỹ phẩm, có ngân sách trên 100 triệu, ưu tiên chiến dịch dài hạn"
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Thương hiệu nổi bật</h1>
              <p className="text-xl mb-8">Khám phá và hợp tác với những thương hiệu hàng đầu trên Kolerr</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand) => (
                <Card key={brand.id} className="overflow-hidden transition-all hover:shadow-lg bg-[#111111] border-[#FFC107] hover:border-[#D72670] transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img src={brand.logo} alt={brand.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <CardTitle className="text-[#FFC107]">{brand.name}</CardTitle>
                          <Badge variant="secondary" className="mt-1">{brand.industry}</Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 my-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold">{brand.campaignsCount}</p>
                        <p className="text-sm text-gray-500">Chiến dịch</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">{brand.rating.toFixed(1)}</p>
                        <p className="text-sm text-gray-500">Đánh giá</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Cập nhật 2 giờ trước</p>
                    <Link href={`/brands/${brand.id}`} passHref>
                      <Button variant="ghost" className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900">
                        Xem chi tiết
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline">Xem thêm thương hiệu</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

