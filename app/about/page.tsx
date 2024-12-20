import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Về chúng tôi</h1>
      
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-lg">
          Kolerr là nền tảng kết nối KOLs và thương hiệu hàng đầu tại Việt Nam. Chúng tôi tạo ra một hệ sinh thái 
          mạnh mẽ, nơi các nhà sáng tạo nội dung tài năng có thể gặp gỡ và hợp tác với các thương hiệu đang tìm 
          kiếm cách tiếp cận khách hàng một cách sáng tạo và hiệu quả.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8">Sứ mệnh của chúng tôi</h2>
        <p className="text-lg">
          Sứ mệnh của Kolerr là tạo ra một môi trường minh bạch, công bằng và hiệu quả cho cả KOLs và thương hiệu. 
          Chúng tôi tin rằng bằng cách kết nối đúng người với đúng thương hiệu, chúng ta có thể tạo ra những 
          chiến dịch marketing có tác động mạnh mẽ và mang lại giá trị cho tất cả các bên liên quan.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8">Giá trị cốt lõi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Sáng tạo</CardTitle>
            </CardHeader>
            <CardContent>
              Chúng tôi khuyến khích và hỗ trợ sự sáng tạo trong mọi khía cạnh của nền tảng.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Minh bạch</CardTitle>
            </CardHeader>
            <CardContent>
              Chúng tôi cam kết duy trì sự minh bạch trong mọi giao dịch và tương tác.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Công bằng</CardTitle>
            </CardHeader>
            <CardContent>
              Chúng tôi đảm bảo một sân chơi công bằng cho tất cả người dùng trên nền tảng.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Hiệu quả</CardTitle>
            </CardHeader>
            <CardContent>
              Chúng tôi liên tục cải tiến để mang lại kết quả tốt nhất cho cả KOLs và thương hiệu.
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8">Đội ngũ của chúng tôi</h2>
        <p className="text-lg">
          Đội ngũ Kolerr bao gồm những chuyên gia đam mê và giàu kinh nghiệm trong lĩnh vực marketing, công nghệ 
          và truyền thông xã hội. Chúng tôi cam kết mang đến trải nghiệm tốt nhất cho người dùng và không ngừng 
          đổi mới để đáp ứng nhu cầu ngày càng phát triển của thị trường.
        </p>
        
        <div className="text-center mt-8">
          <Button asChild size="lg">
            <Link href="/register">Tham gia cùng chúng tôi</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

