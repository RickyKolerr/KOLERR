import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Filters } from "@/components/Filters"
import { useToast } from "@/hooks/use-toast"

const kols = [
  { id: 1, name: 'Nguyễn Thị A', avatar: '/placeholder.svg', industry: 'Thời trang', followers: 100000, rating: 4.8 },
  { id: 2, name: 'Trần Văn B', avatar: '/placeholder.svg', industry: 'Công nghệ', followers: 80000, rating: 4.5 },
  { id: 3, name: 'Lê Thị C', avatar: '/placeholder.svg', industry: 'Làm đẹp', followers: 150000, rating: 4.9 },
  { id: 4, name: 'Phạm Văn D', avatar: '/placeholder.svg', industry: 'Ẩm thực', followers: 120000, rating: 4.7 },
  { id: 5, name: 'Hoàng Thị E', avatar: '/placeholder.svg', industry: 'Du lịch', followers: 90000, rating: 4.6 },
  { id: 6, name: 'Đặng Văn F', avatar: '/placeholder.svg', industry: 'Thể thao', followers: 110000, rating: 4.8 },
]

export default function KOLsPage() {
  const { toast } = useToast()
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-[#FFC107]">KOLs</h1>
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
            Ví dụ: "Tìm KOL trong lĩnh vực thời trang, có trên 50k followers, chuyên về content video"
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <Filters type="kol" />
          </div>
          <div className="md:col-span-3">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Khám phá KOLs</h1>
              <p className="text-xl mb-8">Tìm kiếm và kết nối với những KOLs hàng đầu trong nhiều lĩnh vực</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kols.map((kol) => (
                <Card key={kol.id} className="bg-[#111111] border-[#FFC107] hover:border-[#D72670] transition-colors overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-[#FFC107]">{kol.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary" className="mb-2">{kol.industry}</Badge>
                    <p className="text-sm text-gray-500 mb-2">{kol.followers.toLocaleString()} người theo dõi</p>
                    <div className="flex items-center justify-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span>{kol.rating.toFixed(1)}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button asChild onClick={() => {
                      toast({
                        title: "Đang chuyển hướng",
                        description: "Đang tải thông tin hồ sơ KOL...",
                        variant: "default"
                      })
                    }}>
                      <Link href={`/kols/${kol.id}`}>Xem hồ sơ</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" onClick={() => {
                toast({
                  title: "Đang tải",
                  description: "Đang tải thêm danh sách KOLs...",
                  variant: "default"
                })
              }}>Xem thêm KOLs</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

